import { useEffect, useState } from "react";
import "./index.css";

import {
  inputToWavelength,
} from "./physics/conversions";

import type { InputMode } from "./types/inputMode";
import { photonFromWavelength } from "./physics/photon";

import PhotonReadout from "./components/PhotonReadout";
import SpectrumCanvas from "./components/SpectrumCanvas";
import SelectionPanel from "./components/SelectionPanel";;

function App() {
  /* ==========================================================
   * Application State
   * ========================================================== */

  const [wavelength, setWavelength] = useState(680);

  const [inputMode, setInputMode] =
    useState<InputMode>("nm");

  const [inputText, setInputText] =
    useState(wavelength.toFixed(2));
  /* ==========================================================
   * Derived Data
   * ========================================================== */

  const photon = photonFromWavelength(wavelength);


  const inputLabel =
    inputMode === "nm"
      ? "Enter Wavelength (nm)"
      : "Enter Energy (eV)";



  useEffect(() => {

    if (inputMode === "nm") {

      setInputText(
        wavelength.toFixed(2)
      );

    } else {

      setInputText(
        photon.energyEV.toFixed(4)
      );

    }

  }, [
    wavelength,
    photon.energyEV,
    inputMode,
  ]);

  /* ==========================================================
   * Event Handlers
   * ========================================================== */


  function commitInput() {

    const value = Number(inputText);

    if (Number.isNaN(value)) {
      return;
    }

    setWavelength(
      inputToWavelength(
        value,
        inputMode,
      )
    );

  }
  /* ==========================================================
   * Render
   * ========================================================== */

  return (
    <main>
      <h1>Spectrum Explorer</h1>

      <p>
        Interactive spectroscopy tools for
        researchers.
      </p>

      <div className="top-panel">

        <div className="card selection-card">

          <h2>Selection</h2>

          <SelectionPanel
            inputMode={inputMode}
            inputText={inputText}
            onInputModeChange={setInputMode}
            onInputTextChange={setInputText}
            onCommit={commitInput}
          />

        </div>

        <div className="card properties-card">

          <h2>Photon Properties</h2>

          <PhotonReadout
            photon={photon}
          />

        </div>
      </div>

      <div className="card spectrum-card">

        <h2>Spectrum</h2>

        <SpectrumCanvas
          wavelength={wavelength}
          onWavelengthChange={setWavelength}
        />

      </div>


    </main>
  );
}

export default App;

