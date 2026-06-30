import type { Material } from "../../../types/material";

export const CSPBI3: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Cesium Lead Iodide",

    symbol: "CsPbI₃",

    formula: "CsPbI₃",

    category: "perovskite",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Cubic (Black α-Phase)",

    bandgapEV: 1.73,

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

                energyEV: 1.78,

            },

        ],

        plPeakEV: 1.76,

        absorptionEdgeEV: 1.73,

        ramanPeaks: [

            {

                mode: "Pb–I Stretch",

                shiftCM1: 60,

            },

            {

                mode: "Lattice Mode",

                shiftCM1: 108,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.95,

        workFunctionEV: 4.70,

        carrierMobility: "15–80 cm²/V·s",

        excitonBindingEnergyMEV: 25,

        spinOrbitSplittingMEV: 1200,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "Pm-3m",

        latticeConstant: "a ≈ 6.29 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "CsPbI₃ combines the excellent optoelectronic properties of lead-halide perovskites with improved thermal stability compared with hybrid organic-inorganic perovskites.",

        "Its bandgap is well suited for high-efficiency single-junction and tandem solar cells.",

        "CsPbI₃ is actively explored for photovoltaics, LEDs, photodetectors, and radiation detectors because of its strong light absorption and long carrier diffusion lengths."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Cesium Lead Halide Perovskite Solar Cells",

            year: 2015,

            doi: "10.1126/science.aac8120",

            type: "Landmark",

            summary: "Demonstrated efficient all-inorganic CsPbI₃ perovskite solar cells."

        },

        {

            title: "Inorganic Halide Perovskites for Optoelectronics",

            year: 2019,

            doi: "10.1038/s41578-019-0105-0",

            type: "Review",

            summary: "Comprehensive review of inorganic halide perovskites for photovoltaic and light-emitting applications."

        }

    ]

};