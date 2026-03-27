// Global Configuration and Utility Functions
window.SiteConfig = {
    email: "info@shrisiddhivinayak.com",
    landline: "0731-4054547",
    mobile: "+91 8871001430",
    address: {
        line1: "114, Sector B, Machanic Nagar,",
        line2: "Scheme No.54",
        city: "Indore (M.P)",
        state: "Madhya Pradesh - 452010, India"
    },
    gstin: "23ATDPP5395H1ZG"
};

// Global Helper Functions
window.getMobileOnly = function() {
    return window.SiteConfig.mobile;
};

window.getBothContacts = function() {
    return window.SiteConfig.landline + " / " + window.SiteConfig.mobile;
};

window.getTelNumber = function() {
    return window.SiteConfig.mobile.replace(/\s+/g, '');
};

window.getWhatsAppNumber = function() {
    return window.SiteConfig.mobile.replace(/[^0-9]/g, '');
};

window.getLandline = function() {
    return window.SiteConfig.landline;
};

window.getLandlineTelNumber = function() {
    return window.SiteConfig.landline.replace(/[^0-9]/g, '');
};

window.getEmail = function() {
    return window.SiteConfig.email;
};

window.getFormattedAddress = function() {
    return window.SiteConfig.address.line1 + "<br/>" + window.SiteConfig.address.line2 + ", " + window.SiteConfig.address.city;
};

window.getFullAddressOneLine = function() {
    return window.SiteConfig.address.line1 + " " + window.SiteConfig.address.line2 + ", " + window.SiteConfig.address.city + ", " + window.SiteConfig.address.state;
};
