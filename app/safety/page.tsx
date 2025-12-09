import PostCard from '../../components/PostCard';
import { getPostsByCategory } from '../../lib/posts';

export const metadata = { title: 'Safety | Ethan\'s Reviews' };

export default function SafetyPage() {
  const posts = getPostsByCategory('safety');
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1rem' }}>
      <h1 className="section-title">Safety</h1>
      <p className="subtitle">Protect your data, devices, and loved ones with practical safeguards.</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
