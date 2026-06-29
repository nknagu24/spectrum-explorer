import { WAVELENGTH_TICKS } from "../graphics/ticks";
import { wavelengthToX } from "../graphics/scale";
import { WAVELENGTH_AXIS_Y } from "../graphics/layout";

export default function TickMarks() {
    return (
        <>
            {WAVELENGTH_TICKS.map((tick) => (
                <line
                    key={tick}
                    x1={wavelengthToX(tick)}
                    y1={WAVELENGTH_AXIS_Y}
                    x2={wavelengthToX(tick)}
                    y2={WAVELENGTH_AXIS_Y + 8}
                    stroke="#444"
                    strokeWidth={2}
                />
            ))}
        </>
    );
}