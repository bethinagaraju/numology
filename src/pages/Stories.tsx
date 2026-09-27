import { PageIntro } from '@/components/PageIntro';
import { FinalCta } from '@/components/FinalCta';
import { stories } from '@/data/siteData';

export function Stories() {
  return (
    <>
      <PageIntro eyebrow="Client stories" title="Stories from the other side." text="Placeholder stories for a future collection of approved client reflections. Names, cities and session types can be edited here." />
      <section className="stories-list section-shell">
        {stories.map((story) => (
          <article key={story.title}>
            <span className="quote-mark">“</span>
            <blockquote>{story.title}</blockquote>
            <p>Placeholder story · {story.city} · {story.type}</p>
          </article>
        ))}
      </section>
      <FinalCta />
    </>
  );
}
