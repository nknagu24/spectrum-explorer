import type { Material } from "../../../types/material";

export const SIC4H: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Silicon Carbide (4H)",

    symbol: "4H-SiC",

    formula: "SiC",

    category: "group-iv",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Hexagonal (4H Polytype)",

    bandgapEV: 3.26,

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

                energyEV: 3.26,

            },

        ],

        plPeakEV: 3.26,

        absorptionEdgeEV: 3.26,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 776,

            },

            {

                mode: "LO",

                shiftCM1: 964,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.70,

        workFunctionEV: 4.00,

        carrierMobility: "900 cm²/V·s (electrons), 120 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 80,

        spinOrbitSplittingMEV: 10,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃mc",

        latticeConstant: "a = 3.073 Å, c = 10.053 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "4H-SiC is the dominant semiconductor for modern high-power electronics because it withstands much higher voltages and temperatures than silicon.",

        "Its excellent thermal conductivity and wide bandgap enable efficient power converters used in electric vehicles, renewable energy systems, and industrial motor drives.",

        "4H-SiC is also used in high-frequency RF electronics, radiation detectors, and harsh-environment sensors."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Silicon Carbide Power Devices",

            year: 2014,

            doi: "10.1038/nmat4144",

            type: "Review",

            summary: "Comprehensive review of SiC materials and power electronic devices."

        },

        {

            title: "Recent Progress in Silicon Carbide Power Devices",

            year: 2018,

            doi: "10.1016/j.mattod.2018.11.003",

            type: "Review",

            summary: "Overview of recent developments in SiC technology for power electronics."

        }

    ]

};