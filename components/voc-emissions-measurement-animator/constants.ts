
import { OptionDetails } from './types';

export const GOLD_STANDARD_DATA: OptionDetails = {
  id: 'gold',
  title: "Gold Standard",
  subtitle: "Continuous Direct Measurement",
  methodology: "The primary VOC analyzer (TVA2020) and the ultrasonic flow meter are deployed for the entire project duration.",
  calculation: "Mass Emissions (kg/day) are calculated directly by multiplying real-time VOC concentration by the real-time volumetric flow rate.",
  pros: ["Highest possible data accuracy", "Provides undeniable scientific rigor"],
  cons: ["Higher equipment rental and operational cost"],
};

export const SILVER_STANDARD_DATA: OptionDetails = {
  id: 'silver',
  title: "Silver Standard",
  subtitle: "Targeted Analysis & Proxy Modeling",
  methodology: "This cost-effective approach uses the primary VOC analyzer for a shorter period to build a mathematical correlation between easily measured parameters (pressure, flow) and VOC concentration.",
  calculation: "For the remainder of the test, cheaper sensors continue to run, and the lab-calibrated proxy model is used to estimate mass emissions.",
  pros: ["Significantly lower rental cost", "Produces scientifically valid results"],
  cons: ["Slightly more complex data analysis", "Accuracy depends on the strength of the proxy model"],
};
