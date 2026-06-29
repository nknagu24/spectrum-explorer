import {
    SPECTRUM_BAR_Y,
    SPECTRUM_BAR_HEIGHT,
} from "../graphics/layout";

import {
    VISIBLE_MIN,
    VISIBLE_MAX,
} from "../graphics/spectrum";

import { wavelengthToX } from "../graphics/scale";

interface SpectrumBarProps {
    onWavelengthChange?: (wavelength: number) => void;
}

export default function SpectrumBar({
    onWavelengthChange,
}: SpectrumBarProps) {

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
            onClick={(event) => {

                const rect =
                    event.currentTarget.getBoundingClientRect();

                const fraction =
                    (event.clientX - rect.left) / rect.width;

                const wavelength =
                    VISIBLE_MIN +
                    fraction * (VISIBLE_MAX - VISIBLE_MIN);

                onWavelengthChange?.(wavelength);

            }}
        />
    );
}