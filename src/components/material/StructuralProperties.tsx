import type { Material } from "../../types/material";

interface StructuralPropertiesProps {

    material: Material;

}

export default function StructuralProperties({

    material,

}: StructuralPropertiesProps) {

    const structural =
        material.structuralProperties;

    return (

        <section>

            <h3>

                Structural Properties

            </h3>

            {structural.crystalSystem && (

                <div className="property">

                    <span>

                        Crystal System

                    </span>

                    <span>

                        {structural.crystalSystem}

                    </span>

                </div>

            )}

            {structural.spaceGroup && (

                <div className="property">

                    <span>

                        Space Group

                    </span>

                    <span>

                        {structural.spaceGroup}

                    </span>

                </div>

            )}

            {structural.latticeConstant && (

                <div className="property">

                    <span>

                        Lattice Constant

                    </span>

                    <span>

                        {structural.latticeConstant}

                    </span>

                </div>

            )}

            {structural.monolayerThicknessNM && (

                <div className="property">

                    <span>

                        Monolayer Thickness

                    </span>

                    <span>

                        {structural.monolayerThicknessNM} nm

                    </span>

                </div>

            )}

        </section>

    );

}