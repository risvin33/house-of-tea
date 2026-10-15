import * as React from "react"

/**
 * Custom hook to measure element dimensions using ResizeObserver.
 * Measures synchronously in useLayoutEffect to avoid flash of unmeasured content.
 *
 * @param {React.RefObject<HTMLElement>} ref - Reference to the target DOM element
 * @returns {{ width: number, height: number } | null} The measured size or null before first measurement
 */
export function useSize(ref) {
  const [size, setSize] = React.useState(null)

  React.useLayoutEffect(() => {
    const element = ref?.current
    if (!element) return

    const updateSize = () => {
      const rect = element.getBoundingClientRect()
      setSize({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      })
    }

    // Measure initially before paint
    updateSize()

    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!entries || entries.length === 0) return
        const entry = entries[0]
        if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
          const { inlineSize, blockSize } = entry.borderBoxSize[0]
          setSize({
            width: Math.round(inlineSize),
            height: Math.round(blockSize),
          })
        } else {
          updateSize()
        }
      })

      resizeObserver.observe(element)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [ref])

  return size
}

export default useSize
