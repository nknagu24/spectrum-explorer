import { SPECTRUM_STOPS } from "../graphics/spectrum";
import { wavelengthToPercent } from "../graphics/scale";

export default function SpectrumGradient() {
    return (
        <defs>
            <linearGradient
                id="spectrumGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
            >
                {SPECTRUM_STOPS.map((stop) => (
                    <stop
                        key={stop.wavelength}
                        offset={`${wavelengthToPercent(stop.wavelength)}%`}
                        stopColor={stop.color}
                    />
                ))}
            </linearGradient>
        </defs>
    );
}