import {
    SVG_WIDTH,
    SVG_HEIGHT,
} from "../graphics/layout";

import SpectrumGradient from "./SpectrumGradient";
import DrawingArea from "./DrawingArea";
import WavelengthAxis from "./WavelengthAxis";
import TickMarks from "./TickMarks";
import SpectrumBar from "./SpectrumBar";
import TickLabels from "./TickLabels";
import Cursor from "./Cursor";
import SpectrumRegions from "./SpectrumRegions";
import RegionLabels from "./RegionLabels";
import InteractionLayer from "./InteractionLayer";
import LaserMarkers from "./LaserMarkers";
import type { LaserCategory } from "../types/laserCategory";

interface SpectrumCanvasProps {

    wavelength: number;

    showLasers: boolean;

    laserCategory: LaserCategory;

    onWavelengthChange: (
        wavelength: number,
    ) => void;

}

export default function SpectrumCanvas({

    wavelength,

    showLasers,

    laserCategory,

    onWavelengthChange,

}: SpectrumCanvasProps) {
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




            <SpectrumRegions />

            <RegionLabels />

            <SpectrumBar />

            {showLasers && (

                <LaserMarkers
                    category={laserCategory}
                    onWavelengthChange={
                        onWavelengthChange
                    }
                />

            )}
            <Cursor wavelength={wavelength} />

            <WavelengthAxis />

            <TickMarks />

            <TickLabels />

            <InteractionLayer
                onWavelengthChange={onWavelengthChange}
            />
        </svg>
    );
}