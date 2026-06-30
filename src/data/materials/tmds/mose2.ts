import type { Material } from "../../../types/material";

export const MOSE2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Molybdenum Diselenide",

    symbol: "MoSe₂",

    formula: "MoSe₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "2H (Hexagonal)",

    bandgapEV: 1.57,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Monolayer",


    labelLevel: 1,

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 1.57,
            },

            {
                name: "B",
                energyEV: 1.75,
            },

        ],

        plPeakEV: 1.57,

        absorptionEdgeEV: 1.58,

        ramanPeaks: [

            {
                mode: "E₂g¹",
                shiftCM1: 287,
            },

            {
                mode: "A₁g",
                shiftCM1: 240,
            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.90,

        workFunctionEV: 4.60,

        carrierMobility: "10–150 cm²/V·s",

        excitonBindingEnergyMEV: 550,

        spinOrbitSplittingMEV: 180,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃/mmc",

        latticeConstant: "a = 3.288 Å",

        monolayerThicknessNM: 0.65,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "MoSe₂ possesses narrow excitonic linewidths, making it an excellent platform for studying exciton dynamics and coherent light–matter interactions.",

        "Its band alignment with WSe₂ enables efficient interlayer exciton formation in van der Waals heterostructures.",

        "MoSe₂ is extensively used in ultrafast spectroscopy, valley dynamics, and excitonic transport studies."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Atomically Thin MoSe₂: A New Direct-Gap Semiconductor",

            year: 2014,

            doi: "10.1038/nnano.2014.14",

            type: "Landmark",

            summary: "Demonstrated the direct bandgap nature and strong photoluminescence of monolayer MoSe₂."

        },

        {

            title: "Electronics and Optoelectronics of Two-Dimensional Transition Metal Dichalcogenides",

            year: 2012,

            doi: "10.1038/nnano.2012.193",

            type: "Review",

            summary: "Comprehensive review of semiconducting transition metal dichalcogenides."

        },

        {

            title: "Coupled Spin and Valley Physics in Monolayers of MoS₂ and Other Group-VI Dichalcogenides",

            year: 2012,

            doi: "10.1103/PhysRevLett.108.196802",

            type: "Landmark",

            summary: "Established the theoretical basis for spin-valley coupling in monolayer TMDs."

        }

    ]

};