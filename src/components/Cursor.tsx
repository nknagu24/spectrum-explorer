import { wavelengthToX } from "../graphics/scale";

import {
    TOP_MARGIN,
    DRAWING_HEIGHT,
} from "../graphics/layout";

interface CursorProps {
    wavelength: number;
}

export default function Cursor({
    wavelength,
}: CursorProps) {

    const x =
        wavelengthToX(wavelength);

    return (

        <g
            transform={`translate(${x},0)`}
            style={{
                transition:
                    "transform 120ms ease-out",
            }}
        >

            {/* Cursor Line */}

            <line
                x1={0}
                y1={TOP_MARGIN}
                x2={0}
                y2={TOP_MARGIN + DRAWING_HEIGHT}
                stroke="#6b7280"
                strokeWidth={1.5}
            />

            {/* Cursor Pointer */}

            <polygon
                points={`
                    -6,${TOP_MARGIN - 2}
                     6,${TOP_MARGIN - 2}
                     0,${TOP_MARGIN + 8}
                `}
                fill="#6b7280"
            />

        </g>

    );

}