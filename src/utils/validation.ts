// export const validateCarForm = (state: any) => {
//   let errors: any = {};

//  // 1. Registration Number Validation (Exactly 10 chars)
//   if (!state.regNumber || state.regNumber.trim().length !== 10) {
//     errors.regNumber = "Must be exactly 10 characters (e.g. MP20CA1234)";
//   }

//   // 2. KM Driven Validation (Max 1,00,00,000)
//   const km = Number(state.kmDriven);
//   if (!state.kmDriven) {
//     errors.kmDriven = "Required";
//   } else if (km > 10000000) {
//     errors.kmDriven = "Cannot exceed 1,00,00,000 km";
//   }

//   // 3. Expected Price Validation (Max 10,00,00,000)
//   const price = Number(state.expectedPrice);
//   if (!state.expectedPrice) {
//     errors.expectedPrice = "Required";
//   } else if (price > 100000000) {
//     errors.expectedPrice = "Cannot exceed ₹10,00,00,000";
//   }


//   const requiredFields = [
//     'regNumber', 'variant', 'year', 'kmDriven', 
//     'expectedPrice', 'address', 'description'
//   ];

//   requiredFields.forEach(field => {
//     if (!state[field] || state[field].toString().trim() === '') {
//       errors[field] = true;
//     }
//   });

//   if (!state.selectedState.id) errors.state = true;
//   if (!state.selectedCity.id) errors.city = true;
//   if (!state.selectedBrand.id) errors.brand = true;
//   if (!state.selectedModel.id) errors.model = true;
//   if (!state.fuelType) errors.fuelType = true;
//   if (state.features.length === 0) errors.features = true;
//   if (state.mediaFiles.length === 0) errors.mediaFiles = true;

//   return errors;
// };




export const validateCarForm = (state: any) => {
  let errors: any = {};

  // 1. Registration Number (Exactly 10 chars)
  if (!state.regNumber || state.regNumber.trim().length !== 10) {
    errors.regNumber = true;
  }

  // 2. KM Driven Validation
  const km = state.kmDriven ? Number(state.kmDriven) : 0;
  if (!state.kmDriven || state.kmDriven.toString().trim() === '') {
    errors.kmDriven = true; // 👈 Key must be 'kmDriven'
  } else if (km > 10000000) {
    errors.kmDriven = true;
  }

  // 3. Expected Price Validation
  const price = state.expectedPrice ? Number(state.expectedPrice) : 0;
  if (!state.expectedPrice || state.expectedPrice.toString().trim() === '') {
    errors.expectedPrice = true;
  } else if (price > 100000000) {
    errors.expectedPrice = true;
  }

  // 4. Other Required Fields
  const otherFields = ['variant', 'year', 'address', 'description', 'fuelType'];
  otherFields.forEach(field => {
    if (!state[field] || state[field].toString().trim() === '') {
      errors[field] = true;
    }
  });

  // 5. Objects & Arrays
  if (!state.selectedState.id) errors.state = true;
  if (!state.selectedCity.id) errors.city = true;
  if (!state.selectedBrand.id) errors.brand = true;
  if (!state.selectedModel.id) errors.model = true;
  if (state.features.length === 0) errors.features = true;
  if (state.mediaFiles.length === 0) errors.mediaFiles = true;

  return errors;
};
