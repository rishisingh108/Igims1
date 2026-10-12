import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Instagram, Facebook, Linkedin, Youtube } from '../common/SocialIcons';
import Sticker from '../common/Sticker';
import { useIsNarrow } from '../../hooks/useIsNarrow';

const VENUE_ADDRESS = 'IGIMS, Sheikhpura, Bailey Road, Patna – 800014, Bihar, India';
const MAP_QUERY = encodeURIComponent(VENUE_ADDRESS);
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=15&ie=UTF8&output=embed`;
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function Footer({ setPage }) {
  const socials = [Instagram, Facebook, Linkedin, Youtube];
  const narrow = useIsNarrow(760);
  const midWidth = useIsNarrow(1080);

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(230, 57, 38, 0.28)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(20, 5, 8, 0.95) 100%)',
        padding: '60px 24px 40px',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        contain: 'paint',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: narrow ? '1fr' : midWidth ? '1fr 1fr' : '1.1fr 0.8fr 0.8fr 1.2fr',
          gap: 30,
        }}
      >
        <div>
          <Sticker tone="cyan" rotate={-2} style={{ marginBottom: 14 }}>
            Cerebrexia '26
          </Sticker>
          <p style={{ fontSize: 13.5, color: 'var(--paper)', lineHeight: 1.7, maxWidth: 320, margin: '0 0 16px' }}>
            The annual medical-college fest of IGIMS. Compete, perform, belong.
          </p>
        </div>
        <div>
          <Sticker tone="gold" rotate={2} style={{ marginBottom: 14 }}>
            Explore
          </Sticker>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Events', 'Pronites', 'Accommodation', 'Team', 'Contact', 'Home'].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 13.5,
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Sticker tone="cyan" rotate={-2} style={{ marginBottom: 14 }}>
            Connect
          </Sticker>
          <div style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
            {socials.map((Icon, i) => (
              <a key={i} href="#" className="crx-social" style={{ color: 'var(--paper)' }}>
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>cerebrexia@igims.edu</p>
        </div>

        {/* Find us — real embedded map */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Sticker tone="gold" rotate={2}>
              Find Us
            </Sticker>
            <a
              href={MAP_OPEN_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 0.5,
                color: 'var(--gold-glow, #D4AF6A)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Open in Maps <ExternalLink size={12} />
            </a>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 130,
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: 10,
            }}
          >
            <iframe
              title="Cerebrexia venue map"
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ position: 'absolute', inset: 0, border: 0, filter: 'grayscale(0.25) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{VENUE_ADDRESS}</p>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: 11.5, color: 'var(--muted)', marginTop: 44 }}>
        IGIMS, Sheikhpura, Patna &ndash; 800014 &middot; The Crowned Diagnosis
      </p>
    </footer>
  );
}
