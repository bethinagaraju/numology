import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { NumberRing } from '@/components/NumberRing';
import { toolMeta } from '@/data/siteData';

export function Tools() {
  return (
    <>
      <PageIntro eyebrow="Interactive tools" title="Explore your numbers." text="Use these interactive tools to explore traditional numerology calculations. Each result is a prompt for reflection, not a promise about the future." />
      <section className="tools-grid section-shell">
        {Object.entries(toolMeta).map(([slug, tool], i) => (
          <Link to={`/numerology-tools/${slug}`} className="tool-card" key={slug}>
            <span>0{i + 1}</span>
            <NumberRing number={i + 1} />
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <b>Calculate <ArrowRight size={14} /></b>
          </Link>
        ))}
      </section>
    </>
  );
}
