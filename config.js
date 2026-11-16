/**
 * Thirumala Travel Agency - Global Configuration
 * Centralized business data and contact coordinates
 * All phone numbers, emails, addresses, and social links are managed here.
 */

const SITE_CONFIG = {
  agencyName: "Thirumala Travel Agency",
  tagline: "Your Gateway to the Andaman & Nicobar Islands",
  subtitle: "Handcrafted Andaman holiday packages, luxury cruises, certified scuba adventures, and personalized island itineraries.",
  establishedYear: 2014,
  owner: "Thirumalai",
  founder: "Thirumalai",
  rating: "4.9",
  reviewsCount: "1,850+",
  happyTravelers: "15,000+",

  // Contact Coordinates
  phone: "+91 7418 051 084",
  phoneRaw: "+917418051084",
  secondaryPhone: "+91 7418 051 084",
  secondaryPhoneRaw: "+917418051084",
  whatsapp: "+91 7418 051 084",
  whatsappRaw: "917418051084",
  email: "nathisoft1987@gmail.com",
  secondaryEmail: "nathisoft1987@gmail.com",

  // Physical Location
  address: {
    street: "No.34, Shanthi nagar 2nd Street",
    locality: "Adambakkam",
    city: "Chennai",
    state: "Tamilnadu",
    pincode: "600 088",
    pincodeRaw: "600088",
    country: "India",
    landmark: "Near Adambakkam",
    formatted: "No.34, Shanthi nagar 2nd Street, Adambakkam, Chennai – 600 088, Tamilnadu",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=No.34,+Shanthi+nagar+2nd+Street,+Adambakkam,+Chennai+600088&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  businessHours: {
    days: "Monday - Sunday (All 7 Days)",
    hours: "08:00 AM - 09:30 PM IST",
    emergencySupport: "24/7 Island Ground Support"
  },

  socials: {
    facebook: "https://facebook.com/thirumalatravelagency",
    instagram: "https://instagram.com/thirumalatravelagency",
    tripadvisor: "https://tripadvisor.com/thirumalatravelagency",
    youtube: "https://youtube.com/@thirumalatravelagency"
  },

  // Helpers
  getWhatsAppLink: function (customMessage) {
    const defaultMsg = "Hi Thirumala Travel Agency, I am looking to plan a trip to the Andaman Islands. Please share the best tour packages and quotes.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${this.whatsappRaw}?text=${text}`;
  },

  getPhoneLink: function () {
    return `tel:${this.phoneRaw}`;
  },

  getEmailLink: function (subject) {
    const sub = encodeURIComponent(subject || "Andaman Holiday Inquiry - Thirumala Travel Agency");
    return `mailto:${this.email}?subject=${sub}`;
  }
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
