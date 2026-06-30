import type { Material } from "../../../types/material";

export const PTSE2: Material = {

    name: "Platinum Diselenide",

    symbol: "PtSe₂",

    formula: "PtSe₂",

    category: "tmd",

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 1.20,

    bandgapType: "Indirect",

    propertyBasis: "Monolayer",

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
                shiftCM1: 175,
            },

            {
                mode: "A1g",
                shiftCM1: 205,
            },

        ],

    },

    electronicProperties: {

        electronAffinityEV: 4.80,

        workFunctionEV: 5.60,

        carrierMobility: "20–250 cm²/V·s",

        excitonBindingEnergyMEV: 220,

        spinOrbitSplittingMEV: 250,

    },

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.73 Å",

        monolayerThicknessNM: 0.52,

    },

    whyItMatters: [

        "Monolayer PtSe₂ is semiconducting, while thicker layers evolve into a semimetal, making it ideal for studying dimensionality-driven electronic transitions.",

        "PtSe₂ exhibits excellent air stability compared with many other layered semiconductors.",

        "Applications include photodetectors, flexible electronics, and strain sensors."

    ],

    keyPapers: [

        {

            title: "Epitaxial Growth of Semiconducting Monolayer PtSe₂",

            year: 2017,

            doi: "10.1038/nchem.2767",

            type: "Landmark",

            summary: "Demonstrated synthesis and semiconducting properties of monolayer PtSe₂."

        }

    ]

};