import { LASERS } from "./lasers";

import type { Laser } from "../../types/laser";
import type { LaserCategory } from "../../types/laserCategory";

export function findNearestLaser(
    wavelength: number,
    category: LaserCategory,
): Laser {

    const candidates = LASERS.filter(
        laser => laser.category === category,
    );

    return candidates.reduce(
        (nearest, laser) =>

            Math.abs(
                laser.wavelength - wavelength,
            ) <

                Math.abs(
                    nearest.wavelength - wavelength,
                )

                ? laser

                : nearest,

        candidates[0],

    );

}