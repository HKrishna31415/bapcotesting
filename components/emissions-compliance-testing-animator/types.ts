
import type { ReactNode } from 'react';

export interface Standard {
  title: string;
  subtitle: string;
  methodology: string;
  calculation: string;
  pros: string[];
  cons: string[];
  colorClass: string;
  animationComponent: ReactNode;
}
