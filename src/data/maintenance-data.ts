export interface ScheduleItem {
  interval: string;
  intervalKm: number;
  timePeriod: string;
  category: 'routine' | 'critical' | 'inspection' | 'major';
  tasks: string[];
  partsToReplace: string[];
  estimatedCostMin: number;
  estimatedCostMax: number;
}

export const MAINTENANCE_SCHEDULE: ScheduleItem[] = [
  {
    interval: 'Monthly Check',
    intervalKm: 1000,
    timePeriod: 'Every 1 Month',
    category: 'routine',
    tasks: [
      'Check cold tire air pressure on all 4 wheels plus spare tire',
      'Check engine oil dipstick level (between MIN and MAX marks)',
      'Inspect coolant overflow reservoir level',
      'Top up windshield washer reservoir with clean water and shampoo additive',
      'Verify all exterior lights: headlights, tail lamps, turn indicators, reverse light',
    ],
    partsToReplace: ['Windshield washer fluid pouch (₹30 - ₹50)'],
    estimatedCostMin: 50,
    estimatedCostMax: 150,
  },
  {
    interval: 'Every 5,000 km',
    intervalKm: 5000,
    timePeriod: 'Every 6 Months',
    category: 'routine',
    tasks: [
      'Check engine oil condition and top up if required',
      'Inspect engine air filter element; tap out loose dust (do not use high-pressure air directly on paper pleats)',
      'Inspect brake pad thickness through wheel spokes',
      'Rotate tires (front to back) and check for uneven tread wear',
      'Lubricate door hinges, trunk latches, and bonnet lock',
    ],
    partsToReplace: ['Engine air filter (if heavily soiled)'],
    estimatedCostMin: 400,
    estimatedCostMax: 1000,
  },
  {
    interval: 'Every 10,000 km / 1 Year',
    intervalKm: 10000,
    timePeriod: 'Every 12 Months',
    category: 'critical',
    tasks: [
      'Drain and replace engine oil completely with recommended grade synthetic/mineral oil',
      'Replace engine oil filter with new OEM O-ring gasket',
      'Replace cabin air / pollen filter (PM2.5) behind glovebox',
      'Inspect battery terminal health, clean acid sulfation, check charging voltage',
      'Perform 3D 4-wheel alignment and dynamic computerized wheel balancing',
      'Clean and adjust front brake caliper sliders and rear brake drum shoes',
    ],
    partsToReplace: ['Engine Oil (3.5L - 4.5L)', 'Oil Filter', 'Cabin Air Filter', 'Drain Plug Washer'],
    estimatedCostMin: 2500,
    estimatedCostMax: 5500,
  },
  {
    interval: 'Every 20,000 km / 2 Years',
    intervalKm: 20000,
    timePeriod: 'Every 24 Months',
    category: 'major',
    tasks: [
      'Replace engine air intake filter with new OEM element',
      'Replace fuel filter (diesel cars require strict replacement to protect high-pressure CRDi injectors)',
      'Flush and replace hydraulic brake fluid (DOT 3 or DOT 4) to eliminate moisture',
      'Inspect spark plugs on petrol cars (replace conventional copper plugs; iridium/platinum inspect)',
      'Inspect suspension tie-rod ends, ball joints, and rubber steering rack boots',
      'Inspect exhaust pipe hangers, heat shields, and catalytic converter mountings',
    ],
    partsToReplace: ['Air Filter', 'Fuel Filter', 'Brake Fluid (1L)', 'Copper Spark Plugs (set of 3 or 4)'],
    estimatedCostMin: 4500,
    estimatedCostMax: 9000,
  },
  {
    interval: 'Every 40,000 km / 4 Years',
    intervalKm: 40000,
    timePeriod: 'Every 4 Years',
    category: 'major',
    tasks: [
      'Drain and flush engine cooling system; replace with fresh pre-mixed ethylene glycol coolant',
      'Drain and refill manual transmission gear oil (75W-80 / 80W-90) or automatic transmission fluid (ATF)',
      'Replace accessory serpentine drive belt (alternator, AC compressor belt)',
      'Inspect throttle body; clean carbon varnish deposits with carburetor spray',
      'Inspect clutch disc wear and pedal free play (manual)',
      'Check 12V starter battery health (load test); replace if cold cranking amps (CCA) dropped below 70%',
    ],
    partsToReplace: ['Engine Coolant (4L-6L)', 'Transmission Gear Oil', 'Serpentine Drive Belt', '12V Battery (if aged > 3.5 yrs)'],
    estimatedCostMin: 7000,
    estimatedCostMax: 16000,
  },
  {
    interval: 'Every 80,000 – 100,000 km',
    intervalKm: 80000,
    timePeriod: 'Every 5-7 Years',
    category: 'major',
    tasks: [
      'Replace engine timing belt, water pump, and tensioner pulley (critical: snapped timing belt destroys engine)',
      'Replace all 4 suspension shock absorbers and strut mount bearings if ride has degraded',
      'Replace all 4 road tires (even if tread remains, rubber compound oxidizes and turns brittle after 5-6 years)',
      'Replace Iridium spark plugs (long-life spec)',
    ],
    partsToReplace: ['Timing Belt Kit + Water Pump', '4 Road Tires', 'Suspension Struts', 'Iridium Plugs'],
    estimatedCostMin: 22000,
    estimatedCostMax: 45000,
  },
];

