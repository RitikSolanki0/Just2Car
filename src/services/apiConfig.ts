export const BASE_URL = 'https://4cxxz2c5-3010.inc1.devtunnels.ms/api/v1/user';

// export const BASE_URL = 'https://justapp.aasmo.in/api/v1/user';

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/login`,
  REGISTER: `${BASE_URL}/register`,
  GET_STATES: `${BASE_URL}/state`,
  GET_CITIES: (stateId: string) => `${BASE_URL}/city/by-state/${stateId}`,

  GET_BRANDS: `${BASE_URL}/brands`,
  GET_MODELS: (brandId: string) => `${BASE_URL}/models/brand/${brandId}`,
 
  GET_BANNERS: `${BASE_URL}/banners`,

  SELL_CAR: `${BASE_URL}/sell-car`,
  MY_CARS: `${BASE_URL}/my-cars`,
  INSPECTION_RESPOND: `${BASE_URL}/inspection/respond`,
  REQUEST_RESCHEDULE: `${BASE_URL}/inspection/request-reschedule`,

  PROFILE: `${BASE_URL}/profile`,

  GET_CARS: `${BASE_URL}/cars`,
  
};

