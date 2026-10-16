
import { useEffect, useState } from "react";
import type { Photon } from "../types/photon";
import "../styles/multiUnitConverter.css";

type FieldKey =
    | "energyEV"
    | "energyMeV"
    | "wavelengthNm"
    | "wavelengthUm"
    | "wavenumber"
    | "frequencyTHz"
    | "periodFs"
    | "periodPs";

interface MultiUnitConverterProps {
    photon: Photon;
    onWavelengthChange: (wavelengthNm: number) => void;
}

type Fields = Record<FieldKey, string>;

function fieldsFromWavelength(wavelengthNm: number): Fields {
    const energyEV = 1239.841984 / wavelengthNm;
    const frequencyTHz = 299792.458 / wavelengthNm;

    return {
        energyEV: energyEV.toFixed(5),
        energyMeV: (energyEV * 1000).toFixed(3),
        wavelengthNm: wavelengthNm.toFixed(3),
        wavelengthUm: (wavelengthNm / 1000).toFixed(5),
        wavenumber: (1e7 / wavelengthNm).toFixed(2),
        frequencyTHz: frequencyTHz.toFixed(3),
        periodFs: (1e3 / frequencyTHz).toFixed(3),
        periodPs: (1 / frequencyTHz).toFixed(5),
    };
}

function wavelengthFromField(
    key: FieldKey,
    value: number,
): number {
    switch (key) {
        case "energyEV":
            return 1239.841984 / value;
        case "energyMeV":
            return 1239841.984 / value;
        case "wavelengthNm":
            return value;
        case "wavelengthUm":
            return value * 1000;
        case "wavenumber":
            return 1e7 / value;
        case "frequencyTHz":
            return 299792.458 / value;
        case "periodFs":
            return (299792.458 * value) / 1000;
        case "periodPs":
            return 299792.458 * value;
    }
}

const fieldGroups: {
    title: string;
    fields: { key: FieldKey; label: string; unit: string }[];
}[] = [
        {
            title: "Energy",
            fields: [
                { key: "energyEV", label: "Energy (eV)", unit: "eV" },
                { key: "energyMeV", label: "Energy (meV)", unit: "meV" },
            ],
        },
        {
            title: "Wavelength",
            fields: [
                { key: "wavelengthNm", label: "Wavelength (nm)", unit: "nm" },
                { key: "wavelengthUm", label: "Wavelength (µm)", unit: "µm" },
            ],
        },
        {
            title: "Frequency and wavenumber",
            fields: [
                {
                    key: "wavenumber",
                    label: "Wavenumber (cm⁻¹)",
                    unit: "cm⁻¹",
                },
                {
                    key: "frequencyTHz",
                    label: "Frequency (THz)",
                    unit: "THz",
                },
            ],
        },
        {
            title: "Period",
            fields: [
                { key: "periodFs", label: "Period (fs)", unit: "fs" },
                { key: "periodPs", label: "Period (ps)", unit: "ps" },
            ],
        },
    ];

export default function MultiUnitConverter({
    photon,
    onWavelengthChange,
}: MultiUnitConverterProps) {
    const [fields, setFields] = useState<Fields>(() =>
        fieldsFromWavelength(photon.wavelengthNm)
    );

    const [activeField, setActiveField] =
        useState<FieldKey | null>(null);

    useEffect(() => {
        const next = fieldsFromWavelength(photon.wavelengthNm);

        setFields((current) => {
            if (!activeField) {
                return next;
            }

            return {
                ...next,
                [activeField]: current[activeField],
            };
        });
    }, [photon.wavelengthNm, activeField]);

    function handleChange(key: FieldKey, text: string) {
        setActiveField(key);

        setFields((current) => ({
            ...current,
            [key]: text,
        }));

        const trimmedText = text.trim();

        if (trimmedText === "") {
            return;
        }

        const value = Number(trimmedText);

        if (!Number.isFinite(value) || value <= 0) {
            return;
        }

        const wavelengthNm = wavelengthFromField(key, value);

        if (
            Number.isFinite(wavelengthNm) &&
            wavelengthNm > 0
        ) {
            onWavelengthChange(wavelengthNm);
        }
    }

    function handleBlur() {
        setActiveField(null);
        setFields(fieldsFromWavelength(photon.wavelengthNm));
    }

    return (
        <div className="multi-unit-converter">
            {fieldGroups.map((group) => (
                <section
                    className="converter-group"
                    key={group.title}
                >
                    {group.fields.map((field) => (
                        <label
                            className="converter-field"
                            key={field.key}
                        >
                            <span className="converter-label">
                                {field.label}
                            </span>

                            <div className="converter-input-row">
                                <input
                                    type="text"
                                    inputMode="decimal"
                                    value={fields[field.key]}
                                    onFocus={() =>
                                        setActiveField(field.key)
                                    }
                                    onChange={(event) =>
                                        handleChange(
                                            field.key,
                                            event.target.value
                                        )
                                    }
                                    onBlur={handleBlur}
                                    aria-label={field.label}
                                />
                            </div>
                        </label>
                    ))}
                </section>
            ))}
        </div>
    );
}
