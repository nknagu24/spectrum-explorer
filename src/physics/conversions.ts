import { HC_EV_NM } from "./constants";
import type { InputMode } from "../types/inputMode";

export function wavelengthToEnergy(
    wavelengthNm: number,
): number {

    return HC_EV_NM / wavelengthNm;

}

export function energyToWavelength(
    energyEV: number,
): number {

    return HC_EV_NM / energyEV;

}

export function inputToWavelength(
    value: number,
    mode: InputMode,
): number {

    switch (mode) {

        case "nm":
            return value;

        case "eV":
            return energyToWavelength(value);

    }

}