import type { LaserCategory } from "../types/laserCategory";

interface OverlayPanelProps {

    showLasers: boolean;

    laserCategory: LaserCategory;

    onShowLasersChange: (
        value: boolean,
    ) => void;

    onLaserCategoryChange: (
        category: LaserCategory,
    ) => void;

}

export default function OverlayPanel({

    showLasers,

    laserCategory,

    onShowLasersChange,

    onLaserCategoryChange,

}: OverlayPanelProps) {

    return (

        <div className="overlay-panel">

            <h2>Overlays</h2>

            <label className="overlay-toggle">

                <input
                    type="checkbox"
                    checked={showLasers}
                    onChange={(event) =>
                        onShowLasersChange(
                            event.target.checked,
                        )
                    }
                />

                Laser Sources

            </label>

            {showLasers && (

                <div className="segmented-control">

                    <button
                        className={
                            laserCategory === "modern"
                                ? "segment active"
                                : "segment"
                        }
                        onClick={() =>
                            onLaserCategoryChange(
                                "modern"
                            )
                        }
                    >
                        Modern
                    </button>

                    <button
                        className={
                            laserCategory === "historical"
                                ? "segment active"
                                : "segment"
                        }
                        onClick={() =>
                            onLaserCategoryChange(
                                "historical"
                            )
                        }
                    >
                        Historical
                    </button>

                    <button
                        className={
                            laserCategory === "ultrafast"
                                ? "segment active"
                                : "segment"
                        }
                        onClick={() =>
                            onLaserCategoryChange(
                                "ultrafast"
                            )
                        }
                    >
                        Ultrafast
                    </button>

                </div>

            )}

        </div>

    );

}