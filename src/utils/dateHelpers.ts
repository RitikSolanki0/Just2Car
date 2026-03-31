// src/utils/dateHelpers.ts

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
 * 24 घंटे वाले समय को 12 घंटे (AM/PM) में बदलता है
 * @param timeStr उदाहरण: "20:08"
 */
export const formatTime = (timeStr: string | undefined): string => {
  if (!timeStr) return "Not Set";
  try {
    const [hours, minutes] = timeStr.split(':');
    let h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12; // 0 को 12 में बदलता है
    const formattedHours = String(h).padStart(2, '0');
    return `${formattedHours}:${minutes} ${ampm}`;
  } catch (error) {
    return "Invalid Time";
  }
};