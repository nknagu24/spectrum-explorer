import { useState } from "react";
import "./index.css";

import { photonFromWavelength } from "./physics/photon";

function App() {
  const [wavelength, setWavelength] = useState(680);

  const photon = photonFromWavelength(wavelength);

  return (
    <main>
      <h1>Spectrum Explorer</h1>

      <input
        type="range"
        min={250}
        max={1000}
        value={wavelength}
        onChange={(e) => setWavelength(Number(e.target.value))}
      />

      <br />
      <br />

      <input
        type="number"
        value={wavelength}
        onChange={(e) => setWavelength(Number(e.target.value))}
      />

      <table>
        <tbody>
          <tr>
            <td>Energy</td>
            <td>{photon.energyEV.toFixed(4)} eV</td>
          </tr>

          <tr>
            <td>Frequency</td>
            <td>{photon.frequencyTHz.toFixed(2)} THz</td>
          </tr>

          <tr>
            <td>Wavenumber</td>
            <td>{photon.wavenumberCM.toFixed(1)} cm⁻¹</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;