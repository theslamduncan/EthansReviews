import PostCard from '../../components/PostCard';
import { getPostsByCategory } from '../../lib/posts';

export const metadata = { title: 'Roundups | Ethan\'s Reviews' };

export default function RoundupsPage() {
  const posts = getPostsByCategory('roundups');
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1rem' }}>
      <h1 className="section-title">Roundups</h1>
      <p className="subtitle">Curated picks to help you choose the best gear faster.</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
