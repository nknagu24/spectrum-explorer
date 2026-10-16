
import type { Photon } from "../types/photon";
import MultiUnitConverter from "./MultiUnitConverter";
import "../styles/legacyInterface.css";

interface LegacyInterfaceProps {
  photon: Photon;
  onWavelengthChange: (wavelengthNm: number) => void;
}

const spectralRanges = [
  { range: "Ultraviolet", subrange: "UVC", energy: "12.4–4.43 eV", wavelength: "100–280 nm", frequency: "3000–1070 THz" },
  { range: "Ultraviolet", subrange: "UVB / UVA", energy: "4.43–3.26 eV", wavelength: "280–380 nm", frequency: "1070–789 THz" },
  { range: "Visible", subrange: "Violet", energy: "3.26–2.85 eV", wavelength: "380–435 nm", frequency: "789–689 THz" },
  { range: "Visible", subrange: "Blue", energy: "2.85–2.48 eV", wavelength: "435–500 nm", frequency: "689–600 THz" },
  { range: "Visible", subrange: "Cyan", energy: "2.48–2.38 eV", wavelength: "500–520 nm", frequency: "600–577 THz" },
  { range: "Visible", subrange: "Green", energy: "2.38–2.19 eV", wavelength: "520–565 nm", frequency: "577–531 THz" },
  { range: "Visible", subrange: "Yellow", energy: "2.19–2.10 eV", wavelength: "565–590 nm", frequency: "531–508 THz" },
  { range: "Visible", subrange: "Orange", energy: "2.10–1.98 eV", wavelength: "590–625 nm", frequency: "508–480 THz" },
  { range: "Visible", subrange: "Red", energy: "1.98–1.59 eV", wavelength: "625–780 nm", frequency: "480–384 THz" },
  { range: "Infrared", subrange: "Near IR", energy: "1.59–0.886 eV", wavelength: "780–1400 nm", frequency: "384–214 THz" },
  { range: "Infrared", subrange: "Mid IR", energy: "0.413–0.0248 eV", wavelength: "3–50 µm", frequency: "100–6 THz" },
  { range: "Infrared", subrange: "Far IR", energy: "24.8–1.24 meV", wavelength: "50 µm–1 mm", frequency: "6–0.3 THz" },
];

export default function LegacyInterface({
  photon,
  onWavelengthChange,
}: LegacyInterfaceProps) {
  return (
    <div className="legacy-interface">
      <header className="legacy-intro">
        <h1>Photon Properties &amp; Unit Conversions</h1>
        <p>
          Convert between photon energy, wavelength, wavenumber,
          frequency, and period. Edit any field to update the others.
        </p>
      </header>

      <section
        className="legacy-converter"
        aria-labelledby="legacy-converter-title"
      >
        <h2 id="legacy-converter-title">Photon calculator</h2>
        <div className="legacy-multi-converter">
          <MultiUnitConverter
            photon={photon}
            onWavelengthChange={onWavelengthChange}
          />
        </div>
      </section>

      <section
        className="legacy-reference"
        aria-labelledby="legacy-spectrum-title"
      >
        <h2 id="legacy-spectrum-title">
          Electromagnetic spectrum reference
        </h2>
        <div className="legacy-table-wrap">
          <table className="legacy-spectrum-table">
            <thead>
              <tr>
                <th>Range</th>
                <th>Subrange</th>
                <th>Energy</th>
                <th>Wavelength</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {spectralRanges.map((item, index) => {
                const startsGroup =
                  index === 0 ||
                  spectralRanges[index - 1].range !== item.range;

                const rangeClass = item.range
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                return (
                  <tr
                    key={item.range + item.subrange}
                    className={
                      startsGroup
                        ? `spectrum-group-start spectrum-${rangeClass}`
                        : undefined
                    }
                  >
                    {startsGroup && (
                      <th
                        className="spectrum-range-label"
                        scope="rowgroup"
                        rowSpan={
                          spectralRanges.filter(
                            (entry) => entry.range === item.range
                          ).length
                        }
                      >
                        {item.range}
                      </th>
                    )}
                    <td>{item.subrange}</td>
                    <td>{item.energy}</td>
                    <td>{item.wavelength}</td>
                    <td>{item.frequency}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="legacy-reference"
        aria-labelledby="legacy-formulas-title"
      >
        <h2 id="legacy-formulas-title">Relevant formulas</h2>
        <dl className="legacy-formulas">
          <div>
            <dt>Photon energy</dt>
            <dd><i>E</i> = <i>hc</i>/λ</dd>
          </div>
          <div>
            <dt>Frequency</dt>
            <dd>ν = <i>c</i>/λ</dd>
          </div>
          <div>
            <dt>Wavenumber</dt>
            <dd>ṽ = 1/λ (λ in cm)</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd><i>T</i> = 1/ν</dd>
          </div>
          <div>
            <dt>Photon momentum</dt>
            <dd><i>p</i> = <i>h</i>/λ</dd>
          </div>
        </dl>

        <h2>Physical constants</h2>
        <dl className="legacy-constants">
          <div>
            <dt>Speed of light, <i>c</i></dt>
            <dd>299,792,458 m s⁻¹</dd>
          </div>
          <div>
            <dt>Planck constant, <i>h</i></dt>
            <dd>6.62607015 × 10⁻³⁴ J s</dd>
          </div>
          <div>
            <dt>Energy–wavelength relation</dt>
            <dd><i>hc</i> ≈ 1239.84 eV nm</dd>
          </div>
        </dl>

        <p className="legacy-note">
          These relations use vacuum wavelength. Wavenumber is reported
          in cm⁻¹, frequency in THz, energy in eV, and momentum in kg m s⁻¹.
        </p>
      </section>
    </div>
  );
}
