import type { Material } from "../../../types/material";

export const ZRSE2: Material = {

    name: "Zirconium Diselenide",

    symbol: "ZrSe₂",

    formula: "ZrSe₂",

    category: "tmd",

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 1.20,

    bandgapType: "Indirect",

    propertyBasis: "Monolayer",

    labelLevel: 1,



    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 1.20,
            },

        ],

        plPeakEV: 1.20,

        absorptionEdgeEV: 1.22,

        ramanPeaks: [

            {
                mode: "Eg",
                shiftCM1: 150,
            },

            {
                mode: "A1g",
                shiftCM1: 196,
            },

        ],

    },

    electronicProperties: {

        electronAffinityEV: 4.15,

        workFunctionEV: 5.20,

        carrierMobility: "100–1000 cm²/V·s",

        excitonBindingEnergyMEV: 280,

        spinOrbitSplittingMEV: 150,

    },

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.77 Å",

        monolayerThicknessNM: 0.62,

    },

    whyItMatters: [

        "ZrSe₂ possesses a narrow indirect bandgap suitable for near-infrared optoelectronics.",

        "Its layered structure enables integration into flexible electronics and van der Waals heterostructures.",

        "The material is actively explored for photodetection and photocatalysis."

    ],

    keyPapers: [

        {

            title: "Electronic and Optical Properties of Two-Dimensional Group-IV Transition Metal Dichalcogenides",

            year: 2016,

            doi: "10.1039/C6NR00891A",

            type: "Review",

            summary: "Review of Hf- and Zr-based layered semiconductors."

        }

    ]

};