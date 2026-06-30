import { MATERIALS } from "../data/materials/materials";

import type { Material } from "../types/material";
import type { MaterialCategory } from "../types/materialCategory";

interface AvailableMaterialsProps {

    category: MaterialCategory;

    selectedMaterial: Material | null;

    onMaterialSelect: (
        material: Material,
    ) => void;

}

export default function AvailableMaterials({

    category,

    selectedMaterial,

    onMaterialSelect,

}: AvailableMaterialsProps) {

    const materials = MATERIALS.filter(

        material =>
            material.category === category,

    );

    return (

        <div className="available-materials">

            <h2>

                Available Materials

            </h2>

            <div className="source-list">

                {materials.map((material) => (

                    <button

                        key={material.symbol}

                        className={
                            material.symbol ===
                                selectedMaterial?.symbol

                                ? "source-chip active"

                                : "source-chip"
                        }

                        onClick={() =>
                            onMaterialSelect(
                                material,
                            )
                        }

                    >

                        {material.symbol}

                    </button>

                ))}

            </div>

        </div>

    );

}