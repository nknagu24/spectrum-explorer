import type { Laser } from "../../types/laser";

export const HISTORICAL_LASERS: Laser[] = [

    {
        wavelength: 193,
        name: "ArF Excimer",
        family: "Excimer",
        gainMedium: "Argon Fluoride",
        generationMethod: "Excimer Gas Discharge",
        didYouKnow: "193 nm ArF excimer lasers became the foundation of modern semiconductor photolithography, enabling the fabrication of today's microprocessors.",
        category: "historical",
    },

    {
        wavelength: 248,
        name: "KrF Excimer",
        family: "Excimer",
        gainMedium: "Krypton Fluoride",
        generationMethod: "Excimer Gas Discharge",
        didYouKnow: "KrF excimer lasers revolutionized semiconductor manufacturing and remain widely used for UV micromachining.",
        category: "historical",
    },

    {
        wavelength: 337.1,
        name: "Nitrogen Laser",
        family: "Gas",
        gainMedium: "Nitrogen",
        generationMethod: "Gas Discharge",
        didYouKnow: "Nitrogen lasers were among the first compact ultraviolet pulsed lasers and became popular pump sources for dye lasers.",
        category: "historical",
    },

    {
        wavelength: 441.6,
        name: "He-Cd Laser",
        family: "Gas",
        gainMedium: "Helium-Cadmium",
        generationMethod: "Gas Discharge",
        didYouKnow: "Helium-cadmium lasers provided one of the earliest stable blue laser sources for spectroscopy and holography.",
        category: "historical",
    },

    {
        wavelength: 488,
        name: "Argon-ion Laser",
        family: "Gas",
        gainMedium: "Argon",
        generationMethod: "Ion Laser",
        didYouKnow: "Before high-power blue semiconductor lasers existed, argon-ion lasers dominated fluorescence microscopy and Raman spectroscopy.",
        category: "historical",
    },

    {
        wavelength: 510.6,
        name: "Copper Vapor Laser",
        family: "Metal Vapor",
        gainMedium: "Copper Vapor",
        generationMethod: "Metal Vapor Discharge",
        didYouKnow: "Copper vapor lasers were among the first visible lasers capable of operating at very high pulse repetition rates.",
        category: "historical",
    },

    {
        wavelength: 578.2,
        name: "Copper Vapor Laser",
        family: "Metal Vapor",
        gainMedium: "Copper Vapor",
        generationMethod: "Metal Vapor Discharge",
        didYouKnow: "The yellow 578 nm copper vapor line became important for dermatology and precision medical treatments.",
        category: "historical",
    },

    {
        wavelength: 632.8,
        name: "He-Ne Laser",
        family: "Gas",
        gainMedium: "Helium-Neon",
        generationMethod: "Gas Discharge",
        didYouKnow: "The helium-neon laser was the first continuous-wave visible laser and became the standard alignment laser in optics laboratories worldwide.",
        category: "historical",
    },

    {
        wavelength: 694.3,
        name: "Ruby Laser",
        family: "Solid-State",
        gainMedium: "Cr³⁺:Al₂O₃ (Ruby)",
        generationMethod: "Optically Pumped Solid-State Laser",
        didYouKnow: "On 16 May 1960, Theodore Maiman demonstrated the world's first successful laser using a synthetic ruby crystal.",
        category: "historical",
    },

    {
        wavelength: 1064,
        name: "Nd:YAG Laser",
        family: "Solid-State",
        gainMedium: "Nd:YAG",
        generationMethod: "Direct Laser Emission",
        didYouKnow: "The Nd:YAG laser became the workhorse of industrial, medical, and scientific laser systems because of its robustness and high output power.",
        category: "historical",
    },

    {
        wavelength: 10600,
        name: "CO₂ Laser",
        family: "Gas",
        gainMedium: "Carbon Dioxide",
        generationMethod: "Gas Discharge",
        didYouKnow: "CO₂ lasers remain among the most efficient gas lasers ever developed and transformed industrial cutting and welding.",
        category: "historical",
    },

];