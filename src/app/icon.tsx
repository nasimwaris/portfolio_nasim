import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

// Route segment config
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

export default function Icon() {
  try {
    // Read the hero image
    const imageBuffer = readFileSync(join(process.cwd(), 'public/images/nasim image.jpeg'));
    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
            borderRadius: '50%',
          }}
        >
          <div
            style={{
              width: '84%',
              height: '84%',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              border: '10px solid white',
              backgroundColor: 'white',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <img
              src={base64Image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              alt="Nasim Waris"
            />
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    // Fallback if image reading fails
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
            borderRadius: '50%',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 120,
              fontWeight: 'bold',
            }}
          >
            N
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
