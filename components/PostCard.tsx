import Link from 'next/link';
import type { Post } from '../lib/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="card">
      <div className="stack" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="badge" style={{ textTransform: 'capitalize' }}>{post.category}</span>
        <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <h3 style={{ marginBottom: '0.4rem' }}>{post.title}</h3>
      <p style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
      <div style={{ marginTop: '1rem' }}>
        <Link className="button" href={`/posts/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
