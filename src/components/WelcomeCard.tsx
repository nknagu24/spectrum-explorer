export default function WelcomeCard() {

    return (

        <div className="welcome-card">

            <h2>Welcome</h2>

            <p>

                Spectrum Explorer lets you explore the relationship
                between photon wavelength, energy, lasers, and
                semiconductor materials.

            </p>

            <h3>How to use</h3>

            <ol>

                <li>
                    Click anywhere on the spectrum or enter a wavelength
                    (or energy) to move the cursor.
                </li>

                <li>
                    Enable <strong>Laser Sources</strong> to display
                    commonly used laser wavelengths.
                </li>

                <li>
                    Enable <strong>Materials</strong> to explore
                    semiconductor bandgaps and optical properties.
                </li>

                <li>
                    Select a laser or material to view detailed
                    information.
                </li>

                <li>
                    When both overlays are enabled, use the toggle above
                    to switch between laser and material information.
                </li>

            </ol>

        </div>

    );

}