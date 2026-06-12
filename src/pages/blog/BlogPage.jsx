import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FAQSection from "@/components/common/FAQSection";
import { blogPosts } from "@/data/blogData";
import SEO from "@/components/common/SEO";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Binazy Blog | Websites, Software, Growth, and Automation"
        description="Read practical articles from Binazy on website development, ecommerce, OTT apps, business software, automation, and digital growth."
        path="/blog"
      />
      <Navbar />

      <main id="main-content">
        <section className="bg-[#0f2070] text-white">
          <div className="section-container pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
                Insights & Articles
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Practical articles on websites, software, growth, and automation
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Explore ideas from the Binazy team on building better digital
                systems, improving operations, and creating experiences that
                support real business growth.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                  Latest Posts
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Read the topics your team can actually use
                </h2>
              </div>
              <p className="hidden text-sm text-slate-500 md:block">
                {blogPosts.length} articles
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200">
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col space-y-3 p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                      <span>{post.publishedAt}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-brand-700">
                      {post.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-600">
                      {post.description}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-2 pt-1 text-sm font-semibold text-brand-600">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
