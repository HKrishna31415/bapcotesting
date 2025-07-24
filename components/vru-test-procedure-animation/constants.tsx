import { Stage } from './types';
import Phase1Animation from './components/animations/Phase1Animation';
import Phase2Animation from './components/animations/Phase2Animation';
import Phase3AAnimation from './components/animations/Phase3AAnimation';
import Phase3BAnimation from './components/animations/Phase3BAnimation';
import Phase3CAnimation from './components/animations/Phase3CAnimation';

export const STAGES: Stage[] = [
  {
    id: 'phase1',
    phase: 'Phase 1',
    duration: '7 Days',
    title: 'Pre-Modification Baseline (Current State)',
    procedure: [
      'Verify system integrity (leak-free) via CARB tests TP-201.1 & TP-201.3.',
      'Continuously log UST pressure and measure VOC mass emissions from each individual vent pipe.',
      'Conduct initial Air Quality (BTEX) and Odor Panel assessments.',
    ],
    deliverable: 'A baseline for total VOC mass emitted (kg/day) for the current, un-manifolded system.',
    AnimationComponent: Phase1Animation,
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    duration: 'Ongoing',
    title: 'Establish New Baseline: Common Vapor Space',
    procedure: [
      'Manifold tanks to a common vent stack.',
      'Re-run Static Pressure Integrity Test (TP-201.1).',
      'Log pressure and measure VOC emissions from the single vent stack.'
    ],
    deliverable: 'A new, higher baseline for VOC emissions (kg/day), demonstrating the amplified diurnal breathing effect. This is the true "before" state for the VRU.',
    AnimationComponent: Phase2Animation
  },
  {
    id: 'phase3a',
    phase: 'Sub-Phase 3A',
    duration: '7 Days',
    title: 'System Stabilization & "Neat" Fuel Sample Collection',
    procedure: [
      'VRU runs continuously to establish stable pressure equilibrium.',
      'All recovered gasoline is diverted to a temporary external tank.'
    ],
    purpose: 'To collect a "neat" (unblended) sample of the recovered liquid for comprehensive laboratory analysis.',
    AnimationComponent: Phase3AAnimation
  },
  {
    id: 'phase3b',
    phase: 'Sub-Phase 3B',
    duration: '14 Days',
    title: 'High-Frequency Alternating Interval Test',
    procedure: [
      'Operate on a repeating 48-hour cycle for two weeks.',
      'Cycle: 24 Hours VRU ON (normal automated control).',
      'Cycle: 24 Hours VRU OFF (reverts to passive venting).'
    ],
    purpose: 'Provides directly paired "On" and "Off" days, enabling a highly accurate, irrefutable comparison by minimizing the influence of weather variability.',
    AnimationComponent: Phase3BAnimation
  },
  {
    id: 'phase3c',
    phase: 'Sub-Phase 3C',
    duration: '9 Days',
    title: 'Continuous Operation & Peak Load Stress Test',
    procedure: [
      'Return VRU to continuous operation.',
      'Connect recovered gasoline return line to the main UST.'
    ],
    stressTest: 'A planned tanker fuel delivery is conducted with the Stage I vapor return hose intentionally disconnected, forcing the VRU to process 100% of the high-volume vapor displacement.',
    monitoring: 'Weekly samples are drawn from a dispenser to confirm the final blended product remains within BAPCO specifications.',
    purpose: 'To test the unit\'s peak processing capacity and validate the quality of the final blended fuel in a real-world operational scenario.',
    AnimationComponent: Phase3CAnimation
  }
];
