import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0A0C0E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EDE7DC',
          fontWeight: 900,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1,
          paddingRight: '1px',
          paddingTop: '1px',
        }}
      >
        A<span style={{ color: '#E8913C' }}>.</span>
      </div>
    ),
    { ...size }
  )
}
