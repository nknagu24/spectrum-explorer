import type { Material } from "../../types/material";

interface ElectronicPropertiesProps {

    material: Material;

}

export default function ElectronicProperties({

    material,

}: ElectronicPropertiesProps) {

    const electronic =
        material.electronicProperties;

    return (

        <section>


            {electronic.electronAffinityEV && (

                <div className="property">

                    <span>

                        Electron Affinity

                    </span>

                    <span>

                        {electronic.electronAffinityEV.toFixed(2)} eV

                    </span>

                </div>

            )}

            {electronic.workFunctionEV && (

                <div className="property">

                    <span>

                        Work Function

                    </span>

                    <span>

                        {electronic.workFunctionEV.toFixed(2)} eV

                    </span>

                </div>

            )}

            {electronic.carrierMobility && (

                <div className="property">

                    <span>

                        Carrier Mobility

                    </span>

                    <span>

                        {electronic.carrierMobility}

                    </span>

                </div>

            )}

            {electronic.excitonBindingEnergyMEV && (

                <div className="property">

                    <span>

                        Exciton Binding Energy

                    </span>

                    <span>

                        {electronic.excitonBindingEnergyMEV} meV

                    </span>

                </div>

            )}

            {electronic.spinOrbitSplittingMEV && (

                <div className="property">

                    <span>

                        Spin-Orbit Splitting

                    </span>

                    <span>

                        {electronic.spinOrbitSplittingMEV} meV

                    </span>

                </div>

            )}

        </section>

    );

}