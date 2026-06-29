import { MODERN_LASERS } from "./modernLasers";
import { HISTORICAL_LASERS } from "./historicalLasers";
import { ULTRAFAST_LASERS } from "./ultrafastLasers";

import type { Laser } from "../../types/laser";

export const LASERS: Laser[] = [

    ...MODERN_LASERS,

    ...HISTORICAL_LASERS,

    ...ULTRAFAST_LASERS,

];