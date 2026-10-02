import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { packages, packageData } from '@/data/siteData';

export function SessionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find(p => p.slug === slug);
  const details = packageData.find(d => d.name.toLowerCase() === pkg?.title.toLowerCase());

  if (!pkg) {
    return (
      <div className="pt-[205px] px-[clamp(24px,9vw,145px)] pb-[100px] text-center">
        <h1 className="font-serif text-[40px] mb-[20px]">Session not found</h1>
        <Link to="/sessions" className="text-bronze uppercase text-[12px] tracking-widest inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Sessions
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageIntro eyebrow="Session Detail" title={pkg.title} text={pkg.text} />
      <section className="pb-[140px] max-w-[800px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="mb-[60px]">
          <Link to="/sessions" className="text-bronze uppercase text-[10px] font-semibold tracking-[0.12em] inline-flex items-center gap-[8px] hover:text-[#363637] transition-colors">
            <ArrowLeft size={14} /> Back to Sessions
          </Link>
        </div>
        
        <div className="border border-gold p-[40px] md:p-[60px]">
          <h2 className="font-serif text-[32px] mb-[20px]">What is included</h2>
          {details && (
            <ul className="mb-[40px] space-y-[15px]">
              {details.items.map((item, i) => (
                <li key={i} className="flex items-start gap-[15px] text-[#363637] text-[15px] leading-[1.6]">
                  <span className="text-bronze mt-[4px]">✦</span> {item}
                </li>
              ))}
            </ul>
          )}
          
          <div className="pt-[40px] border-t border-muted-gold flex flex-col sm:flex-row sm:items-center justify-between gap-[20px]">
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-bronze mb-[5px]">Investment</span>
              <span className="font-serif text-[28px]">{pkg.price}</span>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center h-[50px] px-[30px] bg-[#1a1a1a] text-[#f2e7d5] uppercase text-[10px] tracking-[0.2em] hover:bg-[#333] transition-colors">
              Book this session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
