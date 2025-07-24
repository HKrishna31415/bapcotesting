
import { ChartDataPoint, StoryStage } from './types';

export const STORY_STAGES: StoryStage[] = [
  {
    title: 'The Building Blocks: E0 vs. E100',
    description:
      "Pure gasoline (E0) is quite volatile, with a high Reid Vapor Pressure (RVP) of over 8 psi. In contrast, pure ethanol (E100) has a very low RVP, making it far less evaporative on its own.",
    visual: 'chart',
    highlightKey: 'E0',
  },
  {
    title: 'The Surprising Spike: The E15 Azeotrope',
    description:
      "Blending a small amount of ethanol (up to 15%) creates a non-linear surprise. The formation of an azeotrope actually increases the blend's RVP beyond that of pure gasoline, making it evaporate even faster.",
    visual: 'chart',
    highlightKey: 'E15',
  },
  {
    title: 'The Trend Reverses: Higher Ethanol Blends',
    description:
      "As ethanol content continues to rise to E20 (common in India) and beyond to E50, the blend's vapor pressure begins to drop, eventually falling below the level of pure E0 gasoline.",
    visual: 'chart',
    highlightKey: 'E50',
  },
  {
    title: 'Real-World Systems & A Minor Risk',
    description:
      "Our technology effectively handles this range of fuels. However, if distinct blends (E0, E20, E50) are stored in connected tanks, there's a mild risk of contamination that could require separate vapor recovery units.",
    visual: 'diagram',
  },
  {
    title: 'The Financial Case for Recovery',
    description:
      "While higher ethanol blends like E50 evaporate less than the volatile E15 peak, the reduction is not substantial enough to negatively impact the financial viability of our recovery system. The returns remain strong.",
    visual: 'chart',
    highlightKey: 'E50',
  },
  {
    title: 'Future Outlook: The E85 Threshold',
    description:
      "The primary concern for significantly reduced recovery rates arises only with very high blends like E85. Even then, the financial case remains valid, though returns are smaller than with E0 or E50 blends.",
    visual: 'chart',
    highlightKey: 'E85',
  },
];


export const RVP_CHART_DATA: ChartDataPoint[] = [
    { blend: 'E0', rvp: 8.5, label: 'E0' },
    { blend: 'E15', rvp: 9.5, label: 'E15' },
    { blend: 'E20', rvp: 9.2, label: 'E20' },
    { blend: 'E50', rvp: 7.0, label: 'E50' },
    { blend: 'E85', rvp: 4.0, label: 'E85' },
    { blend: 'E100', rvp: 2.3, label: 'E100 Ethanol' },
];
