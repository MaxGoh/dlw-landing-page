declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = "G-F906F8S345";

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", "button", `${buttonName}_${location}`);
};

export const trackNavClick = (navItem: string, isMobile: boolean = false) => {
  trackEvent(
    "click",
    "navigation",
    `${navItem}${isMobile ? "_mobile" : "_desktop"}`,
  );
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("submit", "form", formName);
};

export const trackLinkClick = (
  linkName: string,
  location: string,
  isExternal: boolean = false,
) => {
  trackEvent(
    "click",
    isExternal ? "external_link" : "internal_link",
    `${linkName}_${location}`,
  );
};

export const trackSocialClick = (platform: string) => {
  trackEvent("click", "social_link", platform);
};
