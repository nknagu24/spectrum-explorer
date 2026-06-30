import type { Material } from "../../../types/material";

export const MOS2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "MoS₂ (Molybdenum Disulfide)",

    symbol: "MoS₂",

    formula: "MoS₂",
    category: "tmd",


    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "2H (Hexagonal)",

    bandgapEV: 1.88,

    bandgapType: "Direct",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A Exciton",
                energyEV: 1.88,
            },

            {
                name: "B Exciton",
                energyEV: 2.03,
            },

            {
                name: "C Exciton",
                energyEV: 2.90,
            },

        ],

        plPeakEV: 1.88,

        absorptionEdgeEV: 1.90,

        ramanPeaks: [

            {
                mode: "E₂g¹",
                shiftCM1: 385,
            },

            {
                mode: "A₁g",
                shiftCM1: 403,
            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.0,

        workFunctionEV: 4.3,

        carrierMobility: "~200 cm² V⁻¹ s⁻¹",

        excitonBindingEnergyMEV: 500,

        spinOrbitSplittingMEV: 150,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃/mmc",

        latticeConstant: "3.16 Å",

        monolayerThicknessNM: 0.65,

    },

    /* ======================================================
       Applications
       ====================================================== */

    everydayApplications: [

        {
            title: "Photodetectors",

            description:
                "Strong light-matter interaction enables highly sensitive ultrathin photodetectors.",
        },

        {
            title: "Chemical & Gas Sensors",

            description:
                "Large surface-to-volume ratio makes monolayer MoS₂ highly sensitive to adsorbed molecules.",
        },

    ],

    futureApplications: [

        {
            title: "Valleytronics",

            description:
                "Valley-selective optical transitions make MoS₂ a leading platform for valley-based information processing.",
        },

        {
            title: "Flexible Electronics",

            description:
                "Atomically thin structure enables mechanically flexible electronic and optoelectronic devices.",
        },

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {
            title:
                "Atomically Thin MoS₂: A New Direct-Gap Semiconductor",

            year: 2010,

            doi: "10.1021/nl903868w",

            type: "Landmark",

            summary:
                "Demonstrated the indirect-to-direct bandgap transition in monolayer MoS₂.",
        },

        {
            title:
                "Spin and Pseudospins in Layered Transition Metal Dichalcogenides",

            year: 2014,

            doi: "10.1038/nphys2942",

            type: "Review",

            summary:
                "Comprehensive review of spin, valley, and optical physics in TMDs.",
        },

    ],

    /* ======================================================
       Miscellaneous
       ====================================================== */

    didYouKnow: [

        "Monolayer MoS₂ changes from an indirect to a direct bandgap semiconductor.",

        "A monolayer of MoS₂ is approximately 0.65 nm thick.",

        "The A and B excitons originate from spin-orbit splitting of the valence band.",

    ],

};