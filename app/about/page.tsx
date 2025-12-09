export const metadata = { title: 'About | Ethan\'s Reviews' };

export default function AboutPage() {
  return (
    <article className="article">
      <h1>About Ethan&apos;s Reviews</h1>
      <p className="subtitle">
        Ethan&apos;s Reviews is a space for thoughtful testing, safety-first tips, and transparent recommendations. Every guide is
        written to help you make confident choices without the jargon.
      </p>
      <div className="prose" style={{ display: 'grid', gap: '1rem' }}>
        <p>
          From smart home setups to outdoor gear, we spend hours researching and verifying claims before sharing our experience.
          When we include affiliate links, they never change our editorial standards—they simply help keep the lights on.
        </p>
        <p>
          You can expect practical walkthroughs, clear pros and cons, and an emphasis on safety so that the products you buy keep
          working long after the unboxing.
        </p>
      </div>
    </article>
  );
}
