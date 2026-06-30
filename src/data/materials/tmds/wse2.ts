import type { Material } from "../../../types/material";

export const WSE2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Tungsten Diselenide",

    symbol: "WSe₂",

    formula: "WSe₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "2H (Hexagonal)",

    bandgapEV: 1.65,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Monolayer",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 1.65,
            },

            {
                name: "B",
                energyEV: 2.05,
            },

        ],

        plPeakEV: 1.65,

        absorptionEdgeEV: 1.67,

        ramanPeaks: [

            {
                mode: "E′",
                shiftCM1: 250,
            },

            {
                mode: "A₁′",
                shiftCM1: 261,
            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.70,

        workFunctionEV: 4.45,

        carrierMobility: "20–250 cm²/V·s",

        excitonBindingEnergyMEV: 550,

        spinOrbitSplittingMEV: 460,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃/mmc",

        latticeConstant: "a = 3.282 Å",

        monolayerThicknessNM: 0.65,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "Monolayer WSe₂ exhibits exceptionally strong valley-selective optical transitions and long-lived spin-valley polarization.",

        "Its bright excitonic emission and electrically controllable excitons make it attractive for quantum photonics and optoelectronic devices.",

        "WSe₂ forms high-quality van der Waals heterostructures with MoSe₂, MoS₂, and hBN, enabling studies of interlayer excitons and moiré superlattices."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Coupled Spin and Valley Physics in Monolayers of MoS₂ and Other Group-VI Dichalcogenides",

            year: 2012,

            doi: "10.1103/PhysRevLett.108.196802",

            type: "Landmark",

            summary: "Established the theoretical framework for coupled spin and valley physics in monolayer TMDs."

        },

        {

            title: "Electronics and Optoelectronics of Two-Dimensional Transition Metal Dichalcogenides",

            year: 2012,

            doi: "10.1038/nnano.2012.193",

            type: "Review",

            summary: "Foundational review covering the electronic and optical properties of semiconducting TMDs."

        },

        {

            title: "Valley Coherence in Monolayer WSe₂",

            year: 2014,

            doi: "10.1038/nnano.2014.172",

            type: "Landmark",

            summary: "Demonstrated optical generation and detection of valley coherence in monolayer WSe₂."

        }

    ]

};