
import { type FlowRateOption } from './types';

// UNIT CONVERSION HELPERS
const GPM_TO_LPM = 3.78541;
export const INH2O_TO_KPA = 0.249089;

// IMPERIAL CONSTANTS (as base)
export const MAX_ALLOWABLE_PRESSURE_IMPERIAL: number = 2.0; // inH₂O

// DUAL-UNIT CONSTANTS
export const FLOW_RATE_OPTIONS: FlowRateOption[] = [
    { label: `Low (4 / ${Math.round(4 * GPM_TO_LPM)} LPM)`, value: 4 },
    { label: `Medium (7 / ${Math.round(7 * GPM_TO_LPM)} LPM)`, value: 7 },
    { label: `High (10 / ${Math.round(10 * GPM_TO_LPM)} LPM)`, value: 10 },
];

// SHARED CONSTANTS
export const TEST_DURATION_MS: number = 20000; // 20 seconds
