import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} | Ethan's Reviews`,
    description: post.excerpt
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="article">
      <div className="stack" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="badge" style={{ textTransform: 'capitalize' }}>{post.category}</span>
        <span style={{ color: 'var(--muted)' }}>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <h1 style={{ margin: '0.5rem 0' }}>{post.title}</h1>
      <p className="subtitle">{post.excerpt}</p>

      <div className="ad-slot" style={{ marginBottom: '1.5rem' }}>
        Sponsored placement – your message here.
      </div>

      <div className="prose" style={{ display: 'grid', gap: '1rem' }}>
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="ad-slot" style={{ margin: '1.5rem 0' }}>
        Advertisement
      </div>

      {post.affiliateLink && (
        <div className="stack" style={{ gap: '0.75rem', marginTop: '0.5rem' }}>
          <a className="button" href={post.affiliateLink} target="_blank" rel="noreferrer">
            Check Pricing
          </a>
          <Link className="button" href="/roundups" style={{ background: '#111827' }}>
            See Alternatives
          </Link>
        </div>
      )}
    </article>
  );
}