export const TIRE_CARE_GUIDE = {
  readingSize: {
    example: '195 / 65 R 15 91 V',
    explanation: [
      { part: '195', label: 'Width in mm', desc: 'The cross-sectional width of the tire from sidewall to sidewall in millimeters.' },
      { part: '65', label: 'Aspect Ratio (%)', desc: 'The height of the tire sidewall as a percentage of width (65% of 195mm = 126.75mm).' },
      { part: 'R', label: 'Construction', desc: 'Radial ply construction (internal fabric cords run radially at 90 degrees to tread).' },
      { part: '15', label: 'Rim Diameter', desc: 'Wheel rim diameter in inches that the tire fits onto.' },
      { part: '91', label: 'Load Index', desc: 'Numerical code indicating maximum load capacity (91 = 615 kg per tire).' },
      { part: 'V', label: 'Speed Rating', desc: 'Alphabetical code for maximum safe sustained speed (V = up to 240 km/h; H = 210 km/h; T = 190 km/h).' },
    ],
  },
  pressureGuidelines: [
    'Always measure tire pressure when tires are COLD (vehicle parked for > 3 hours or driven < 2 km).',
    'Follow the manufacturer placard on the driver-side B-pillar door jamb, NOT the maximum PSI stamped on the tire sidewall.',
    'Under-inflation by just 5 PSI increases fuel consumption by 3% and causes rapid shoulder tread wear and highway blowout risk.',
    'Over-inflation reduces tire contact patch area, makes ride harsh and bouncy over potholes, and causes rapid center-tread wear.',
  ],
  rotationPatterns: [
    'Front-Wheel Drive (FWD): Front tires move straight back to the rear; rear tires cross over to the opposite front (Rear Right to Front Left, Rear Left to Front Right).',
    'Every 8,000 to 10,000 km to equalize wear across front (steering + power) and rear axles.',
  ],
};

export const FLUIDS_GUIDE = [
  {
    name: 'Engine Oil',
    purpose: 'Lubricates pistons, cools cylinder walls, cleans carbon soot, prevents metal-on-metal wear.',
    grades: '0W-20 (modern high-efficiency petrol/hybrids), 5W-30 (standard Indian passenger cars), 15W-40 (older diesels).',
    checkFrequency: 'Every 2 weeks on cold engine dipstick.',
    changeInterval: 'Every 10,000 km or 1 year (synthetic).',
    colorHealthy: 'Golden amber to light brown (petrol); diesel oil turns black within 500 km due to soot, which is normal.',
    colorBad: 'Milky coffee froth (coolant leaking into oil — blown head gasket) or gritty sludge.',
  },
  {
    name: 'Brake Fluid',
    purpose: 'Incompressible hydraulic liquid transferring foot pedal force to calipers.',
    grades: 'DOT 3 or DOT 4 (DOT 5.1 for performance). Never mix mineral oil with DOT fluids.',
    checkFrequency: 'Monthly visual check through clear plastic reservoir.',
    changeInterval: 'Every 2 years / 40,000 km (hygroscopic — absorbs water from air and loses boiling point).',
    colorHealthy: 'Clear pale yellow / transparent amber.',
    colorBad: 'Dark muddy brown or black with visible moisture particles.',
  },
  {
    name: 'Engine Coolant',
    purpose: 'Absorbs heat from engine block, dissipates heat through radiator, prevents corrosion and freezing.',
    grades: 'Ethylene Glycol pre-mixed 50:50 with demineralized water (Green, Pink, or Blue OAT/HOAT).',
    checkFrequency: 'Monthly visual check at overflow expansion tank.',
    changeInterval: 'Every 40,000 km or 3 to 4 years.',
    colorHealthy: 'Bright translucent fluorescent green, pink, or orange.',
    colorBad: 'Rusty brown, oily film, or muddy appearance.',
  },
  {
    name: 'Windshield Washer Fluid',
    purpose: 'Cleans road grime, mud spray, and dried bug splatter from windshield glass.',
    grades: 'Clean RO/demineralized water mixed with automotive windshield washer concentrate shampoo.',
    checkFrequency: 'Refill whenever low.',
    changeInterval: 'Topped up as consumed.',
    colorHealthy: 'Light blue or clear.',
    colorBad: 'Never use plain soapy tap water; minerals in hard tap water clog tiny spray nozzles over time.',
  },
];

