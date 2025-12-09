export type PostCategory = 'guides' | 'reviews' | 'roundups' | 'safety';

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  excerpt: string;
  content: string;
  affiliateLink?: string;
};

const posts: Post[] = [
  {
    slug: 'top-safety-tips-for-home-smart-devices',
    title: 'Top Safety Tips for Home Smart Devices',
    date: '2024-06-02',
    category: 'safety',
    excerpt: 'Secure your home gadgets with simple, proactive steps that keep your data and your family safe.',
    content:
      'Smart devices can streamline daily routines, but they also widen the surface area for attacks. Start by changing default passwords, enabling two-factor authentication wherever available, and segmenting your Wi-Fi so that smart gadgets live on a separate network. Keep firmware up to date, review app permissions regularly, and enable automatic updates to close vulnerabilities fast.',
    affiliateLink: 'https://example.com/security-suite'
  },
  {
    slug: 'beginner-diy-3d-printing-guide',
    title: 'Beginner DIY 3D Printing Guide',
    date: '2024-05-20',
    category: 'guides',
    excerpt: 'Everything you need to know before printing your first prototype at home.',
    content:
      'Before you unbox your first printer, identify whether you prefer FDM or resin systems. Assemble on a level surface, run the provided calibration tools, and print a simple test cube to dial in temperatures. Invest in quality filament, keep your nozzle clean, and store materials in dry boxes to avoid stringing and warping.',
    affiliateLink: 'https://example.com/3d-printer'
  },
  {
    slug: 'best-portable-power-stations',
    title: 'Best Portable Power Stations for 2024',
    date: '2024-04-28',
    category: 'roundups',
    excerpt: 'We tested the newest battery packs to keep your adventures powered.',
    content:
      'From weekend camping trips to emergency preparedness, portable power stations shine when they deliver steady wattage and quick recharging. Look for LiFePO4 chemistry for longevity, a mix of AC and USB-C outputs, and pass-through charging. We favored units under 25 pounds with clear displays and UPS modes for home offices.',
    affiliateLink: 'https://example.com/power-station'
  },
  {
    slug: 'hands-on-aurora-headphones-review',
    title: 'Hands-On Aurora Headphones Review',
    date: '2024-04-12',
    category: 'reviews',
    excerpt: 'Premium noise cancellation with a comfortable fit for marathon listening.',
    content:
      'Aurora pairs plush memory-foam earcups with a wide soundstage. The ANC held up against subway commutes, and the 45-hour battery life meant we charged once a week. The companion app adds custom EQ and a transparency slider, though the case could be slimmer. Overall, it is a solid option for travelers and remote workers.',
    affiliateLink: 'https://example.com/aurora-headphones'
  }
];

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: PostCategory) {
  return getAllPosts().filter((post) => post.category === category);
}
