export enum AnimationStep {
  Initial,
  Setup,
  Idle,
  Normal,
  Peak,
  Analysis,
}

export type PowerData = {
  idle: number;
  normal: number;
  peak: number;
};

export type KpiData = {
  energyIntensity: number;
  dailyConsumption: number;
  monthlyCost: number;
  peakIdleRatio: number;
  annualCost: number;
  gasolineRecovered: number;
};