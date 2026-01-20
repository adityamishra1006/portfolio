/**
 * Formats a date string into a readable format
 * @param {string | Date} date - Date value (e.g. "2024-01", "2023-06-15", new Date())
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export function formatDate(
    date,
    options = { month: "short", year: "numeric" }
) {
    if (!date) return "";

    const parsedDate =
        date instanceof Date ? date : new Date(date);

    if (isNaN(parsedDate.getTime())) return "";

    return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
}
