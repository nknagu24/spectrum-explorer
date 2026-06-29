import { useState } from "react";

import {
    LEFT_MARGIN,
    DRAWING_WIDTH,
    TOP_MARGIN,
    DRAWING_HEIGHT,
} from "../graphics/layout";

import {
    clientToWavelength,
} from "../graphics/mouse";

interface InteractionLayerProps {

    onWavelengthChange: (
        wavelength: number,
    ) => void;

}

export default function InteractionLayer({

    onWavelengthChange,

}: InteractionLayerProps) {

    const [dragging, setDragging] =
        useState(false);

    function updateWavelength(
        clientX: number,
        rect: DOMRect,
    ) {

        onWavelengthChange(

            clientToWavelength(
                clientX,
                rect,
            ),

        );

    }

    return (

        <rect
            x={LEFT_MARGIN}
            y={TOP_MARGIN}
            width={DRAWING_WIDTH}
            height={DRAWING_HEIGHT}

            fill="transparent"

            onPointerDown={(event) => {

                event.currentTarget.setPointerCapture(
                    event.pointerId,
                );

                setDragging(true);

                updateWavelength(
                    event.clientX,
                    event.currentTarget.getBoundingClientRect(),
                );

            }}

            onPointerMove={(event) => {

                if (!dragging) {
                    return;
                }

                updateWavelength(
                    event.clientX,
                    event.currentTarget.getBoundingClientRect(),
                );

            }}

            onPointerUp={(event) => {

                event.currentTarget.releasePointerCapture(
                    event.pointerId,
                );

                setDragging(false);

            }}

            onPointerCancel={() => {

                setDragging(false);

            }}

        />

    );

}