import { WAVELENGTH_TICKS } from "../graphics/ticks";
import { wavelengthToX } from "../graphics/scale";
import { TICK_LABEL_Y } from "../graphics/layout";

export default function TickLabels() {
    return (
        <>
            {WAVELENGTH_TICKS.map((tick) => (
                <text
                    key={tick}
                    x={wavelengthToX(tick)}
                    y={TICK_LABEL_Y}
                    textAnchor="middle"
                    fontSize={20}
                    fill="#444"
                >
                    {tick}
                </text>
            ))}
        </>
    );
}