import type { Material } from "../../../types/material";

export const ALGAN: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Aluminum Gallium Nitride",

    symbol: "AlGaN",

    formula: "AlₓGa₁₋ₓN",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Wurtzite (Hexagonal)",

    bandgapEV: 4.50,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Bulk",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {

                name: "Fundamental",

                energyEV: 4.50,

            },

        ],

        plPeakEV: 4.50,

        absorptionEdgeEV: 4.50,

        ramanPeaks: [

            {

                mode: "E₂(high)",

                shiftCM1: 640,

            },

            {

                mode: "A₁(LO)",

                shiftCM1: 880,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 2.80,

        workFunctionEV: 4.60,

        carrierMobility: "200–800 cm²/V·s",

        excitonBindingEnergyMEV: 35,

        spinOrbitSplittingMEV: 18,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃mc",

        latticeConstant: "Composition dependent",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "AlGaN is the primary semiconductor for deep-ultraviolet LEDs and laser diodes used in sterilization, water purification, and medical diagnostics.",

        "Its wide and composition-tunable bandgap enables emission from the near-UV down to the deep-UV region.",

        "AlGaN/GaN heterostructures form the basis of high-electron-mobility transistors (HEMTs) used in RF amplifiers, radar systems, and satellite communications."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Deep-Ultraviolet Light-Emitting Diodes Based on AlGaN",

            year: 2006,

            doi: "10.1038/nphoton.2006.5",

            type: "Landmark",

            summary: "Demonstrated high-performance AlGaN-based deep-UV LEDs."

        },

        {

            title: "III-Nitride Ultraviolet Emitters",

            year: 2017,

            doi: "10.1038/nphoton.2017.14",

            type: "Review",

            summary: "Review of AlGaN ultraviolet light emitters and their applications."

        }

    ]

};