import type { Material } from "../types/material";


import OpticalProperties
    from "./material/OpticalProperties";


import ElectronicProperties
    from "./material/ElectronicProperties";


import MaterialOverview
    from "./material/MaterialOverview";


import StructuralProperties
    from "./material/StructuralProperties";


import WhyItMatters
    from "./material/WhyItMatters";


import KeyPapers
    from "./material/KeyPapers";


interface MaterialInfoCardProps {

    material: Material;

}

export default function MaterialInfoCard({

    material,

}: MaterialInfoCardProps) {

    return (

        <div className="material-card">

            <MaterialOverview
                material={material}
            />

            <OpticalProperties
                material={material}
            />
            <ElectronicProperties
                material={material}
            />

            <StructuralProperties
                material={material}
            />

            <WhyItMatters
                material={material}
            />


            <KeyPapers
                material={material}
            />



        </div>

    );

}