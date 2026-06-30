import type { Material } from "../../../types/material";

export const SIC3C: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Silicon Carbide (3C)",

    symbol: "3C-SiC",

    formula: "SiC",

    category: "group-iv",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 2.36,

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

                energyEV: 2.36,

            },

        ],

        plPeakEV: 2.36,

        absorptionEdgeEV: 2.36,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 796,

            },

            {

                mode: "LO",

                shiftCM1: 973,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.70,

        workFunctionEV: 4.10,

        carrierMobility: "900 cm²/V·s (electrons), 120 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 50,

        spinOrbitSplittingMEV: 10,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 4.360 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "3C-SiC is the only cubic polytype of silicon carbide and can be grown directly on silicon, making it attractive for integrating wide-bandgap devices with conventional silicon technology.",

        "Its excellent mechanical strength and chemical stability have made it a popular material for MEMS sensors, high-temperature electronics, and harsh-environment devices.",

        "3C-SiC is also being explored for quantum technologies through defect centers that exhibit room-temperature spin coherence."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Silicon Carbide: A Review of Fundamental Questions and Applications",

            year: 2010,

            doi: "10.1088/0268-1242/25/6/063001",

            type: "Review",

            summary: "Comprehensive review of SiC polytypes, growth, properties, and applications."

        },

        {

            title: "Quantum Spin Centers in Silicon Carbide",

            year: 2016,

            doi: "10.1038/nmat4607",

            type: "Landmark",

            summary: "Established silicon carbide as a promising platform for solid-state quantum technologies."

        }

    ]

};