import type { Material } from "../../../types/material";

export const INGAN: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Indium Gallium Nitride",

    symbol: "InGaN",

    formula: "InₓGa₁₋ₓN",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Wurtzite (Hexagonal)",

    bandgapEV: 2.50,

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

                energyEV: 2.50,

            },

        ],

        plPeakEV: 2.50,

        absorptionEdgeEV: 2.50,

        ramanPeaks: [

            {

                mode: "E₂(high)",

                shiftCM1: 568,

            },

            {

                mode: "A₁(LO)",

                shiftCM1: 734,

            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 4.10,

        workFunctionEV: 4.30,

        carrierMobility: "300–1000 cm²/V·s",

        excitonBindingEnergyMEV: 25,

        spinOrbitSplittingMEV: 15,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃mc",

        latticeConstant: "Composition dependent",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "InGaN is the active material in nearly all modern blue, green, and cyan LEDs, enabling solid-state lighting and full-color displays.",

        "Its composition-tunable direct bandgap allows emission to be engineered from the ultraviolet to the green spectral region.",

        "InGaN underpins applications ranging from smartphone displays and laser projectors to micro-LED technology and visible-light communication."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "High-Brightness InGaN Blue-Light-Emitting Diodes",

            year: 1994,

            doi: "10.1063/1.111527",

            type: "Landmark",

            summary: "Demonstrated high-brightness InGaN blue LEDs that revolutionized solid-state lighting."

        },

        {

            title: "III-Nitride Light-Emitting Diodes",

            year: 2013,

            doi: "10.1038/nphoton.2013.14",

            type: "Review",

            summary: "Comprehensive review of III-nitride LED materials, physics, and devices."

        }

    ]

};