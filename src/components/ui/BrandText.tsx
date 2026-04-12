// BrandName — renders "Digital" in text-primary and "IQ" in accent
// Use wherever "DigitalIQ" appears as visible text in the UI
export function BrandName() {
  return (
    <>
      <span className="text-text-primary">Digital</span>
      <span className="text-accent">IQ</span>
    </>
  )
}

// BrandText — renders a content string with every "DigitalIQ" split and styled
export function BrandText({ text }: { text: string }) {
  const parts = text.split('DigitalIQ')
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <BrandName />}
        </span>
      ))}
    </>
  )
}
