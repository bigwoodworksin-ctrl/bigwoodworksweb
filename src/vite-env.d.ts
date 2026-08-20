/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly NEXT_PUBLIC_SITE_URL?: string;
  readonly VERCEL_PROJECT_PRODUCTION_URL?: string;
  readonly VERCEL_URL?: string;
}
