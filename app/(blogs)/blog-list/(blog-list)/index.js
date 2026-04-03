"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BlogList from "@/components/Blogs/BlogList";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BreadCrumb from "@/components/Common/BreadCrumb";

const BlogListPage = ({ getAllBlogs }) => {
  const featuredPosts = Array.isArray(getAllBlogs)
    ? [...getAllBlogs].sort((a, b) => Number(b?.id || 0) - Number(a?.id || 0)).slice(0, 3)
    : [];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <BreadCrumb
            title="Blog & Insights"
            text="Trends, Guides, and Practical Lessons from Delivery"
          />

          <section className="rbt-blog-area rbt-section-gapTop pb--30 bg-color-white">
            <div className="container">
              <div className="section-title text-center mb--50">
                <span className="subtitle bg-primary-opacity">Featured</span>
                <h2 className="title">Top Reads From Our Team</h2>
                <p className="subtitle-desc">
                  Insights from web engineering, AI implementation, growth, and
                  product delivery.
                </p>
              </div>

              <div className="row g-4">
                {featuredPosts.map((post) => {
                  const slug = post?.slug || `blog-${post?.id}`;
                  const image = post?.thumbnail?.large || post?.addImg;
                  return (
                    <div className="col-lg-4 col-md-6" key={slug}>
                      <div className="premium-it-blog-card">
                        <div className="premium-it-blog-image">
                          {image ? (
                            <Image
                              src={image}
                              alt={post?.title || "Blog"}
                              width={450}
                              height={280}
                            />
                          ) : null}
                        </div>
                        <div className="premium-it-blog-content">
                          <h5 className="premium-it-blog-title">
                            <Link href={`/post-format-standard/${slug}`}>
                              {post?.title}
                            </Link>
                          </h5>
                          <div className="premium-it-blog-meta">
                            <span>{post?.publishedAt}</span>
                            <span>•</span>
                            <span>{post?.readingTime}</span>
                          </div>
                          <p className="premium-it-blog-excerpt">
                            {post?.excerpt || post?.desc}
                          </p>
                          <Link
                            className="premium-it-blog-readmore"
                            href={`/post-format-standard/${slug}`}
                          >
                            Read Article <i className="feather-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="section-title text-center mb--40">
                <h3 className="title">All Articles</h3>
              </div>
              <BlogList isPagination={true} blogdata={getAllBlogs} />
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogListPage;
