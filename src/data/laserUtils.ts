import { LASERS } from "./lasers/lasers";

export function findNearestLaser(
    wavelength: number,
) {

    return LASERS.reduce(

        (nearest, laser) =>

            Math.abs(
                laser.wavelength - wavelength,
            ) <

                Math.abs(
                    nearest.wavelength - wavelength,
                )

                ? laser

                : nearest,

        LASERS[0],

    );

}