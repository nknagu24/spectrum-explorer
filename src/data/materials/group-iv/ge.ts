import type { Material } from "../../../types/material";

export const GE: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Germanium",

    symbol: "Ge",

    formula: "Ge",

    category: "group-iv",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Diamond Cubic",

    bandgapEV: 0.66,

    bandgapType: "Indirect",

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

                energyEV: 0.66,

            },

        ],

        plPeakEV: 0.66,

        absorptionEdgeEV: 0.66,

        ramanPeaks: [

            {

                mode: "First-order Optical Phonon",

                shiftCM1: 300,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.00,

        workFunctionEV: 4.80,

        carrierMobility: "3900 cm²/V·s (electrons), 1900 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 2,

        spinOrbitSplittingMEV: 290,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "Fd-3m",

        latticeConstant: "a = 5.658 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "Germanium was one of the first semiconductor materials used in transistors and helped launch the modern electronics industry.",

        "Its strong infrared absorption and high carrier mobility make it valuable for infrared optics, photodetectors, and silicon photonics.",

        "Today, germanium is widely used in high-efficiency multijunction solar cells, fiber-optic communication systems, and integrated photonic devices."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Germanium Photonics",

            year: 2010,

            doi: "10.1038/nphoton.2010.35",

            type: "Review",

            summary: "Review of germanium as an enabling material for silicon photonics and infrared optoelectronics."

        },

        {

            title: "Germanium-on-Silicon Photonic Devices",

            year: 2013,

            doi: "10.1038/nphoton.2013.30",

            type: "Review",

            summary: "Overview of Ge-on-Si photodetectors, modulators, and integrated photonic technologies."

        }

    ]

};