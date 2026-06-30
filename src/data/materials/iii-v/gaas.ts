import type { Material } from "../../../types/material";

export const GAAS: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Gallium Arsenide",

    symbol: "GaAs",

    formula: "GaAs",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 1.42,

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

                energyEV: 1.42,

            },

        ],

        plPeakEV: 1.42,

        absorptionEdgeEV: 1.42,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 268,

            },

            {

                mode: "LO",

                shiftCM1: 292,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.07,

        workFunctionEV: 4.8,

        carrierMobility: "8500 cm²/V·s (electrons), 400 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 4.8,

        spinOrbitSplittingMEV: 340,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 5.653 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "GaAs is one of the most important direct-bandgap semiconductors for high-speed optoelectronics, enabling efficient light emission and absorption.",

        "Its exceptionally high electron mobility makes it the material of choice for microwave electronics, high-frequency transistors, and ultrafast photodetectors.",

        "GaAs forms the foundation of semiconductor lasers, VCSELs, multijunction solar cells, and many ultrafast spectroscopy studies."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Semiconductors and Semimetals, Volume 1: Physics of III–V Compounds",

            year: 1966,

            doi: "",

            type: "Review",

            summary: "Classic reference covering the electronic and optical properties of III-V semiconductors."

        },

        {

            title: "Gallium Arsenide Technology",

            year: 1990,

            doi: "",

            type: "Review",

            summary: "Comprehensive review of GaAs material properties and device technology."

        },

        {

            title: "Physics of Semiconductor Devices",

            year: 2006,

            doi: "10.1002/0470068329",

            type: "Review",

            summary: "Widely used textbook covering GaAs devices including lasers, photodiodes, and high-speed electronics."

        }

    ]

};