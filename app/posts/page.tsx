import PostCard from '../../components/PostCard';
import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'All Posts | Ethan\'s Reviews'
};

export default function PostsIndexPage() {
  const posts = getAllPosts();
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1.5rem' }}>
      <h1 className="section-title">All Posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
