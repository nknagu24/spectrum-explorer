import {
    SVG_WIDTH,
    SVG_HEIGHT,
} from "../graphics/layout";

import SpectrumGradient from "./SpectrumGradient";
import DrawingArea from "./DrawingArea";
import WavelengthAxis from "./WavelengthAxis";
import TickMarks from "./TickMarks";
import SpectrumBar from "./SpectrumBar";

export default function SpectrumCanvas() {
    return (
        <svg
            className="spectrum-canvas"
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        >
            <SpectrumGradient />
            <rect
                x={0}
                y={0}
                width={SVG_WIDTH}
                height={SVG_HEIGHT}
                rx={12}
                fill="white"
                stroke="#d9d9d9"
                strokeWidth={1}
            />
            <DrawingArea />

            <SpectrumBar />

            <WavelengthAxis />

            <TickMarks />
        </svg>
    );
}