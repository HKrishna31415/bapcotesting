
import React from 'react';

export interface OdorScaleLevel {
  level: number;
  name: string;
  description: string;
  hedonicToneRange: string;
}

export interface SceneProps {
  isActive: boolean;
}

export enum Scene {
  Introduction,
  Scale,
  Locations,
  Procedure,
  Analysis,
  Conclusion,
}

export interface SceneConfig {
  id: Scene;
  title: string;
  component: React.FC<SceneProps>;
}
