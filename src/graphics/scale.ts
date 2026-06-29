import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    MIN_WAVELENGTH,
    MAX_WAVELENGTH,
} from "./layout";

/**
 * Convert wavelength (nm)
 * to an x-coordinate inside the SVG.
 */
export function wavelengthToX(
    wavelength: number,
): number {

    return (
        LEFT_MARGIN +
        ((wavelength - MIN_WAVELENGTH) /
            (MAX_WAVELENGTH - MIN_WAVELENGTH)) *
        DRAWING_WIDTH
    );

}