import { ReCAPTCHAProps, ReCAPTCHARef } from 'ReCAPTCHA_types'
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

const ReCAPTCHA = forwardRef(function ReCAPTCHA({ siteKey, handleExpired }: ReCAPTCHAProps, ref) {
  const recaptchaRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!document.querySelector('#recaptcha-script')) {
      let ReCAPTCHATimeout = 40 // ~12 sec (40 * 300 ms)
      const script = document.createElement('script')
      script.setAttribute('src', 'https://www.google.com/recaptcha/enterprise.js')
      script.setAttribute('async', 'true')
      script.setAttribute('defer', 'true')
      script.setAttribute('id', 'recaptcha-script')
      document.head.appendChild(script)

      script.onload = function () {
        const isLoaded = window.setInterval(() => {
          if (ReCAPTCHATimeout === 0) {
            window.clearInterval(isLoaded)
          }
          if (window.grecaptcha?.enterprise.render && recaptchaRef.current) {
            widgetIdRef.current = window.grecaptcha.enterprise.render(recaptchaRef.current, {
              sitekey: siteKey,
              callback: (token: string) => { handleExpired(token) },
              'expired-callback': () => { handleExpired(null) },
              // 'error-callback': () => { handleErrored },
              action: 'SEND_EMAIL'
            })
            window.clearInterval(isLoaded)
          }
          ReCAPTCHATimeout--
        }, 300)
      }
    } else if (widgetIdRef.current === null) {
      if (window.grecaptcha?.enterprise.render && recaptchaRef.current) {
        widgetIdRef.current = window.grecaptcha.enterprise.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: (token: string) => { handleExpired(token) },
          'expired-callback': () => { handleExpired(null) },
          // 'error-callback': () => { handleErrored },
          action: 'SEND_EMAIL'
        })
      }
    }

    // return () => {
    //   // document.querySelector('#recaptcha-script')?.remove()
    // }
  }, [handleExpired, siteKey])

  useImperativeHandle(ref, () => {
    return {
      reset() {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.enterprise.reset(widgetIdRef.current)
        }
      },
      getValue() {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          return window.grecaptcha.enterprise.getResponse(widgetIdRef.current)
        }
        return null
      },
    }
  }, [])

  return (
    <div ref={recaptchaRef}></ div>
  )
})

export type { ReCAPTCHARef }
export default ReCAPTCHA