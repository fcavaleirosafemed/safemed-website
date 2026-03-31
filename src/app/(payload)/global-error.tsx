'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ padding: 40, fontFamily: 'system-ui' }}>
        <h2>Admin Error</h2>
        <pre style={{ background: '#f5f5f5', padding: 20, overflow: 'auto', whiteSpace: 'pre-wrap' }}>
          {error.message}
          {'\n\nDigest: '}{error.digest}
          {'\n\nStack: '}{error.stack}
        </pre>
        <button onClick={() => reset()} style={{ padding: '8px 16px', marginTop: 10 }}>
          Try again
        </button>
      </body>
    </html>
  )
}
