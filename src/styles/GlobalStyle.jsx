import React from 'react';

export default function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@400;500;600&display=swap');
      
      /* ==========================================================================
         CEREBREXIA '26 - VERMILLION & REDDISH LOGO PALETTE
         Pure Vermillion · Sacred Amber · Crown Gold · Rubellite Magenta · Sapphire
         ========================================================================== */
      :root {
        /* Deep Rich Cinnabar & Crimson Wine Backgrounds (Noticeably warm & reddish, never muddy black) */
        --navy-void: #140508;
        --navy-deep: #1A060B;
        --navy-surface: #260910;
        --navy-card: #2E0B12;
        --indigo-nebula: #3D0E18;
        
        /* PRIMARY — Pure Vermillion Red (dominant logo color from fiery aura & brain) */
        --cyan: #E63926;
        --cyan-glow: #FF4D38;
        --cyan-dark: #9E1614;
        --azure-deep: #2A0810;
        --crx-red: #E63926;
        --crx-red-bright: #FF4D38;
        --crx-red-deep: #9E1614;
        --crx-vermillion: #E63926;
        --crx-vermillion-glow: #FF5540;
        --crx-cinnabar: #C82218;

        /* ACCENT — Sacred Amber & Parchment (from the mystical geometric halo & runic disk) */
        --crx-orange: #E27E3F;
        --crx-orange-bright: #F5934E;
        --crx-parchment-glow: #F0B888;

        /* ACCENT — Rubellite / Hot Magenta (crown gemstone cabochons) */
        --crx-magenta: #D81B60;
        --crx-magenta-bright: #F03A7E;
        --crx-magenta-deep: #8E0E3B;

        /* ACCENT — Sapphire Blue (center crown jewel contrast pop) */
        --crx-blue: #0077D8;
        --crx-blue-bright: #2997FF;

        /* Royal Antique Gold (crown filigree arches & diadem) */
        --gold: #E5A83B;
        --gold-glow: #F5BE52;
        --gold-amber: #B87B22;
        --gold-dark: #6E4610;
        --crx-gold: #E5A83B;

        /* Text & Neutrals (Warm ivory, cream, and soft parchment) */
        --cream: #FFF3E8;
        --paper: #E0CDC0;
        --ink: #140508;
        --muted: #A89080;
        --muted-blue: #8C7668;
        --crx-text-main: #FFF3E8;
        --crx-text-muted: #A89080;

        /* Borders & Glows */
        --hair: rgba(230, 57, 38, 0.32);
        --hair-vermillion: rgba(230, 57, 38, 0.45);
        --hair-gold: rgba(229, 168, 59, 0.42);
        --glow-cyan: 0 0 25px rgba(230, 57, 38, 0.55);
        --glow-vermillion: 0 0 25px rgba(230, 57, 38, 0.55);
        --glow-gold: 0 0 25px rgba(229, 168, 59, 0.55);
        --glow-magenta: 0 0 25px rgba(216, 27, 96, 0.55);
        --glow-blue: 0 0 25px rgba(0, 119, 216, 0.6);

        /* Shared CRX Design System */
        --crx-bg: #140508;
        --crx-surface: #260910;
        --crx-card-bg: #2E0B12;
        --crx-border: rgba(230, 57, 38, 0.22);
        --font-serif: 'Playfair Display', serif;
        --font-sans: 'Inter', sans-serif;
      }

      *, *::before, *::after {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        background-color: var(--navy-void);
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        overflow-x: clip;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100vw;
        background-color: var(--navy-void);
        color: var(--paper);
        overflow-x: hidden;
        overflow-x: clip;
        position: relative;
      }

      #root {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        overflow-x: clip;
        position: relative;
      }

      .crx-root {
        font-family: 'Space Grotesk', sans-serif;
        background:
          /* Sacred halo radiance at the top (from logo's parchment runic disk) */
          radial-gradient(ellipse 85% 45% at 50% -2%, rgba(226, 126, 63, 0.22) 0%, rgba(230, 57, 38, 0.24) 38%, rgba(160, 20, 28, 0.12) 65%, transparent 85%),
          /* Flowing mid-ground vermillion clouds */
          radial-gradient(ellipse 65% 50% at 12% 28%, rgba(230, 57, 38, 0.16) 0%, transparent 60%),
          radial-gradient(ellipse 65% 50% at 88% 46%, rgba(200, 34, 24, 0.16) 0%, transparent 60%),
          /* Crimson & ruby gem aura */
          radial-gradient(ellipse 70% 45% at 50% 70%, rgba(216, 27, 96, 0.11) 0%, rgba(230, 57, 38, 0.12) 35%, transparent 70%),
          /* Bottom deep vermillion mist */
          radial-gradient(ellipse 80% 40% at 50% 100%, rgba(190, 25, 30, 0.22) 0%, transparent 75%),
          /* Foundational rich cinnabar-wine gradient */
          linear-gradient(180deg, #180508 0%, #1B060C 25%, #150508 55%, #1A060C 80%, #120406 100%);
        color: var(--paper);
        min-height: 100vh;
        width: 100%;
        max-width: 100vw;
        position: relative;
        overflow-x: hidden;
        overflow-x: clip;
      }

      .crx-display {
        font-family: 'Anton', sans-serif;
        letter-spacing: 0.5px;
      }

      .crx-black {
        font-family: 'Archivo Black', sans-serif;
      }

      *:focus-visible {
        outline: 2px solid var(--gold);
        outline-offset: 3px;
      }

      /* Ambient background dust & vignetting — warm vermillion + magenta atmospheric glow */
      .crx-dots {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background-image: radial-gradient(rgba(230, 57, 38, 0.18) 1.2px, transparent 1.6px);
        background-size: 32px 32px;
        opacity: 0.65;
      }

      .crx-vignette {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background: radial-gradient(ellipse at 50% 10%, rgba(230, 57, 38, 0.16) 0%, rgba(216, 27, 96, 0.08) 45%, transparent 75%);
      }

      /* Angled Festival Sticker Badges */
      .crx-sticker {
        display: inline-block;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 7px 14px;
        border-radius: 6px;
        white-space: nowrap;
        background: rgba(212, 175, 85, 0.06);
        border: 1px solid rgba(212, 175, 85, 0.3);
        color: #E5C07B;
        box-shadow: none;
        max-width: 100%;
      }

      /* All tones render identically now — one unified design system, no solid fills */
      .crx-sticker.gold,
      .crx-sticker.orange,
      .crx-sticker.cyan {
        background: rgba(212, 175, 85, 0.06);
        border: 1px solid rgba(212, 175, 85, 0.3);
        color: #E5C07B;
        box-shadow: none;
      }

      /* Dedicated subtle badge for stat labels (Edition Live, Total Events, etc.) */
      .crx-stat-badge {
        display: inline-block;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 6px 12px;
        border-radius: 6px;
        white-space: nowrap;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #A1A1AA;
      }

      /* Buttons with Cosmic Glows */
      .crx-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        padding: 13px 26px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
      }

      .crx-btn:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
      }

      .crx-btn:active {
        transform: translateY(0);
      }

      .crx-btn.gold {
        background: linear-gradient(135deg, #E63926 0%, #D81B60 50%, #E5A83B 100%);
        color: #FFFFFF;
        box-shadow: 0 4px 22px rgba(230, 57, 38, 0.55);
      }

      .crx-btn.orange,
      .crx-btn.cyan {
        background: rgba(230, 57, 38, 0.12);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(230, 57, 38, 0.45);
        color: #FFF3E8;
        box-shadow: 0 4px 18px rgba(0,0,0,0.35);
      }

      .crx-btn.orange:hover,
      .crx-btn.cyan:hover {
        background: rgba(230, 57, 38, 0.22);
        border-color: rgba(230, 57, 38, 0.8);
      }

      /* Continuous Marquee Tickers */
      .crx-marquee {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        width: 100%;
      }

      .crx-marquee-track {
        display: inline-flex;
        align-items: center;
        animation: crx-scroll 24s linear infinite;
      }

      @keyframes crx-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @media (prefers-reduced-motion: reduce) {
        .crx-marquee-track { animation: none; }
      }

      /* Navigation Tabs */
      .crx-navtab {
        transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
      }

      .crx-navtab:hover {
        color: var(--cyan);
      }

      /* Cosmic Card Hover Effects */
      .crx-card {
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
      }

      .crx-card:hover {
        transform: translateY(-4px);
        border-color: rgba(230, 57, 38, 0.6) !important;
        box-shadow: 0 14px 35px -8px rgba(230, 57, 38, 0.35);
      }

      .crx-idcard {
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
      }

      .crx-idcard:hover {
        transform: translateY(-5px) rotate(0.6deg);
        box-shadow: 0 20px 35px -10px rgba(230, 57, 38, 0.35);
      }

      .crx-social {
        transition: transform 0.2s ease, color 0.2s ease;
      }

      .crx-social:hover {
        transform: translateY(-3px);
        color: var(--cyan) !important;
      }

      .crx-burger span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--paper);
        margin: 5px 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      /* Custom Cyan/Gold Scrollbar */
      .crx-scrollbar::-webkit-scrollbar {
        height: 6px;
      }
      .crx-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, var(--cyan), var(--gold));
        border-radius: 3px;
      }

      input, textarea {
        font-family: 'Space Grotesk', sans-serif;
      }
      input:focus, textarea:focus {
        border-color: var(--cyan) !important;
        box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.25) !important;
      }

      /* Floating Ambient Keyframe Animations */
      @keyframes crx-float {
        0% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
        100% { transform: translateY(10px) scale(0.98); }
      }

      @keyframes crx-pulse-glow {
        0%   { filter: drop-shadow(0 0 10px rgba(192, 57, 43, 0.5)); }
        33%  { filter: drop-shadow(0 0 20px rgba(192, 24, 90, 0.5)); }
        66%  { filter: drop-shadow(0 0 25px rgba(201, 151, 58, 0.6)); }
        100% { filter: drop-shadow(0 0 10px rgba(192, 57, 43, 0.5)); }
      }

      /* Glitch title reveal — tiny jitter while resolving */
      @keyframes crx-glitch-jitter {
        0%   { transform: translate(0, 0); }
        25%  { transform: translate(-1.5px, 1px); }
        50%  { transform: translate(1.5px, -1px); }
        75%  { transform: translate(-1px, -1px); }
        100% { transform: translate(0, 0); }
      }

      @media (prefers-reduced-motion: reduce) {
        [style*="crx-glitch-jitter"] { animation: none !important; }
      }

      /* ==========================================================================
         MASCOT HALO FX — rotating rays, spinning ring, pulsing light beam
         ========================================================================== */
      @keyframes crx-rays-spin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to   { transform: translate(-50%, -50%) rotate(360deg); }
      }

      @keyframes crx-ring-spin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to   { transform: translate(-50%, -50%) rotate(-360deg); }
      }

      @keyframes crx-beam-pulse {
        0%, 100% { opacity: 0.35; transform: translateX(-50%) scaleY(0.92); }
        50%      { opacity: 0.9;  transform: translateX(-50%) scaleY(1.05); }
      }

      @keyframes crx-halo-breathe {
        0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
        50%      { opacity: 1;    transform: translate(-50%, -50%) scale(1.08); }
      }

      .crx-mascot-rays {
        animation: crx-rays-spin 18s linear infinite;
      }

      .crx-mascot-ring {
        animation: crx-ring-spin 26s linear infinite;
      }

      .crx-mascot-beam {
        animation: crx-beam-pulse 3.2s ease-in-out infinite;
      }

      .crx-mascot-halo {
        animation: crx-halo-breathe 3.2s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .crx-mascot-rays,
        .crx-mascot-ring,
        .crx-mascot-beam,
        .crx-mascot-halo {
          animation: none !important;
        }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }

      /* ====================================================================
         NAVBAR GLASSMORPHISM & SCROLL BEHAVIOR
         ==================================================================== */
      header.crx-nav-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        padding: 20px 32px;
        transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
      }

      header.crx-nav-header.scrolled {
        background: rgba(20, 5, 8, 0.94);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(230, 57, 38, 0.28);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        padding: 14px 32px;
      }

      .crx-mobile-break {
        display: none;
      }

      /* ====================================================================
         MOBILE RESPONSIVENESS
         ==================================================================== */

      /* Prevent horizontal scroll everywhere */
      html, body, #root, .crx-root {
        overflow-x: hidden !important;
        overflow-x: clip !important;
        width: 100% !important;
        max-width: 100vw !important;
      }

      /* Ensure touch targets and mobile spacing */
      @media (max-width: 768px) {
        .crx-mobile-break {
          display: inline;
        }

        header.crx-nav-header {
          padding: 10px 16px !important;
          background: rgba(20, 5, 8, 0.90);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(230, 57, 38, 0.24);
        }

        header.crx-nav-header.scrolled {
          padding: 10px 16px !important;
          background: rgba(20, 5, 8, 0.97);
          border-bottom: 1px solid rgba(230, 57, 38, 0.4);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.85);
        }

        .crx-logo-badge {
          width: 42px !important;
          height: 42px !important;
          border-radius: 12px !important;
        }

        .crx-hamburger-btn {
          width: 42px !important;
          height: 42px !important;
          border-radius: 12px !important;
        }

        .crx-director-grid {
          grid-template-columns: 1fr !important;
          gap: 28px !important;
          text-align: center;
        }

        .crx-btn {
          padding: 14px 20px;
          font-size: 12px;
          min-height: 44px;
        }

        .crx-sticker {
          font-size: 10px !important;
          padding: 6px 12px !important;
          white-space: normal !important;
          text-align: center !important;
          word-break: normal !important;
          max-width: 90vw !important;
          line-height: 1.35 !important;
        }

        .crx-stat-badge {
          font-size: 0.65rem;
          padding: 5px 10px;
        }
      }

      /* Small phones (under 400px) */
      @media (max-width: 400px) {
        .crx-btn {
          padding: 12px 16px;
          font-size: 11px;
          letter-spacing: 0.4px;
        }

        .crx-sticker {
          font-size: 9px !important;
          letter-spacing: 0.6px !important;
          padding: 5px 10px !important;
        }
      }
    `}</style>
  );
}
