import { useEffect, useState } from "react";
import "./index.css";

import type { InputMode } from "./types/inputMode";
import { photonFromWavelength } from "./physics/photon";

import PhotonReadout from "./components/PhotonReadout";
import SpectrumCanvas from "./components/SpectrumCanvas";
import SelectionPanel from "./components/SelectionPanel";

import OverlayPanel from "./components/OverlayPanel";
import type { LaserCategory }
  from "./types/laserCategory";
import { findNearestLaser }
  from "./data/lasers/findNearestLaser";
import LaserInfoCard from "./components/LaserInfoCard";
import AvailableLasers from "./components/AvailableLasers";
import type { Laser } from "./types/laser";
import type { MaterialCategory }
  from "./types/materialCategory";

import {
  inputToWavelength,
  energyToWavelength,
} from "./physics/conversions";


function App() {
  /* ==========================================================
   * Application State
   * ========================================================== */

  const [wavelength, setWavelength] = useState(680);

  const [inputMode, setInputMode] =
    useState<InputMode>("nm");

  const [showLasers, setShowLasers] =
    useState(false);

  const [laserCategory, setLaserCategory] =
    useState<LaserCategory>("modern");

  const [inputText, setInputText] =
    useState(wavelength.toFixed(2));

  const [selectedLaser, setSelectedLaser] =
    useState<Laser | null>(null);

  const [showMaterials, setShowMaterials] =
    useState(false);

  const [materialCategory, setMaterialCategory] =
    useState<MaterialCategory>("tmd");
  /* ==========================================================
   * Derived Data
   * ========================================================== */

  const photon = photonFromWavelength(wavelength);



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
  useEffect(() => {

    setSelectedLaser(

      findNearestLaser(
        wavelength,
        laserCategory,
      )

    );

  }, [

    wavelength,

    laserCategory,

  ]);
  /* ==========================================================
   * Event Handlers
   * ========================================================== */
  function handleLaserSelect(
    laser: Laser,
  ) {

    setSelectedLaser(laser);

    if (
      laser.wavelength >= 250 &&
      laser.wavelength <= 1000
    ) {

      setWavelength(
        laser.wavelength,
      );

    }

  }


  import type { Material } from "./types/material";

  function handleMaterialSelect(
    material: Material,
  ) {

    const wavelength =
      energyToWavelength(
        material.bandgapEV,
      );

    if (
      wavelength >= 250 &&
      wavelength <= 1000
    ) {

      setWavelength(
        wavelength,
      );

    }

  }

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



      <SpectrumCanvas
        wavelength={wavelength}

        showLasers={showLasers}
        laserCategory={laserCategory}

        showMaterials={showMaterials}
        materialCategory={materialCategory}

        onWavelengthChange={setWavelength}
      />

      <div className="bottom-panel">

        <div className="card overlay-card">

          <OverlayPanel
            showLasers={showLasers}
            laserCategory={laserCategory}
            onShowLasersChange={setShowLasers}
            onLaserCategoryChange={setLaserCategory}

            showMaterials={showMaterials}
            materialCategory={materialCategory}
            onShowMaterialsChange={setShowMaterials}
            onMaterialCategoryChange={setMaterialCategory}
          />

        </div>
        {showLasers && selectedLaser && (

          <div className="card laser-info-card">

            <LaserInfoCard
              laser={selectedLaser}
            />

          </div>

        )}
      </div>
      {showLasers && (

        <div className="card available-sources-card">

          <AvailableLasers

            category={laserCategory}

            selectedLaser={selectedLaser}

            onLaserSelect={handleLaserSelect}

          />

        </div>

      )}



    </main>
  );
}

export default App;

