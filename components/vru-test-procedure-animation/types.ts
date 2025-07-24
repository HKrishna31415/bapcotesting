
import React from 'react';

export interface Stage {
  id: string;
  phase: string;
  title: string;
  duration: string;
  procedure: string[];
  purpose?: string;
  deliverable?: string;
  stressTest?: string;
  monitoring?: string;
  AnimationComponent: React.FC;
}
