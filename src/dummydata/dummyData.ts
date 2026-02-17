// src/data/dummyData.ts

export const BRANDS = [
  { id: '1', logo: require('../assets/images/carlogo/vw.png') },
  { id: '2', logo: require('../assets/images/carlogo/skodalogo.png') },
  { id: '3', logo: require('../assets/images/carlogo/NissanLogo.png') },
  { id: '4', logo: require('../assets/images/carlogo/MercedesLogo.png') },
  { id: '5', logo: require('../assets/images/carlogo/vw.png') },
  { id: '6', logo: require('../assets/images/carlogo/skodalogo.png') },
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
  "Make & Model", "Budget", "Fuel", "Model Year", 
  "Features", "RTO", "Body Type", "Transmission", 
  "Owners", "Seats", "Kms Driven", "Color", "Discount"
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
    url: require('../assets/video/car_video.mp4'), // टेस्टिंग के लिए ऑनलाइन URL
    // poster: require('../assets/images/carimages/banner.jpg') // वीडियो का थंबनेल
  },
  { 
    id: '3', 
    type: 'image', 
    url: require('../assets/images/carimages/car2.jpg') 
  },
];