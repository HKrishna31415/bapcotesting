
export interface ChartDataPoint {
  blend: string;
  rvp: number;
  label: string;
}

export interface StoryStage {
  title: string;
  description: string;
  visual: 'chart' | 'diagram';
  highlightKey?: string;
}
