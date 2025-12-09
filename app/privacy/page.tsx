export const metadata = { title: 'Privacy | Ethan\'s Reviews' };

export default function PrivacyPage() {
  return (
    <article className="article">
      <h1>Privacy Policy</h1>
      <div className="prose" style={{ display: 'grid', gap: '1rem' }}>
        <p>
          We collect minimal data to operate this site, including basic analytics to understand which stories resonate. Any
          tracking is anonymized, and we never sell or share personal information with third parties.
        </p>
        <p>
          If you join our mailing list, your email is stored solely for sending updates you request. You may unsubscribe at any
          time via the link included in each message.
        </p>
      </div>
    </article>
  );
}
