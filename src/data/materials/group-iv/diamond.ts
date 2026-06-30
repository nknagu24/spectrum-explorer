import type { Material } from "../../../types/material";

export const DIAMOND: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Diamond",

    symbol: "Diamond",

    formula: "C",

    category: "group-iv",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Diamond Cubic",

    bandgapEV: 5.47,

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

                energyEV: 5.47,

            },

        ],

        plPeakEV: 5.47,

        absorptionEdgeEV: 5.47,

        ramanPeaks: [

            {

                mode: "First-order Optical Phonon",

                shiftCM1: 1332,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 0.35,

        workFunctionEV: 5.00,

        carrierMobility: "2200 cm²/V·s (electrons), 1600 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 80,

        spinOrbitSplittingMEV: 13,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "Fd-3m",

        latticeConstant: "a = 3.567 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "Diamond has the highest known thermal conductivity of any bulk material, making it invaluable for cooling high-power electronic and photonic devices.",

        "Nitrogen-vacancy (NV) centers in diamond are among the world's leading solid-state quantum systems for sensing, quantum communication, and quantum computing.",

        "Its extreme hardness, wide bandgap, radiation resistance, and optical transparency make diamond attractive for high-power electronics, UV optics, and harsh-environment devices."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Room-Temperature Quantum Bit Memory Exceeding One Second",

            year: 2013,

            doi: "10.1126/science.1231675",

            type: "Landmark",

            summary: "Demonstrated exceptionally long quantum coherence times in diamond NV centers."

        },

        {

            title: "Quantum Technologies with Optically Interfaced Solid-State Spins",

            year: 2013,

            doi: "10.1038/nphoton.2013.71",

            type: "Review",

            summary: "Comprehensive review of diamond NV centers and related quantum technologies."

        }

    ]

};