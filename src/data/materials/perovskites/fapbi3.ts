import type { Material } from "../../../types/material";

export const FAPBI3: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Formamidinium Lead Iodide",

    symbol: "FAPbI₃",

    formula: "HC(NH₂)₂PbI₃",

    category: "perovskite",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Cubic (α-Phase)",

    bandgapEV: 1.48,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Bulk Thin Film",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {

                name: "Fundamental",

                energyEV: 1.55,

            },

        ],

        plPeakEV: 1.52,

        absorptionEdgeEV: 1.48,

        ramanPeaks: [

            {

                mode: "Pb–I Stretch",

                shiftCM1: 108,

            },

            {

                mode: "Organic Cation",

                shiftCM1: 240,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.00,

        workFunctionEV: 4.75,

        carrierMobility: "20–80 cm²/V·s",

        excitonBindingEnergyMEV: 12,

        spinOrbitSplittingMEV: 1000,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "Pm-3m",

        latticeConstant: "a ≈ 6.36 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "FAPbI₃ has become the benchmark absorber for high-efficiency perovskite solar cells, with certified efficiencies exceeding 26%.",

        "Compared with MAPbI₃, FAPbI₃ offers a smaller bandgap, broader solar absorption, and improved thermal stability.",

        "FAPbI₃ is widely investigated for tandem solar cells, LEDs, lasers, and high-performance photodetectors."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Formamidinium Lead Halide Perovskite: A Promising Material for High-Efficiency Solar Cells",

            year: 2014,

            doi: "10.1021/ja506215x",

            type: "Landmark",

            summary: "Introduced FAPbI₃ as a superior alternative to MAPbI₃ for photovoltaic applications."

        },

        {

            title: "Perovskite Solar Cells: An Integrated Hybrid Lifecycle Assessment",

            year: 2017,

            doi: "10.1038/natrevmats.2017.9",

            type: "Review",

            summary: "Comprehensive review of perovskite materials, including FAPbI₃, for next-generation photovoltaics."

        }

    ]

};