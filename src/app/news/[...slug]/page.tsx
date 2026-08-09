import { notFound } from "next/navigation";
import Link from "next/link";
import { newsArticles } from "@/data/news-articles";
import HeroSection from "@/components/HeroSection";

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticlePage({ params }: { params: { slug: string[] } }) {
  const article = newsArticles.find(
    (a) => JSON.stringify(a.slug) === JSON.stringify(params.slug)
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <HeroSection
        title={article.title}
        subtitle={`${article.category} | ${article.date}`}
        image="/arena_night_hero_1782318185369.png"
       size="small" />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-arena-primary transition">Home</Link>
          <svg className="w-3 h-3 inline mx-1.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/news" className="hover:text-arena-primary transition">News</Link>
          <svg className="w-3 h-3 inline mx-1.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-arena-dark font-medium">{article.title}</span>
        </nav>
        <article className="text-arena-dark leading-relaxed text-base space-y-4">
          <p>{article.content}</p>
        </article>
        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/news" className="text-arena-primary font-semibold text-sm uppercase tracking-wider hover:underline underline-offset-2">
            ← Back to news
          </Link>
        </div>
      </section>
    </>
  );
}
