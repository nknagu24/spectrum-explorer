import type { Material } from "../../../types/material";

export const CSPBBR3: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Cesium Lead Bromide",

    symbol: "CsPbBr₃",

    formula: "CsPbBr₃",

    category: "perovskite",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Orthorhombic (Room Temperature)",

    bandgapEV: 2.30,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Bulk Thin Film",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {

                name: "Fundamental",

                energyEV: 2.36,

            },

        ],

        plPeakEV: 2.34,

        absorptionEdgeEV: 2.30,

        ramanPeaks: [

            {

                mode: "Pb–Br Stretch",

                shiftCM1: 72,

            },

            {

                mode: "Lattice Mode",

                shiftCM1: 126,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.50,

        workFunctionEV: 4.60,

        carrierMobility: "20–100 cm²/V·s",

        excitonBindingEnergyMEV: 35,

        spinOrbitSplittingMEV: 1200,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Orthorhombic",

        spaceGroup: "Pnma",

        latticeConstant: "a ≈ 8.2 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "CsPbBr₃ is one of the brightest green-emitting semiconductors known and is widely used for high-color-purity LEDs and display technologies.",

        "Compared with hybrid perovskites, CsPbBr₃ offers significantly improved thermal and environmental stability.",

        "Its excellent scintillation properties have also made it attractive for X-ray imaging, radiation detection, and medical imaging."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "All-Inorganic Colloidal Perovskite Nanocrystals: Bright Future for Optoelectronics",

            year: 2015,

            doi: "10.1021/acs.nanolett.5b01199",

            type: "Landmark",

            summary: "Introduced highly luminescent CsPbBr₃ nanocrystals for optoelectronic applications."

        },

        {

            title: "Metal Halide Perovskite Nanocrystals",

            year: 2018,

            doi: "10.1038/natrevmats.2018.13",

            type: "Review",

            summary: "Comprehensive review of halide perovskite nanocrystals including CsPbBr₃."

        }

    ]

};
