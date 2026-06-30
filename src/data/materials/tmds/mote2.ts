import type { Material } from "../../../types/material";

export const MOTE2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Molybdenum Ditelluride",

    symbol: "MoTe₂",

    formula: "MoTe₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "2H (Hexagonal)",

    bandgapEV: 1.10,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Monolayer",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 1.10,
            },

            {
                name: "B",
                energyEV: 1.30,
            },

        ],

        plPeakEV: 1.10,

        absorptionEdgeEV: 1.12,

        ramanPeaks: [

            {
                mode: "E₂g¹",
                shiftCM1: 234,
            },

            {
                mode: "A₁g",
                shiftCM1: 171,
            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.80,

        workFunctionEV: 4.55,

        carrierMobility: "10–100 cm²/V·s",

        excitonBindingEnergyMEV: 450,

        spinOrbitSplittingMEV: 230,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃/mmc",

        latticeConstant: "a = 3.52 Å",

        monolayerThicknessNM: 0.70,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "Monolayer MoTe₂ possesses the smallest direct bandgap among the common semiconducting TMDs, extending optical response into the near-infrared.",

        "Its electronic structure is highly tunable through strain, electrostatic gating, and phase engineering, making it attractive for next-generation electronic devices.",

        "MoTe₂ serves as an important platform for studying phase transitions between semiconducting and semimetallic states."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Atomically Thin MoTe₂: A Direct-Bandgap Semiconductor",

            year: 2014,

            doi: "10.1021/nl500171v",

            type: "Landmark",

            summary: "Demonstrated the direct-gap transition and photoluminescence from monolayer MoTe₂."

        },

        {

            title: "Electronics and Optoelectronics of Two-Dimensional Transition Metal Dichalcogenides",

            year: 2012,

            doi: "10.1038/nnano.2012.193",

            type: "Review",

            summary: "Comprehensive review of semiconducting transition metal dichalcogenides."

        },

        {

            title: "Phase-engineered transition metal dichalcogenides",

            year: 2016,

            doi: "10.1038/natrevmats.2016.42",

            type: "Review",

            summary: "Review of structural phase engineering in transition metal dichalcogenides."

        }

    ]

};