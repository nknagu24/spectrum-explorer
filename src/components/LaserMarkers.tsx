import { LASERS } from "../data/lasers/lasers";

import { wavelengthToX } from "../graphics/scale";

import {
    SPECTRUM_BAR_Y,
} from "../graphics/layout";

import type { LaserCategory } from "../types/laserCategory";

interface LaserMarkersProps {

    category: LaserCategory;

    onWavelengthChange: (
        wavelength: number,
    ) => void;

}

export default function LaserMarkers({

    category,

    onWavelengthChange,

}: LaserMarkersProps) {

    return (

        <g>

            {LASERS
                .filter(
                    laser =>
                        laser.category === category
                )
                .map((laser) => {

                    const x =
                        wavelengthToX(
                            laser.wavelength,
                        );

                    return (

                        <g
                            key={laser.wavelength}

                            onClick={() =>
                                onWavelengthChange(
                                    laser.wavelength,
                                )
                            }
                        >

                            <line
                                x1={x}
                                y1={SPECTRUM_BAR_Y - 20}
                                x2={x}
                                y2={SPECTRUM_BAR_Y - 2}

                                stroke="#6b7280"
                                strokeWidth={2}

                                strokeLinecap="round"
                            />

                            <text
                                x={x}
                                y={SPECTRUM_BAR_Y - 25}

                                textAnchor="middle"

                                fontSize="10"

                                fill="#6b7280"
                            >

                                {laser.wavelength}

                            </text>

                        </g>

                    );

                })}

        </g>

    );

}