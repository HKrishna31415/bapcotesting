
export enum AnimationStep {
  IDLE,
  SAMPLING,
  TESTING_WATER,
  TESTING_PARTICULATES,
  TESTING_PHASE_SEPARATION,
  ANALYZING_ASTM,
  GENERATING_REPORT,
  TRANSFERRING_FUEL,
  COMPLETED,
  FAILED,
}

export enum TestStatus {
  PENDING = 'PENDING',
  TESTING = 'TESTING',
  PASS = 'PASS',
  FAIL = 'FAIL',
}

export interface TestResult {
  id: string;
  name: string;
  status: TestStatus;
  description: string;
}
