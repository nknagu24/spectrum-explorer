import type { Material } from "../../../types/material";

export const HFS2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Hafnium Disulfide",

    symbol: "HfS₂",

    formula: "HfS₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 2.00,

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
                energyEV: 2.00,
            }

        ],

        plPeakEV: 2.00,

        absorptionEdgeEV: 2.03,

        ramanPeaks: [

            {
                mode: "Eg",
                shiftCM1: 266,
            },

            {
                mode: "A1g",
                shiftCM1: 337,
            }

        ]

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.0,

        workFunctionEV: 5.2,

        carrierMobility: "100–1800 cm²/V·s",

        excitonBindingEnergyMEV: 300,

        spinOrbitSplittingMEV: 120,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.63 Å",

        monolayerThicknessNM: 0.59,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "HfS₂ exhibits one of the highest predicted carrier mobilities among layered semiconducting TMDs, making it attractive for high-performance field-effect transistors.",

        "Its indirect bandgap and broad spectral absorption make it promising for photodetectors and photovoltaic devices.",

        "Compared with MoS₂, HfS₂ offers a different electronic structure while retaining excellent mechanical flexibility for two-dimensional electronics."

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

            summary: "Predicted excellent transport properties of monolayer HfS₂ for electronic devices."

        },

        {

            title: "High-Mobility Few-Layer HfS₂ Transistors",

            year: 2016,

            doi: "10.1021/acs.nanolett.6b00397",

            type: "Landmark",

            summary: "Experimental demonstration of HfS₂-based field-effect transistors."

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