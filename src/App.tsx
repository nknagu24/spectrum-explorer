
import { useEffect, useState } from "react";
import "./index.css";

import type { UIMode } from "./types/uiMode";
import type { LaserCategory } from "./types/laserCategory";
import type { Laser } from "./types/laser";
import type { MaterialCategory } from "./types/materialCategory";
import type { Material } from "./types/material";

import LegacyInterface from "./components/LegacyInterface";
import MultiUnitConverter from "./components/MultiUnitConverter";
import WelcomeCard from "./components/WelcomeCard";
import SpectrumCanvas from "./components/SpectrumCanvas";
import OverlayPanel from "./components/OverlayPanel";
import LaserInfoCard from "./components/LaserInfoCard";
import AvailableLasers from "./components/AvailableLasers";
import AvailableMaterials from "./components/AvailableMaterials";
import MaterialInfoCard from "./components/MaterialInfoCard";

import { photonFromWavelength } from "./physics/photon";
import { energyToWavelength } from "./physics/conversions";

import { findNearestLaser } from "./data/lasers/findNearestLaser";
import { findNearestMaterial } from "./data/materials/findNearestMaterial";

function App() {
  /* ==========================================================
   * Application State
   * ========================================================== */

  const [wavelength, setWavelength] = useState(680);

  const [showLasers, setShowLasers] = useState(false);
  const [laserCategory, setLaserCategory] =
    useState<LaserCategory>("modern");

  const [selectedLaser, setSelectedLaser] =
    useState<Laser | null>(null);

  const [selectedMaterial, setSelectedMaterial] =
    useState<Material | null>(null);

  const [showMaterials, setShowMaterials] = useState(false);
  const [materialCategory, setMaterialCategory] =
    useState<MaterialCategory>("tmd");

  const [activePanel, setActivePanel] =
    useState<"laser" | "material" | null>(null);

  const [uiMode, setUiMode] = useState<UIMode>("modern");

  /* ==========================================================
   * Derived Data
   * ========================================================== */

  const photon = photonFromWavelength(wavelength);

  /* ==========================================================
   * Effects
   * ========================================================== */

  useEffect(() => {
    setSelectedLaser(
      findNearestLaser(wavelength, laserCategory)
    );
  }, [wavelength, laserCategory]);

  useEffect(() => {
    if (showLasers) {
      setActivePanel("laser");
    }
  }, [showLasers]);

  useEffect(() => {
    if (!showMaterials && activePanel === "material") {
      if (showLasers) {
        setActivePanel("laser");
      } else {
        setActivePanel(null);
      }
    }
  }, [showMaterials, showLasers, activePanel]);

  useEffect(() => {
    if (!showLasers && activePanel === "laser") {
      if (showMaterials) {
        setActivePanel("material");
      } else {
        setActivePanel(null);
      }
    }
  }, [showLasers, showMaterials, activePanel]);

  useEffect(() => {
    if (showMaterials) {
      setActivePanel("material");
    }
  }, [showMaterials]);

  useEffect(() => {
    setSelectedMaterial(
      findNearestMaterial(wavelength, materialCategory)
    );
  }, [wavelength, materialCategory]);

  /* ==========================================================
   * Event Handlers
   * ========================================================== */

  function handleLaserSelect(laser: Laser) {
    setActivePanel("laser");
    setSelectedLaser(laser);

    if (laser.wavelength >= 250 && laser.wavelength <= 1000) {
      setWavelength(laser.wavelength);
    }
  }

  function handleMaterialSelect(material: Material) {
    setActivePanel("material");
    setSelectedMaterial(material);

    const selectedWavelength = energyToWavelength(
      material.bandgapEV
    );

    if (
      selectedWavelength >= 250 &&
      selectedWavelength <= 1000
    ) {
      setWavelength(selectedWavelength);
    }
  }

  /* ==========================================================
   * Render
   * ========================================================== */

  return (
    <main>
      <div className="ui-mode-switch">
        <span>Interface:</span>

        <button
          type="button"
          className={
            uiMode === "modern"
              ? "ui-mode-button active"
              : "ui-mode-button"
          }
          onClick={() => setUiMode("modern")}
          aria-pressed={uiMode === "modern"}
        >
          Modern UI
        </button>

        <button
          type="button"
          className={
            uiMode === "legacy"
              ? "ui-mode-button active"
              : "ui-mode-button"
          }
          onClick={() => setUiMode("legacy")}
          aria-pressed={uiMode === "legacy"}
        >
          Legacy UI
        </button>
      </div>

      {uiMode === "modern" ? (
        <>
          <div className="card photon-calculator-card">
            <h2>Photon Calculator</h2>

            <MultiUnitConverter
              photon={photon}
              onWavelengthChange={setWavelength}
            />
          </div>

         

          <div className="spectrum-scroll">
            <SpectrumCanvas
              wavelength={wavelength}
              showLasers={showLasers}
              laserCategory={laserCategory}
              showMaterials={showMaterials}
              materialCategory={materialCategory}
              onWavelengthChange={setWavelength}
            />
          </div>

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
              {showLasers && showMaterials && (
                <div className="information-toggle">
                  <button
                    className={
                      activePanel === "laser"
                        ? "toggle-button active"
                        : "toggle-button"
                    }
                    onClick={() => setActivePanel("laser")}
                  >
                    Laser
                  </button>

                  <button
                    className={
                      activePanel === "material"
                        ? "toggle-button active"
                        : "toggle-button"
                    }
                    onClick={() => setActivePanel("material")}
                  >
                    Material
                  </button>
                </div>
              )}

              {activePanel === null && <WelcomeCard />}

              {activePanel === "laser" && selectedLaser && (
                <LaserInfoCard laser={selectedLaser} />
              )}

              {activePanel === "material" && selectedMaterial && (
                <MaterialInfoCard material={selectedMaterial} />
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
        </>
      ) : (
        <LegacyInterface
          photon={photon}
          onWavelengthChange={setWavelength}
        />
      )}
    </main>
  );
}

export default App;

