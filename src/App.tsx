import "./index.css";

import { photonFromWavelength } from "./physics/photon";

function App() {
  const photon = photonFromWavelength(680);

  return (
    <main>
      <h1>Spectrum Explorer</h1>

      <h2>Photon Properties</h2>

      <table>
        <tbody>
          <tr>
            <td>Wavelength</td>
            <td>{photon.wavelengthNm.toFixed(1)} nm</td>
          </tr>

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

          <tr>
            <td>Momentum</td>
            <td>{photon.momentum.toExponential(3)} kg·m/s</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;