import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    WAVELENGTH_AXIS_Y,
} from "../graphics/layout";

export default function WavelengthAxis() {
    return (
        <line
            x1={LEFT_MARGIN}
            y1={WAVELENGTH_AXIS_Y}
            x2={LEFT_MARGIN + DRAWING_WIDTH}
            y2={WAVELENGTH_AXIS_Y}
            stroke="#444"
            strokeWidth={2}
        />
    );
}