// Central configuration file for external links
// This makes it easy to update domains when going live
// If you buy a new domain, just update the URLs here and all pages will update automatically.

export const config = {
  // Website URL (this app)
  schoolWebsiteUrl: import.meta.env.VITE_SCHOOL_WEBSITE_URL || 'https://school-website-sigma-one.vercel.app',
  
  // SMS Web App URL
  smsAppUrl: import.meta.env.VITE_SMS_APP_URL || 'https://sms-app-red.vercel.app',
};
