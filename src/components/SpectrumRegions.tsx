import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    SPECTRUM_BAR_Y,
    SPECTRUM_BAR_HEIGHT,
} from "../graphics/layout";
import {
    VISIBLE_MIN,
    VISIBLE_MAX,
} from "../graphics/spectrum";

import { wavelengthToX } from "../graphics/scale";





export default function SpectrumRegions() {

    const visibleLeft =
        wavelengthToX(VISIBLE_MIN);

    const visibleRight =
        wavelengthToX(VISIBLE_MAX);

    const axisRight =
        LEFT_MARGIN + DRAWING_WIDTH;

    return (
        <>

            {/* UV Region */}

            <rect
                x={LEFT_MARGIN}
                y={SPECTRUM_BAR_Y}
                width={visibleLeft - LEFT_MARGIN}
                height={SPECTRUM_BAR_HEIGHT}
                fill="#f4f1ff"
            />

            {/* IR Region */}

            <rect
                x={visibleRight}
                y={SPECTRUM_BAR_Y}
                width={axisRight - visibleRight}
                height={SPECTRUM_BAR_HEIGHT}
                fill="#fff6f2"
            />
        </>
    );

}