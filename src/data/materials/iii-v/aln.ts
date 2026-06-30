import type { Material } from "../../../types/material";

export const ALN: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Aluminum Nitride",

    symbol: "AlN",

    formula: "AlN",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Wurtzite (Hexagonal)",

    bandgapEV: 6.10,

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

                energyEV: 6.10,

            },

        ],

        plPeakEV: 6.10,

        absorptionEdgeEV: 6.10,

        ramanPeaks: [

            {

                mode: "E₂(high)",

                shiftCM1: 657,

            },

            {

                mode: "A₁(LO)",

                shiftCM1: 890,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 0.60,

        workFunctionEV: 4.70,

        carrierMobility: "250–350 cm²/V·s",

        excitonBindingEnergyMEV: 80,

        spinOrbitSplittingMEV: 19,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃mc",

        latticeConstant: "a = 3.112 Å, c = 4.982 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "AlN possesses one of the widest direct bandgaps among commercially important semiconductors, enabling operation in the deep-ultraviolet region.",

        "Its excellent thermal conductivity and electrical insulation make it an important substrate for high-power electronics and RF devices.",

        "AlN is widely used as the foundation for AlGaN-based deep-UV LEDs, laser diodes, and high-electron-mobility transistors."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Properties of Aluminum Nitride",

            year: 2002,

            doi: "10.1002/3527600434.eap251",

            type: "Review",

            summary: "Comprehensive review of the structural, electronic, thermal, and optical properties of AlN."

        },

        {

            title: "III-Nitride Semiconductors: Growth, Properties and Applications",

            year: 2008,

            doi: "10.1016/S0080-8784(08)00001-8",

            type: "Review",

            summary: "Overview of III-nitride materials with emphasis on AlN and related alloys."

        }

    ]

};