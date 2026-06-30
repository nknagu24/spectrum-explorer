import type { Material } from "../../../types/material";

export const ZRS2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Zirconium Disulfide",

    symbol: "ZrS₂",

    formula: "ZrS₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 1.70,

    bandgapType: "Indirect",

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
                energyEV: 1.70,
            }

        ],

        plPeakEV: 1.70,

        absorptionEdgeEV: 1.72,

        ramanPeaks: [

            {
                mode: "Eg",
                shiftCM1: 248,
            },

            {
                mode: "A1g",
                shiftCM1: 335,
            }

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.00,

        workFunctionEV: 5.10,

        carrierMobility: "100–1200 cm²/V·s",

        excitonBindingEnergyMEV: 320,

        spinOrbitSplittingMEV: 90,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.66 Å",

        monolayerThicknessNM: 0.59,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "ZrS₂ combines an indirect bandgap with high predicted carrier mobility, making it attractive for low-power electronic devices.",

        "Its layered structure enables mechanical exfoliation and integration into van der Waals heterostructures.",

        "ZrS₂ is actively investigated for photodetectors, photocatalysis, and flexible electronic applications."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Single-layer HfS₂ and ZrS₂ as promising channel materials for field-effect transistors",

            year: 2015,

            doi: "10.1039/C5NR01052G",

            type: "Landmark",

            summary: "Predicted excellent transport properties of monolayer group-IV dichalcogenides."

        },

        {

            title: "Two-Dimensional Transition Metal Dichalcogenides",

            year: 2015,

            doi: "10.1021/cr500354c",

            type: "Review",

            summary: "Comprehensive review of layered transition metal dichalcogenides."

        },

        {

            title: "Electronic and Optical Properties of Two-Dimensional Group-IV Transition Metal Dichalcogenides",

            year: 2016,

            doi: "10.1039/C6NR00891A",

            type: "Review",

            summary: "Review of electronic structure and optoelectronic properties of Hf- and Zr-based dichalcogenides."

        }

    ]

};