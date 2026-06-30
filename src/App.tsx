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

import type { Material }
  from "./types/material";
import AvailableMaterials
  from "./components/AvailableMaterials";

import MaterialInfoCard
  from "./components/MaterialInfoCard";



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

  const [selectedMaterial, setSelectedMaterial] =
    useState<Material | null>(null);

  const [showMaterials, setShowMaterials] =
    useState(false);

  const [materialCategory, setMaterialCategory] =
    useState<MaterialCategory>("tmd");


  const [activePanel, setActivePanel] =
    useState<"laser" | "material" | null>(null);



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

    if (showLasers && activePanel === null) {

      setActivePanel("laser");

    }

  }, [

    wavelength,

    laserCategory,

    showLasers,

    activePanel,

  ]);
  /* ==========================================================
   * Event Handlers
   * ========================================================== */
  function handleLaserSelect(
    laser: Laser,
  ) {
    setActivePanel("laser");
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




  function handleMaterialSelect(
    material: Material,
  ) {
    setActivePanel("material");
    setSelectedMaterial(
      material,
    );

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
        <div className="card information-card">

          {activePanel === "laser" &&
            selectedLaser && (

              <LaserInfoCard
                laser={selectedLaser}
              />

            )}

          {activePanel === "material" &&
            selectedMaterial && (

              <MaterialInfoCard
                material={selectedMaterial}
              />

            )}

        </div>

      </div>


      {showLasers && (

        <div className="card available-lasers-card">

          <AvailableLasers

            category={laserCategory}

            selectedLaser={selectedLaser}

            onLaserSelect={handleLaserSelect}

          />

        </div>

      )}

      {showMaterials && (

        <div className="card available-materials-card">

          <AvailableMaterials

            category={materialCategory}

            selectedMaterial={selectedMaterial}

            onMaterialSelect={handleMaterialSelect}

          />

        </div>

      )}


    </main>
  );
}

export default App;

