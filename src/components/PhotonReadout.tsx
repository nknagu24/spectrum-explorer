import type { Photon } from "../types/photon";
import ValueRow from "./ValueRow";
import "../styles/photonReadout.css";
import { formatScientific } from "../utils/format";

interface PhotonReadoutProps {
    photon: Photon;
}

export default function PhotonReadout({
    photon,
}: PhotonReadoutProps) {
    return (
        <div className="photon-card">

            <ValueRow
                label="Wavelength"
                value={`${photon.wavelengthNm.toFixed(3)} nm`}
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
                value={`${formatScientific(photon.momentum)} kg·m/s`}
            />
        </div>
    );
}