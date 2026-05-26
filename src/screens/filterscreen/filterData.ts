// src/data/filterData.ts        "Body Type", "Seats",

export const FILTER_CATEGORIES = [
  "Brands", "Budget", "Fuel", "Transmission", 
  "Owners", "Model Year", "Kms Driven"
];

export const BUDGET_OPTIONS = [
  { id: 'p1', label: 'Below 3 Lakh', min: 0, max: 300000 },
  { id: 'p2', label: '3 Lakh - 6 Lakh', min: 300000, max: 600000 },
  { id: 'p3', label: '6 Lakh - 10 Lakh', min: 600000, max: 1000000 },
  { id: 'p4', label: '10 Lakh - 15 Lakh', min: 1000000, max: 1500000 },
  { id: 'p5', label: 'Above 15 Lakh', min: 1500000, max: 500000000 },
];

export const KMS_OPTIONS = [
  { id: 'k1', label: 'Below 10,000 km', min: 0, max: 10000 },
  { id: 'k2', label: '10,000 - 30,000 km', min: 10000, max: 30000 },
  { id: 'k3', label: '30,000 - 60,000 km', min: 30000, max: 60000 },
  { id: 'k4', label: '60,000 - 90,000 km', min: 60000, max: 90000 },
  { id: 'k5', label: 'Above 90,000 km', min: 90000, max: 5000000 },
];

// --- 🚀 नए प्रोफेशनल फ़िल्टर ऑप्शंस ---
export const FUEL_OPTIONS = ['Petrol', 'Diesel', 'CNG', 'Electric', 'LPG', 'Hybrid','CNG&Petrol', 'Petrol&Electric', 'Diesel&Electric', 'Bio-Diesel', 'Ethanol', 'Flex Fuel'];
export const TRANSMISSION_OPTIONS = ["Manual", "Automatic"];
export const OWNER_OPTIONS = [
    { label: "1st Owner", value: 1 },
    { label: "2nd Owner", value: 2 },
    { label: "3rd Owner & Above", value: 3 }
];
export const YEAR_OPTIONS = [
  { id: 'y1', label: 'Under 3 Years', yearsAgo: 3, type: 'under' },
  { id: 'y2', label: 'Under 5 Years', yearsAgo: 5, type: 'under' },
  { id: 'y3', label: 'Under 7 Years', yearsAgo: 7, type: 'under' },
  { id: 'y4', label: '7 Years and Above', yearsAgo: 7, type: 'above' },
];
// export const BODY_TYPES = ["Hatchback", "Sedan", "SUV", "MUV", "Luxury", "Convertible"];
// export const SEAT_OPTIONS = ["2", "4", "5", "7", "8"];