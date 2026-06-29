import type { LaserCategory } from "./laserCategory";

/**
 * ==========================================================
 * Laser Source
 * ==========================================================
 */

export interface Laser {

    wavelength: number;

    name: string;

    family: string;

    gainMedium: string;

    generationMethod: string;

    didYouKnow: string;

    category: LaserCategory;

}