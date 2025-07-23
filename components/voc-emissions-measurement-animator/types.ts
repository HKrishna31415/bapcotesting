
export type StandardOption = 'gold' | 'silver';

export interface OptionDetails {
  id: StandardOption;
  title: string;
  subtitle: string;
  methodology: string;
  calculation: string;
  pros: string[];
  cons: string[];
}
