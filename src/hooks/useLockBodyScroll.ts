import { useLayoutEffect } from "react";


export function useLockBodyScroll(i: boolean): void {
    useLayoutEffect(() : () => void => {
      const originalStyle: string = window.getComputedStyle(document.body).overflow;
     i ? document.body.style.overflow = "hidden" : null
      return () => i ? (document.body.style.overflow = originalStyle): null
    }, [i]); 
  }