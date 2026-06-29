import type { Photon } from "../types/photon";
import ValueRow from "./ValueRow";

interface PhotonReadoutProps {
    photon: Photon;
}

export default function PhotonReadout({
    photon,
}: PhotonReadoutProps) {
    return (
        <div className="photon-card">
            <h2>Photon Properties</h2>

            <ValueRow
                label="Wavelength"
                value={`${photon.wavelengthNm.toFixed(1)} nm`}
            />

            <ValueRow
                label="Energy"
                value={`${photon.energyEV.toFixed(4)} eV`}
            />

            <ValueRow
                label="Frequency"
                value={`${photon.frequencyTHz.toFixed(2)} THz`}
            />

            <ValueRow
                label="Wavenumber"
                value={`${photon.wavenumberCM.toFixed(1)} cm⁻¹`}
            />

            <ValueRow
                label="Momentum"
                value={photon.momentum.toExponential(3)}
            />
        </div>
    );
}