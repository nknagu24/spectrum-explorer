import { TMDS } from "./tmds";

import { PEROVSKITES } from "./perovskites";

import { SEMICONDUCTORS } from "./semiconductors";

import { OTHER2D } from "./other2d";

import type { Material } from "../../types/material";

export const MATERIALS: Material[] = [

    ...TMDS,

    ...PEROVSKITES,

    ...SEMICONDUCTORS,

    ...OTHER2D,

];