import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Ethan\'s Reviews',
  description: 'Guides, safety tips, and roundups for savvy shoppers.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container" style={{ paddingBottom: '1rem' }}>
          <nav className="stack" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>Ethan&apos;s Reviews</div>
            <div className="stack" style={{ gap: '1.25rem' }}>
              <a href="/">Home</a>
              <a href="/guides">Guides</a>
              <a href="/reviews">Reviews</a>
              <a href="/roundups">Roundups</a>
              <a href="/safety">Safety</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="container" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '2rem', color: 'var(--muted)' }}>
          <div className="stack" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <span>© {new Date().getFullYear()} Ethan&apos;s Reviews</span>
            <div className="stack" style={{ gap: '1rem' }}>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
