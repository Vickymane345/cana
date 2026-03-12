/**
 * Formats a numeric string with commas for thousands separators.
 * Preserves cursor position during formatting.
 * @param value - The raw input string (e.g., "10000")
 * @param cursorPosition - Current cursor position in the input
 * @returns Object with formatted value and new cursor position
 */
export function formatWithCommas(value: string, cursorPosition: number): { formatted: string; newCursor: number } {
  // Remove all non-digit characters except decimal point (but since examples are integers, keep simple)
  const cleaned = value.replace(/[^0-9]/g, '');

  // Strip leading zeros
  const stripped = cleaned.replace(/^0+/, '') || '0';

  // Add commas
  const formatted = stripped.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Calculate new cursor position
  // Count digits before cursor in original cleaned value
  const digitsBeforeCursor = cleaned.slice(0, cursorPosition).replace(/[^0-9]/g, '').length;
  // Find position in formatted string
  let newCursor = 0;
  let digitCount = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      digitCount++;
      if (digitCount > digitsBeforeCursor) {
        newCursor = i;
        break;
      }
    }
    newCursor = i + 1;
  }

  return { formatted, newCursor };
}

/**
 * Removes commas and non-digit characters from the formatted string.
 * Returns only digits for backend submission.
 * @param value - The formatted string (e.g., "10,000")
 * @returns Unformatted numeric string (e.g., "10000")
 */
export function unformat(value: string): string {
  return value.replace(/[^0-9]/g, '');
}
