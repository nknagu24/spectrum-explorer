import type { Material } from "../../types/material";

import {
    energyToWavelength,
} from "../../physics/conversions";

interface MaterialOverviewProps {

    material: Material;

}

export default function MaterialOverview({

    material,

}: MaterialOverviewProps) {

    const bandgapNM =
        energyToWavelength(
            material.bandgapEV,
        );

    return (

        <>

            <h2>

                {material.name}

            </h2>

            <div className="property">

                <span>Formula</span>

                <span>

                    {material.formula}

                </span>

            </div>

            <div className="property">

                <span>Crystal Structure</span>

                <span>

                    {material.crystalStructure}

                </span>

            </div>

            <div className="property">

                <span>Bandgap</span>

                <span>

                    {material.bandgapEV.toFixed(2)}
                    {" eV "}
                    (
                    {bandgapNM.toFixed(0)}
                    {" nm"}
                    )

                </span>

            </div>

            <div className="property">

                <span>Type</span>

                <span>

                    {material.bandgapType}

                </span>

            </div>

        </>

    );

}