export const DIY_MAINTENANCE_GUIDES = [
  {
    id: 'diy-flat-tire',
    title: 'How to Change a Flat Tire Step-by-Step',
    estimatedTime: '20-30 minutes',
    difficulty: 'Beginner',
    toolsRequired: ['Spare Tire (Stepney)', 'Scissor Jack', 'Lug Wrench (Wheel Brace)', 'Wheel Chocks / Bricks', 'Reflective Hazard Triangle'],
    steps: [
      { step: 1, title: 'Park Safely', desc: 'Pull completely off the road onto flat, firm, level ground. Engage handbrake firmly and shift to 1st gear (manual) or Park (P). Turn on hazard warning lights.' },
      { step: 2, title: 'Set Warning Triangle', desc: 'Place your red reflective warning triangle at least 50 meters behind your car to alert approaching traffic.' },
      { step: 3, title: 'Loosen Wheel Nuts While Car is on the Ground', desc: 'Remove wheel cap (if steel wheels). Fit lug wrench onto the wheel nuts. Turn counter-clockwise (lefty-loosey) ONE full turn to break the torque. DO NOT remove the nuts yet!' },
      { step: 4, title: 'Position Jack at Jacking Point', desc: 'Locate the reinforced metal jacking notch on the car’s underbody sill near the flat tire. Turn the jack screw clockwise until it contacts the jacking notch.' },
      { step: 5, title: 'Raise Vehicle', desc: 'Pump the jack until the flat tire lifts roughly 2 to 3 inches off the ground. The spare tire needs more clearance because it is fully inflated!' },
      { step: 6, title: 'Remove Nuts & Swap Wheel', desc: 'Unscrew wheel nuts completely. Slide the flat tire off and set it flat under the car body as a safety backstop. Slide the spare wheel onto the hub bolts.' },
      { step: 7, title: 'Hand-Tighten Nuts in Star Pattern', desc: 'Screw all lug nuts on by hand. Snug them with the wrench in a criss-cross (star) pattern to ensure the wheel seats flush.' },
      { step: 8, title: 'Lower Car & Final Torque', desc: 'Lower the jack until the tire touches the ground. Use your full body weight on the lug wrench to torque all nuts firmly in a star pattern. Stow the flat tire and tools.' },
    ],
  },
  {
    id: 'diy-jump-start',
    title: 'How to Jump-Start a Dead Battery Safely',
    estimatedTime: '15 minutes',
    difficulty: 'Beginner',
    toolsRequired: ['Set of heavy-duty jumper cables (Red & Black)', 'Donor car with a healthy 12V battery'],
    steps: [
      { step: 1, title: 'Position Cars', desc: 'Park donor car close to dead car so jumper cables reach easily without stretching. Turn OFF ignition on both cars and engage handbrakes.' },
      { step: 2, title: 'Connect RED Cable to Dead Battery POSITIVE (+)', desc: 'Attach one red clamp to the positive (+) terminal of the dead car battery.' },
      { step: 3, title: 'Connect RED Cable to Donor Battery POSITIVE (+)', desc: 'Attach the other red clamp to the positive (+) terminal of the healthy donor car battery.' },
      { step: 4, title: 'Connect BLACK Cable to Donor Battery NEGATIVE (-)', desc: 'Attach one black clamp to the negative (-) terminal of the donor car battery.' },
      { step: 5, title: 'Connect BLACK Cable to Unpainted Metal Ground on Dead Car', desc: 'Attach the final black clamp to an unpainted metal bolt or engine bracket on the dead car (NOT to the dead battery negative terminal, to avoid spark igniting hydrogen gas).' },
      { step: 6, title: 'Start Donor Car Engine', desc: 'Start the healthy donor car engine. Let it idle for 3 to 5 minutes to deliver initial charge.' },
      { step: 7, title: 'Start Dead Car Engine', desc: 'Turn key on the dead car; it should crank and start immediately. If it clicks, wait another 3 minutes and retry.' },
      { step: 8, title: 'Disconnect in Exact REVERSE Order', desc: 'Disconnect black ground clamp on dead car, then black clamp on donor, then red clamp on donor, and finally red clamp on dead car. Keep engine running for at least 30 minutes.' },
    ],
  },
];
