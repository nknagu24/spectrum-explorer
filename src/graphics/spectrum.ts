/**
 * ==========================================================
 * Electromagnetic Spectrum Definitions
 * ----------------------------------------------------------
 * Wavelengths are in nanometers (nm).
 * ==========================================================
 */

export const VISIBLE_MIN = 380;
export const VISIBLE_MAX = 750;

export interface SpectrumColorStop {
    wavelength: number;
    color: string;
}

export const SPECTRUM_STOPS: SpectrumColorStop[] = [
    { wavelength: 380, color: "#6A0DAD" }, // Violet
    { wavelength: 430, color: "#4B0082" }, // Indigo
    { wavelength: 450, color: "#0057FF" }, // Blue
    { wavelength: 495, color: "#00BFFF" }, // Cyan
    { wavelength: 530, color: "#00C853" }, // Green
    { wavelength: 570, color: "#ADFF2F" }, // Yellow-Green
    { wavelength: 590, color: "#FFD600" }, // Yellow
    { wavelength: 620, color: "#FF8C00" }, // Orange
    { wavelength: 700, color: "#FF3030" }, // Red
    { wavelength: 750, color: "#8B0000" }, // Deep Red
];