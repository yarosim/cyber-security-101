/* Cyber Security 101 store config — edit this file only.
   PAYMENT_LINKS: paste each Stripe Payment Link URL (https://buy.stripe.com/...).
   Empty string = the Stripe button shows "Coming soon — email to order" (mailto).
   GUMROAD_LINKS: paste each Gumroad product URL (https://….gumroad.com/l/…).
   Empty string = the Gumroad button stays hidden. Checkout opens on Gumroad (?wanted=true). */
window.CS101_CONFIG = {
  SUPPORT_EMAIL: "pnsgloballlc@gmail.com",
  PAYMENT_LINKS: {
    "scam-defense-kit": "https://buy.stripe.com/9B600jd6AgNKdrYgTW2Ji28",
    "mfa-passkey-pack": "https://buy.stripe.com/7sY00jaYsapmafM9ru2Ji29",
    "small-business-kit": "https://buy.stripe.com/7sY8wP1nS696drYfPS2Ji2a",
    "complete-bundle": "https://buy.stripe.com/4gM6oH3w08hefA6bzC2Ji2b"
  },
  GUMROAD_LINKS: {
    "scam-defense-kit": "",
    "mfa-passkey-pack": "",
    "small-business-kit": "",
    "complete-bundle": ""
  },
  VIDEOS: {
    /* Paste the scam-text "5-second check" Short URL when published; the card stays hidden while empty. */
    "scamShort": "https://youtube.com/shorts/IZ6k6CqM8As",
    "channelFallback": "https://www.youtube.com/@cybersecurity1012"
  }
};
