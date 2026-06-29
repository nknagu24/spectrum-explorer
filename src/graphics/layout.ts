/**
 * ==========================================================
 * Spectrum Canvas Layout
 * ----------------------------------------------------------
 * All dimensions are in SVG pixels.
 * ==========================================================
 */

/* Canvas Size */

export const SVG_WIDTH = 1000;
export const SVG_HEIGHT = 260;

/* Margins */

export const LEFT_MARGIN = 70;
export const RIGHT_MARGIN = 40;

export const TOP_MARGIN = 30;
export const BOTTOM_MARGIN = 40;

/* Drawable Region */

export const DRAWING_WIDTH =
    SVG_WIDTH - LEFT_MARGIN - RIGHT_MARGIN;

export const DRAWING_HEIGHT =
    SVG_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN;

/* Default Wavelength Range */

export const MIN_WAVELENGTH = 250;
export const MAX_WAVELENGTH = 1000;


/**
 * Axis positions
 */

export const WAVELENGTH_AXIS_Y =
    TOP_MARGIN + DRAWING_HEIGHT + 20;