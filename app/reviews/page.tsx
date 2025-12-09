import PostCard from '../../components/PostCard';
import { getPostsByCategory } from '../../lib/posts';

export const metadata = { title: 'Reviews | Ethan\'s Reviews' };

export default function ReviewsPage() {
  const posts = getPostsByCategory('reviews');
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1rem' }}>
      <h1 className="section-title">Reviews</h1>
      <p className="subtitle">Hands-on impressions with the gear we love—and what to skip.</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
