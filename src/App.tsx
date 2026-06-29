import { useState } from "react";
import "./index.css";

import { photonFromWavelength } from "./physics/photon";
import PhotonReadout from "./components/PhotonReadout";
import SpectrumCanvas from "./components/SpectrumCanvas";

function App() {
  const [wavelength, setWavelength] = useState(680);

  const photon = photonFromWavelength(wavelength);

  return (
    <main>
      <h1>Spectrum Explorer</h1>
      <p>Interactive spectroscopy tools for researchers.</p>

      <div className="controls">
        <label>
          Wavelength (nm)
          <input
            type="range"
            min={250}
            max={1000}
            value={wavelength}
            onChange={(e) => setWavelength(Number(e.target.value))}
          />
        </label>

        <label>
          Enter Wavelength (nm)
          <input
            type="number"
            min={250}
            max={1000}
            value={wavelength}
            onChange={(e) => setWavelength(Number(e.target.value))}
          />
        </label>
      </div>

      <SpectrumCanvas
        wavelength={wavelength}
        onWavelengthChange={setWavelength}
      />

      <PhotonReadout photon={photon} />
    </main>
  );
}

export default App;