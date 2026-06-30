import type { Material } from "../../../types/material";

export const WS2: Material = {

    /* ======================================================
       General
       ====================================================== */

    name: "Tungsten Disulfide",

    symbol: "WS₂",

    formula: "WS₂",

    category: "tmd",

    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: "2H (Hexagonal)",

    bandgapEV: 2.02,

    bandgapType: "Direct",

    /* ======================================================
       Reference
       ====================================================== */

    propertyBasis: "Monolayer",

    /* ======================================================
       Optical Properties
   
   
       ====================================================== */

    labelLevel: 1,

    opticalProperties: {

        excitonicTransitions: [

            {
                name: "A",
                energyEV: 2.02,
            },

            {
                name: "B",
                energyEV: 2.39,
            },

        ],

        plPeakEV: 2.02,

        absorptionEdgeEV: 2.03,

        ramanPeaks: [

            {
                mode: "E′",
                shiftCM1: 356,
            },

            {
                mode: "A₁′",
                shiftCM1: 417,
            },

        ],

    },

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV: 3.75,

        workFunctionEV: 4.55,

        carrierMobility: "10–200 cm²/V·s",

        excitonBindingEnergyMEV: 700,

        spinOrbitSplittingMEV: 430,

    },

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem: "Hexagonal",

        spaceGroup: "P6₃/mmc",

        latticeConstant: "a = 3.153 Å",

        monolayerThicknessNM: 0.62,

    },

    /* ======================================================
       Why It Matters
       ====================================================== */

    whyItMatters: [

        "WS₂ exhibits one of the largest valence-band spin-orbit splittings among semiconducting TMDs, making it an excellent platform for valleytronic and spintronic studies.",

        "Its strong excitonic emission and large oscillator strength make it attractive for photodetectors, LEDs, nanolasers, and other optoelectronic devices.",

        "WS₂ is widely integrated into van der Waals heterostructures, enabling studies of interlayer excitons, ultrafast charge transfer, and moiré physics."

    ],

    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: [

        {

            title: "Valley polarization in MoS₂ monolayers by optical pumping",

            year: 2012,

            doi: "10.1038/nphys2276",

            type: "Landmark",

            summary: "Introduced valley-selective optical excitation in monolayer transition metal dichalcogenides."

        },

        {

            title: "Control of Valley Polarization in Monolayer MoS₂ by Optical Helicity",

            year: 2012,

            doi: "10.1038/nnano.2012.96",

            type: "Landmark",

            summary: "Demonstrated optical control of valley polarization in monolayer TMDs."

        },

        {

            title: "Electronics and Optoelectronics of Two-Dimensional Transition Metal Dichalcogenides",

            year: 2012,

            doi: "10.1038/nnano.2012.193",

            type: "Review",

            summary: "Comprehensive review of electronic and optical properties of semiconducting TMDs."

        }

    ]

};