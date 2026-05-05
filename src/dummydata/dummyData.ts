export const BRANDS = [
  { id: '1', name: 'Volkswagen', logo: require('../assets/images/carlogo/vw.png') },
  { id: '2', name: 'Skoda', logo: require('../assets/images/carlogo/skodalogo.png') },
  { id: '3', name: 'Nissan', logo: require('../assets/images/carlogo/NissanLogo.png') },
  { id: '4', name: 'Mercedes', logo: require('../assets/images/carlogo/MercedesLogo.png') },
  { id: '5', name: 'BMW', logo: require('../assets/images/carlogo/bmwlogo.png') }, // यहाँ अपना BMW लोगो डालें
  { id: '6', name: 'Renault', logo: require('../assets/images/carlogo/renaultlogo.png') }, // यहाँ अपना Renault लोगो डालें
];

export const BANNERS = [
  { id: '1', image: require('../assets/images/carimages/banner.jpg') },
  { id: '2', image: require('../assets/images/carimages/banner.jpg') },
  { id: '3', image: require('../assets/images/carimages/banner.jpg') },
  { id: '4', image: require('../assets/images/carimages/banner.jpg') },
  { id: '5', image: require('../assets/images/carimages/banner.jpg') },
];

export const RECOMMENDATIONS = [
  {
    id: '1',
    name: 'E-on Era Plus',
    price: '₹ 1,60,000',
    year: '2021',
    kms: '69,600 km',
    location: 'Old Palasia Indore',
    image: require('../assets/images/carimages/car1.jpg'),
    isFeatured: true,
  },
  {
    id: '2',
    name: 'E-on Era Plus',
    price: '₹ 1,60,000',
    year: '2021',
    kms: '69,600 km',
    location: 'Old Palasia Indore',
    image: require('../assets/images/carimages/car2.jpg'),
    isFeatured: true,
  },
  {
    id: '3',
    name: 'E-on Era Plus',
    price: '₹ 1,60,000',
    year: '2021',
    kms: '69,600 km',
    location: 'Old Palasia Indore',
    image: require('../assets/images/carimages/car3.jpg'),
    isFeatured: true,
  },
  {
    id: '4',
    name: 'E-on Era Plus',
    price: '₹ 1,60,000',
    year: '2021',
    kms: '69,600 km',
    location: 'Old Palasia Indore',
    image: require('../assets/images/carimages/car4.jpg'),
    isFeatured: true,
  },
];


export const SEARCH_SUGGESTIONS = [
  "HYUNDAILIK",
  "HYUNDAI 20ELANTRA",
  "HYUNDAI 20I20 20MAGNA 20EXECUTIVE",
  "HYUNDAI 20VERNA",
  "HYUNDAIWOR",
];

export const RECOMMENDED_FOR_YOU = [
  "Mahindra Thar", "Maruti Swift", "Tata Punch",
  "Hyundai Exter", "Audi A4", "Tata Nexon"
];

// इसमें ये डेटा जोड़ें:
export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
}

export const NOTIFICATIONS: NotificationItem[] = [  // अभी इसे खाली रखें ताकि 'Empty State' दिखे
  { id: '1', title: 'Price Drop!', message: 'Tesla Model 3 price reduced by ₹50,000', time: '2h ago' },
];

export const NOTIFICATION_TIPS = [
  { id: '1', text: 'Grab the opportunity to save more on your dream car!' },
  { id: '2', text: 'Stay informed about exclusive offers, discounts, and promotions from dealers and sellers' },
  { id: '3', text: 'Receive notifications when potential buyers show interest in your listed car' },
];

export const FILTER_CATEGORIES = [
  "Brands", "Budget", "Fuel", "Model Year", 
  "Features", "Body Type", "Transmission", 
  "Owners", "Kms Driven"
];

