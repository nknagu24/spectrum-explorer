import { LASERS } from "../data/lasers/lasers";

import type { Laser } from "../types/laser";
import type { LaserCategory } from "../types/laserCategory";

interface AvailableLasersProps {

    category: LaserCategory;

    selectedLaser: Laser | null;

    onLaserSelect: (
        laser: Laser,
    ) => void;

}

export default function AvailableLasers({

    category,

    selectedLaser,

    onLaserSelect,

}: AvailableLasersProps) {

    const lasers = LASERS.filter(

        laser => laser.category === category,

    );

    return (

        <div className="available-lasers">

            <h2>Available Lasers</h2>

            <div className="source-list">

                {lasers.map((laser) => (

                    <button
                        key={laser.wavelength}
                        className={
                            selectedLaser?.wavelength === laser.wavelength
                                ? "source-chip active"
                                : "source-chip"
                        }
                        onClick={() =>
                            onLaserSelect(laser)
                        }
                    >

                        {laser.wavelength}

                    </button>

                ))}

            </div>

        </div>

    );

}