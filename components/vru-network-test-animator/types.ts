
export enum CableFault {
  Perfect = 'PERFECT',
  Open = 'OPEN',
  Short = 'SHORT',
  Crossed = 'CROSSED',
  Crossover = 'CROSSOVER',
}

export enum LinkStatus {
    Good,
    Slow,
    NoLink,
    Activity
}

export enum PingTestType {
  Success,
  Failure
}
