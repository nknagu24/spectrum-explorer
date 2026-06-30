import type { Material } from "../../../types/material";

export const MAPBI3: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Methylammonium Lead Iodide",

    symbol: "MAPbI₃",

    formula: "CH₃NH₃PbI₃",

    category: "perovskite",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Tetragonal (Room Temperature)",

    bandgapEV: 1.55,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Thin Film",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {

                name: "Fundamental",

                energyEV: 1.63,

            },

        ],

        plPeakEV: 1.60,

        absorptionEdgeEV: 1.55,

        ramanPeaks: [

            {

                mode: "Pb–I Stretch",

                shiftCM1: 110,

            },

            {

                mode: "Organic Cation",

                shiftCM1: 250,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.90,

        workFunctionEV: 4.70,

        carrierMobility: "10–60 cm²/V·s",

        excitonBindingEnergyMEV: 15,

        spinOrbitSplittingMEV: 1000,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Tetragonal",

        spaceGroup: "I4/mcm",

        latticeConstant: "a ≈ 8.85 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "MAPbI₃ transformed the field of photovoltaics by enabling solar-cell efficiencies to rise from below 4% to over 25% within little more than a decade.",

        "Its exceptional light absorption, long carrier diffusion lengths, and defect tolerance make it attractive for solar cells, LEDs, lasers, and photodetectors.",

        "Unlike conventional semiconductors, high-quality MAPbI₃ films can be fabricated using low-temperature solution processing, greatly reducing manufacturing costs."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Organometal Halide Perovskites as Visible-Light Sensitizers for Photovoltaic Cells",

            year: 2009,

            doi: "10.1021/ja809598r",

            type: "Landmark",

            summary: "First demonstration of organometal halide perovskites in solar cells."

        },

        {

            title: "Perovskite Solar Cells",

            year: 2014,

            doi: "10.1038/nphoton.2014.134",

            type: "Review",

            summary: "Seminal review describing the rapid rise of perovskite photovoltaics."

        }

    ]

};