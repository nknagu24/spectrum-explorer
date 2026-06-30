import type { Material } from "../../../types/material";

export const SI: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Silicon",

    symbol: "Si",

    formula: "Si",

    category: "group-iv",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Diamond Cubic",

    bandgapEV: 1.12,

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

                energyEV: 1.12,

            },

        ],

        plPeakEV: 1.10,

        absorptionEdgeEV: 1.12,

        ramanPeaks: [

            {

                mode: "First-order Optical Phonon",

                shiftCM1: 520,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.05,

        workFunctionEV: 4.85,

        carrierMobility: "1400 cm²/V·s (electrons), 450 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 15,

        spinOrbitSplittingMEV: 44,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "Fd-3m",

        latticeConstant: "a = 5.431 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "Silicon is the foundation of modern electronics, powering nearly every computer, smartphone, and integrated circuit manufactured today.",

        "Although it has an indirect bandgap, silicon dominates the semiconductor industry because of its abundance, mature fabrication technology, and excellent native oxide (SiO₂).",

        "Silicon is also the leading material for photovoltaic solar cells, MEMS sensors, integrated photonics, and quantum computing research."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "The Band Structure of Silicon",

            year: 1955,

            doi: "10.1103/PhysRev.97.869",

            type: "Landmark",

            summary: "Classic study establishing the electronic band structure of silicon."

        },

        {

            title: "Silicon Photonics",

            year: 2006,

            doi: "10.1038/nature05387",

            type: "Review",

            summary: "Seminal review describing the emergence of silicon photonics for optical communications."

        }

    ]

};