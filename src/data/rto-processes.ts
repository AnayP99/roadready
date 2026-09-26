import { RTOProcess } from '@/types/content';

export const RTO_PROCESSES_DATA: RTOProcess[] = [
  {
    id: 'rto-learners-license',
    title: "Getting a Learner's License (LL)",
    slug: 'learners-license',
    description: "The foundational license permitting you to learn driving on Indian roads under supervision of a permanent license holder.",
    timeline: 'Same day (online test via Sarathi) or 1-3 business days if visiting RTO',
    onlinePortalUrl: 'https://sarathi.parivahan.gov.in',
    eligibility: [
      'Age 16+ years: For gearless two-wheelers up to 50cc (requires written consent from parent or guardian)',
      'Age 18+ years: For Light Motor Vehicles (LMV cars, SUVs) and motorcycles with gear (MCWG)',
      'Age 20+ years: For commercial transport vehicles (must have held LMV license for at least 1 year)',
      'Basic physical fitness and clear medical self-declaration (Form 1) or Doctor Fitness Certificate (Form 1A if over 40)',
    ],
    documents: [
      { name: 'Age Proof (Aadhaar Card, Passport, Birth Certificate, or 10th Marksheet)', description: 'Government issued document showing exact date of birth', required: true },
      { name: 'Address Proof (Aadhaar Card, Passport, Voter ID, Electricity Bill, or Rent Agreement)', description: 'Proof of current residential address within the jurisdiction of the RTO', required: true },
      { name: 'Form 1 (Physical Fitness Self-Declaration)', description: 'Filled out online on the Sarathi portal', required: true },
      { name: 'Form 1A (Medical Fitness Certificate)', description: 'Mandatory if applicant is above 40 years of age or applying for commercial vehicle', required: false },
      { name: 'Parent/Guardian Consent Form', description: 'Mandatory only for applicants aged 16-18 applying for gearless two-wheelers', required: false },
      { name: 'Recent Passport-Sized Photographs', description: 'White background, front-facing (or captured via Aadhaar e-KYC)', required: true },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Apply Online via Sarathi Parivahan',
        description: 'Visit sarathi.parivahan.gov.in, select your State, and choose "Apply for Learner License". Use Aadhaar e-KYC for instant contactless application without physically visiting the RTO in supporting states.',
        substeps: ['Authenticate with Aadhaar OTP', 'Select vehicle class (e.g. LMV for car, MCWG for bike)', 'Fill personal and communication details'],
        tip: 'Choosing Aadhaar authentication allows you to take the computerized LL test directly from home on your laptop or mobile phone!',
      },
      {
        stepNumber: 2,
        title: 'Upload Documents & Photo/Signature',
        description: 'Upload scanned copies of age proof and address proof. If applying without Aadhaar e-KYC, upload passport photo and digital signature scan.',
      },
      {
        stepNumber: 3,
        title: 'Pay Government Fees Online',
        description: 'Pay the application and test fees via net banking, UPI, or debit/credit card. Save the payment receipt and Form 2 reference number.',
        tip: 'Keep the payment transaction receipt downloaded as proof.',
      },
      {
        stepNumber: 4,
        title: 'Book Test Slot (if non-Aadhaar) or Take Online Test',
        description: 'If taking online test at home: log in with application number and face-recognition webcam authentication. If taking at RTO: choose slot date and time.',
      },
      {
        stepNumber: 5,
        title: 'Pass the Computerized MCQ Test',
        description: 'Answer 15 to 20 multiple-choice questions on road signs, traffic rules, and basic driving safety within the allotted time. Passing threshold is 60% (typically 9/15 or 12/20).',
        tip: 'Practice thoroughly using our RoadReady Mock Test simulator beforehand!',
      },
      {
        stepNumber: 6,
        title: 'Download Learner License Instantly',
        description: 'Upon passing the test, your digital Learner’s License with a unique LL number and QR code is immediately generated and ready to download.',
      },
    ],
    fees: [
      { item: "Issue of Learner's License (per vehicle class)", amount: '₹150' },
      { item: 'Learner License Test Fee / Retest Fee', amount: '₹50' },
      { item: 'Total for single class (e.g. Car or Bike only)', amount: '₹200' },
      { item: 'Total for combined class (Car + Motorcycle LMV+MCWG)', amount: '₹350 – ₹400' },
    ],
    tips: [
      "Your Learner's License is valid across the whole country for 6 months (180 days).",
      'You cannot drive alone! You must always have a person holding a valid permanent driving license sitting in the front passenger seat.',
      'Affix a red "L" board (18cm x 18cm) on white background clearly on both the front and rear of the vehicle.',
    ],
    commonMistakes: [
      'Applying for permanent license too early: You must hold the LL for at least 30 days before taking the permanent test.',
      'Allowing the LL to expire: If 180 days elapse without booking a permanent license test, you must restart the LL process from scratch.',
      'Carrying pillion passengers on a two-wheeler with an LL (only your licensed supervisor may ride pillion).',
    ],
  },
  {
    id: 'rto-permanent-license',
    title: 'Getting a Permanent Driving License (DL)',
    slug: 'permanent-license',
    description: 'The full driving license granting legal authorization to drive unaccompanied on public roads across India and internationally (with IDP).',
    timeline: 'Test conducted on booked date; smart card delivered by Speed Post within 7-21 days',
    onlinePortalUrl: 'https://sarathi.parivahan.gov.in',
    eligibility: [
      "Must possess a valid Learner's License for that category of vehicle",
      "Must have held the Learner's License for at least 30 days (and within 180 days of LL issue)",
      'Age 18+ years for private cars (LMV) and geared two-wheelers (MCWG)',
      'Candidate must bring their own roadworthy vehicle of the relevant class (with valid RC, Insurance, PUC) to the RTO automated driving test track',
    ],
    documents: [
      { name: "Valid Learner's License", description: 'Active LL with at least 30 days elapsed since issue', required: true },
      { name: 'Application Form 2', description: 'Generated from Sarathi portal with online signature', required: true },
      { name: 'Driving School Certificate (Form 5)', description: 'Mandatory for commercial transport categories, optional for private LMV', required: false },
      { name: 'Original Age & Address Proof', description: 'Carried along for physical verification if requested', required: true },
      { name: 'Slot Booking Appointment Slip', description: 'Printed confirmation showing test date, time, and track location', required: true },
      { name: 'Vehicle Documents for Test Car (RC, Insurance, PUC)', description: 'Must bring originals of the vehicle used during the driving test', required: true },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Apply Online for Driving License',
        description: 'On sarathi.parivahan.gov.in, select "Apply for Driving License" and enter your active Learner License number and date of birth.',
      },
      {
        stepNumber: 2,
        title: 'Book DL Test Slot (Appointments)',
        description: 'Select your local RTO Automated Driving Test Track (ADTT) and choose an available date and time slot for the practical driving test.',
        tip: 'Morning slots are generally less crowded and have lower wait times at automated test tracks.',
      },
      {
        stepNumber: 3,
        title: 'Pay DL Test and Smart Card Fees',
        description: 'Pay the government fees online: ₹200 for driving test + ₹200 for DL issue on smart card. Save the payment receipt.',
      },
      {
        stepNumber: 4,
        title: 'Appear at the RTO Automated Test Track',
        description: 'Arrive at the testing ground 30 minutes early with your test car/bike and original documents. Present vehicle documents for inspection by the motor vehicle inspector (MVI).',
      },
      {
        stepNumber: 5,
        title: 'Execute Practical Driving Manoeuvres',
        description: 'On modern sensor-based automated tracks, you must navigate: Reverse S-bend, Parallel Parking, 8-formation, and Gradient Hill-stop (stopping on an incline and moving forward without rolling back more than 6 inches).',
        tip: 'Do not touch kerbs, keep seatbelt fastened at all times, and use turn indicators at every turn!',
      },
      {
        stepNumber: 6,
        title: 'Capture Biometrics & Await Delivery',
        description: 'After passing the track, capture your digital photograph and signature at the biometric counter. Your license is updated on mParivahan/DigiLocker within 48 hours and the smart card arrives via Speed Post.',
      },
    ],
    fees: [
      { item: 'Driving Test Fee (per vehicle class)', amount: '₹300' },
      { item: 'Issue of Driving License (Form 7 Smart Card)', amount: '₹200' },
      { item: 'Form 7 Smart Card / PVC Card Fee', amount: '₹200' },
      { item: 'Total for Car (LMV):', amount: '₹700' },
      { item: 'Total for Car + Motorcycle (LMV + MCWG):', amount: '₹1,000 – ₹1,100' },
    ],
    tips: [
      'Inspect the test car before leaving home: ensure all 4 indicators, horn, headlights, brake lights, and handbrake work perfectly.',
      'On the gradient test: use the handbrake technique smoothly to avoid any rollback.',
      'Wear shoes, not flip-flops or slippers, as examiners may disqualify candidates wearing improper footwear.',
    ],
    commonMistakes: [
      'Forgetting to buckle seatbelt before turning on the engine (instant failure on automated sensor tracks).',
      'Mounting or touching the sensor kerbs during parallel parking or reverse S-track.',
      'Rolling back more than 15 cm (6 inches) on the gradient hill start.',
    ],
  },
  {
    id: 'rto-license-renewal',
    title: 'Driving License Renewal',
    slug: 'license-renewal',
    description: 'Process to renew an expired driving license before or after validity expiry without needing to retake the driving test.',
    timeline: 'Processed online in 3-7 business days; new card dispatched via Speed Post',
    onlinePortalUrl: 'https://sarathi.parivahan.gov.in',
    eligibility: [
      'License holder whose DL has expired or is expiring within 1 year',
      'Grace period: You can apply up to 1 year BEFORE expiry and up to 1 year AFTER expiry with normal fees',
      'If expired for MORE than 1 year: Additional late fee applies per year',
      'If expired for MORE than 5 years: You must re-appear for the driving test from scratch',
    ],
    documents: [
      { name: 'Original Expired Driving License', description: 'Current physical DL card or digital DL number', required: true },
      { name: 'Form 1 (Medical Self-Declaration)', description: 'If under 40 years of age', required: true },
      { name: 'Form 1A (Medical Fitness Certificate by registered MBBS doctor)', description: 'Mandatory if applicant is 40 years or older', required: false },
      { name: 'Address Proof (Aadhaar / Passport / Utility Bill)', description: 'Required if address has changed', required: false },
      { name: 'Recent Passport Photograph & Signature', description: 'Uploaded online or pulled from Aadhaar', required: true },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Initiate Renewal on Sarathi',
        description: 'Select "Apply for DL Renewal" on Sarathi portal. Enter your DL number and date of birth to retrieve your records.',
      },
      {
        stepNumber: 2,
        title: 'Verify Details & Upload Form 1A',
        description: 'Review personal details. If you are 40 or older, upload Form 1A signed by a registered medical practitioner with their registration number.',
      },
      {
        stepNumber: 3,
        title: 'Pay Renewal Fees Online',
        description: 'Pay standard renewal fee ₹200 + smart card fee ₹200. If applying after 1-year grace period, penalty fee applies.',
      },
      {
        stepNumber: 4,
        title: 'Approval & Speed Post Dispatch',
        description: 'RTO authority verifies documents electronically. Renewed license details immediately reflect on DigiLocker and mParivahan.',
      },
    ],
    fees: [
      { item: 'Renewal of Driving License (within grace period)', amount: '₹200' },
      { item: 'Smart Card (Form 7) Fee', amount: '₹200' },
      { item: 'Late Penalty (if applied after 1 year of expiry)', amount: '₹1,000 per year of delay' },
    ],
    tips: [
      'Renew within 1 year before expiry to ensure you never drive with an invalid license.',
      'Driving with an expired license carries the same ₹5,000 fine as driving with no license at all.',
    ],
    commonMistakes: [
      'Delaying beyond 1 year after expiry, resulting in heavy annual penalty fees.',
      'Failing to upload a valid Form 1A medical certificate if above 40 years of age.',
    ],
  },
  {
    id: 'rto-idp',
    title: 'International Driving Permit (IDP)',
    slug: 'international-driving-permit',
    description: 'An official multilingual translation of your Indian driving license recognized in over 150 countries adhering to the Geneva Road Convention (1949).',
    timeline: '1-3 business days (issued directly by home RTO)',
    onlinePortalUrl: 'https://sarathi.parivahan.gov.in',
    eligibility: [
      'Must hold a valid Indian Permanent Driving License with at least 1 year validity remaining',
      'Must possess a valid Indian Passport',
      'Must possess a valid Visa / Travel Ticket for the destination country',
      'Permit is valid for a maximum period of 1 year from the date of issue or until Indian DL expires (whichever is earlier)',
    ],
    documents: [
      { name: 'Valid Indian Driving License (Original)', description: 'Must have at least 1 year validity remaining', required: true },
      { name: 'Valid Indian Passport', description: 'With valid visa or confirmed travel itinerary', required: true },
      { name: 'Confirmed Air Tickets', description: 'Proof of imminent foreign travel', required: true },
      { name: 'Form 1A (Medical Fitness Certificate)', description: 'Signed and stamped by an authorized MBBS doctor', required: true },
      { name: '4 Passport-Sized Photographs (35mm x 45mm)', description: 'Matte finish with white background', required: true },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Sarathi Portal',
        description: 'Navigate to "Services on DL" -> "Issue of International Driving Permit (IDP)". Enter DL number and travel details.',
      },
      {
        stepNumber: 2,
        title: 'Specify Countries & Visa Details',
        description: 'Select the countries you intend to visit and provide your passport number, visa type, and travel dates.',
      },
      {
        stepNumber: 3,
        title: 'Upload Documents & Pay Fee',
        description: 'Upload copies of your passport, visa, flight ticket, DL, and medical certificate. Pay the statutory ₹1,000 IDP fee online.',
      },
      {
        stepNumber: 4,
        title: 'Collect Physical IDP Booklet',
        description: 'Visit your jurisdictional RTO with original documents for verification. The IDP booklet is printed and handed over on the same day.',
      },
    ],
    fees: [
      { item: 'International Driving Permit (IDP) Government Fee', amount: '₹1,000' },
    ],
    tips: [
      'Always carry BOTH your Indian physical Driving License AND your IDP booklet when driving abroad.',
      'Check whether your destination country requires an IDP or permits driving on an Indian license for tourist stays (e.g. USA, UK, Germany allow Indian DL for up to 6-12 months).',
    ],
    commonMistakes: [
      'Assuming IDP replaces your domestic license: an IDP is valid ONLY when accompanied by your original Indian driving license.',
      'Applying when the domestic driving license has less than 1 year validity remaining.',
    ],
  },
  {
    id: 'rto-vehicle-registration',
    title: 'Vehicle Registration & Ownership Transfer',
    slug: 'vehicle-registration',
    description: 'Complete guide for permanent registration of new vehicles, inter-state transfer, and transferring ownership when buying/selling a used car.',
    timeline: 'New registration: 1-3 days by dealership; Transfer: 15-30 days',
    onlinePortalUrl: 'https://parivahan.gov.in',
    eligibility: [
      'New Car: Dealer registers through Vahan portal before delivery with High Security Registration Plates (HSRP)',
      'Ownership Transfer: Within 14 days of vehicle sale for same RTO, 30 days for different RTO/state',
      'No Objection Certificate (NOC): Required if moving vehicle to a different state permanently',
    ],
    documents: [
      { name: 'Form 29 (Notice of Transfer of Ownership)', description: 'Signed in duplicate by seller and buyer', required: true },
      { name: 'Form 30 (Application for Transfer of Ownership)', description: 'Filled and signed by buyer and seller', required: true },
      { name: 'Original Registration Certificate (RC)', description: 'Physical smart card of the vehicle', required: true },
      { name: 'Valid Insurance Certificate', description: 'Transferred to buyer’s name or active policy', required: true },
      { name: 'Valid PUC Certificate', description: 'Active emissions test certificate', required: true },
      { name: 'Form 28 (NOC - 3 copies)', description: 'Mandatory only for inter-district or inter-state transfers', required: false },
      { name: 'Buyer Identity and Address Proof', description: 'Aadhaar, Passport, or Electricity bill', required: true },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Obtain NOC from Selling RTO (if changing RTO/State)',
        description: 'Submit Form 28 along with police clearance report to the parent RTO where vehicle was originally registered to obtain a No Objection Certificate.',
      },
      {
        stepNumber: 2,
        title: 'Submit Transfer Online on Parivahan Vahan Portal',
        description: 'Log in to parivahan.gov.in -> Online Services -> Vehicle Related Services. Enter vehicle registration and chassis number.',
      },
      {
        stepNumber: 3,
        title: 'Upload Forms 29, 30, and Documents',
        description: 'Upload scanned signed copies of Form 29, Form 30, original RC, valid insurance, PUC, and buyer identity documents.',
      },
      {
        stepNumber: 4,
        title: 'Pay Ownership Transfer Fee & Road Tax Differential',
        description: 'Pay the statutory ownership transfer fee (typically ₹300-₹500 for cars). For inter-state movement, state road tax must be paid in the new state (old state tax is refundable via Form DT).',
      },
      {
        stepNumber: 5,
        title: 'Physical Verification & New RC Issue',
        description: 'Buyer submits original physical RC and forms to the new RTO. New RC is printed in buyer’s name and dispatched via Speed Post.',
      },
    ],
    fees: [
      { item: 'Transfer of Ownership Fee (LMV Cars)', amount: '₹300 – ₹500' },
      { item: 'New Smart Card RC Fee', amount: '₹200' },
      { item: 'HSRP (High Security Registration Plate) if replacement needed', amount: '₹400 – ₹800' },
    ],
    tips: [
      'Never hand over the car keys to a buyer without signing Form 29 & 30 and retaining proof of submission.',
      'Check for any pending e-challans on the vehicle before initiating ownership transfer; all unpaid challans must be cleared first.',
    ],
    commonMistakes: [
      'Failing to transfer insurance: Under law, vehicle insurance does NOT automatically transfer upon RC sale; you have 14 days to notify the insurer.',
      'Buying a vehicle without verifying Hypothecation (active bank loan) status on the RC.',
    ],
  },
  {
    id: 'rto-duplicate-services',
    title: 'Duplicate License, Address Change & NOC',
    slug: 'duplicate-and-corrections',
    description: 'Procedures for replacing lost, damaged, or mutilated driving licenses, updating residential address, or removing bank hypothecation.',
    timeline: 'Online approval within 2-5 working days',
    onlinePortalUrl: 'https://sarathi.parivahan.gov.in',
    eligibility: [
      'Lost / Torn License: File an online police missing report / NCR (Lost Article Report) first',
      'Address Change: Must have valid address proof for the new location',
      'Hypothecation Termination: Must hold Form 35 and NOC letter from the financing bank',
    ],
    documents: [
      { name: 'Police Lost Article Report / FIR copy', description: 'Mandatory if physical driving license was lost or stolen', required: false },
      { name: 'Damaged / Mutilated DL card', description: 'Surrendered if applying for replacement due to damage', required: false },
      { name: 'New Address Proof', description: 'Mandatory if applying for change of address (Aadhaar, Passport, etc.)', required: false },
      { name: 'Form 35 + Bank NOC', description: 'Mandatory for removing car loan hypothecation from RC', required: false },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Select Desired Service on Sarathi / Vahan',
        description: 'Choose "Issue of Duplicate DL", "Change of Address in DL", or "Hypothecation Termination" on the respective portal.',
      },
      {
        stepNumber: 2,
        title: 'Provide Reason and Upload Proofs',
        description: 'For lost DL: enter Police Lost Article NCR number. For address change: upload new address proof with Aadhaar OTP authentication.',
      },
      {
        stepNumber: 3,
        title: 'Pay Prescribed Government Fees',
        description: 'Pay ₹200 for duplicate license or address update + ₹200 for smart card printing.',
      },
      {
        stepNumber: 4,
        title: 'Instant Digital Update & Card Dispatch',
        description: 'New details update instantly on DigiLocker/mParivahan. Physical replacement smart card is mailed by Speed Post.',
      },
    ],
    fees: [
      { item: 'Duplicate Driving License Fee', amount: '₹200' },
      { item: 'Change of Address in DL / RC', amount: '₹200' },
      { item: 'Hypothecation Termination (Car)', amount: '₹500' },
      { item: 'Smart Card (Form 7) Fee', amount: '₹200' },
    ],
    tips: [
      'You do not need to visit a police station to report a lost license; most states have an online "Lost Article Report" portal that generates an instant NCR report.',
      'Keep DigiLocker linked to your Aadhaar; your digital driving license updates automatically without waiting for physical delivery.',
    ],
    commonMistakes: [
      'Driving without filing an NCR report when a physical license is lost.',
      'Continuing to pay loan interest or forgetting to remove hypothecation from the RC after completing all EMI payments.',
    ],
  },
];