export const MODEL_OPTIONS = {
  suggestions: [
    { id: '1', label: 'Tata Nexon', count: 140 },
    { id: '2', label: 'Mahindra Thar', count: 94 },
    { id: '3', label: 'Maruti Swift', count: 22 },
    { id: '4', label: 'Tata Punch', count: 64 },
    { id: '5', label: 'Hyundai Exter', count: 23 },
    { id: '6', label: 'Toyota Innova Crysta', count: 90 },
  ],
  allBrands: [
    { id: 'b1', label: 'Maruti', count: 40 },
    { id: 'b2', label: 'Honda', count: 32 },
    { id: 'b3', label: 'Renault', count: 54 },
    { id: 'b4', label: 'Tata', count: 123 },
    { id: 'b5', label: 'Ford', count: 12 },
    { id: 'b6', label: 'Mahindra', count: 12 },
    { id: 'b7', label: 'Jeep', count: 64 },
    { id: 'b8', label: 'BMW', count: 13 },
    { id: 'b9', label: 'Volvo', count: 90 },
  ]
};


export const CAR_MEDIA = [
  { 
    id: '1', 
    type: 'image', 
    url: require('../assets/images/carimages/car1.jpg') 
  },
  { 
    id: '2', 
    type: 'video', 
    url: require('../assets/video/car_video.mp4'), 
  },
  { 
    id: '3', 
    type: 'image', 
    url: require('../assets/images/carimages/car2.jpg') 
  },
];


export const CAR_OVERVIEW_DATA = [
  { label: 'Reg. year', value: 'Aug 2019' },
  { label: 'Fuel', value: 'Petrol' },
  { label: 'KM driven', value: '54,338 km' },
  { label: 'Transmission', value: 'Manual' },
  { label: 'Engine capacity', value: '1368cc' },
  { label: 'Ownership', value: '2nd' },
  { label: 'Make year', value: 'Jul 2019' },
  { label: 'Spare key', value: 'No' },
  { label: 'Reg number', value: 'MH12**1604' },
];



export const SPECIFICATIONS_DATA = [
  { label: 'Displacement (cc)', value: '1368' },
  { label: 'Cylinders', value: '4' },
  { label: 'Max Power (bhp)', value: '100' },
  { label: 'Seating Capacity', value: '5' },
  { label: 'Ground Clearance', value: '165 mm' },
  { label: 'Bootspace', value: '480 Litres' },
];

export const FEATURES_LIST = [
  { id: '1', label: 'Airbags', icon: 'shield-checkmark-outline' },
  { id: '2', label: 'ABS - Anti-lock Braking System', icon: 'disc-outline' },
  { id: '3', label: 'EBD - Electronic Brakeforce Distribution', icon: 'git-branch-outline' },
  { id: '4', label: 'Air Conditioner', icon: 'snow-outline' },
  { id: '5', label: 'ISOFIX - Child Seat Anchor Points', icon: 'people-outline' },
];


export const BRANDS_LIST = ["Maruti Suzuki", "Hyundai", "Toyota", "Tata Motors", "Mahindra", "Honda", "BMW"];
export const MODELS_LIST = ["Swift", "Creta", "Fortuner", "Nexon", "Thar", "City", "X5"];
export const VARIANTS_LIST = ["VXI", "ZXI", "LXI", "Magna", "Asta", "Alpha", "Base Variant"];
export const FUELS_LIST = ["Petrol", "Diesel", "CNG", "Electric", "LPG"];

export const BUDGET_OPTIONS = [
  { id: 'p1', label: 'Below 2 Lakh', count: 45 },
  { id: 'p2', label: '2 Lakh - 5 Lakh', count: 120 },
  { id: 'p3', label: '5 Lakh - 10 Lakh', count: 85 },
  { id: 'p4', label: 'Above 10 Lakh', count: 30 },
];

export const KMS_OPTIONS = [
  { id: 'k1', label: 'Below 20,000 km', count: 25 },
  { id: 'k2', label: '20,000 - 50,000 km', count: 95 },
  { id: 'k3', label: '50,000 - 1,00,000 km', count: 110 },
  { id: 'k4', label: 'Above 1,00,000 km', count: 40 },
];