import type { Laser } from "../types/laser";

interface LaserInfoCardProps {
    laser: Laser;
}

export default function LaserInfoCard({
    laser,
}: LaserInfoCardProps) {

    return (

        <div className="laser-card">

            <h2>Laser Source</h2>

            <div className="laser-name">

                {laser.name}

            </div>

            <div className="property">

                <span>Wavelength</span>

                <span>{laser.wavelength} nm</span>

            </div>

            <div className="property">

                <span>Family</span>

                <span>{laser.family}</span>

            </div>

            <div className="property">

                <span>Gain Medium</span>

                <span>{laser.gainMedium}</span>

            </div>

            <div className="property">

                <span>Generation</span>

                <span>{laser.generationMethod}</span>

            </div>

            <div className="laser-dyk">

                <strong>Did You Know?</strong>

                <p>{laser.didYouKnow}</p>

            </div>

        </div>

    );

}