import { MonitoringMethod } from './types';

export const METHODS: MonitoringMethod[] = [
  {
    id: 'atg',
    name: 'Automatic Tank Gauging (ATG)',
    category: 'detecting',
    principle: 'Measures fuel volume with high precision to detect small changes over time.',
    description: 'A probe in the tank constantly measures the fuel level, temperature, and water content.',
    longDescription: 'For leak detection, the ATG system performs a static test, usually overnight when the station is closed. It records the fuel volume with extreme precision. After accounting for thermal contraction/expansion, any unexplained drop in volume over several hours indicates a potential leak from the tank itself. In addition to volume measurement, advanced ATG consoles can integrate with hydrocarbon vapor sensors placed in interstitial spaces, dry monitoring wells, and containment sumps to provide 24/7 surveillance for any vapor leaks.'
  },
  {
    id: 'pressureDecay',
    name: 'Pressure Decay Test',
    category: 'detecting',
    principle: 'Pressurizes a pipeline and monitors for a drop in pressure over time.',
    description: 'A line is sealed and filled with an inert gas (like nitrogen) to a specific pressure. If the pressure drops, it indicates a leak somewhere in the line.',
    longDescription: 'This is a common integrity test for pipelines. The line is taken out of service, sealed at both ends, and pressurized. A sensitive pressure gauge is monitored for a set period. A stable pressure indicates the line is tight. A falling pressure indicates that product or gas is escaping, signaling a leak. The rate of decay can help estimate the size of the leak, but this method does not find its location.'
  },
  {
    id: 'interstitial',
    name: 'Interstitial Monitoring',
    category: 'detecting',
    principle: 'Detects leaks in the space between the inner and outer walls of a double-walled tank or pipe.',
    description: 'Modern tanks are often "double-walled" for secondary containment.',
    longDescription: 'A sensor is placed in the interstitial space (the monitored gap) between the two walls. If the primary inner wall fails, fuel will leak into this space and trigger the sensor long before it can escape into the environment. This sensor can be a liquid float switch or a more advanced hydrocarbon vapor sensor connected to the ATG system, providing immediate notification of a breach.'
  },
  {
    id: 'vapor',
    name: 'Vapor Monitoring (Soil)',
    category: 'detecting',
    principle: 'Detects fuel vapors in the soil using sensors placed in monitoring wells.',
    description: 'Sensors detect the presence of hydrocarbon vapors that would accumulate in the soil after a leak.',
    longDescription: 'Monitoring wells are strategically placed in the ground around the tank. If a leak occurs, fuel evaporates and the resulting vapors move through the soil. These vapors enter the monitoring wells and trigger an alarm on the sensor, providing an early indication of a release before it reaches groundwater.'
  },
   {
    id: 'groundwater',
    name: 'Groundwater Monitoring',
    category: 'detecting',
    principle: 'Checks for leaked fuel that has seeped into the water table beneath the facility.',
    description: 'Wells are used to sample the groundwater to detect the presence of contaminants.',
    longDescription: 'This method involves drilling monitoring wells down to the groundwater level. Water samples are taken periodically and analyzed for fuel components. The presence of these contaminants indicates that a leak has occurred and has reached the water table. This is often considered a last line of defense, as contamination has already occurred.'
  },
   {
    id: 'smell',
    name: 'Smell (Olfactory)',
    category: 'detecting',
    principle: 'Using the human nose to detect the characteristic odor of fuel products.',
    description: 'Gasoline and diesel have distinct smells, often detectable by humans at very low concentrations.',
    longDescription: 'The human sense of smell is surprisingly sensitive and is often the very first indicator of a fuel leak, especially for small surface spills or vapor releases near dispensers or fill ports. While not a formal or quantifiable method, it is an invaluable, continuous monitoring system that prompts further investigation with more precise tools.'
  },
  {
    id: 'cgi',
    name: 'Combustible Gas Indicator (CGI)',
    category: 'pinpointing',
    principle: 'Measures the concentration of combustible gases in an area as a percentage of the Lower Explosive Limit (LEL).',
    description: 'A portable device used to sample the air in spaces like sumps or utility vaults to find vapor sources.',
    longDescription: 'A CGI is a critical safety tool. It draws an air sample across a sensor. If combustible vapors are present, it measures the concentration as a percentage of the LEL. By moving the probe around an area, a technician can "sniff" out the point where the LEL reading is highest, thereby pinpointing the source of a vapor leak.'
  },
  {
    id: 'optical',
    name: 'Optical Gas Imaging (OGI)',
    category: 'pinpointing',
    principle: 'Uses an infrared camera to visualize hydrocarbon gas clouds that are invisible to the naked eye.',
    description: 'A specialized camera makes fugitive volatile organic compound (VOC) emissions visible.',
    longDescription: 'The IR camera is sensitive to the specific infrared absorption spectrum of hydrocarbon gases. When viewed through the camera, escaping fuel vapors appear as a dark smoke-like plume. This is a powerful tool for quickly inspecting large areas and pinpointing the exact source of a vapor leak at connections, seals, and vents.'
  },
  {
    id: 'hissing',
    name: 'Auditory Hissing',
    category: 'pinpointing',
    principle: 'Listening for the sound of gas or liquid escaping from a pressurized line.',
    description: 'A direct, low-tech method often used during inspections or when a leak is suspected.',
    longDescription: 'When a pressurized pipeline has a small hole or a faulty connection, the escaping product can create a distinct hissing sound. While not a formal automated system, keen-eared technicians can use this method to pinpoint the exact location of a leak, especially in accessible piping or during pressure tests. It is simple but effective for certain types of failures.'
  },
   {
    id: 'soapBubble',
    name: 'Soap Bubble Test',
    category: 'pinpointing',
    principle: 'Applying a soap solution to a suspected leak point on a pressurized line to see if bubbles form.',
    description: 'A time-tested method for finding the exact location of small gas leaks in accessible fittings and joints.',
    longDescription: 'After a line is pressurized (often with air or nitrogen), a soap-and-water solution is brushed over joints, connections, and welds. If a leak is present, the escaping gas will blow bubbles in the solution, providing immediate and clear visual confirmation of the exact leak location. It is simple, cheap, and extremely effective for accessible components.'
  },
];