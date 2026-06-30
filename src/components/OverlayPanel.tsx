import type { LaserCategory } from "../types/laserCategory";
import type { MaterialCategory }
    from "../types/materialCategory";


interface OverlayPanelProps {

    /* ===========================================
       Laser Overlay
       =========================================== */

    showLasers: boolean;

    laserCategory: LaserCategory;

    onShowLasersChange: (
        show: boolean,
    ) => void;

    onLaserCategoryChange: (
        category: LaserCategory,
    ) => void;

    /* ===========================================
       Material Overlay
       =========================================== */

    showMaterials: boolean;

    materialCategory: MaterialCategory;

    onShowMaterialsChange: (
        show: boolean,
    ) => void;

    onMaterialCategoryChange: (
        category: MaterialCategory,
    ) => void;

}

export default function OverlayPanel({

    showLasers,

    laserCategory,

    onShowLasersChange,

    onLaserCategoryChange,

    showMaterials,

    materialCategory,

    onShowMaterialsChange,

    onMaterialCategoryChange,

}: OverlayPanelProps) {

    return (

        <div className="overlay-panel">

            <h2>Display Options</h2>

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
            <hr className="overlay-divider" />

            <label className="overlay-toggle">

                <input

                    type="checkbox"

                    checked={showMaterials}

                    onChange={(event) =>

                        onShowMaterialsChange(
                            event.target.checked,
                        )

                    }

                />

                Materials

            </label>
            {showMaterials && (

                <div className="material-category-list">

                    <label className="material-option">

                        <input
                            type="radio"

                            name="material-category"

                            checked={
                                materialCategory === "tmd"
                            }

                            onChange={() =>
                                onMaterialCategoryChange(
                                    "tmd",
                                )
                            }
                        />

                        TMDs

                    </label>

                    <label className="material-option">

                        <input
                            type="radio"

                            name="material-category"

                            checked={
                                materialCategory === "perovskite"
                            }

                            onChange={() =>
                                onMaterialCategoryChange(
                                    "perovskite",
                                )
                            }
                        />

                        Perovskites

                    </label>

                    <label className="material-option">

                        <input
                            type="radio"

                            name="material-category"

                            checked={
                                materialCategory === "semiconductor"
                            }

                            onChange={() =>
                                onMaterialCategoryChange(
                                    "semiconductor",
                                )
                            }
                        />

                        Semiconductors

                    </label>

                    <label className="material-option">

                        <input
                            type="radio"

                            name="material-category"

                            checked={
                                materialCategory === "other2d"
                            }

                            onChange={() =>
                                onMaterialCategoryChange(
                                    "other2d",
                                )
                            }
                        />

                        Other 2D

                    </label>

                </div>

            )}

        </div>

    );

}