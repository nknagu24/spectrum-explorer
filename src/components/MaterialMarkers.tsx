import { MATERIALS } from "../data/materials/materials";

import { energyToWavelength } from "../physics/conversions";

import { wavelengthToX } from "../graphics/scale";

import { SPECTRUM_BAR_Y } from "../graphics/layout";

import type { MaterialCategory }
    from "../types/materialCategory";

interface MaterialMarkersProps {

    category: MaterialCategory;

    onBandgapSelect: (
        bandgapEV: number,
    ) => void;

}

export default function MaterialMarkers({

    category,

    onBandgapSelect,

}: MaterialMarkersProps) {

    return (

        <g>

            {MATERIALS
                .filter(
                    material =>
                        material.category === category,
                )
                .map((material) => {

                    const wavelength =
                        energyToWavelength(
                            material.bandgapEV,
                        );

                    const x =
                        wavelengthToX(
                            wavelength,
                        );

                    return (

                        <g
                            key={material.symbol}

                            onClick={() =>
                                onBandgapSelect(
                                    material.bandgapEV,
                                )
                            }
                        >

                            <line
                                x1={x}
                                y1={SPECTRUM_BAR_Y - 45}
                                x2={x}
                                y2={SPECTRUM_BAR_Y - 2}

                                stroke="#0f766e"

                                strokeWidth={2}

                                strokeLinecap="round"
                            />

                            <text
                                x={x}
                                y={SPECTRUM_BAR_Y - 55}

                                textAnchor="middle"

                                fontSize="10"

                                fill="#0f766e"
                            >

                                {material.symbol}

                            </text>

                        </g>

                    );

                })}

        </g>

    );

}