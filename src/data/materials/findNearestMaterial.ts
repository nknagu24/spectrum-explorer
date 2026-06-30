import { MATERIALS } from "./materials";

import type { Material } from "../../types/material";
import type { MaterialCategory } from "../../types/materialCategory";

export function findNearestMaterial(

    bandgapEV: number,

    category: MaterialCategory,

): Material {

    const materials = MATERIALS.filter(

        material => material.category === category,

    );

    return materials.reduce(

        (closest, material) =>

            Math.abs(material.bandgapEV - bandgapEV) <
                Math.abs(closest.bandgapEV - bandgapEV)

                ? material

                : closest,

    );

}