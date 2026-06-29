import {
    SPECTRUM_BAR_Y,
    SPECTRUM_BAR_HEIGHT,
} from "../graphics/layout";

import {
    VISIBLE_MIN,
    VISIBLE_MAX,
} from "../graphics/spectrum";

import { wavelengthToX } from "../graphics/scale";

export default function SpectrumBar() {
    const left = wavelengthToX(VISIBLE_MIN);
    const right = wavelengthToX(VISIBLE_MAX);
    const width = right - left;

    return (
        <rect
            x={left}
            y={SPECTRUM_BAR_Y}
            width={width}
            height={SPECTRUM_BAR_HEIGHT}
            rx={4}
            fill="url(#spectrumGradient)"
            stroke="#666"
            strokeWidth={1.5}
        />
    );
}