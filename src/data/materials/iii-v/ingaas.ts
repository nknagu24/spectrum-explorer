import type { Material } from "../../../types/material";

export const INGAAS: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Indium Gallium Arsenide",

    symbol: "InGaAs",

    formula: "InₓGa₁₋ₓAs",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 0.75,

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

                energyEV: 0.75,

            },

        ],

        plPeakEV: 0.75,

        absorptionEdgeEV: 0.75,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 230,

            },

            {

                mode: "LO",

                shiftCM1: 270,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.50,

        workFunctionEV: 4.90,

        carrierMobility: "10000–12000 cm²/V·s (electrons)",

        excitonBindingEnergyMEV: 3,

        spinOrbitSplittingMEV: 360,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 5.8687 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "InGaAs is the industry-standard semiconductor for detecting light in the 0.9–1.7 μm short-wave infrared (SWIR) region.",

        "Its exceptionally high electron mobility enables ultrafast photodetectors, high-speed transistors, and optical communication systems.",

        "InGaAs is extensively used in telecommunications, LiDAR, hyperspectral imaging, and time-resolved optical spectroscopy."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "High-Speed InGaAs Photodiodes",

            year: 2003,

            doi: "10.1109/JQE.2003.813509",

            type: "Landmark",

            summary: "Demonstrated high-speed InGaAs photodiodes for optical fiber communications."

        },

        {

            title: "InGaAs Photodetectors",

            year: 2010,

            doi: "10.1007/978-1-4419-1056-4",

            type: "Review",

            summary: "Review of InGaAs detector technology and applications."

        }

    ]

};