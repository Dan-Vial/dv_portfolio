declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        render: (container: string | HTMLElement, parameters: object) => number
        // execute: (widgetId?: number) => Promise<string>
        execute: (sitekey: string, action: object) => Promise<string>
        reset: (widgetId?: number) => void
        getResponse: (widgetId?: number) => string
      }
    }
  }
}

export { }