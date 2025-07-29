export interface MonitoringMethod {
  id: 'atg' | 'interstitial' | 'optical' | 'vapor' | 'groundwater' | 'hissing' | 'cgi' | 'pressureDecay' | 'smell' | 'soapBubble';
  name: string;
  category: 'detecting' | 'pinpointing';
  description: string;
  principle: string;
  longDescription: string;
}

export enum SimulationState {
  Idle = 'Idle',
  Running = 'Running',
  Detected = 'Detected',
  Leaking = 'Leaking', // Added for multi-state simulations
}