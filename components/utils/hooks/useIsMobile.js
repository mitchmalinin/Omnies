import { useState, useEffect } from "react"

const getIsMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768
  } else {
    return true
  }
}

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return isMobile
}
