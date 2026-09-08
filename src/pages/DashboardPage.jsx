import React from 'react';
import { ShieldCheck, QrCode, Download, LogOut } from 'lucide-react';
import Sticker from '../components/common/Sticker';
import { useIsNarrow } from '../hooks/useIsNarrow';
import AuthForm from '../components/auth/AuthForm';
import DynamicBackground from '../components/common/DynamicBackground';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const narrow = useIsNarrow(760);

  if (loading) {
    return (
      <section style={{ padding: '180px 24px 100px', maxWidth: 420, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', fontSize: 13 }}>Initializing uplink...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section style={{ padding: '150px 24px 100px', maxWidth: 700, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        {/* Locally-scoped copy of the site's dynamic particle background, so this
            page always shows it even if it's ever reached outside the main App shell. */}
        <DynamicBackground />

        {/* Extra, much more visible ambient glows so the dynamic feel actually reads
            on this otherwise-empty page (the global canvas alone is very subtle). */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 700,
            maxWidth: '90vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(179, 18, 58, 0.30) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 106, 0.16) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <AuthForm />
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '150px 24px 100px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 30 }}>
        <div>
          <h1 className="crx-display" style={{ fontSize: 28, color: 'var(--cream)', marginBottom: 8 }}>
            YOUR REGISTRATIONS
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 13 }}>Logged in as: {user.email}</p>
        </div>
        <button onClick={signOut} className="crx-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>
          <LogOut size={14} /> SIGN OUT
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 260px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {['Cricket', 'Got Talent', 'Case Presentation'].map((ev) => (
            <div
              key={ev}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 18px',
                borderRadius: 12,
                border: '1px solid var(--hair)',
                background: 'rgba(255,243,214,.05)',
              }}
            >
              <span style={{ fontSize: 14 }}>{ev}</span>
              <Sticker tone="gold" rotate={0} style={{ fontSize: 9, padding: '4px 10px' }}>
                Confirmed
              </Sticker>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 20,
            borderRadius: 16,
            border: '1px solid rgba(179, 18, 58, 0.3)',
            background: 'linear-gradient(160deg, #181212 0%, #0A0505 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
          }}
        >
          <QrCode size={70} color="var(--gold)" style={{ margin: '0 auto 12px' }} />
          <p style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 12 }}>Unique per-day entry QR</p>
          <button className="crx-btn gold" style={{ width: '100%', justifyContent: 'center', fontSize: 11 }}>
            <Download size={13} /> Download Badge
          </button>
        </div>
      </div>
    </section>
  );
}
