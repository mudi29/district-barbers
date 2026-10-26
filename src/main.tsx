import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SITE_DOMAIN, UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from "./content";

if (UMAMI_WEBSITE_ID) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = UMAMI_SCRIPT_URL;
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  script.dataset.domains = `${SITE_DOMAIN},www.${SITE_DOMAIN}`;
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
