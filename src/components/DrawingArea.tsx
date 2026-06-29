import {
    LEFT_MARGIN,
    TOP_MARGIN,
    DRAWING_WIDTH,
    DRAWING_HEIGHT,
} from "../graphics/layout";

export default function DrawingArea() {
    return (
        <rect
            x={LEFT_MARGIN}
            y={TOP_MARGIN}
            width={DRAWING_WIDTH}
            height={DRAWING_HEIGHT}
            fill="none"
            stroke="#cccccc"
            strokeDasharray="6 4"
        />
    );
}