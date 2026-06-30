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

import CollapsibleSection
    from "./material/CollapsibleSection";


interface MaterialInfoCardProps {

    material: Material;

}

export default function MaterialInfoCard({

    material,

}: MaterialInfoCardProps) {

    return (

        <div className="material-card">

            <MaterialOverview material={material} />


            <p className="property-basis">

                *Properties correspond to{" "}
                {material.propertyBasis.toLowerCase()}.

            </p>

            <CollapsibleSection
                title="Optical Properties"
            >

                <OpticalProperties
                    material={material}
                />

            </CollapsibleSection>

            <CollapsibleSection
                title="Electronic Properties"
            >

                <ElectronicProperties
                    material={material}
                />

            </CollapsibleSection>

            <CollapsibleSection
                title="Structural Properties"
            >

                <StructuralProperties
                    material={material}
                />

            </CollapsibleSection>

            <CollapsibleSection
                title="Why It Matters"
            >

                <WhyItMatters
                    material={material}
                />

            </CollapsibleSection>

            <CollapsibleSection
                title="Key Papers"
            >

                <KeyPapers
                    material={material}
                />

            </CollapsibleSection>



        </div>

    );

}