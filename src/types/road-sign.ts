export type SignCategory =
  | 'mandatory' // Blue circles — things you MUST do
  | 'prohibitory' // Red circles with white background — things you MUST NOT do
  | 'cautionary' // Red-bordered triangles — hazards ahead
  | 'informatory' // Blue/green rectangles — directions and facilities
  | 'traffic-lights' // Signal meanings
  | 'road-markings' // White/yellow lines on road
  | 'hand-signals'; // Traffic police hand signals

export interface RoadSign {
  id: string;
  name: string;
  category: SignCategory;
  subcategory?: string;
  meaning: string;
  details: string;
  whereFound: string;
  shape: 'circle' | 'triangle' | 'rectangle' | 'octagon' | 'diamond' | 'inverted-triangle';
  primaryColor: 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'black';
  borderColor?: string;
  symbol: string; // Description or key for icon rendering
  iconName?: string; // Optional Lucide icon name or indicator
  textOverlay?: string; // e.g. "50", "STOP", "P", "H"
  funFact?: string;
}
