export const metadata = { title: 'Disclaimer | Ethan\'s Reviews' };

export default function DisclaimerPage() {
  return (
    <article className="article">
      <h1>Disclaimer</h1>
      <div className="prose" style={{ display: 'grid', gap: '1rem' }}>
        <p>
          The content on Ethan&apos;s Reviews is for informational purposes only. While we test products and validate claims, all
          recommendations are provided without warranty. Always follow manufacturer instructions and consult professionals when
          working with electricity, tools, or safety equipment.
        </p>
        <p>
          Some articles include affiliate links. If you purchase through these links, we may earn a commission at no additional
          cost to you. Affiliate partnerships never influence our testing process or conclusions.
        </p>
      </div>
    </article>
  );
}
