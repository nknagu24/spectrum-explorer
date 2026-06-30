import { MATERIALS } from "./materials";

import { energyToWavelength }
    from "../../physics/conversions";

import type { Material }
    from "../../types/material";

import type { MaterialCategory }
    from "../../types/materialCategory";

export function findNearestMaterial(

    wavelength: number,

    category: MaterialCategory,

): Material {

    const materials = MATERIALS.filter(

        material =>
            material.category === category,

    );

    return materials.reduce(

        (nearest, material) => {

            const nearestWavelength =
                energyToWavelength(
                    nearest.bandgapEV,
                );

            const materialWavelength =
                energyToWavelength(
                    material.bandgapEV,
                );

            return Math.abs(
                materialWavelength -
                wavelength,
            ) <

                Math.abs(
                    nearestWavelength -
                    wavelength,
                )

                ? material

                : nearest;

        },

    );

}