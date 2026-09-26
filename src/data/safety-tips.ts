import { SafetyTopic } from '@/types/content';

export const SAFETY_TOPICS_DATA: SafetyTopic[] = [
  {
    id: 'safety-defensive-driving',
    title: 'Defensive Driving in Indian Traffic Conditions',
    slug: 'defensive-driving-guide',
    icon: 'Shield',
    severity: 'critical',
    summary: 'Always anticipate errors from other road users and maintain an invisible protective buffer around your vehicle.',
    content: `Defensive driving is the philosophy that you assume every other road user might make an illegal, unpredictable, or dangerous maneuver at any instant — and driving in a way that protects you regardless of their mistakes.

In Indian traffic, where lane discipline, unexpected wrong-way riders, stray livestock, and sudden pedestrian crossings are everyday realities, defensive driving is not optional — it is the cornerstone of survival.

### Core Defensive Principles:
1. **The Space Cushion**: Always keep an open safety zone on at least three sides of your car (front, left, right). If someone cuts in front of you, ease off the accelerator to restore your 3-second gap.
2. **Scan 12-15 Seconds Ahead**: Do not just stare at the bumper of the car immediately in front of you. Look high and scan 200-300 meters down the road to spot braking brake lights, construction, or stopped traffic early.
3. **Cover the Brake**: At blind junctions, busy bus stops, and crowded bazaar streets, remove your foot from the throttle and "hover" it over the brake pedal without depressing it. This slashes human reaction time from 1.5 seconds to 0.3 seconds.
4. **Never Insist on Right of Way**: "Here lies the body of William Jay, who died maintaining his right of way." Even if you have the legal green light or priority, always verify the intersection is clear before crossing.`,
    dos: [
      'Maintain at least a 2-second gap in the city and 3-4 seconds on highways.',
      'Check all three mirrors every 7-10 seconds to keep an updated 360-degree mental map.',
      'Signal your intentions early (at least 3-5 seconds before initiating a turn or lane change).',
      'Make eye contact with pedestrians and side-street drivers before passing to confirm they have seen you.',
    ],
    donts: [
      'Never tailgate another vehicle — tailgating blinds you to forward hazards and guarantees rear-end crashes.',
      'Never assume an indicator means the driver will actually turn; confirm speed drop and wheel angle.',
      'Never engage in aggressive honking or high-beam flashing matches with other drivers.',
    ],
  },
  {
    id: 'safety-monsoon-driving',
    title: 'Monsoon Driving: Hydroplaning, Waterlogging & Visibility',
    slug: 'monsoon-driving-safety',
    icon: 'CloudRain',
    severity: 'critical',
    summary: 'Crucial rules to prevent hydroplaning, engine hydro-lock in flooded underpasses, and zero-visibility condensation.',
    content: `Indian monsoon cloudbursts transform dry asphalt into slick surfaces within minutes, mixing rainwater with months of accumulated engine oil deposits to create near-ice conditions.

### Hydroplaning (Aquaplaning) Management:
When traveling through standing water at speed, water builds up in front of the tire faster than the tread can evacuate it. The tire rides up on a thin water film, completely separating the rubber from the tarmac.
- **Signs**: Feather-light steering with zero road feel, sudden engine rev flare.
- **Immediate Action**: Lift off the accelerator gently. Hold steering wheel completely straight. DO NOT brake or turn until you feel tires bite the road again.

### Navigating Flooded Underpasses & Puddles:
- Never drive into standing water if the depth is unknown or exceeds the center of your wheel rims.
- Hidden open manholes, washed-away road shoulders, and submerged rocks lurk under murky floodwaters.
- If entering shallow water: shift to 1st gear and keep engine revs elevated (2,000-2,500 RPM) while feathering the clutch to prevent back-pressure from sucking water into the exhaust tailpipe.
- **Engine Stalled in Water?**: NEVER crank the ignition! If water has entered the engine air intake, cranking it compresses incompressible water, bending steel connecting rods and destroying the engine block (hydro-lock). Push the car out or call towing.`,
    dos: [
      'Check tire tread depth before monsoon season; minimum 3mm is strongly recommended for rain.',
      'Turn ON your car AC on fresh-air mode and direct airflow to the windshield defogger vent to clear condensation.',
      'Double your following distance to at least 4-5 seconds on wet roads.',
    ],
    donts: [
      'Never switch on hazard flashers while driving in rain; other drivers cannot tell if you are stopped or turning.',
      'Never enter a flooded railway underpass if you cannot see the road markings or if water is above axle height.',
      'Never use cruise control on wet, rain-soaked highways.',
    ],
  },
  {
    id: 'safety-night-driving',
    title: 'Highway Night Driving & High Beam Glare Management',
    slug: 'night-highway-driving-safety',
    icon: 'Moon',
    severity: 'important',
    summary: 'How to manage unlit rural hazards, blinding high-beam glare, and night-time depth perception limits.',
    content: `More than 40% of fatal road crashes in India occur between 8 PM and 6 AM, despite traffic volumes being a fraction of daytime levels.

### The Problem of Headlight Glare:
When an approaching vehicle drives with high beams, the intense white glare bleaches the rhodopsin in your eyes' retinas, causing "flash blindness" that lasts for 3 to 7 seconds. At 80 km/h, your car travels over 150 meters completely blind!

### How to Counter Glare:
- **Look Away to the Left**: Avert your eyes from the bright oncoming headlights. Direct your gaze down towards the white painted road edge line (fog line) on the left side of the lane. Use this line to steer your vehicle safely past.
- **Dim Your Rearview Mirror**: Switch the anti-glare manual toggle on your interior mirror (or let auto-dimming mirror activate).
- **Clean the Glass**: Clean both inner and outer surfaces of your windshield with glass cleaner before evening trips; dirt and greasy haze scatter oncoming light into blinding starbursts.

### Unlit Indian Night Hazards:
Drive at a speed that allows you to stop within the distance illuminated by your low beams (typically 35-40 meters = ~50-60 km/h max on unlit roads). Stay vigilant for:
- Overloaded farm tractors and trailers without tail lamps or reflectors.
- Potholes and unmarked speed breakers.
- Broken-down trucks parked in the middle of active highway lanes without warning triangles.
- Cattle, dogs, and pedestrians in dark clothing.`,
    dos: [
      'Switch from high beam to low beam within 150m of oncoming vehicles or when following another car.',
      'Keep headlights and taillights clean of highway grime and dust.',
      'Carry spare headlight bulbs in your glovebox.',
    ],
    donts: [
      'Never retaliate into a high-beam duel by turning your high beams on; having two blinded drivers is suicidal.',
      'Never wear tinted sunglasses during night driving.',
      'Never drive with only parking lights or daytime running lights (DRLs) after sunset.',
    ],
  },
  {
    id: 'safety-highway-fatigue',
    title: 'Highway Safety: Fatigue, Highway Hypnosis & Break Schedule',
    slug: 'highway-fatigue-safety-rules',
    icon: 'Gauge',
    severity: 'critical',
    summary: 'Preventing drowsy driving, managing micro-sleeps, and structuring long-distance highway rest stops.',
    content: `Drowsy driving and highway hypnosis are silent killers on modern, straight, access-controlled Indian expressways. A 4-second "micro-sleep" at 120 km/h means traveling 133 meters with nobody controlling the vehicle.

### Warning Signs of Dangerous Driver Fatigue:
- Difficulty keeping eyes focused or frequent heavy blinking.
- Unintentional lane drifting or hitting rumble strips on the road shoulder.
- Missing highway exits or inability to remember driving the last few kilometers.
- Repeated yawning and rubbing of eyes.
- Sudden jerking of the head upright after drifting into a micro-sleep.

### Proven Fatigue Management Protocol:
1. **The 2-Hour / 150 km Rule**: Plan a mandatory 15-minute rest break every 2 hours or 150 km of highway driving. Get out of the car, stretch your legs, wash your face with cold water, and walk around.
2. **The Power Nap**: If you feel heavy drowsiness, pull into a lit, secure petrol pump or wayside plaza. Lock the doors, crack a window slightly, set a phone alarm for 20 minutes, and take a power nap. A 20-minute nap restores cognitive alertness.
3. **Avoid Driving Between 2 AM and 5 AM**: The human circadian rhythm experiences its natural biological alertness trough during these pre-dawn hours; accident fatality risk is exponentially higher.`,
    dos: [
      'Drink plenty of water and eat light, protein-rich snacks rather than heavy carbohydrate meals that induce food coma.',
      'Keep cabin ventilation cool with fresh air circulation; a warm, stuffy cabin accelerates drowsiness.',
      'Share driving duties with a licensed companion on trips exceeding 300 km.',
    ],
    donts: [
      'Do not rely solely on energy drinks, chewing gum, or loud music to fight extreme fatigue; they only mask drowsiness temporarily.',
      'Never pull onto the highway shoulder or median to sleep; park inside designated wayside rest plazas only.',
    ],
  },
  {
    id: 'safety-road-rage',
    title: 'Dealing with Road Rage: De-escalation & Conflict Avoidance',
    slug: 'road-rage-deescalation',
    icon: 'AlertTriangle',
    severity: 'important',
    summary: 'Psychological strategies to defuse hostile drivers, protect yourself, and avoid physical confrontations.',
    content: `Road rage on Indian roads can escalate rapidly from honking and abusive gestures to dangerous tailgating, brake-checking, and physical assault. Protecting yourself requires keeping your ego in check and prioritizing physical safety over being "right".

### How to De-escalate an Aggressive Driver:
1. **Do Not Engage**: Never make eye contact, shake your head, flash high beams, or return abusive hand gestures. Eye contact is interpreted by aggressive drivers as a challenge.
2. **Yield and Let Them Pass**: Swallow your pride, indicate left, and pull aside to let the angry driver pass and speed away. Getting out of their proximity is your primary objective.
3. **If Being Followed or Harassed**:
   - Keep all car doors locked and windows rolled completely up.
   - Do NOT drive home! Driving home reveals your residence.
   - Head immediately towards the nearest police station, crowded hospital emergency gate, or well-lit commercial petrol pump.
   - Call Police Emergency (112) immediately and report the offending vehicle registration number and your exact live location.
4. **If Stopped and Surrounded**:
   - Stay inside your locked vehicle.
   - Do not step out to argue or fight.
   - Sound your horn continuously to attract public attention and record video on your phone as legal evidence.`,
    dos: [
      'Acknowledge mistakes: if you accidentally cut someone off, wave a polite open-palm "sorry" gesture; it diffuses 90% of anger instantly.',
      'Install a dual-channel front and rear dashcam; dashcam footage protects you from false claims and deters road ragers.',
    ],
    donts: [
      'Never step out of your vehicle during a traffic confrontation.',
      'Never brake-check someone tailgating you; it causes multi-car pileups.',
      'Never carry weapons or engage in physical altercations.',
    ],
  },
  {
    id: 'safety-accident-procedure',
    title: 'Accident Protocol: What to Do If You Are in a Road Crash',
    slug: 'accident-procedure-protocol',
    icon: 'HeartPulse',
    severity: 'critical',
    summary: 'Step-by-step legal, medical, and insurance procedure to follow immediately after a road collision.',
    content: `Being involved in a car crash is disorienting and traumatic. Following a structured procedure protects life, prevents secondary crashes, and preserves legal rights.

### Immediate Step-by-Step Crash Response:
1. **Stop & Secure the Scene**:
   - Turn off ignition to eliminate fire risk from ruptured fuel lines.
   - Turn ON hazard warning lights immediately.
   - Check yourself and your passengers for injuries before unbuckling.
2. **Protect Against Secondary Crashes**:
   - If cars are drivable and crash is minor, move vehicles to the shoulder to prevent highway pileups.
   - On highways: place your red reflective warning triangle at least 50 meters behind the crash scene.
3. **Call for Medical & Police Assistance**:
   - Call **112** (National Emergency) or **108** (Ambulance).
   - State your exact location: highway number, landmark, kilometer milestone stone, and number of injured victims.
4. **Document Evidence for Insurance & Legal Record**:
   - Take clear photos and videos from multiple angles before vehicles are moved: vehicle positions, damage, skid marks on road, traffic signals, and license plates of all involved vehicles.
   - Note down names, contact numbers, and vehicle registration numbers of other drivers and witnesses.
5. **Police Report & FIR**:
   - For any crash involving bodily injury or substantial property damage, filing an FIR (First Information Report) or police memo at the local police station is mandatory for motor insurance claim settlement.
6. **Notify Insurance Company**:
   - Call your motor insurance helpline within 24-48 hours.
   - Do not authorize repairs before the insurance surveyor inspects the vehicle.`,
    dos: [
      'Remain calm and polite; avoid admitting fault or making verbal financial settlements at the scene.',
      'Render first aid to injured victims within your training limits.',
      'Report hit-and-run incidents immediately to the nearest police post.',
    ],
    donts: [
      'Never flee the scene of an accident (hit-and-run attracts up to 10 years imprisonment under modern criminal codes).',
      'Never move an unconscious victim with suspected spinal trauma unless the car is on fire or sinking.',
    ],
  },
  {
    id: 'safety-emergency-numbers',
    title: 'Emergency Numbers & Roadside Assistance (RSA) Across India',
    slug: 'emergency-numbers-rsa-guide',
    icon: 'PhoneCall',
    severity: 'critical',
    summary: 'Complete directory of 24x7 government helplines, highway emergency services, and towing response contacts.',
    content: `Keep these numbers saved on speed dial in your phone and written down in your car’s glovebox manual.

### Primary Government Emergency Helplines:
- **112**: All-in-One Pan-India National Emergency Helpline (Police, Ambulance, Fire, Disaster). Replaces 100, 101, and 102 across all states.
- **1033**: National Highways Helpline (NHAI) — 24x7 toll-free helpline for rapid incident management, ambulance, medical trauma response, and free crane towing on all National Highways.
- **108**: Emergency Medical Ambulance Service (state emergency medical fleets across 23+ states).
- **1095**: Traffic Police Control Room Helpline (Delhi and major metro police commands).
- **1091**: Women in Distress / Road Transit Safety Helpline.
- **1073**: Road Accident Emergency Service.

### Roadside Assistance (RSA) Checklist:
Before setting out on long-distance highway travel:
- Verify that your car insurance policy includes a **24x7 Roadside Assistance (RSA) Add-on**.
- Save your insurer’s RSA toll-free hotline number and policy number in your phone.
- RSA covers flat tire replacement, emergency fuel delivery, dead battery jump-starting, on-site mechanical troubleshooting, and flatbed towing up to 50 km to the nearest authorized workshop.`,
    dos: [
      'Save 112 and 1033 on your mobile speed dial.',
      'Carry a written emergency contact card with blood group and emergency contact numbers in your sun visor.',
    ],
    donts: [
      'Do not rely solely on smartphone battery in emergencies; keep a dedicated 12V car charger cable in your glovebox.',
    ],
  },
  {
    id: 'safety-child-restraints',
    title: 'Child Safety: Child Seats (CRS), ISOFIX & Rear Seat Rules',
    slug: 'child-safety-isofix-seats',
    icon: 'Baby',
    severity: 'critical',
    summary: 'The life-saving physics of child restraint systems, age-appropriate car seats, and avoiding fatal airbag impacts.',
    content: `Adult seatbelts are engineered specifically for adult skeletal anatomy (height > 145 cm). When fitted onto young children, the lap belt rides up over the soft abdominal organs and the diagonal sash cuts across the neck, causing fatal internal bleeding and neck fractures during sudden braking.

### Age-Appropriate Child Restraint Systems (CRS):
1. **Infants (0 to 15 Months / Up to 13 kg)**: **Rear-Facing Infant Seat**. Crucial because an infant’s heavy head makes up 25% of body weight while neck muscles are frail. Rear-facing seats cradle and distribute crash impact across the entire back.
2. **Toddlers (1 to 4 Years / 9 to 18 kg)**: **Forward-Facing Child Seat** with internal 5-point safety harness.
3. **Children (4 to 10 Years / 15 to 36 kg)**: **Booster Seat**. Elevates the child so the vehicle’s adult three-point seatbelt crosses correctly over the sturdy collarbone and hip pelvic bones.

### What is ISOFIX?
ISOFIX is the international standard rigid metal anchorage system. Modern cars have two metal anchor loops built into the junction between the rear seat cushion and backrest. ISOFIX child seats click directly into the vehicle’s steel chassis with zero belt slack, reducing child seat installation errors by 90%.

### The Lethal Danger of Front-Seat Airbags for Children:
**NEVER place a rear-facing infant car seat in the front passenger seat if the passenger airbag is active!** When the airbag deploys at 300 km/h, it strikes the back of the child seat with catastrophic force, causing fatal head trauma. Children under 12 years must always sit secured in the rear seats.`,
    dos: [
      'Ensure child is seated in an age-appropriate certified child seat on every single journey.',
      'Activate child safety door locks on rear doors so children cannot open doors while moving.',
      'Check that the harness straps are snug: you should not be able to pinch any slack webbing at the child’s collarbone.',
    ],
    donts: [
      'NEVER carry a child on an adult’s lap in the front or rear seat — in a 50 km/h crash, a 10 kg child turns into a 300 kg projectile that flies out of adult arms.',
      'Never allow children to poke heads or torsos out through car panoramic sunroofs (illegal and causes decapitation injuries from flying debris or low branches).',
    ],
  },
];
