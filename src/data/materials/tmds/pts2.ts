import type { Material } from "../../../types/material";

export const PTS2: Material = {

    name: "Platinum Disulfide",

    symbol: "PtS₂",

    formula: "PtS₂",

    category: "tmd",

    crystalStructure: "1T (Trigonal)",

    bandgapEV: 1.60,

    bandgapType: "Indirect",

    propertyBasis: "Monolayer",

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 1.60,
            },

        ],

        plPeakEV: 1.60,

        absorptionEdgeEV: 1.62,

        ramanPeaks: [

            {
                mode: "Eg",
                shiftCM1: 305,
            },

            {
                mode: "A1g",
                shiftCM1: 335,
            },

        ],

    },

    electronicProperties: {

        electronAffinityEV: 4.60,

        workFunctionEV: 5.50,

        carrierMobility: "10–150 cm²/V·s",

        excitonBindingEnergyMEV: 250,

        spinOrbitSplittingMEV: 180,

    },

    structuralProperties: {

        crystalSystem: "Trigonal",

        spaceGroup: "P-3m1",

        latticeConstant: "a = 3.53 Å",

        monolayerThicknessNM: 0.51,

    },

    whyItMatters: [

        "PtS₂ combines environmental stability with a moderate bandgap.",

        "It is promising for photodetectors and gas sensing.",

        "The material shows strong thickness-dependent electronic properties."

    ],

    keyPapers: [

        {

            title: "Layer-dependent Electronic Structure of PtS₂",

            year: 2017,

            doi: "10.1021/acs.nanolett.7b01080",

            type: "Landmark",

            summary: "Demonstrated thickness-dependent electronic properties of PtS₂."

        }

    ]

};