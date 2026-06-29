/**
 * ==========================================================
 * Mouse Coordinate Utilities
 * ==========================================================
 */

import { xToWavelength } from "./scale";

/**
 * Convert a browser mouse X coordinate
 * to an SVG X coordinate.
 */

export function clientToSvgX(
    clientX: number,
    rect: DOMRect,
    svgWidth: number,
): number {

    return (
        ((clientX - rect.left) / rect.width) *
        svgWidth
    );

}

import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
} from "./layout";


/**
 * ==========================================================
 * Mouse → Wavelength Conversion
 * ==========================================================
 */

export function clientToWavelength(
    clientX: number,
    rect: DOMRect,
): number {

    const fraction =
        (clientX - rect.left) / rect.width;

    const svgX =
        LEFT_MARGIN +
        fraction * DRAWING_WIDTH;

    return xToWavelength(svgX);

}