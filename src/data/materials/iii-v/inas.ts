import type { Material } from "../../../types/material";

export const INAS: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Indium Arsenide",

    symbol: "InAs",

    formula: "InAs",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Zinc Blende (Cubic)",

    bandgapEV: 0.36,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Bulk",

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: [

            {

                name: "Fundamental",

                energyEV: 0.36,

            },

        ],

        plPeakEV: 0.36,

        absorptionEdgeEV: 0.36,

        ramanPeaks: [

            {

                mode: "TO",

                shiftCM1: 217,

            },

            {

                mode: "LO",

                shiftCM1: 238,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.90,

        workFunctionEV: 4.90,

        carrierMobility: "30000 cm²/V·s (electrons), 460 cm²/V·s (holes)",

        excitonBindingEnergyMEV: 1,

        spinOrbitSplittingMEV: 380,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Cubic",

        spaceGroup: "F-43m",

        latticeConstant: "a = 6.058 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "InAs has one of the highest electron mobilities among III–V semiconductors, making it ideal for ultrafast electronic devices.",

        "Its narrow direct bandgap enables infrared photodetectors, thermal imaging systems, and quantum cascade devices operating in the mid-infrared.",

        "InAs nanowires and quantum dots are widely investigated for quantum computing, spintronics, and topological quantum materials."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Indium Arsenide (InAs) Revisited for High-Speed Electronics",

            year: 2010,

            doi: "10.1038/nnano.2010.191",

            type: "Landmark",

            summary: "Highlighted the exceptional transport properties of InAs for future nanoelectronic devices."

        },

        {

            title: "III–V Compound Semiconductors for Infrared Detection",

            year: 2016,

            doi: "10.1038/nphoton.2016.12",

            type: "Review",

            summary: "Review of III–V semiconductors, including InAs, for infrared photonics."

        }

    ]

};