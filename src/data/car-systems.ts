import { CarSystem } from '@/types/content';

export const CAR_SYSTEMS_DATA: CarSystem[] = [
  {
    id: 'sys-engine',
    name: 'Engine & Powertrain',
    slug: 'engine-powertrain',
    icon: 'Cpu',
    shortDescription: 'The heart of your automobile converting fuel and air into rotational mechanical energy.',
    howItWorks: `An internal combustion engine (ICE) operates on a continuous four-stroke cycle: **Intake**, **Compression**, **Combustion (Power)**, and **Exhaust**.

1. **Intake Stroke**: The intake valve opens as the piston slides downward, drawing in a precise mixture of filtered ambient air and atomized fuel.
2. **Compression Stroke**: Both valves seal shut. The piston rises, compressing the air-fuel mixture to high pressure and heat.
3. **Power Stroke**: A high-voltage spark plug ignites the pressurized mixture (or in diesel engines, high compression spontaneously combusts injected fuel). The resulting controlled explosion forces the piston down with massive mechanical force, rotating the heavy crankshaft.
4. **Exhaust Stroke**: The exhaust valve opens, and the rising piston pushes out spent combustion gases through the exhaust manifold and catalytic converter.

Engine oil circulates through internal micro-channels at high pressure, providing a microscopic fluid barrier that prevents metal-on-metal friction between rapidly moving pistons, bearings, and camshafts.`,
    components: [
      { name: 'Cylinders & Pistons', description: 'Cylindrical combustion chambers where pistons travel up and down under combustion pressure.', importance: 'critical' },
      { name: 'Crankshaft', description: 'Converts reciprocating linear up-and-down piston motion into rotational torque that drives the wheels.', importance: 'critical' },
      { name: 'Camshaft & Timing Belt/Chain', description: 'Precision-timed shaft that synchronizes valve opening and closing with piston movement.', importance: 'critical' },
      { name: 'Spark Plugs (Petrol) / Glow Plugs (Diesel)', description: 'Delivers high-voltage electric sparks to ignite the compressed fuel-air charge.', importance: 'important' },
      { name: 'Radiator & Water Pump', description: 'Circulates liquid coolant through the engine block to dissipate thermal heat and prevent seizure.', importance: 'critical' },
      { name: 'Oil Filter & Sump', description: 'Stores and continuously filters engine oil to catch microscopic carbon and metal shavings.', importance: 'critical' },
    ],
    warningSigns: [
      { sign: 'Thick blue exhaust smoke', possibleCause: 'Worn piston rings or valve seals allowing engine oil to leak into combustion chambers.', severity: 'high', action: 'Avoid driving; seek immediate mechanic overhaul to prevent catastrophic engine seizure.' },
      { sign: 'Engine knocking or metallic tapping sound', possibleCause: 'Low oil pressure, worn rod bearings, or using poor quality fuel causing detonation.', severity: 'high', action: 'Pull over immediately, check engine oil dipstick, and do not rev the engine.' },
      { sign: 'Temperature gauge needle in RED zone or steam from hood', possibleCause: 'Coolant leak, burst hose, broken water pump, or defective radiator cooling fan.', severity: 'high', action: 'Turn off engine immediately. Never open radiator cap while hot (risk of boiling fluid explosion)!' },
      { sign: 'Check Engine light glowing steady amber', possibleCause: 'Faulty oxygen sensor, catalytic converter issue, or loose fuel filler cap.', severity: 'medium', action: 'Get OBD-II diagnostic scan at service station within a few days.' },
    ],
    maintenanceTips: [
      'Replace engine oil and oil filter strictly every 10,000 km or 1 year (whichever comes first).',
      'Check engine oil dipstick once every 2 weeks when engine is cold and car is parked on level ground.',
      'Replace air filter every 10,000-15,000 km; Indian road dust clogs air filters quickly, choking engine power and ruining fuel mileage.',
      'Inspect timing belt/chain at 60,000 km; a snapped timing belt causes pistons to crash into valves, destroying the entire engine block.',
    ],
    commonMyths: [
      { myth: 'You must idle a modern car for 5 to 10 minutes every morning before driving.', reality: 'Modern fuel-injected engines only need 15 to 30 seconds of gentle driving to reach operating temperature. Extended idling wastes fuel and causes carbon build-up.' },
      { myth: 'Higher octane petrol automatically gives ordinary cars more power and speed.', reality: 'High octane fuel only benefits high-compression performance engines engineered for it. In standard commuter engines, it provides zero performance gain.' },
    ],
  },
  {
    id: 'sys-brakes',
    name: 'Braking System',
    slug: 'braking-system',
    icon: 'Disc',
    shortDescription: 'Hydraulic safety system converting kinetic movement into friction heat to slow and halt your vehicle.',
    howItWorks: `Modern passenger cars utilize a dual-circuit hydraulic braking system incorporating **Disc Brakes** on the front wheels (and often rear) and **Drum Brakes** on many economy car rear wheels.

When your foot presses the brake pedal:
1. The **Brake Booster** uses engine vacuum to amplify your foot effort up to 4-5 times.
2. The **Master Cylinder** compresses hydraulic brake fluid through steel and reinforced braided lines.
3. At the wheel ends, hydraulic calipers squeeze high-friction **Brake Pads** against rapidly spinning steel **Brake Rotors** (discs).
4. The intense friction converts the car’s kinetic energy into thermal heat, rapidly decelerating the wheels.

Because brake fluid is hygroscopic (absorbs moisture from humid air), aged fluid boils at lower temperatures under hard braking, causing air bubbles that lead to sudden pedal mushiness and brake fade.`,
    components: [
      { name: 'Brake Caliper & Pads', description: 'Hydraulic clamps holding friction pads that squeeze the spinning rotor.', importance: 'critical' },
      { name: 'Brake Rotors / Discs', description: 'Heavy cast-iron or composite discs bolted to the wheel hub that absorb braking friction.', importance: 'critical' },
      { name: 'Master Cylinder & Fluid Reservoir', description: 'Hydraulic pump converting pedal pressure into pressurized hydraulic line force.', importance: 'critical' },
      { name: 'Vacuum Brake Booster', description: 'Uses engine vacuum to reduce the physical foot effort needed to brake.', importance: 'important' },
      { name: 'ABS Hydraulic Modulator', description: 'Electronically pulses brake line pressure up to 15 times a second to prevent wheel lockup.', importance: 'critical' },
      { name: 'Handbrake / Parking Brake', description: 'Mechanical cable or electronic motor locking rear wheels when parked.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'High-pitched metallic squealing noise when braking', possibleCause: 'Brake pad wear indicator metal tab rubbing against rotor (pads worn below 3mm).', severity: 'medium', action: 'Schedule brake pad replacement within 300-500 km.' },
      { sign: 'Spongy, mushy pedal sinking all the way to floorboard', possibleCause: 'Air in hydraulic lines, low brake fluid, or master cylinder internal seal leak.', severity: 'high', action: 'Do not drive. Vehicle cannot stop reliably in emergencies.' },
      { sign: 'Car violently pulls to one side during braking', possibleCause: 'Stuck or seized brake caliper on one side or oil grease contamination on pad.', severity: 'high', action: 'Inspect calipers immediately; pulling can cause loss of control during highway braking.' },
      { sign: 'Brake pedal pulses or steering wheel shakes during braking', possibleCause: 'Warped brake rotors caused by overheating or washing hot discs with cold water.', severity: 'medium', action: 'Have brake discs skimmed on lathe or replaced.' },
    ],
    maintenanceTips: [
      'Flush and replace hydraulic brake fluid completely every 2 years or 40,000 km.',
      'Check brake pad thickness at every regular service; replace when friction material drops to 3mm.',
      'Never wash wheels with cold water immediately after a long or spirited drive; cold water causes glowing hot discs to warp instantly.',
    ],
    commonMyths: [
      { myth: 'Pumping the brake pedal is the best way to stop on slippery or wet roads.', reality: 'Only true for older non-ABS vehicles. In cars equipped with ABS, you must firmly stomp and hold the brake pedal; the computer modulates pulses faster than any human.' },
    ],
  },
  {
    id: 'sys-steering',
    name: 'Steering & Suspension',
    slug: 'steering-suspension',
    icon: 'Compass',
    shortDescription: 'Maintains directional control, tire contact, and smooth ride comfort over potholes and uneven road surfaces.',
    howItWorks: `Your car’s steering translates rotational hand wheel motion into horizontal lateral movement at the front wheels, typically using a **Rack and Pinion** mechanism.

Modern vehicles utilize **Electric Power Steering (EPS)**: an electric motor attached to the steering column monitors torque sensors and applies motorized assist based on vehicle speed (light and effortless at parking speeds, tight and weighted at highway speeds).

The suspension system absorbs road undulations using **Coil Springs** (to absorb shocks) and **Shock Absorbers / Struts** (dampers that stop the car from continuously bouncing like a pogo stick). The **Anti-Roll Bar** controls body roll when cornering.`,
    components: [
      { name: 'Rack and Pinion Gearbox', description: 'Translates rotational steering wheel turn into lateral tie-rod push/pull motion.', importance: 'critical' },
      { name: 'Electric Power Steering Motor (EPS)', description: 'Variable electronic motor providing steering torque assistance.', importance: 'important' },
      { name: 'MacPherson Struts & Shock Absorbers', description: 'Telescopic hydraulic dampers controlling vertical wheel bounce and damping vibrations.', importance: 'critical' },
      { name: 'Tie Rods & Ball Joints', description: 'Pivoting joints allowing wheels to steer while suspension moves vertically.', importance: 'critical' },
      { name: 'Stabilizer / Anti-Roll Bar', description: 'Torsion spring linking left and right suspension to resist vehicle roll in corners.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'Clunking or thumping noise over bumps and potholes', possibleCause: 'Worn suspension stabilizer links, cracked rubber bushes, or blown shock absorber.', severity: 'medium', action: 'Inspect suspension bushings and link rods during next service.' },
      { sign: 'Car drifts to left or right when driving straight on flat road', possibleCause: 'Misaligned front wheels or uneven tire air pressure.', severity: 'medium', action: 'Get wheel alignment and wheel balancing done immediately to save tire tread.' },
      { sign: 'Steering feels excessively heavy or EPS warning light on', possibleCause: 'Power steering motor fuse failure, dead battery, or steering torque sensor fault.', severity: 'high', action: 'Have EPS system diagnosed; manual steering requires tremendous effort.' },
      { sign: 'Car continues bouncing 3-4 times after crossing a speed breaker', possibleCause: 'Blown shock absorbers leaking damping hydraulic oil.', severity: 'medium', action: 'Replace shock absorbers in axle pairs (both front or both rear).' },
    ],
    maintenanceTips: [
      'Get 3D Wheel Alignment and Wheel Balancing done every 5,000 to 7,500 km.',
      'Slow down before speed bumps and potholes; hitting sharp craters at speed bends alloy wheel rims and ruptures lower control arms.',
      'Check rubber suspension boots (CV boots and steering rack boots) for grease tears.',
    ],
    commonMyths: [
      { myth: 'Turning the steering wheel while the car is completely stationary (dry steering) is harmless.', reality: 'Dry steering puts immense torsional strain on tie-rod ends, steering motor, and scrub-wears front tire contact patches. Always roll slightly while steering.' },
    ],
  },
  {
    id: 'sys-transmission',
    name: 'Transmission & Gearbox',
    slug: 'transmission-types',
    icon: 'Settings',
    shortDescription: 'Transfers engine torque to the drive wheels across varied speed ranges via multiple gear ratios.',
    howItWorks: `An internal combustion engine produces usable power only within a narrow RPM band (typically 1,500 - 5,500 RPM). The transmission uses variable gear ratios so the wheels can turn slowly with massive torque (for climbing and starting off) or spin rapidly at highway speeds with low engine RPM.

### Transmission Types Explained:
- **Manual (MT)**: Driver manually controls a mechanical clutch pedal and gear selector lever. Offers maximum driver involvement and mechanical simplicity.
- **Automated Manual (AMT / AGS)**: A manual gearbox fitted with an electromechanical robotic actuator that automatically presses the clutch and changes gears. Budget-friendly with slight gear shift lag.
- **Continuously Variable (CVT)**: Uses a steel belt running between two variable-diameter cone pulleys. Delivers infinite gear ratios without shift jolts; perfectly smooth for city driving.
- **Torque Converter (AT)**: Traditional automatic using hydraulic fluid coupling and planetary gears. Extremely durable, smooth, and robust.
- **Dual-Clutch (DCT / DSG)**: Uses two separate clutches (one for odd gears 1-3-5, one for even gears 2-4-6). Delivers lightning-fast shifts in milliseconds.`,
    components: [
      { name: 'Clutch Assembly (Pressure Plate & Friction Disc)', description: 'Connects and disconnects engine flywheel from manual transmission.', importance: 'critical' },
      { name: 'Gear Sets & Synchronizers', description: 'Paired toothed gears delivering distinct mechanical ratios; synchronizers match rotational speeds for smooth engagement.', importance: 'critical' },
      { name: 'Differential', description: 'Allows outer and inner drive wheels to rotate at different speeds during turns while receiving drive torque.', importance: 'critical' },
      { name: 'Torque Converter (AT only)', description: 'Fluid turbine coupling providing hydraulic torque multiplication and creep function.', importance: 'critical' },
      { name: 'Mechatronics Unit (DCT/DSG only)', description: 'Electronic brain and hydraulic solenoids controlling dual-clutch gear shifts.', importance: 'critical' },
    ],
    warningSigns: [
      { sign: 'Clutch slipping: engine RPM increases when accelerating but car does not pick up speed', possibleCause: 'Worn clutch friction disc lining.', severity: 'high', action: 'Replace clutch assembly to prevent complete loss of drive on the road.' },
      { sign: 'Grinding noise when shifting manual gears', possibleCause: 'Worn brass synchronizer rings or clutch pedal not fully disengaging.', severity: 'medium', action: 'Have gearbox linkage and synchronizers inspected.' },
      { sign: 'Jerky or hesitant shifting in automatic transmission', possibleCause: 'Degraded transmission fluid or overheated DCT clutch packs in city bumper-to-bumper traffic.', severity: 'high', action: 'Check transmission fluid level and quality.' },
    ],
    maintenanceTips: [
      'Never rest your left foot on the clutch pedal while driving (clutch riding).',
      'In automatic cars, always bring vehicle to a complete dead stop before shifting between Reverse (R) and Drive (D).',
      'Replace manual transmission gear oil every 40,000-50,000 km.',
      'In DCT/DSG cars stuck in heavy Indian crawl traffic, shift to Neutral (N) when stopped for more than 15 seconds to prevent dry clutches from overheating.',
    ],
    commonMyths: [
      { myth: 'Putting an automatic car in Neutral (N) at every red light saves noticeable fuel.', reality: 'Modern fuel-injected engines cut fuel to near zero when idling in gear with foot on brake. Constant shifting between D and N causes unnecessary hydraulic valve body wear.' },
    ],
  },
  {
    id: 'sys-electrical',
    name: 'Electrical, Battery & Alternator',
    slug: 'electrical-battery',
    icon: 'Zap',
    shortDescription: 'Powers starting ignition, safety computers, digital dashboards, lights, and in-cabin electronics.',
    howItWorks: `Your car operates on a 12-volt direct current (DC) electrical circuit anchored by two core components:

1. **The 12V Lead-Acid / AGM Battery**: Acts as an electrical chemical reservoir. Its primary task is supplying 300-500 amps of surge current to the **Starter Motor** to crank the engine over. Once the engine starts, the battery steps back.
2. **The Alternator**: Driven by the engine serpentine belt, the alternator generates electrical power to run all lights, AC blowers, audio systems, and ECUs while simultaneously replenishing the battery’s charge.

If the alternator serpentine belt snaps or the alternator regulator fails, the car runs solely on stored battery reserve for 15-30 minutes before total electrical shutdown occurs.`,
    components: [
      { name: '12V Lead-Acid / AGM Starter Battery', description: 'Provides cold cranking power to turn the starter motor and stabilize voltage.', importance: 'critical' },
      { name: 'Alternator & Voltage Regulator', description: 'Generates electrical AC power converted to DC to run accessories and recharge the battery.', importance: 'critical' },
      { name: 'Starter Motor & Solenoid', description: 'High-torque electric motor engaging the engine flywheel ring gear to initiate combustion.', importance: 'critical' },
      { name: 'Fuse & Relay Box', description: 'Protects wiring circuits from short circuits and fire by blowing sacrificial fuse links.', importance: 'critical' },
      { name: 'Engine Control Unit (ECU)', description: 'Central microcomputer processing inputs from dozens of engine sensors.', importance: 'critical' },
    ],
    warningSigns: [
      { sign: 'Red battery icon illuminated on dashboard while driving', possibleCause: 'Alternator failure or broken serpentine drive belt; battery is not charging.', severity: 'high', action: 'Turn off headlights, AC, and stereo; drive directly to nearest workshop before battery drains.' },
      { sign: 'Rapid clicking sound when turning ignition key, engine refuses to crank', possibleCause: 'Discharged or dead 12V battery; starter solenoid engages but voltage collapses.', severity: 'high', action: 'Jump-start using jumper cables or call roadside assistance.' },
      { sign: 'Headlights dim noticeably when car is idling at red light', possibleCause: 'Weakening alternator output or loose alternator belt.', severity: 'medium', action: 'Test alternator charging voltage (should read 13.8V to 14.4V when engine is running).' },
    ],
    maintenanceTips: [
      'Car batteries in hot Indian climates typically last 3 to 4 years; replace proactively if cranking becomes sluggish.',
      'Check battery terminal clamps for white or green powdery acid corrosion; pour warm water over terminals to dissolve buildup and coat with petroleum jelly.',
      'Never disconnect battery terminals while the engine is running on modern cars; the resulting alternator voltage spike can destroy sensitive ECUs.',
    ],
    commonMyths: [
      { myth: 'Push-starting or jump-starting a completely dead car will immediately recharge the battery fully.', reality: 'An alternator is designed to trickle-charge a healthy battery, not charge a deeply discharged dead battery from zero. A dead battery needs bench charging.' },
    ],
  },
  {
    id: 'sys-tires',
    name: 'Tires & Wheels',
    slug: 'tires-wheels',
    icon: 'CircleDot',
    shortDescription: 'Your vehicle’s only physical contact patch with the road — safety, traction, braking, and steering all depend on them.',
    howItWorks: `Each tire contacts the tarmac on an area roughly the size of a human palm (the **Contact Patch**). Everything your car does — braking from 100 km/h, cornering, and accelerating — depends on the friction generated by these four palm-sized patches.

Modern tubeless radial tires use steel-belted radial cords covered in vulcanized rubber silica compounds:
- **Tread Grooves**: Designed to channel water away from beneath the tire contact patch in wet monsoon conditions (pumping up to 30 litres of water per second) to prevent hydroplaning.
- **Sidewall**: Absorbs road shocks and maintains vertical tire profile under cornering loads.
- **Tire Pressure**: Proper air pressure ensures the tire tread sits flat and square on the pavement for optimal grip and even wear.`,
    components: [
      { name: 'Tread Pattern & Sipes', description: 'Grooved rubber surface contacting the tarmac, channeling water, and providing tractive grip.', importance: 'critical' },
      { name: 'Tire Sidewall', description: 'Flexible vertical rubber wall containing tire size markings, load index, and speed rating.', importance: 'critical' },
      { name: 'Steel Belts & Beads', description: 'Internal woven steel plies anchoring the tire securely to the wheel rim bead seat.', importance: 'critical' },
      { name: 'Alloy / Steel Wheel Rim', description: 'Rigid metal structural wheel mounting the tire and bolting to the brake hub.', importance: 'critical' },
      { name: 'TPMS Sensor', description: 'Valve-stem pressure transducer transmitting wireless tire PSI telemetry to the car computer.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'Vibration in steering wheel at 80-100 km/h that disappears at lower speeds', possibleCause: 'Front wheels out of dynamic balance (missing wheel counterweights).', severity: 'medium', action: 'Get dynamic computerized wheel balancing done.' },
      { sign: 'Tire tread wearing heavily on outer edges only, while center is intact', possibleCause: 'Chronic under-inflation (running lower tire pressure than recommended).', severity: 'medium', action: 'Inflate tires to manufacturer placard specifications.' },
      { sign: 'Tire tread wearing heavily in the center only', possibleCause: 'Chronic over-inflation.', severity: 'medium', action: 'Reduce tire pressure to recommended PSI.' },
      { sign: 'Visible egg-shaped bulge or bubble on the tire sidewall', possibleCause: 'Internal steel radial belt fracture caused by slamming into a sharp pothole edge.', severity: 'high', action: 'Replace tire immediately; sidewall bulges are prone to catastrophic highway blowouts.' },
    ],
    maintenanceTips: [
      'Check tire pressure every 2 weeks when tires are COLD (driven less than 2 km).',
      'Follow recommended tire pressure on the driver door jamb sticker, NOT the maximum PSI number stamped on the tire sidewall.',
      'Rotate all four tires every 8,000 to 10,000 km to equalize wear across front (steering/drive) and rear axles.',
      'Replace tires when tread depth reaches 2mm or after 5-6 years of manufacture regardless of remaining tread (rubber oxidizes and hardens).',
    ],
    commonMyths: [
      { myth: 'Filling tires with 100% nitrogen is mandatory and vastly superior to ordinary air.', reality: 'Regular ambient air already consists of 78% nitrogen. Pure nitrogen leaks marginally slower and runs slightly cooler, but maintaining correct PSI with regular air is 95% as effective and free.' },
    ],
  },
  {
    id: 'sys-dashboard',
    name: 'Dashboard Warning Lights & Clusters',
    slug: 'dashboard-warning-lights',
    icon: 'AlertOctagon',
    shortDescription: 'Real-time telemetry and warning annunciator lights communicating critical automotive health status.',
    howItWorks: `Your instrument cluster utilizes an international color-coded warning standard:

- 🔴 **RED Warning Lights**: Critical danger! Requires immediate action. Stop driving safely and turn off the engine (e.g. Engine Oil Pressure, Brake System Failure, High Engine Coolant Temperature).
- 🟡 **AMBER / YELLOW Warning Lights**: Cautionary alert. Something requires attention or servicing soon, but immediate stopping is not mandatory (e.g. Check Engine Light, Low Tire Pressure, ABS Malfunction, Low Fuel).
- 🟢 **GREEN / BLUE Indicator Lights**: Informational status confirming that an auxiliary system is actively operating (e.g. Turn Signal Flasher, High Beam Headlights, Cruise Control Active).`,
    components: [
      { name: 'Check Engine Lamp (MIL)', description: 'Amber engine outline signaling an engine, emission, or sensor fault stored in the ECU.', importance: 'important' },
      { name: 'Oil Can Lamp', description: 'Red oil can signaling critical loss of engine oil hydraulic pressure.', importance: 'critical' },
      { name: 'Thermometer in Waves', description: 'Red thermometer signaling severe engine overheating.', importance: 'critical' },
      { name: 'Battery Icon', description: 'Red battery outline signaling 12V charging system failure.', importance: 'critical' },
      { name: 'Exclamation Mark in Circle (!)', description: 'Red handbrake engaged or low brake fluid warning.', importance: 'critical' },
      { name: 'ABS in Circle', description: 'Amber ABS letters warning that anti-lock brake assist is non-operational.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'Red Oil Pressure Light stays on after engine starts', possibleCause: 'Oil level critically low, oil pump failed, or relief valve stuck.', severity: 'high', action: 'Shut down engine immediately within 5 seconds to avoid engine destruction.' },
      { sign: 'Flashing (blinking) Check Engine Light', possibleCause: 'Severe engine cylinder misfire dumping raw unburnt fuel into the catalytic converter (fire hazard).', severity: 'high', action: 'Ease off throttle, avoid high speeds, and stop driving immediately.' },
      { sign: 'Airbag Warning Lamp stays illuminated', possibleCause: 'Clockspring failure in steering wheel or faulty crash sensor; airbags will NOT deploy in a crash.', severity: 'high', action: 'Get safety SRS system checked at authorized dealership.' },
    ],
    maintenanceTips: [
      'Observe the instrument cluster every time you switch the ignition ON: all warning lamps should light up for 3 seconds (bulb check) and then turn off after engine cranks.',
      'Purchase an inexpensive Bluetooth OBD-II scanner tool; it plugs into your car’s diagnostic port under the steering column to read check engine fault codes on your phone.',
    ],
    commonMyths: [
      { myth: 'Disconnecting the car battery for 10 minutes permanently fixes a check engine light.', reality: 'It merely clears the ECU temporary memory. The moment the ECU completes a drive cycle and detects the underlying faulty sensor, the light illuminates again.' },
    ],
  },
  {
    id: 'sys-safety',
    name: 'Active & Passive Safety Systems',
    slug: 'safety-systems',
    icon: 'Shield',
    shortDescription: 'High-tech electronics and physical structural barriers engineered to prevent crashes and protect passengers.',
    howItWorks: `Automotive safety is divided into two distinct engineering categories:

### 1. Active Safety (Crash Prevention)
Systems that actively prevent accidents from occurring:
- **ABS (Anti-lock Braking System)**: Prevents wheels from locking up under emergency panic braking, enabling the driver to steer around obstacles while stopping.
- **EBD (Electronic Brakeforce Distribution)**: Dynamically balances braking force between front and rear axles based on vehicle passenger and cargo weight distribution.
- **ESP / ESC (Electronic Stability Program)**: Constantly compares driver steering angle with actual vehicle yaw rate. If the car starts to spin out (oversteer) or plow straight (understeer), ESP brakes individual wheels to pull the car back into control.
- **Traction Control (TCS)**: Prevents drive wheels from spinning uselessly on slick mud, ice, or wet road surfaces.

### 2. Passive Safety (Crash Survival)
Structural and restraint elements protecting occupants during an inevitable impact:
- **Crumple Zones**: Specially designed accordion crumple zones in front and rear chassis frames that crush progressively to absorb kinetic crash energy.
- **Crumple Cabin (Safety Cell)**: Ultra-high-strength boron steel cage surrounding passenger cabin that resists deformation.
- **Airbags (Front, Side, Curtain)**: Deploy within 20-30 milliseconds using explosive sodium azide gas to cushion human heads and torsos.
- **Pre-tensioner Seatbelts**: Pyro-actuators retract seatbelts instantaneously upon impact, locking occupants firmly into seat cushions before the airbag arrives.`,
    components: [
      { name: 'Frontal & Curtain Airbags', description: 'Inflatable safety bags cushioning heads and preventing occupant ejection.', importance: 'critical' },
      { name: 'Electronic Stability Program (ESC)', description: 'Computerized stability sensor braking individual wheels to arrest skids.', importance: 'critical' },
      { name: 'Three-Point Seatbelts with Pre-tensioners', description: 'Primary life-saving restraint arresting human inertia.', importance: 'critical' },
      { name: 'ISOFIX Child Seat Anchors', description: 'Standardized rigid metal anchor bars securing infant child seats directly to vehicle chassis.', importance: 'critical' },
      { name: 'High-Strength Steel Safety Cell', description: 'Reinforced passenger cage maintaining survival space during rollover or t-bone crashes.', importance: 'critical' },
    ],
    warningSigns: [
      { sign: 'ESC / Traction control light flashing while cornering or accelerating in rain', possibleCause: 'Tires losing traction; computer actively intervention to keep vehicle stable.', severity: 'medium', action: 'Normal operation — indicates car is at the limit of grip. Ease off accelerator!' },
      { sign: 'Airbag warning light stays on continuously', possibleCause: 'Defective airbag squib, pretensioner, or severed wiring.', severity: 'high', action: 'Service immediately; airbags are inactive in this state.' },
    ],
    maintenanceTips: [
      'Ensure every passenger wears a seatbelt — rear passengers without seatbelts turn into 80 kg human missiles during a crash, crushing front occupants.',
      'Check ISOFIX child seat click indicators are green before driving with infants.',
      'Never place a rear-facing infant child car seat in the front passenger seat if front passenger airbag cannot be manually deactivated.',
    ],
    commonMyths: [
      { myth: 'Airbags make seatbelts unnecessary; the airbag will catch you.', reality: 'Airbags are supplemental restraints (SRS). If unbelted, an occupant hits an expanding 300 km/h airbag at the wrong instant, which can cause fatal neck trauma.' },
      { myth: 'Heavier cars with thick outer body sheets are automatically safer than lighter modern cars.', reality: 'Modern crash safety relies on crumple zones absorbing energy and rigid safety cages, not sheet metal thickness. 5-star Bharat NCAP cars disperse crash energy around the cabin.' },
    ],
  },
  {
    id: 'sys-hvac',
    name: 'HVAC & Cabin Climate Control',
    slug: 'hvac-climate-control',
    icon: 'Wind',
    shortDescription: 'Air conditioning, heating, demisting, and cabin air filtration systems.',
    howItWorks: `Your car’s Air Conditioning system uses the refrigeration compression cycle:
1. **Compressor**: Engine-driven pump that compresses low-pressure gaseous refrigerant (R134a or R1234yf) into high-pressure, hot gas.
2. **Condenser**: Located in front of the engine radiator; cools the hot refrigerant gas into high-pressure liquid.
3. **Expansion Valve**: Releases refrigerant into low pressure, causing rapid thermodynamic cooling.
4. **Evaporator**: Cold refrigerant flows through an in-cabin radiator core. The cabin blower fan pushes air across these freezing fins, delivering cold air through your AC vents while extracting cabin humidity.
5. **Cabin Air Filter**: Filters road dust, PM2.5 particles, and pollen before entering the cabin.

**Windshield Defogger Function**: When humid monsoon air fogs up the inner windshield, turning ON the AC with the defogger vent setting blows dehumidified dry air onto the glass, clearing condensation in seconds.`,
    components: [
      { name: 'AC Compressor & Magnetic Clutch', description: 'Compresses refrigerant vapor to drive the thermodynamic cooling cycle.', importance: 'important' },
      { name: 'Condenser & Radiator Fan', description: 'Dissipates heat extracted from cabin to exterior atmosphere.', importance: 'important' },
      { name: 'Evaporator Core & Blower Motor', description: 'Cools and dehumidifies cabin air.', importance: 'important' },
      { name: 'Cabin Pollen Filter (PM2.5)', description: 'Stops road soot, dust, and pollen from entering cabin vents.', importance: 'important' },
      { name: 'Heater Core', description: 'Uses hot engine coolant to warm the passenger cabin in winter.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'AC blowing lukewarm air despite fan running at full speed', possibleCause: 'Refrigerant gas leak in condenser coil or faulty compressor magnetic clutch.', severity: 'medium', action: 'Inspect AC system for refrigerant leaks.' },
      { sign: 'Musty, foul odor like damp socks when AC is switched on', possibleCause: 'Mold and bacterial growth on wet evaporator core inside dashboard.', severity: 'low', action: 'Replace cabin air filter and get anti-bacterial AC duct cleaning.' },
      { sign: 'Windows fogging up rapidly during monsoon driving', possibleCause: 'Air recirculation set to fresh air mode or AC compressor turned off.', severity: 'medium', action: 'Turn ON AC compressor, set to fresh air, and select windshield defogger vent mode.' },
    ],
    maintenanceTips: [
      'Replace the cabin air filter every 10,000 km or 1 year; in dusty Indian cities, filters get clogged rapidly, drastically reducing AC airflow.',
      'Run your car AC for at least 10 minutes once a week even during cold winter months to circulate compressor lubricant and keep rubber O-ring seals moist.',
    ],
    commonMyths: [
      { myth: 'Driving with windows rolled down on the highway saves more fuel than using the AC.', reality: 'Above 80 km/h, open windows create immense aerodynamic parachute drag. At highway speeds, driving with AC on is actually more fuel efficient than open windows.' },
    ],
  },
  {
    id: 'sys-exhaust',
    name: 'Exhaust & Emission Control (BS-VI)',
    slug: 'exhaust-emissions',
    icon: 'Flame',
    shortDescription: 'Treats harmful combustion gases, captures particulate matter, and mutes exhaust acoustic noise.',
    howItWorks: `Under Indian Bharat Stage VI (BS-VI) emission regulations, automotive exhaust systems feature sophisticated chemical treatment:

- **Exhaust Manifold**: Gathers burning gases from individual engine cylinder ports into a single pipe.
- **Oxygen Sensors (O2)**: Measures residual oxygen in exhaust gas to tell the engine ECU whether the fuel mixture is too rich or too lean.
- **Catalytic Converter**: Uses precious metal catalysts to chemically reduce toxic Carbon Monoxide (CO), Hydrocarbons (HC), and Nitrogen Oxides (NOx).
- **Diesel Particulate Filter (DPF) / Gasoline Particulate Filter (GPF)**: Honeycomb ceramic filter that traps 99% of microscopic black carbon soot particles.
- **SCR (Selective Catalytic Reduction) with DEF / AdBlue (Diesel)**: Injects an aqueous urea solution (AdBlue) into exhaust gases to break down harmful NOx into harmless nitrogen and water.
- **Muffler / Silencer**: Acoustic expansion chambers cancelling out sound waves.`,
    components: [
      { name: 'Catalytic Converter', description: 'Chemical reactor eliminating toxic carbon monoxide and nitrogen oxides.', importance: 'critical' },
      { name: 'Diesel Particulate Filter (DPF)', description: 'Traps soot particles; requires periodic high-temperature regeneration drives.', importance: 'critical' },
      { name: 'AdBlue / DEF Dosing Unit (BS-VI Diesel)', description: 'Injects urea to convert NOx into pure nitrogen and water.', importance: 'critical' },
      { name: 'Upstream & Downstream O2 Sensors', description: 'Monitors fuel combustion efficiency and catalyst health.', importance: 'important' },
      { name: 'Muffler & Exhaust Pipes', description: 'Channels gases to vehicle rear and muffles acoustic explosion sound waves.', importance: 'important' },
    ],
    warningSigns: [
      { sign: 'DPF Warning Light glowing on diesel car dashboard', possibleCause: 'Particulate soot filter clogged due to chronic short-distance city driving.', severity: 'high', action: 'Take car on open highway and drive at 60-80 km/h above 2,000 RPM for 25-30 minutes to trigger auto-regeneration.' },
      { sign: 'Loud roaring exhaust sound like a sports car or tractor', possibleCause: 'Rusted or cracked exhaust pipe, or catalytic converter stolen/damaged.', severity: 'medium', action: 'Inspect exhaust underbody at muffler shop.' },
      { sign: 'Rotten egg (sulfur) smell from exhaust pipe', possibleCause: 'Failing catalytic converter or fuel with excessive sulfur content.', severity: 'medium', action: 'Have emissions system inspected.' },
    ],
    maintenanceTips: [
      'For BS-VI diesel cars, avoid solely short 2-3 km city grocery runs; take an occasional 30-minute highway drive to let the DPF regenerate.',
      'Refill AdBlue (DEF) with certified ISO 22241 standard fluid; never add tap water into the AdBlue tank as it destroys the dosing injector.',
    ],
    commonMyths: [
      { myth: 'Removing the catalytic converter or installing a free-flow pipe gives massive safe power gains.', reality: 'It makes the car fail legal PUC emission checks, voids insurance, triggers continuous check engine lights, and spews toxic carcinogens into the air.' },
    ],
  },
];
