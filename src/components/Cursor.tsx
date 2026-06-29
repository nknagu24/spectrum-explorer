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
    const x = wavelengthToX(wavelength);

    return (
        <>
            <line
                x1={x}
                y1={TOP_MARGIN}
                x2={x}
                y2={TOP_MARGIN + DRAWING_HEIGHT}
                stroke="#222"
                strokeWidth={2}
            />

            <polygon
                points={`
        ${x - 6},${TOP_MARGIN - 2}
        ${x + 6},${TOP_MARGIN - 2}
        ${x},${TOP_MARGIN + 8}
      `}
                fill="#222"
            />
        </>
    );
}