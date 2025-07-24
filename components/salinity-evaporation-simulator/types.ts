
export enum AnimationState {
  IDLE,
  EVAPORATING,
  CONDENSING,
  MIXING,
  DONE,
}

export interface VaporParticle {
  id: number;
  left: string;
}
