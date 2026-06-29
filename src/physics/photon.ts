import type { Photon } from "../types/photon";

import {
    SPEED_OF_LIGHT,
    PLANCK_CONSTANT,
    ELEMENTARY_CHARGE,
} from "./constants";

/**
 * Creates a Photon object from wavelength (nm).
 */
export function photonFromWavelength(
    wavelengthNm: number,
): Photon {

    const wavelengthM = wavelengthNm * 1e-9;

    const energyJ =
        (PLANCK_CONSTANT * SPEED_OF_LIGHT) / wavelengthM;

    const energyEV =
        energyJ / ELEMENTARY_CHARGE;

    const frequencyHz =
        SPEED_OF_LIGHT / wavelengthM;

    const frequencyTHz =
        frequencyHz / 1e12;

    const wavenumberCM =
        1 / (wavelengthM * 100);

    const momentum =
        PLANCK_CONSTANT / wavelengthM;

    return {

        wavelengthNm,

        energyEV,

        frequencyHz,

        frequencyTHz,

        wavenumberCM,

        momentum,

    };

}