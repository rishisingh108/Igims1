import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Mail, Lock, LogIn, UserPlus, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { useIsNarrow } from '../../hooks/useIsNarrow';

const RED = '#DC2626';
const GOLD = '#D4AF6A';

function Field({ id, label, icon: Icon, type, value, onChange, placeholder, autoComplete, rightSlot }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: 11,
          textTransform: 'uppercase',
          color: focused ? GOLD : 'var(--muted)',
          marginBottom: 6,
          letterSpacing: 1,
          fontWeight: 700,
          transition: 'color 0.15s ease',
        }}
      >
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <Icon
          size={16}
          color={focused ? RED : 'var(--muted)'}
          style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'color 0.15s ease',
          }}
        />
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          autoComplete={autoComplete}
          style={{
            width: '100%',
            background: 'rgba(0,0,0,0.55)',
            border: `1px solid ${focused ? 'rgba(220, 38, 38, 0.65)' : 'rgba(255,255,255,0.1)'}`,
            boxShadow: focused ? '0 0 0 3px rgba(220, 38, 38, 0.15)' : 'none',
            padding: rightSlot ? '12px 42px 12px 40px' : '12px 14px 12px 40px',
            borderRadius: 10,
            color: 'white',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          }}
          placeholder={placeholder}
        />
        {rightSlot}
      </div>
    </div>
  );
}

export default function AuthForm({ onSuccess }) {
  const narrow = useIsNarrow(560);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (onSuccess) onSuccess();
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Check your email for the confirmation link!');
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(160deg, rgba(24,15,15,0.9) 0%, rgba(10,5,5,0.95) 100%)',
        border: '1px solid rgba(179, 18, 58, 0.3)',
        borderRadius: 20,
        padding: '32px 40px 28px',
        maxWidth: 620,
        margin: '0 auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.55)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes crx-auth-spin { to { transform: rotate(360deg); } }
        .crx-auth-spin { animation: crx-auth-spin 0.8s linear infinite; }
        .crx-google-btn:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(255,255,255,0.28) !important; transform: translateY(-1px); }
        .crx-eye-toggle:hover { color: var(--cream) !important; }
      `}</style>

      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${RED}, ${GOLD}, transparent)`,
        }}
      />

      {/* Decorative Glow */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          left: -60,
          width: 180,
          height: 180,
          background: 'rgba(220, 38, 38, 0.18)',
          filter: 'blur(60px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          right: -60,
          width: 180,
          height: 180,
          background: 'rgba(212, 175, 106, 0.12)',
          filter: 'blur(60px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Icon badge */}
      <div
        style={{
          position: 'relative',
          width: 48,
          height: 48,
          margin: '0 auto 14px',
          borderRadius: 14,
          background: 'rgba(220, 38, 38, 0.12)',
          border: `1px solid ${RED}`,
          boxShadow: '0 0 24px rgba(220, 38, 38, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShieldCheck size={22} color={GOLD} />
      </div>

      <h2
        className="crx-display"
        style={{ fontSize: 24, color: 'var(--cream)', marginBottom: 4, textAlign: 'center', position: 'relative' }}
      >
        {isLogin ? 'ACCESS TERMINAL' : 'INITIALIZE UPLINK'}
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 13, textAlign: 'center', marginBottom: 20, position: 'relative' }}>
        {isLogin ? 'Sign in to access your dashboard.' : 'Create an account to join Cerebrexia.'}
      </p>

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.5)',
            color: '#ff8f8f',
            padding: '12px 14px',
            borderRadius: 10,
            fontSize: 13,
            marginBottom: 20,
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{error}</span>
        </div>
      )}

      {message && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            color: '#86efac',
            padding: '12px 14px',
            borderRadius: 10,
            fontSize: 13,
            marginBottom: 20,
          }}
        >
          <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleEmailAuth} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
            gap: 16,
          }}
        >
          <Field
            id="crx-email"
            label="Email Address"
            icon={Mail}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />

          <Field
            id="crx-password"
            label="Password"
            icon={Lock}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="crx-eye-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  padding: 2,
                  display: 'flex',
                  transition: 'color 0.15s ease',
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>

        {isLogin && (
          <div style={{ textAlign: 'right', marginTop: -6 }}>
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                fontSize: 11.5,
                cursor: 'pointer',
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="crx-btn gold"
          style={{ width: '100%', justifyContent: 'center', marginTop: 4, opacity: loading ? 0.75 : 1 }}
        >
          {loading ? (
            <>
              <Loader2 size={16} className="crx-auth-spin" /> PROCESSING...
            </>
          ) : isLogin ? (
            <>
              <LogIn size={16} /> SIGN IN
            </>
          ) : (
            <>
              <UserPlus size={16} /> REGISTER
            </>
          )}
        </button>
      </form>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', color: 'var(--muted)' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
        <span style={{ padding: '0 10px', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5 }}>Or</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="crx-btn crx-google-btn"
        style={{
          width: '100%',
          justifyContent: 'center',
          background: 'white',
          color: '#1F1F1F',
          boxShadow: '0 4px 15px rgba(255,255,255,0.18)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
          </g>
        </svg>
        CONTINUE WITH GOOGLE
      </button>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError(null);
            setMessage(null);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: GOLD,
            fontSize: 12.5,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}
