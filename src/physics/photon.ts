import {
    PLANCK_CONSTANT,
    SPEED_OF_LIGHT,
} from "./constants";

import {
    wavelengthToEnergy,
} from "./conversions";


export interface Photon {

    wavelengthNm: number;

    energyEV: number;

    frequencyHz: number;

    frequencyTHz: number;

    wavenumberCM: number;

    momentum: number;

}

/* ==========================================================
 * Photon Construction
 * ==========================================================
 */

export function photonFromWavelength(
    wavelengthNm: number,
): Photon {

    const wavelengthM =
        wavelengthNm * 1e-9;

    const frequencyHz =
        SPEED_OF_LIGHT / wavelengthM;

    const energyEV =
        wavelengthToEnergy(wavelengthNm);

    const wavenumberCM =
        1 / (wavelengthNm * 1e-7);

    const momentum =
        PLANCK_CONSTANT / wavelengthM;

    return {

        wavelengthNm,

        energyEV,

        frequencyHz,

        frequencyTHz:
            frequencyHz / 1e12,

        wavenumberCM,

        momentum,

    };

}