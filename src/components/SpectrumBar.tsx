import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    SPECTRUM_BAR_Y,
    SPECTRUM_BAR_HEIGHT,
} from "../graphics/layout";

export default function SpectrumBar() {
    return (
        <rect
            x={LEFT_MARGIN}
            y={SPECTRUM_BAR_Y}
            width={DRAWING_WIDTH}
            height={SPECTRUM_BAR_HEIGHT}
            rx={4}
            fill="url(#spectrumGradient)"
            stroke="#999"
        />
    );
}