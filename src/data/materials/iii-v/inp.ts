import type { Material } from "../../../types/material";

export const INP: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Indium Phosphide",

    symbol: "InP",

    formula: "InP",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 1.34,

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

                energyEV: 1.34,

            },

        ],

        plPeakEV: 1.34,

        absorptionEdgeEV: 1.34,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 306,

            },

            {

                mode: "LO",

                shiftCM1: 345,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.38,

        workFunctionEV: 4.65,

        carrierMobility: "5400 cm²/V·s (electrons), 150 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 5,

        spinOrbitSplittingMEV: 108,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 5.869 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "InP is the backbone of modern fiber-optic communication systems because it efficiently emits and detects light at telecommunications wavelengths.",

        "Its high electron velocity and direct bandgap make it ideal for high-speed photodetectors, semiconductor lasers, and integrated photonic circuits.",

        "InP substrates support the growth of InGaAs and InAlAs heterostructures used in avalanche photodiodes, quantum cascade lasers, and high-electron-mobility transistors."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Indium Phosphide and Related Materials",

            year: 1992,

            doi: "",

            type: "Review",

            summary: "Comprehensive reference covering the growth, properties, and applications of InP."

        },

        {

            title: "Physics of Semiconductor Devices",

            year: 2006,

            doi: "10.1002/0470068329",

            type: "Review",

            summary: "Standard textbook describing InP-based electronic and optoelectronic devices."

        },

        {

            title: "InP-Based Materials and Devices",

            year: 1999,

            doi: "",

            type: "Review",

            summary: "Review of InP technology for photonic and high-speed electronic applications."

        }

    ]

};