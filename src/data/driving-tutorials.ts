import { DrivingTutorial } from '@/types/content';

export const DRIVING_TUTORIALS_DATA: DrivingTutorial[] = [
  // ==================== 1. BEFORE YOU START ====================
  {
    id: 'tut-cockpit-drill',
    title: 'The Cockpit Drill: Seat, Mirrors & Control Setup',
    slug: 'cockpit-drill-setup',
    category: 'before-you-start',
    difficulty: 'beginner',
    estimatedReadTime: 4,
    content: `Before you insert the key or push the start button, executing a systematic **Cockpit Drill** (often remembered as **DSSSM**: Doors, Seat, Steering, Seatbelt, Mirrors) is the prerequisite for safe car control.

### 1. Doors & Security
Ensure all doors are securely closed and latched. Confirm the door ajar warning lamp on your dashboard is dark.

### 2. Seat Adjustment
- **Distance from Pedals**: Depress the clutch pedal (in manual) or footbrake (in automatic) completely to the floorboard with your foot. Your knee should still have a comfortable 120-degree bend. Never sit so far back that your leg locks straight at full extension.
- **Seat Height**: Raise the seat so your eyes are roughly halfway up the windshield glass.
- **Backrest Angle**: Adjust the backrest to a nearly upright posture (roughly 100 to 110 degrees). Rest your wrists on top of the steering wheel rim with shoulders flat against the seat; your wrists should rest naturally on the rim without stretching your shoulders forward.

### 3. Steering Wheel Tilt & Reach
Adjust the steering column so the center airbag hub points directly at your chest, not your face or throat. Ensure the upper rim does not block your clear view of the speedometer and warning lights.

### 4. Setting the Three Mirrors
- **Interior Rearview Mirror (IRVM)**: Frame the entire rear glass in one glance without shifting your torso.
- **Left & Right Outer Wing Mirrors (ORVMs)**: Adjust so you can just barely see the rear door handle of your car in the bottom-inner corner of the glass (taking up only 10% of mirror width). The remaining 90% should display the road and adjacent lane.

### 5. Seatbelt Fastening
Pull the strap across your collarbone and chest, clicking into the buckle. Ensure the lap portion lies flat across your pelvic hip bones, NOT your soft stomach.`,
    keyTakeaways: [
      'Proper seating posture gives you maximum mechanical leverage over pedals in panic stops.',
      'Mirrors should show the road, not your own car body.',
      'Knee must always retain a flexed bend at full pedal depression.',
    ],
    tips: [
      'Adjust your seat before adjusting your mirrors; if you move your seat later, mirror sightlines are ruined.',
      'Check that your foot rests naturally on the floorboard with the heel anchored.',
    ],
    warnings: [
      'Never adjust your driver seat while the car is moving. The seat can slide back violently, causing loss of pedal control.',
    ],
    commonMistakes: [
      'Reclining the backrest too far back like a sofa, which leads to rapid driver fatigue and neck strain.',
      'Setting side mirrors so wide that 40% of the mirror displays the car’s own rear fender.',
    ],
    practiceExercises: [
      'Practice entering the car, closing the door, and adjusting seat, mirrors, and belt until the entire sequence takes under 30 seconds.',
    ],
  },
  {
    id: 'tut-pedal-controls',
    title: 'Understanding Foot Pedals (ABC) & Hand Controls',
    slug: 'understanding-pedals-controls',
    category: 'before-you-start',
    difficulty: 'beginner',
    estimatedReadTime: 4,
    content: `The primary foot controls of any automobile follow a universal layout from left to right: **A-B-C** in manual cars, or **B-A** in automatics.

### The ABC of Manual Cars:
1. **A = Accelerator (Gas / Throttle)**: Located on the far right. Operated solely by the right foot. Gentle pressure regulates engine RPM and speed.
2. **B = Brake**: Located in the center. Operated solely by the right foot. Squeezes hydraulic pads onto discs to slow down or halt.
3. **C = Clutch**: Located on the far left. Operated solely by the left foot. Engages and disengages the engine from the transmission when changing gears or stopping.

### The Golden Rule of Footwork:
- **Left Foot**: Reserved exclusively for the Clutch pedal (in manual) or rests on the **Dead Pedal** footrest (in automatic).
- **Right Foot**: Responsible for both the Accelerator and the Brake.
- **Heel Position**: Keep your right heel anchored on the floorboard in front of the brake pedal, pivoting the ball of your foot between throttle and brake.

### Primary Hand Controls:
- **Steering Wheel**: Steers the vehicle using push-pull or hand-over-hand technique.
- **Gear Lever**: Selects drive ratios (1-5/6 and R in manual; P-R-N-D in automatic).
- **Handbrake / E-Brake**: Cable lever or electronic button locking the rear wheels mechanically to prevent rollaway when parked or starting on hills.
- **Stalks**: Right stalk (in Indian RHD cars) controls indicators and headlights; left stalk controls windshield wipers and washers.`,
    keyTakeaways: [
      'Never use both feet on brake and accelerator simultaneously.',
      'Right foot pivots on the heel between brake and throttle.',
      'Left foot operates only the clutch in manual; rests idle in automatic.',
    ],
    tips: [
      'Wear flat, thin-soled sneakers or shoes with good rubber grip when driving.',
      'Avoid thick-soled boots or loose sandals that can catch on pedal edges.',
    ],
    warnings: [
      'Driving barefoot or in flip-flops is hazardous: loose slippers can slip under the brake pedal, preventing emergency stopping.',
    ],
    commonMistakes: [
      'Resting your left foot on the clutch pedal while driving along normally (burns out the clutch).',
      'Using the left foot to brake in an automatic car (leads to violent accidental brake stomps).',
    ],
  },

  // ==================== 2. BASIC MANUAL DRIVING ====================
  {
    id: 'tut-manual-starting-moving',
    title: 'Manual Driving: Engine Start, Clutch Biting Point & Moving Off',
    slug: 'manual-clutch-biting-point-moving',
    category: 'basic-manual',
    difficulty: 'beginner',
    estimatedReadTime: 5,
    content: `Moving off smoothly in a manual car without stalling or jerking is the biggest milestone for any new driver. It all centers on mastering the **Clutch Biting Point**.

### What is the Biting Point?
The clutch disc has two friction faces sandwiched between the engine flywheel and the gearbox pressure plate.
- When the clutch pedal is pressed down to the floor, the engine spins freely without touching the wheels.
- When you slowly raise your left foot, there is a physical point where the plates first touch and start gripping: **the Biting Point**.
- At this point, the car wants to creep forward, and the engine sound deepens slightly as RPM drops.

### Step-by-Step Sequence to Move Off:
1. **Safety Check**: Handbrake must be pulled up. Gear lever in Neutral (wiggles freely side to side).
2. **Start Engine**: Press clutch pedal to the floor. Turn the key or press start button.
3. **Select 1st Gear**: Push gear lever left and forward into 1st gear.
4. **Prepare the Gas**: Press the accelerator pedal very gently until engine revs reach roughly 1,200 to 1,500 RPM (a gentle hum).
5. **Find the Biting Point**: Slowly lift your left foot off the clutch pedal. Watch and feel:
   - You will feel a slight vibration in the pedal.
   - The engine tone drops slightly.
   - The car's front nose lifts or squats slightly.
6. **Release Handbrake**: Hold your left foot completely STILL at the biting point! Push the handbrake button and lower it down.
7. **Roll & Smooth Release**: The car will start rolling forward smoothly. After rolling 3-5 meters, slowly and gently release the remaining clutch travel. Now rest your left foot on the floor.`,
    keyTakeaways: [
      'Never dump or pop the clutch pedal abruptly; hold it steady at the biting point for 2 seconds while moving.',
      'A tiny touch of accelerator (1,200 RPM) prevents stalling in petrol cars.',
      'Modern diesel cars can crawl in 1st gear on clutch alone without throttle.',
    ],
    tips: [
      'Practice in an empty parking lot or quiet cul-de-sac with no traffic.',
      'If the car starts shuddering as if about to die, push the clutch back down an inch immediately to save the engine from stalling!',
    ],
    warnings: [
      'If the car stalls in traffic, do not panic! Press clutch and footbrake immediately, shift to Neutral, restart the engine, and reset.',
    ],
    commonMistakes: [
      'Lifting the clutch pedal in one fast continuous stroke (causes immediate violent stall).',
      'Forgetting to disengage the handbrake before driving away.',
    ],
    practiceExercises: [
      'Clutch-only crawl exercise: In an empty lot, practice getting the car moving in 1st gear using ONLY the clutch pedal without touching the accelerator at all.',
    ],
  },
  {
    id: 'tut-manual-shifting-gears',
    title: 'Gear Changing: Upshifting, Downshifting & Smooth Deceleration',
    slug: 'manual-gear-shifting-technique',
    category: 'basic-manual',
    difficulty: 'beginner',
    estimatedReadTime: 5,
    content: `Changing gears smoothly is about timing: coordinating throttle release, clutch depression, positive gear gate selection, and smooth clutch re-engagement.

### When to Shift Gears (General RPM & Speed Guide):
- **1st Gear**: 0 to 15 km/h (Used solely to get moving from a standstill)
- **2nd Gear**: 15 to 30 km/h (Slow turns, roundabouts, heavy crawl)
- **3rd Gear**: 30 to 45 km/h (Standard city road driving)
- **4th Gear**: 45 to 60 km/h (Open city avenues, bypasses)
- **5th / 6th Gear**: 60 km/h and above (Highway cruising)

### The 4-Step Upshift Routine:
1. **Accelerate**: Build momentum in your current gear until engine reaches ~2,000 to 2,500 RPM.
2. **Clutch In, Gas Out**: Simultaneously lift your right foot off the accelerator while pushing the clutch pedal smoothly to the floor.
3. **Change Gear**: Guide the gear stick into the next gear smoothly using palm pressure (open palm towards yourself for 1st-2nd, open palm away for 5th). Never force or slam the lever.
4. **Clutch Out, Gas In**: Smoothly release the clutch pedal over 1 second while gently feeding in throttle.

### Downshifting (Shifting to a Lower Gear):
Downshifting is required when your speed drops (e.g. slowing for a speed bump or turn) so the engine doesn't struggle or knock.
- Brake first to reduce vehicle speed to the target range.
- Press clutch fully down.
- Select the lower gear (e.g. 4th to 2nd before a turn).
- Smoothly release the clutch. The engine RPM will rise to match road speed (engine braking).`,
    keyTakeaways: [
      'Gears should be guided with an open palm, not gripped like a baseball bat.',
      'Always brake to reduce speed first; only shift down when speed matches the lower gear.',
      'Do not coast with the clutch held down for long distances (coasting reduces vehicle stability).',
    ],
    tips: [
      'The "neutral spring" naturally centers the gear lever between 3rd and 4th. To shift from 2nd to 3rd, push forward and let the spring center it, then push straight up.',
    ],
    warnings: [
      'Never accidentally downshift into 1st gear while moving at speed (e.g. 50 km/h); this causes a severe mechanical over-rev that can destroy the engine and lock rear wheels.',
    ],
    commonMistakes: [
      'Rushing the gear lever and grinding teeth against the gate.',
      'Shifting down without slowing down first, causing the car to lurch violently forward.',
    ],
  },

  // ==================== 3. BASIC AUTOMATIC DRIVING ====================
  {
    id: 'tut-auto-prndl',
    title: 'Driving an Automatic: PRNDL Modes, Creep Function & Two-Pedal Mastery',
    slug: 'automatic-driving-prndl-creep',
    category: 'basic-automatic',
    difficulty: 'beginner',
    estimatedReadTime: 4,
    content: `Driving an automatic transmission car is significantly simpler than a manual, but requires mastering a few crucial habits to avoid catastrophic mistakes.

### The Gear Selector Modes (P-R-N-D):
- **P (Park)**: Mechanically locks the transmission output shaft with a metal pin (parking pawl). Use ONLY when the car is completely stationary and you are parking.
- **R (Reverse)**: Engages reverse gear for backing up. Requires brake pedal depression to engage.
- **N (Neutral)**: Disconnects transmission from wheels. The car can roll freely. Used for towing or automated car washes.
- **D (Drive)**: Forward driving. The transmission automatically shifts through all forward gears based on speed and throttle input.
- **M / S / L / B (Manual / Sport / Low / Brake Regen)**:
  - **S (Sport)**: Holds lower gears longer for sharper throttle response and highway overtaking.
  - **L (Low)**: Locks the transmission in 1st/2nd gear for steep descents or towing.
  - **B (Brake)**: In hybrid/electric vehicles, maximizes regenerative braking down slopes.

### The Creep Function:
In conventional Torque Converter, CVT, and dual-clutch automatics, when the car is in **D** or **R** and you take your foot off the brake pedal, the car will slowly "creep" forward or backward at 5-8 km/h without touching the accelerator. This makes bumper-to-bumper traffic and tight parking effortless.

### Crucial Safety Rules for Automatics:
1. **Tuck Left Foot Away**: Place your left foot firmly on the dead pedal footrest and leave it there. Never attempt two-foot driving!
2. **Hold Brake to Shift**: Always depress the footbrake fully before shifting out of Park (P) or between D and R.`,
    keyTakeaways: [
      'Your left foot must NEVER touch the brake pedal in an automatic car.',
      'Always bring the car to a 100% full stop before shifting into Park (P) or Reverse (R).',
      'Use Low (L) or Manual mode when descending steep mountain ghats to get engine braking.',
    ],
    tips: [
      'At red lights under 30 seconds, simply keep your right foot on the brake in Drive (D).',
      'If stopped for more than 45 seconds, shift to Neutral (N) and engage the handbrake to rest your right foot.',
    ],
    warnings: [
      'Shifting into Park (P) while the car is still rolling can snap the internal parking pawl, causing thousands of rupees in transmission damage.',
    ],
    commonMistakes: [
      'Accidentally using the left foot to brake: because left-foot drivers lack muscle memory on the brake pedal, they slam it down like a clutch, triggering violent emergency stops.',
    ],
  },

  // ==================== 4. ESSENTIAL MANEUVERS ====================
  {
    id: 'tut-parallel-parking',
    title: 'Parallel Parking: The 45-Degree Angle Reference Method',
    slug: 'parallel-parking-step-by-step',
    category: 'essential-maneuvers',
    difficulty: 'intermediate',
    estimatedReadTime: 5,
    content: `Parallel parking on crowded Indian streets between two cars is feared by many, but can be completed effortlessly using the proven **45-Degree Reference Point Technique**.

### Step 1: The Setup
- Signal your intention to park on the left.
- Pull up parallel alongside the car parked ahead of your empty parking spot.
- Leave roughly 2.5 to 3 feet (1 meter) of side clearance between cars.
- Align your car’s **rear bumper** (or rear axle) directly parallel with the parked car’s rear bumper. Stop and shift into **Reverse (R)**.

### Step 2: The 45-Degree Entry
- Turn your steering wheel **one full turn to the left** (towards the curb).
- Slowly reverse while monitoring your mirrors.
- Stop when your car is at a **45-degree angle** to the curb.
- *Visual Check*: In your right outer mirror, you should now be able to see the entire front grille and license plate of the car parked behind you.

### Step 3: Straighten and Tuck In
- Straighten your steering wheel (turn back to center).
- Reverse straight back until your front bumper just clears the rear bumper of the car in front.
- Now turn your steering wheel **all the way to the right** (away from the curb) as you continue reversing slowly.
- Your car’s front nose will swing smoothly into the space while the rear tucks parallel to the pavement.

### Step 4: Straighten Up & Center
- Shift into 1st gear (or Drive), straighten your wheels, and pull forward 1-2 feet to center your vehicle equidistant between both cars.`,
    keyTakeaways: [
      'Stop and align rear bumpers before initiating the reverse maneuver.',
      'Enter at a clean 45-degree angle, then cut opposite lock to tuck the front nose in.',
      'Always look over your shoulder and watch for oncoming two-wheelers slipping past.',
    ],
    tips: [
      'Tilt your left side mirror down slightly before parking so you can see the curb edge clearly and avoid curb-rash on your alloy wheels.',
      'Reverse at walking pace using clutch/brake slip control.',
    ],
    warnings: [
      'Watch your front right bumper swing! When you steer opposite, your front outer bumper swings wide into the road traffic lane.',
    ],
    commonMistakes: [
      'Starting to reverse too far away from the front car or trying to drive in nose-first.',
      'Turning the wheel too late, causing the rear tire to strike the curb.',
    ],
    practiceExercises: [
      'Set up two cardboard boxes or plastic buckets spaced 1.5 car lengths apart in an empty lot and practice the 45-degree tuck.',
    ],
  },
  {
    id: 'tut-hill-start-gradient',
    title: 'Hill Starts: Conquering Steep Incline Stops Without Rollback',
    slug: 'hill-start-gradient-control',
    category: 'essential-maneuvers',
    difficulty: 'intermediate',
    estimatedReadTime: 5,
    content: `Stopping on a steep flyover or mountain slope and restarting without rolling backwards into the car behind you is a mandatory test component on all RTO automated tracks.

### The Handbrake Method (The Gold Standard):
1. **Secure the Car**: When stopped on the incline, depress the footbrake and firmly pull the handbrake all the way UP. Shift into Neutral. Now you can remove your foot from the brake pedal; the handbrake holds the car steady.
2. **Engage 1st Gear**: Press the clutch pedal down completely and engage 1st gear.
3. **Set the Throttle**: Gently press the accelerator to raise engine revs to approximately 1,500 – 2,000 RPM (you will hear a steady engine hum).
4. **Find the Biting Point**: Slowly bring the clutch pedal up until you feel it bite.
   - The engine tone will drop slightly.
   - The rear of the car will squat down, or the front nose will rise.
   - The car is actively straining against the handbrake!
5. **Release Handbrake**: Hold your feet completely frozen at this exact throttle and clutch position! Release the handbrake lever down.
6. **Climb Away**: Because the engine is already transmitting torque to the wheels, the car will move forward smoothly with **ZERO millimeter of rollback**. After traveling forward, smoothly release the remainder of the clutch.

### In Modern Cars with Hill-Hold Assist:
Many newer cars feature **Hill-Hold Control (HAC)**: when stopped on a slope > 5%, the computerized ABS module maintains hydraulic brake pressure for 2 to 3 seconds after you lift your foot off the brake pedal, giving you ample time to transition to the throttle without rolling back.`,
    keyTakeaways: [
      'The handbrake holds the vehicle until the clutch biting point produces forward pulling force.',
      'Never release the handbrake until the car squats and proves it has torque.',
      'Do not hold the car stationary on a hill using only clutch slip for minutes — this burns the clutch disc.',
    ],
    tips: [
      'Keep your thumb on the handbrake release button throughout step 5 so you can lower it instantly when the clutch bites.',
    ],
    warnings: [
      'Never attempt to start on a steep hill by quickly jumping your right foot from footbrake to gas pedal without the handbrake; you will roll backwards 1 to 2 feet before power arrives.',
    ],
    commonMistakes: [
      'Releasing the handbrake before the clutch has reached the biting point (causes immediate backward roll).',
      'Giving insufficient throttle in petrol cars (causes the engine to stall under the heavy hill load).',
    ],
  },
  {
    id: 'tut-reversing-straight-turn',
    title: 'Mastering Reversing: Straight-Line & Mirror Backing',
    slug: 'reversing-straight-line-turns',
    category: 'essential-maneuvers',
    difficulty: 'beginner',
    estimatedReadTime: 4,
    content: `Reversing confuses new drivers because the mechanics of steering feel inverted. Understanding steering geometry makes reversing predictable and intuitive.

### Golden Rule of Reversing Steering:
> **Turn the wheel in the direction you want the BACK of the car to go.**
- If you want the rear of the car to move towards the **Left**, turn the steering wheel to the **Left**.
- If you want the rear of the car to move towards the **Right**, turn the steering wheel to the **Right**.

### The Danger: Front End Swing
When you reverse and turn the steering wheel, the front wheels do not follow the rear — **the front nose swings wide in the opposite direction!**
- If you reverse turning left, your front right bumper swings out wide like a pendulum.
- Always check clearance in front of you while reversing in tight spaces!

### Proper Reversing Posture & Sightlines:
1. Don't rely solely on backup cameras; cameras have optical distortion and blind zones along the vehicle flanks.
2. Check all three mirrors continuously.
3. For straight-line reversing, turn your upper body slightly to the left, rest your left hand at the 12 o'clock position on the steering wheel, and look back through the rear windshield.
4. Keep vehicle speed below walking pace (3-5 km/h) by feathering the clutch or brake.`,
    keyTakeaways: [
      'Steer the wheel in the direction you want the rear end to move.',
      'Always watch for front bumper swing when turning in reverse.',
      'Rely on a combination of physical shoulder checks, mirrors, and camera.',
    ],
    tips: [
      'Make micro-adjustments to the steering wheel; avoid large, wild turns while reversing.',
    ],
    warnings: [
      'Never reverse onto a high-speed main road or highway from a side street or driveway.',
    ],
    commonMistakes: [
      'Staring exclusively at the infotainment camera screen and backing into a post or motorcycle handle.',
    ],
  },

  // ==================== 5. ROAD DRIVING ====================
  {
    id: 'tut-intersections-roundabouts',
    title: 'Navigating Intersections, Traffic Lights & Roundabouts',
    slug: 'intersections-roundabouts-rules',
    category: 'road-driving',
    difficulty: 'intermediate',
    estimatedReadTime: 5,
    content: `Intersections and roundabouts are statistical hotspots for urban collisions. Approaching them with the **MSPSL** (Mirror, Signal, Position, Speed, Look) routine guarantees smooth transitions.

### Navigating Roundabouts:
In India (clockwise flow around roundabout island):
1. **Approach & Lane Selection**:
   - **Turning Left (1st exit)**: Approach in the left lane, signaling left indicator.
   - **Going Straight (2nd exit)**: Approach in the left or middle lane with NO indicator on entry; signal left just after passing the exit prior to yours.
   - **Turning Right or U-turn (3rd/4th exit)**: Approach in the right lane with right indicator flashing. Circulate inside the roundabout and switch to left indicator before your exit.
2. **Right of Way**: Yield to vehicles already circulating inside the roundabout coming from your right.

### Traffic Light Etiquette:
- **Green Light**: Look both ways before stepping on the gas; red-light runners in the cross street are common in India.
- **Yellow / Amber Light**: Prepare to stop. Only proceed if stopping abruptly would cause the vehicle behind to rear-end you.
- **Stop Line Discipline**: Never stop past the painted white stop line or on top of the zebra pedestrian crossing.

### Unsignalized T-Junctions:
Traffic traveling on the continuous through-road has absolute priority. If you are approaching from the stem of the T, bring your car to a halt and yield to traffic in both directions.`,
    keyTakeaways: [
      'Circulating traffic inside a roundabout has right of way.',
      'Select the proper approach lane 50 meters before entering.',
      'Signal left immediately after passing the exit prior to the one you intend to take.',
    ],
    tips: [
      'Never change lanes abruptly inside the tight curvature of a roundabout.',
    ],
    warnings: [
      'Do not assume other drivers will respect right of way at uncontrolled crossroads in India; always hover your foot over the brake pedal (defensive driving).',
    ],
    commonMistakes: [
      'Entering a roundabout from the leftmost lane and attempting to cut across all lanes to take the 3rd exit.',
    ],
  },
  {
    id: 'tut-overtaking-safely',
    title: 'Safe Overtaking: The 5-Step Passing Protocol',
    slug: 'safe-overtaking-protocol',
    category: 'road-driving',
    difficulty: 'intermediate',
    estimatedReadTime: 5,
    content: `Overtaking is the single highest-risk maneuver in motoring, particularly on single-carriageway two-lane Indian highways where you must occupy the oncoming traffic lane.

### The 5-Step Overtaking Drill:
1. **Assess the Need**: Is overtaking truly necessary? If the vehicle ahead is moving near the speed limit or you are approaching a town or toll plaza within 1 km, stay behind.
2. **Check Restrictions**:
   - Is there a solid white or double yellow line? (Illegal to cross!)
   - Are you approaching a curve, crest of a hill, bridge, or intersection? Never overtake where forward visibility is obstructed.
3. **Drop Back for Visibility**: Do NOT tailgate the vehicle ahead! Hanging 1 meter off the rear bumper of a truck blinds you to oncoming traffic. Fall back 3-4 car lengths so you have a panoramic view down the road.
4. **Mirror, Blind Spot & Signal**: Check rear mirror, right side mirror, and glance over your right shoulder. Flick the right turn indicator on.
5. **Execute with Decisive Acceleration**:
   - Drop down one gear (e.g. 5th to 4th) to get instant engine acceleration torque.
   - Pull smoothly into the passing lane.
   - Accelerate past the vehicle promptly without lingering in its blind spot.
   - When you can see the **entire front grille and headlights** of the passed car in your central interior rearview mirror, signal left and smoothly return to your lane.`,
    keyTakeaways: [
      'Never tailgate prior to overtaking; distance creates forward sightlines.',
      'Downshift one gear to complete the overtake in the shortest possible time.',
      'Do not cut back into lane until the overtaken car is fully visible in your center interior mirror.',
    ],
    tips: [
      'Flash headlights once during daytime on rural roads to alert the truck driver ahead that you are initiating a pass.',
    ],
    warnings: [
      'If in doubt, BAIL OUT! If you misjudged oncoming speed, immediately brake and slot back behind the lead vehicle.',
    ],
    commonMistakes: [
      'Overtaking on blind curves or bridges.',
      'Following a lead car into an overtake blindly ("train overtaking") without verifying the oncoming lane yourself.',
    ],
  },

  // ==================== 6. HIGHWAY DRIVING ====================
  {
    id: 'tut-highway-cruising',
    title: 'Highway & Expressway Driving: Lane Discipline & Speed Control',
    slug: 'highway-expressway-lane-discipline',
    category: 'highway-driving',
    difficulty: 'intermediate',
    estimatedReadTime: 5,
    content: `Expressways like the Yamuna Expressway, Samruddhi Mahamarg, and Mumbai-Pune Expressway allow high-speed transit at 100 to 120 km/h. At these velocities, stopping distances multiply fourfold.

### Proper Lane Discipline on Indian Highways:
- **Left Lane**: Cruising lane for slow-moving trucks, buses, and commercial transport.
- **Middle Lane(s)**: Normal cruising lane for passenger cars traveling at posted highway limits (80-100 km/h).
- **Extreme Right Lane**: **Strictly for OVERTAKING only**. Cruising in the right lane is a traffic violation. Once you pass a vehicle, signal left and return to the middle lane.

### The 3-Second Following Rule:
Under high speeds, expand your following distance:
- Pick a highway gantry or overhead sign.
- When the car ahead passes it, count: *"One-thousand-and-one, one-thousand-and-two, one-thousand-and-three."*
- If you cross the marker before finishing the count, you are tailgating. Back off!

### Merging and Exiting Expressways:
- **Merging**: Use the acceleration slip ramp to accelerate your car up to highway cruising speed (80 km/h) before matching a gap and merging smoothly into traffic. Never enter an expressway at 30 km/h.
- **Exiting**: Move to the leftmost lane at least 1 km before your exit. Do not brake on the main highway carriageway; enter the deceleration ramp and brake there.`,
    keyTakeaways: [
      'The rightmost lane is for overtaking, not for cruising.',
      'Maintain at least 3 seconds of buffer space at 100 km/h.',
      'Match highway speed on the acceleration ramp before merging.',
    ],
    tips: [
      'Take a 15-minute fatigue break every 2 hours or 150 km of highway driving to combat highway hypnosis.',
    ],
    warnings: [
      'Never stop on an expressway carriage lane or shoulder to attend phone calls or take photos. Rear-end collisions on shoulders are among India’s deadliest highway crashes.',
    ],
    commonMistakes: [
      'Undertaking (weaving and passing on the left) at high speeds.',
      'Missing an expressway exit and attempting to reverse back along the shoulder.',
    ],
  },

  // ==================== 7. NIGHT DRIVING ====================
  {
    id: 'tut-night-driving-highbeam',
    title: 'Night Driving: High Beam Etiquette, Glare Management & Stray Hazards',
    slug: 'night-driving-headlights-glare',
    category: 'night-driving',
    difficulty: 'advanced',
    estimatedReadTime: 5,
    content: `Night driving carries a fatality rate 3 times higher than daytime driving due to limited sight distance, unlit rural hazards, and blinding glare from oncoming high beams.

### High Beam vs. Low Beam Etiquette:
- **Low Beam (Dipper)**: Projects light 35-40 meters ahead, angled down towards the road. Use on all lit city roads and whenever there is traffic within 150 meters ahead of you.
- **High Beam**: Projects light 100+ meters straight ahead. Use ONLY on unlit, pitch-black rural highways when no oncoming traffic is visible.
- **When to Dip**: Switch from high beam to low beam immediately when:
  - An oncoming car approaches within 200 meters.
  - You are following behind another car within 50 meters (your high beam blinds their rear mirrors).

### Handling Blinding Oncoming Glare:
When an inconsiderate driver approaches with full high beams:
1. Do not flash back angrily into a blinding high-beam war — now two blind drivers are heading toward each other at 80 km/h!
2. **Look Down & Left**: Avert your eyes from the bright headlights. Focus your gaze on the solid white line painted along the **left edge of the road** (the fog line). This guides your lane position while keeping your peripheral vision clear.
3. Flick your center interior rearview mirror’s manual anti-glare tab (or let auto-dimming engage).

### Unlit Indian Night Hazards:
Always drive at a speed that allows you to stop within the distance illuminated by your headlights. Watch out for:
- Unlit tractors, bullock carts, and broken-down trucks parked without reflectors.
- Stray cattle and dogs crossing dark highway corridors.
- Pedestrians wearing dark clothing.`,
    keyTakeaways: [
      'Never outdrive your headlights: you must be able to stop within illuminated distance.',
      'Switch to low beam within 150m of oncoming vehicles.',
      'Look at the left white curb line to avoid night blindness from oncoming high beams.',
    ],
    tips: [
      'Clean both the inside and outside of your windshield before driving at night; oily film on inner glass scatters light into blinding halos.',
    ],
    warnings: [
      'Using high beams inside city municipal limits is illegal and heavily fined in many Indian cities.',
    ],
    commonMistakes: [
      'Driving with only daytime running lights (DRLs) or parking lights on, thinking headlights are active.',
    ],
  },

  // ==================== 8. ADVERSE CONDITIONS ====================
  {
    id: 'tut-monsoon-rain-aquaplaning',
    title: 'Monsoon Driving: Hydroplaning, Waterlogging & Defogging',
    slug: 'monsoon-rain-hydroplaning-safety',
    category: 'adverse-conditions',
    difficulty: 'advanced',
    estimatedReadTime: 5,
    content: `Indian monsoons bring waterlogged roads, sudden cloudbursts, and zero visibility. Navigating rain requires specialized safety procedures.

### What is Hydroplaning (Aquaplaning)?
When water builds up in front of your tires faster than the tread grooves can evacuate it, water pressure lifts the tire completely off the pavement. Your car glides on a microscopic cushion of water with **zero friction**.
- Steering wheel suddenly goes feather-light and unresponsive.
- Engine RPM may spike as drive wheels slip.

**What to do if you hydroplane**:
- Do NOT slam on the brakes! Sudden braking sends the car spinning.
- Do NOT make violent steering turns.
- Gently ease your foot completely off the accelerator.
- Hold the steering wheel straight and steady. As speed drops, tires will cut through the water film and regain tarmac grip.

### Clearing Fogged Windshields Instantly:
1. Turn ON your Air Conditioner (the AC compressor dehumidifies air).
2. Set temperature dial to comfortable cool or warm.
3. Switch air intake to **Fresh Air mode** (do NOT use recirculation).
4. Direct airflow to the **Front Windshield Defogger** vent.
5. Turn on the rear glass electric demister button.

### Navigating Flooded Waterlogged Roads:
- If water level exceeds the center of your wheel hubs (submerging exhaust pipe), DO NOT enter.
- If safe to cross: Shift into **1st gear**. Maintain continuous, steady accelerator pressure (slipping the clutch if needed) to keep exhaust gases blowing continuously out the tailpipe, preventing water from being sucked back into the engine.
- If the engine stalls in deep water, **DO NOT attempt to restart it!** Water sucked into cylinders causes catastrophic "hydro-lock", bending connecting rods and destroying the engine block.`,
    keyTakeaways: [
      'Ease off throttle if hydroplaning; never slam brakes.',
      'Use AC on fresh-air mode with defogger vent to clear condensation in 30 seconds.',
      'Never crank an engine that stalled in standing water.',
    ],
    tips: [
      'Replace windshield wiper blades before every monsoon season; rubber blades harden under Indian summer sun and streak the glass in rain.',
    ],
    warnings: [
      'Do not drive with hazard lights blinking while moving in heavy rain; other drivers cannot see your turn signals.',
    ],
    commonMistakes: [
      'Using cabin air recirculation in the rain, which traps human breath humidity and fogs the glass opaque.',
    ],
  },
  {
    id: 'tut-fog-winter-driving',
    title: 'Winter Fog Driving: Headlight Usage & Hazard Avoidance',
    slug: 'fog-winter-driving-tips',
    category: 'adverse-conditions',
    difficulty: 'advanced',
    estimatedReadTime: 4,
    content: `Dense winter smog and radiation fog in Northern India (Punjab, Haryana, Delhi-NCR, UP, Bihar) frequently reduce visibility to under 10 meters, leading to multi-vehicle highway pile-ups.

### Key Fog Rules:
1. **Never Use High Beams in Fog**: High beam light reflects directly off billions of suspended water droplets like a mirror, blinding you with a wall of white glare. Always use **Low Beams** accompanied by **Front and Rear Fog Lamps**.
2. **Follow Road Markings**: When forward vision is obscured, track the solid white painted line on the left side of the carriageway (fog line) with your eyes to maintain lane orientation.
3. **Listen for Traffic**: Roll your window down an inch at junctions; when visibility is zero, your ears can hear approaching engine sounds and horns before eyes spot headlights.
4. **Emergency Stopping**: If fog is so dense that driving is impossible, pull your vehicle completely off the highway onto a service lane or petrol pump. Turn on hazard lights once safely parked off the carriageway.`,
    keyTakeaways: [
      'Low beams and fog lamps only; high beams blind the driver in fog.',
      'Follow the white road edge line.',
      'Pull completely off the highway if visibility drops below safe stopping distance.',
    ],
    tips: [
      'Yellow/amber fog lights penetrate fog better than harsh modern cool-white LED headlights.',
    ],
    warnings: [
      'Never stop your vehicle on the active carriageway lane in dense fog; following cars will rear-end you at high speed.',
    ],
    commonMistakes: [
      'Driving too fast for visibility ("driving into the white blind void").',
    ],
  },
];
