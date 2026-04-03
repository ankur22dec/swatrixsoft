import Image from "next/image";
import Link from "next/link";

const PremiumITBlogSection = ({ blogs = [] }) => {
  const posts = Array.isArray(blogs) ? [...blogs] : [];
  const featuredImages = [
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=900&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
  ];

  posts.sort((a, b) => {
    const aId = Number(a?.id ?? 0);
    const bId = Number(b?.id ?? 0);
    return bId - aId;
  });

  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="premium-it-blog">
      <div className="row mb--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <span className="subtitle bg-primary-opacity">INSIGHTS</span>
            <h2 className="title">Latest from Our Team</h2>
            <p className="subtitle-desc">
              Practical guides and real-world lessons from building modern
              digital products.
            </p>
          </div>
        </div>
      </div>

      <div className="row row--15">
        {featuredPosts.map((post, idx) => {
          const slug = post?.slug ?? `blog-${post?.id}`;
          const category = Array.isArray(post?.categories)
            ? post.categories[0]
            : post?.categories;
          const imgSrc = featuredImages[idx] ?? post?.thumbnail?.large ?? post?.addImg;

          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mt--30" key={slug}>
              <div className="premium-it-blog-card">
                <div className="premium-it-blog-image">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={post?.title ?? "Blog post"}
                      width={450}
                      height={300}
                    />
                  ) : null}
                  {category ? (
                    <span className="premium-it-blog-category">{category}</span>
                  ) : null}
                </div>

                <div className="premium-it-blog-content">
                  <h5 className="premium-it-blog-title">
                    <Link href={`/post-format-standard/${slug}`}>
                      {post?.title}
                    </Link>
                  </h5>

                  <div className="premium-it-blog-meta">
                    {post?.publishedAt ? <span>{post.publishedAt}</span> : null}
                    {post?.readingTime ? <span>•</span> : null}
                    {post?.readingTime ? <span>{post.readingTime}</span> : null}
                  </div>

                  {post?.excerpt ? (
                    <p className="premium-it-blog-excerpt">{post.excerpt}</p>
                  ) : (
                    <p className="premium-it-blog-excerpt">{post?.desc}</p>
                  )}

                  <Link
                    className="premium-it-blog-readmore"
                    href={`/post-format-standard/${slug}`}
                  >
                    Read More <i className="feather-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="premium-it-blog-footer text-center mt--40">
        <Link href="/blog-list" className="rbt-btn btn-gradient">
          <span>View All Insights</span>
        </Link>
      </div>
    </div>
  );
};

export default PremiumITBlogSection;

