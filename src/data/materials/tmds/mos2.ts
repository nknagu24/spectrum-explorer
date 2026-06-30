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



    propertyBasis: "Monolayer",
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

    whyItMatters: [

        "Monolayer MoS₂ is one of the first atomically thin semiconductors with a direct bandgap, making it a model system for valleytronics and exciton physics.",

        "Every atom in a monolayer lies at the surface, giving MoS₂ exceptional sensitivity for chemical and biological sensing.",

        "Its atomically thin body suppresses short-channel effects, making it a promising material for future ultra-scaled transistors."

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



};