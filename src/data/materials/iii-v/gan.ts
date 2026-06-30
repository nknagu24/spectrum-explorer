import type { Material } from "../../../types/material";

export const GAN: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Gallium Nitride",

    symbol: "GaN",

    formula: "GaN",

    category: "iii-v",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "Wurtzite (Hexagonal)",

    bandgapEV: 3.40,

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

                name: "A",

                energyEV: 3.48,

            },

            {

                name: "B",

                energyEV: 3.50,

            },

            {

                name: "C",

                energyEV: 3.52,

            },

        ],

        plPeakEV: 3.40,

        absorptionEdgeEV: 3.40,

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

        workFunctionEV: 4.20,

        carrierMobility: "900–2000 cm²/V·s",

        excitonBindingEnergyMEV: 26,

        spinOrbitSplittingMEV: 17,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃mc",

        latticeConstant: "a = 3.189 Å, c = 5.185 Å",

        monolayerThicknessNM: 0,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "GaN enabled efficient blue and white LEDs, leading to solid-state lighting and the 2014 Nobel Prize in Physics.",

        "Its wide bandgap, high breakdown field, and excellent thermal stability make it the material of choice for fast chargers, electric vehicles, RF amplifiers, and power electronics.",

        "GaN is widely used in UV photodetectors, laser diodes, high-electron-mobility transistors (HEMTs), and next-generation communication systems."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "The Blue Laser Diode",

            year: 1997,

            doi: "10.1109/3.618699",

            type: "Landmark",

            summary: "Overview of the development of GaN-based blue laser diodes."

        },

        {

            title: "Nobel Lecture: Bright and Energy-Saving White Light Sources",

            year: 2015,

            doi: "10.1103/RevModPhys.87.1139",

            type: "Landmark",

            summary: "Shuji Nakamura's Nobel lecture describing the development of GaN blue LEDs."

        },

        {

            title: "Gallium Nitride (GaN) I",

            year: 1998,

            doi: "10.1007/bfb0109139",

            type: "Review",

            summary: "Comprehensive reference on the structural, optical, and electronic properties of GaN."

        }

    ]

};