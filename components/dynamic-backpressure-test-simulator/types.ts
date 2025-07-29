
export enum TestStatus {
    Idle = 'Idle',
    Running = 'Running',
    Passed = 'Passed',
    Failed = 'Failed',
}

export interface DataPoint {
    time: number;
    pressure: number;
}

export interface FlowRateOption {
    label: string;
    value: number;
}
