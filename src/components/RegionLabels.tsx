import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    SPECTRUM_BAR_Y,
} from "../graphics/layout";

import {
    VISIBLE_MIN,
    VISIBLE_MAX,
} from "../graphics/spectrum";

import { wavelengthToX } from "../graphics/scale";

export default function RegionLabels() {

    const visibleLeft =
        wavelengthToX(VISIBLE_MIN);

    const visibleRight =
        wavelengthToX(VISIBLE_MAX);

    const axisRight =
        LEFT_MARGIN + DRAWING_WIDTH;

    const y =
        SPECTRUM_BAR_Y - 10;

    return (
        <>

            <text
                x={(LEFT_MARGIN + visibleLeft) / 2}
                y={y}
                textAnchor="middle"
                className="region-label"
            >
                UV
            </text>

            <text
                x={(visibleLeft + visibleRight) / 2}
                y={y}
                textAnchor="middle"
                className="region-label"
            >
                Visible
            </text>

            <text
                x={(visibleRight + axisRight) / 2}
                y={y}
                textAnchor="middle"
                className="region-label"
            >
                IR
            </text>

        </>

    );

}