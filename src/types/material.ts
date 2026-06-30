import type { MaterialCategory } from "./materialCategory";

export interface KeyPaper {

    title: string;

    year: number;

    doi: string;

    type:
    | "Landmark"
    | "Review"
    | "Recent";

    summary: string;

}

export interface ExcitonicTransition {

    name: string;

    energyEV: number;

}

export interface RamanPeak {

    mode: string;

    shiftCM1: number;

}


export interface Application {

    title: string;

    description: string;

}

export interface Material {

    /* ======================================================
       General
       ====================================================== */

    name: string;

    symbol: string;

    formula: string;

    category: MaterialCategory;
    /* ======================================================
       Overview
       ====================================================== */

    crystalStructure: string;

    bandgapEV: number;

    bandgapType:
    | "Direct"
    | "Indirect";

    /* ======================================================
       Optical Properties
       ====================================================== */

    opticalProperties: {

        excitonicTransitions: ExcitonicTransition[];

        plPeakEV?: number;

        absorptionEdgeEV?: number;

        ramanPeaks: RamanPeak[];

    };

    /* ======================================================
       Electronic Properties
       ====================================================== */

    electronicProperties: {

        electronAffinityEV?: number;

        workFunctionEV?: number;

        carrierMobility?: string;

        excitonBindingEnergyMEV?: number;

        spinOrbitSplittingMEV?: number;

    };

    /* ======================================================
       Structural Properties
       ====================================================== */

    structuralProperties: {

        crystalSystem?: string;

        spaceGroup?: string;

        latticeConstant?: string;

        monolayerThicknessNM?: number;

    };


    /* ======================================================
       Literature
       ====================================================== */

    keyPapers: KeyPaper[];

    /* ======================================================
       Miscellaneous
       ====================================================== */
    whyItMatters: string[];

}