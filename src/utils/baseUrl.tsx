export const getBaseUrl = (req?: any): string => {
  // If running on the server and req is available
  if (req) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    return `${protocol}://${host}`;
  }

  // If running in the browser
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }

  // Fallback (e.g., during static generation)
  return process.env.NEXT_PUBLIC_BASE_URL || '';
};
