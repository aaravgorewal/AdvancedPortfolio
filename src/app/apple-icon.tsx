import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
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
          paddingRight: '5px',
          paddingTop: '5px',
        }}
      >
        A<span style={{ color: '#E8913C' }}>.</span>
      </div>
    ),
    { ...size }
  )
}
