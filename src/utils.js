const numericPartPattern = /^\d+$/;

// eslint-disable-next-line import/prefer-default-export
export const formatIDNumber = (number) => {
  if (!number) {
    return number;
  }

  const parts = number.split('.');

  if (parts.length === 1) {
    return number;
  }

  const formattedParts = [parts.shift()];
  const numericPartCount = parts.length;

  parts.forEach((part, index) => {
    if (numericPartPattern.test(part)) {
      // If this is the last index then pad to four digits, but only if there are two or more
      // numeric parts. Otherwise, pad to three digits.

      const digits = ((index === numericPartCount - 1) && (numericPartCount >= 2)) ? 4 : 3;

      formattedParts.push(part.padStart(digits, '0'));
    }
  });

  return formattedParts.join('.');
};
