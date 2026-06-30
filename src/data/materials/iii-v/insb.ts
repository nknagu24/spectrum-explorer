import type { Material } from "../../../types/material";

export const INSB: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Indium Antimonide",

    symbol: "InSb",

    formula: "InSb",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 0.17,

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

                energyEV: 0.17,

            },

        ],

        plPeakEV: 0.17,

        absorptionEdgeEV: 0.17,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 179,

            },

            {

                mode: "LO",

                shiftCM1: 191,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.59,

        workFunctionEV: 4.80,

        carrierMobility: "78000 cm²/V·s (electrons), 850 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 0.7,

        spinOrbitSplittingMEV: 810,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 6.479 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "InSb possesses the narrowest bandgap among the common III–V semiconductors, making it highly sensitive to mid-infrared radiation.",

        "Its extremely high electron mobility enables ultrafast electronic devices, Hall sensors, and magnetic field detectors.",

        "InSb is widely used in infrared imaging, thermal cameras, and quantum transport research."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Indium Antimonide for Infrared Detection",

            year: 2003,

            doi: "10.1016/S1350-4495(03)00120-4",

            type: "Review",

            summary: "Review of InSb infrared detector technology and applications."

        },

        {

            title: "High-Mobility III–V Semiconductors",

            year: 2012,

            doi: "10.1038/nature11465",

            type: "Review",

            summary: "Overview of high-mobility III–V materials including InSb."

        }

    ]

};