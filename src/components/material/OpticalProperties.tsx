import type { Material } from "../../types/material";

interface OpticalPropertiesProps {

    material: Material;

}

export default function OpticalProperties({

    material,

}: OpticalPropertiesProps) {

    const optical =
        material.opticalProperties;

    return (

        <section>



            <div className="property">

                <span>

                    Excitonic Transitions

                </span>

                <span>

                    {optical.excitonicTransitions
                        .map(
                            transition =>
                                `${transition.name} (${transition.energyEV.toFixed(2)} eV)`,
                        )
                        .join(", ")}

                </span>

            </div>

            {optical.plPeakEV && (

                <div className="property">

                    <span>

                        PL Peak

                    </span>

                    <span>

                        {optical.plPeakEV.toFixed(2)} eV

                    </span>

                </div>

            )}

            {optical.absorptionEdgeEV && (

                <div className="property">

                    <span>

                        Absorption Edge

                    </span>

                    <span>

                        {optical.absorptionEdgeEV.toFixed(2)} eV

                    </span>

                </div>

            )}

            <div className="property">

                <span>

                    Raman Peaks

                </span>

                <span>

                    {optical.ramanPeaks
                        .map(
                            peak =>
                                `${peak.mode} (${peak.shiftCM1} cm⁻¹)`,
                        )
                        .join(", ")}

                </span>

            </div>

        </section>

    );

}