export interface BuyingSection {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown
}

export const CAR_BUYING_DATA: BuyingSection[] = [
  {
    id: 'buy-new-vs-used',
    title: 'New Car vs. Used Car: Which Should You Buy?',
    summary: 'Detailed financial and practical comparison for first-time car buyers in India.',
    content: `Choosing between a sparkling brand-new showroom car and a pre-owned used car is the first major fork in the road.

### Buying a New Car:
**Pros:**
- **Zero Wear & Tear**: Pristine mechanical condition, zero previous owner abuse, latest BS-VI phase 2 technology.
- **Factory Warranty**: 3 to 7 years of bumper-to-bumper manufacturer warranty and roadside assistance.
- **Financing Rates**: Lower loan interest rates (typically 8.5% - 9.5% p.a. vs 12% - 15% for used car loans).
- **Peace of Mind**: No hidden accident histories, flooded chassis, or meter-tampering fraud.

**Cons:**
- **Steep Initial Depreciation**: A new car loses 15% to 20% of its market value the instant it rolls out of the showroom, and roughly 40% over the first 3 years.
- **Higher Upfront Taxes**: Full road tax (8% to 15% depending on state), registration, and insurance.

### Buying a Used (Pre-Owned) Car:
**Pros:**
- **Value for Money**: A 3-year-old certified car costs roughly 50-60% of its original price, allowing you to buy a higher segment car (e.g. a pre-owned Honda City for the price of a new Alto/WagonR).
- **Lower Depreciation Loss**: The steepest initial depreciation has already been absorbed by the first owner.
- **Ideal for Beginners**: Dents, scratches, and minor learning mistakes hurt far less on a pre-owned car.

**Cons:**
- **Hidden Mechanical Risks**: Odometer tampering, concealed flood damage, or overdue clutch/suspension overhauls.
- **Higher Loan Interest**: Used car interest rates run 3% to 5% higher than new car loans.`,
  },
  {
    id: 'buy-body-types',
    title: 'Car Body Types: Hatchback, Sedan, SUV, or MPV?',
    summary: 'How to pick the right vehicle silhouette for your driving lifestyle and parking space.',
    content: `Understanding vehicle body architecture helps you select the right balance of footprint, clearance, and comfort:

### 1. Hatchback (e.g. Swift, i20, Tiago, Baleno)
- **Features**: Compact length under 4 meters, two-box design with a top-hinged rear hatch.
- **Best For**: Daily city commutes, tight parking spaces, college students, and first-time learners.
- **Pros**: Easy to park, light maneuverability, highest fuel economy, lowest maintenance cost.
- **Cons**: Limited rear legroom on long trips, smaller luggage boot (250-350 litres).

### 2. Compact SUV / Sub-4m Crossover (e.g. Brezza, Nexon, Venue, Punch)
- **Features**: High seating position, muscular styling, elevated ground clearance (180-210 mm).
- **Best For**: Indian roads with giant potholes, monsoon waterlogging, and mixed city-highway use.
- **Pros**: Excellent road visibility, easily clears high speed-breakers, rugged suspension.
- **Cons**: Slightly firmer ride quality compared to sedans, higher fuel consumption due to aerodynamic drag.

### 3. Mid-Size / Full-Size SUV (e.g. Creta, Seltos, Scorpio-N, XUV700)
- **Features**: Substantial road presence, spacious 5-to-7 seater cabins, powerful turbocharged engines.
- **Best For**: Highway road trips, large families, and touring rough rural terrains.

### 4. Sedan (e.g. Dzire, Amaze, City, Verna, Slavia)
- **Features**: Three-box design (separate engine, cabin, and enclosed rear boot trunk).
- **Best For**: Pure ride comfort, highway stability, executive commuting, and spacious passenger seating.
- **Pros**: Lower center of gravity means superior cornering stability, plush backseat legroom, giant luggage boots (400-520 litres).
- **Cons**: Lower ground clearance (165-175 mm) requires care over tall speed humps.

### 5. MPV / MUV (e.g. Ertiga, Carens, Innova Hycross)
- **Features**: Maximized cabin volume with flexible 3-row seating for 6 to 8 passengers.
- **Best For**: Joint families, long tours with luggage, and passenger transport.`,
  },
  {
    id: 'buy-fuel-types',
    title: 'Fuel Types Compared: Petrol, Diesel, CNG, or Electric (EV)?',
    summary: 'Evaluating running cost per kilometer, maintenance, and resale value.',
    content: `Selecting the right fuel powertrain is purely a function of your **Monthly Running Mileage**.

### 1. Petrol (Naturally Aspirated & Turbo)
- **Running Cost**: ~₹6.50 – ₹8.00 per km (14-18 km/l mileage).
- **Best For**: Low to moderate usage (< 1,000 km per month).
- **Pros**: Smooth and refined, lower upfront purchase cost, 15-year validity in Delhi-NCR.
- **Cons**: Higher fuel expenses on heavy daily driving.

### 2. Diesel (Turbo-Diesel)
- **Running Cost**: ~₹4.50 – ₹5.50 per km (18-24 km/l mileage).
- **Best For**: High highway usage (> 1,500 – 2,000 km per month).
- **Pros**: Massive low-end pulling torque, exceptional highway fuel economy, long engine life.
- **Cons**: Higher upfront vehicle cost (₹1.5-2 lakh premium), strict 10-year scrap rule in Delhi-NCR, DPF clogging in short city trips, AdBlue refills.

### 3. Factory-Fitted CNG
- **Running Cost**: ~₹2.50 – ₹3.20 per km (25-32 km/kg mileage).
- **Best For**: Heavy daily city commuting (1,200 – 2,500 km per month).
- **Pros**: Extremely economical running cost, cleaner tailpipe emissions.
- **Cons**: Cylinder eats up 60-80% of luggage boot space, long queues at CNG filling pumps, slightly lower engine power.

### 4. Electric Vehicles (EV)
- **Running Cost**: ~₹1.00 – ₹1.50 per km (home charging at domestic electricity tariff).
- **Best For**: Predictable daily commutes with overnight home charging access.
- **Pros**: Lowest running cost, zero local tailpipe emissions, instant silent acceleration, minimal moving parts (no engine oil, spark plugs, or gear oil).
- **Cons**: Higher initial purchase price, highway public fast-charging infrastructure still growing, battery replacement anxiety after 8-10 years.`,
  },
  {
    id: 'buy-gearbox-types',
    title: 'Transmission Guide: Manual vs AMT vs CVT vs AT vs DCT',
    summary: 'Understanding automatic gearboxes so you pick the right balance of convenience and reliability.',
    content: `If you are buying an automatic car in India, do not let dealership salespeople confuse you with acronyms. Here is what they actually mean:

### 1. Manual Transmission (MT)
- Traditional 3 pedals with stick shifter.
- Lowest purchase cost, most reliable, most fuel-efficient when driven with skill.
- Tiring in chronic bumper-to-bumper metropolitan traffic.

### 2. AMT / AGS (Automated Manual Transmission)
- **How It Works**: Standard manual gearbox with robotic electronic actuators shifting the clutch and gears for you.
- **Verdict**: Most affordable automatic option (only ₹40k - ₹60k premium). Great fuel efficiency. However, you will feel a noticeable "head-nod" shift pause during hard acceleration. Best for budget city commuters.

### 3. CVT (Continuously Variable Transmission)
- **How It Works**: Uses expanding and contracting pulleys with a metal belt to deliver seamless, stepless ratios without discrete gear shifts.
- **Verdict**: The smoothest transmission for city driving. Zero shift shock. However, under sudden hard acceleration it produces the "rubber-band effect" (engine revs roar high before vehicle speed catches up).

### 4. Torque Converter (AT)
- **How It Works**: Traditional hydraulic planetary automatic with a fluid torque converter.
- **Verdict**: Proven, highly durable, and very smooth. Handles Indian crawl traffic effortlessly. Slightly lower fuel economy than manual.

### 5. DCT / DSG (Dual-Clutch Transmission)
- **How It Works**: Sports car technology with two independent computer-controlled clutches for lightning-quick gear changes.
- **Verdict**: Thrilling performance and instantaneous shifts. However, dry-clutch DCTs in hot Indian traffic can overheat if driven aggressively in bumper-to-bumper crawl. Requires careful driving etiquette.`,
  },
  {
    id: 'buy-safety-must-haves',
    title: 'Safety Features to Never Skip in a Modern Car',
    summary: 'Non-negotiable active and passive safety checklist for purchasing any new car.',
    content: `Cosmetic features like sunroofs, ambient lighting, and giant touchscreens look glamorous in brochures, but safety features save lives. Never compromise on these essentials:

### The Non-Negotiable Safety Checklist:
1. **Minimum 6 Airbags**: Front dual airbags, side torso airbags, and curtain airbags protecting all rows from fatal side-impact T-bone collisions.
2. **Electronic Stability Program (ESP / ESC)**: Computerized sensor braking individual wheels to arrest skids and spinouts. Standard in modern cars.
3. **ABS with EBD**: Anti-lock brakes prevent wheel lockup, while Electronic Brakeforce Distribution optimizes front-to-rear brake balance.
4. **ISOFIX Child Seat Anchors**: Rigid metal anchor points built into rear seats to secure child car seats directly to the chassis.
5. **Three-Point Seatbelts for All Passengers**: Three-point lap-and-sash belts for all 5 or 7 seating positions, including the rear middle seat (lap-only two-point belts cause severe abdominal trauma in crashes).
6. **Bharat NCAP / Global NCAP Crash Rating**: Seek vehicles that have scored at least **4 or 5 stars** in standardized independent crash tests for adult and child occupant protection.
7. **Hill-Hold Assist (HAC)**: Holds brake pressure on flyovers and slopes for 2-3 seconds to prevent rollback.
8. **Rear Parking Camera and Sensors**: Crucial for spotting low obstacles, poles, and young children behind the car.`,
  },
  {
    id: 'buy-test-drive-checklist',
    title: 'The Ultimate Showroom Test Drive Checklist',
    summary: 'How to test a prospective car like an automotive journalist before signing the booking cheque.',
    content: `Never buy a car after just a 5-minute spin around the dealer block on smooth tarmac. Insist on a comprehensive 20-30 minute test drive covering broken roads, traffic, and open bypasses.

### What to Check During the Test Drive:
- **Ergonomics & Visibility**: Can you find a comfortable driving posture within 1 minute? Can you see over the hood clearly? Are the blind spots around the front A-pillars manageable?
- **Suspension over Bad Roads**: Drive deliberately over rumble strips, small potholes, and road expansion joints at 30 km/h. Does the suspension absorb the impact with a plush "thud", or does it crash harshly and toss occupants sideways?
- **Braking Feel**: Accelerate to 60 km/h on an empty stretch and apply firm brakes. Does the car stop straight without pulling? Does the brake pedal feel progressive or grabby?
- **Air Conditioning Cooling**: Turn the AC on full blast in direct afternoon sunlight. Does the cabin cool down within 3 to 5 minutes? Are rear AC vents effective?
- **Backseat Comfort**: Sit in the rear seat with your usual family members. Is there ample knee room, under-thigh support, and headroom? Is the center floor hump intrusive?
- **Clutch & Gearbox Feel (Manual)**: Is the clutch pedal light or heavy? Does it require long travel? Does the gear lever slot cleanly into reverse?
- **U-Turn Test**: Take a tight U-turn to test the vehicle’s turning radius. A small turning radius (< 5.0m) makes urban living much easier.`,
  },
  {
    id: 'buy-insurance-guide',
    title: 'Car Insurance Demystified: Add-ons You Must Have',
    summary: 'Understanding Third-Party vs. Comprehensive insurance and the add-ons that save lakhs during claims.',
    content: `Car insurance is divided into two distinct parts:
1. **Third-Party Liability (Statutory Mandatory)**: Covers damage, injury, or death caused by your car to other people, vehicles, or property. It covers ZERO rupees of damage to your own vehicle!
2. **Own Damage (OD)**: Covers accidental crash damage, fire, flood, theft, and natural disasters to your own car. Combined with Third-Party, this is called **Comprehensive Insurance**.

### The Must-Have Insurance Add-On Covers:
- **Zero Depreciation (Bumper-to-Bumper)**: Under standard insurance, insurance companies deduct 50% depreciation on rubber/plastic parts, 30% on fiberglass, and 10-20% on metal during claims. With Zero-Dep add-on, the insurer pays 100% of replacement parts cost. Mandatory for cars under 5 years old!
- **Engine & Gearbox Protector**: Standard insurance rejects claims if water enters your engine (hydro-lock) or if oil pan punctures and engine seizes. This add-on covers full engine rebuild costs (₹1 lakh – ₹3 lakhs).
- **Return to Invoice (RTI)**: In case of total vehicle loss (theft or car totaled beyond 75% repair), standard insurance pays only depreciated Insured Declared Value (IDV). RTI pays you the **original ex-showroom invoice price + road tax + registration fee**, giving you enough money to buy a brand new car!
- **Consumables Cover**: Covers the cost of non-reusable items like engine oil, nuts, bolts, washers, AC refrigerant, and clips during an accident repair.
- **24x7 Roadside Assistance (RSA)**: Free towing, puncture repair, and jump-start assistance across India.`,
  },
];

