import PostCard from '../../components/PostCard';
import { getPostsByCategory } from '../../lib/posts';

export const metadata = { title: 'Guides | Ethan\'s Reviews' };

export default function GuidesPage() {
  const posts = getPostsByCategory('guides');
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1rem' }}>
      <h1 className="section-title">Guides</h1>
      <p className="subtitle">Deep dives and how-tos to help you set up gear with confidence.</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
