// src/data/filterData.ts

export const FILTER_CATEGORIES = [
  "Make & Model", "Budget", "Fuel", "Transmission", 
  "Owners", "Model Year", "Body Type", "Seats", "Kms Driven"
];

export const BUDGET_OPTIONS = [
  { id: 'p1', label: 'Below 2 Lakh', min: 0, max: 200000 },
  { id: 'p2', label: '2 Lakh - 5 Lakh', min: 200000, max: 500000 },
  { id: 'p3', label: '5 Lakh - 10 Lakh', min: 500000, max: 1000000 },
  { id: 'p4', label: 'Above 10 Lakh', min: 1000000, max: 5000000 },
];

export const KMS_OPTIONS = [
  { id: 'k1', label: 'Below 10,000 km', min: 0, max: 10000 },
  { id: 'k2', label: '10,000 - 30,000 km', min: 10000, max: 30000 },
  { id: 'k3', label: '30,000 - 75,000 km', min: 30000, max: 75000 },
  { id: 'k4', label: 'Above 75,000 km', min: 75000, max: 500000 },
];

// --- 🚀 नए प्रोफेशनल फ़िल्टर ऑप्शंस ---
export const FUEL_OPTIONS = ["Petrol", "Diesel", "CNG", "Electric", "LPG"];
export const TRANSMISSION_OPTIONS = ["Manual", "Automatic"];
export const OWNER_OPTIONS = [
    { label: "1st Owner", value: 1 },
    { label: "2nd Owner", value: 2 },
    { label: "3rd Owner & Above", value: 3 }
];
export const BODY_TYPES = ["Hatchback", "Sedan", "SUV", "MUV", "Luxury", "Convertible"];
export const SEAT_OPTIONS = ["2", "4", "5", "7", "8"];