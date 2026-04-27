// // src/utils/dateHelpers.ts

// /**
//  * ISO डेट को DD-MM-YYYY फॉर्मेट में बदलता है
//  * @param dateStr उदाहरण: "2026-03-15T00:00:00.000Z"
//  */
// export const formatDate = (dateStr: string | undefined): string => {
//   if (!dateStr) return "Not Set";
//   try {
//     const date = new Date(dateStr);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   } catch (error) {
//     return "Invalid Date";
//   }
// };

// /**
//  * 24 घंटे वाले समय को 12 घंटे (AM/PM) में बदलता है
//  * @param timeStr उदाहरण: "20:08"
//  */
// export const formatTime = (timeStr: string | undefined): string => {
//   if (!timeStr) return "Not Set";
//   try {
//     const [hours, minutes] = timeStr.split(':');
//     let h = parseInt(hours);
//     const ampm = h >= 12 ? 'PM' : 'AM';
//     h = h % 12 || 12; // 0 को 12 में बदलता है
//     const formattedHours = String(h).padStart(2, '0');
//     return `${formattedHours}:${minutes} ${ampm}`;
//   } catch (error) {
//     return "Invalid Time";
//   }
// };
















/**
 * ISO डेट को DD-MM-YYYY फॉर्मेट में बदलता है
 * @param dateStr उदाहरण: "2026-03-15T00:00:00.000Z"
 */
export const formatDate = (dateStr: string | undefined): string => {
  if (!dateStr) return "Not Set";
  try {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  } catch (error) {
    return "Invalid Date";
  }
};

/**
 * समय को 12 घंटे (AM/PM) में बदलता है। 
 * अगर टाइम पहले से ही AM/PM में है, तो उसे वैसा ही रिटर्न करता है।
 * @param timeStr उदाहरण: "20:08" या "10:00 AM"
 */
export const formatTime = (timeStr: string | undefined): string => {
  if (!timeStr) return "Not Set";

  try {
    const trimmedTime = timeStr.trim().toUpperCase();

    // --- फिक्स: अगर टाइम में पहले से AM या PM लिखा है, तो उसे मत बदलो ---
    if (trimmedTime.includes("AM") || trimmedTime.includes("PM")) {
      return timeStr.trim(); 
    }

    // --- 24 घंटे वाले फॉर्मेट (जैसे "20:08") को बदलने का लॉजिक ---
    let [hours, minutes] = timeStr.split(':');
    let h = parseInt(hours);
    
    // AM/PM तय करें
    const ampm = h >= 12 ? 'PM' : 'AM';
    
    // 24 घंटे को 12 घंटे में बदलें (जैसे 20 को 08)
    h = h % 12 || 12; 
    
    const formattedHours = String(h).padStart(2, '0');
    const formattedMinutes = minutes ? minutes.padStart(2, '0') : "00";

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  } catch (error) {
    // अगर कुछ गड़बड़ हो, तो जो आ रहा है वही दिखा दो ताकि ऐप क्रैश न हो
    return timeStr || "Invalid Time";
  }
};