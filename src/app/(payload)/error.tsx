'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: 40, fontFamily: 'system-ui' }}>
      <h2>Admin Error Details</h2>
      <pre style={{ background: '#f5f5f5', padding: 20, overflow: 'auto', whiteSpace: 'pre-wrap' }}>
        Message: {error.message}
        {'\nDigest: '}{error.digest}
        {'\nName: '}{error.name}
        {'\nStack: '}{error.stack}
      </pre>
      <button onClick={() => reset()} style={{ padding: '8px 16px', marginTop: 10 }}>
        Try again
      </button>
    </div>
  )
}
