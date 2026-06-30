import type { Material } from "../types/material";

interface MaterialInfoCardProps {

    material: Material;

}

export default function MaterialInfoCard({

    material,

}: MaterialInfoCardProps) {

    return (

        <div className="material-card">

            <h2>

                {material.name}

            </h2>

            <p>

                <strong>Formula:</strong>{" "}

                {material.formula}

            </p>

            <p>

                <strong>Crystal Structure:</strong>{" "}

                {material.crystalStructure}

            </p>

            <p>

                <strong>Bandgap:</strong>{" "}

                {material.bandgapEV.toFixed(2)} eV {" "}
                ({material.bandgapType})

            </p>

        </div>

    );

}