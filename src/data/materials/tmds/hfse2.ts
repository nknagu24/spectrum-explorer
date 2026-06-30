import type { Material } from "../../../types/material";

export const HFSE2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Hafnium Diselenide",

    symbol: "HfSe₂",

    formula: "HfSe₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 1.13,

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
                energyEV: 1.13,
            }

        ],

        plPeakEV: 1.13,

        absorptionEdgeEV: 1.15,

        ramanPeaks: [

            {
                mode: "Eg",
                shiftCM1: 180,
            },

            {
                mode: "A1g",
                shiftCM1: 208,
            }

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.10,

        workFunctionEV: 5.30,

        carrierMobility: "100–1500 cm²/V·s",

        excitonBindingEnergyMEV: 280,

        spinOrbitSplittingMEV: 180,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.74 Å",

        monolayerThicknessNM: 0.62,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "HfSe₂ possesses a relatively small indirect bandgap, enabling optical absorption extending into the near-infrared.",

        "Its high predicted carrier mobility makes it an attractive channel material for next-generation field-effect transistors.",

        "HfSe₂ is actively investigated for photodetectors, flexible electronics, and van der Waals heterostructures."

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

            summary: "Theoretical prediction of excellent transport properties in group-IV transition metal dichalcogenides."

        },

        {

            title: "Layered Transition Metal Dichalcogenides: Promising Near-Infrared Materials",

            year: 2017,

            doi: "10.1002/adfm.201701054",

            type: "Review",

            summary: "Review of electronic and optical properties of layered Hf- and Zr-based dichalcogenides."

        },

        {

            title: "Two-Dimensional Transition Metal Dichalcogenides",

            year: 2015,

            doi: "10.1021/cr500354c",

            type: "Review",

            summary: "Comprehensive review of layered transition metal dichalcogenides."

        }

    ]

};