export const USED_CAR_CHECKLIST = [
  { category: 'Exterior & Body', items: ['Check panel gaps between doors, hood, and fenders (uneven gaps indicate previous accident repair)', 'Inspect for color shade mismatch under bright sunlight indicating repainted panels', 'Look for rust bubbles around wheel arches, door sills, and trunk floor', 'Check windshield and window glass stamps — all glass should have matching manufacturer logo and year', 'Inspect all 4 tires for uneven camber wear and verify manufacturing date code (DOT code)'] },
  { category: 'Engine Bay & Mechanicals', items: ['Pull engine oil dipstick: oil should be clean, not milky coffee froth (which indicates blown head gasket)', 'Remove oil filler cap: check for dark crusty sludge or heavy carbon buildup inside', 'Inspect radiator coolant reservoir: should be bright green/pink, with no oily sheen', 'Look for fresh oil or fluid leaks around the engine block, valve cover, and steering rack', 'Inspect battery terminals for heavy corrosion and check battery age sticker'] },
  { category: 'Interior & Cabin', items: ['Inspect steering wheel, gear knob, and pedal rubber wear (heavily worn pedals on a car claiming 20,000 km indicates tampered odometer)', 'Turn AC on full blast: verify compressor engages with no squealing and blows freezing cold air in 2 minutes', 'Test every single window switch, power mirror, lock, horn, wiper, and infotainment button', 'Lift floor mats and carpet: look and smell for dampness, rust, or musty mildew indicating flood damage', 'Check seatbelt retraction: verify all seatbelt labels match the car’s manufacturing year'] },
  { category: 'Test Drive Evaluation', items: ['Turn ignition ON: verify all dashboard warning lights (Check Engine, Airbag, ABS, Oil) illuminate and extinguish after start', 'Listen for suspension knocks or rattles over speed bumps and rough roads', 'Test clutch engagement: verify clutch does not slip under hard acceleration in 3rd gear', 'Brake firmly from 60 km/h: car should stop straight without pulling or pedal shuddering', 'Let go of steering on flat straight road: car should track dead straight without veering'] },
  { category: 'Legal & Paperwork Verification', items: ['Verify Original RC chassis number and engine number physically matches the stamped plates under the hood and floor', 'Check for active Bank Hypothecation (HP) on RC; ensure Form 35 and Bank NOC are available if loan was settled', 'Verify complete service history book with authorized dealer stamps and mileage records', 'Check Parivahan / e-Challan portal for any pending unpaid traffic fines or court challans', 'Verify existing insurance policy: check No Claim Bonus (NCB) percentage — a 0% NCB indicates previous accident claims!'] },
];
