import Link from 'next/link';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <div className="stack" style={{ flexDirection: 'column', gap: '1.75rem' }}>
      <section className="hero">
        <h1>Latest from Ethan&apos;s Reviews</h1>
        <p>
          Actionable guides, honest reviews, and safety tips for the gadgets and tools you rely on every day. Browse the newest
          stories below or jump into your favorite category.
        </p>
        <div className="stack">
          <Link className="button" href="/guides">
            Explore Guides
          </Link>
          <Link className="button" href="/roundups" style={{ background: '#111827' }}>
            See Roundups
          </Link>
        </div>
      </section>

      <section>
        <div className="stack" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="section-title">Latest Posts</h2>
          <Link href="/posts" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            View All
          </Link>
        </div>
        <div className="grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
