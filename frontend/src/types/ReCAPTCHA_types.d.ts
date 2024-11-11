declare module 'ReCAPTCHA_types' {
  export interface ReCAPTCHAProps {
    siteKey: string;
    handleExpired: (token: string | null) => void
    // handleErrored: (token: string | null) => void
  }

  export interface ReCAPTCHARef {
    reset: () => void,
    getValue: () => string | null
  }

}