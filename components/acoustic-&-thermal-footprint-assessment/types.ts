
export interface AcousticData {
    name: string;
    dBA: number;
    limit: number;
}

export interface ThermalDataPoint {
    time: number;
    chassis: number;
    cooling: number;
    air: number;
}

export interface ShadeImpactData {
    tempReduction: number;
    powerReduction: number;
    efficiencyGain: number;
}
