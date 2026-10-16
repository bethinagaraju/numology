import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  staticPageSEO,
  packageSEO,
  toolSEO,
  type PageSEO
} from '@/config/seoConfig';

interface SEOHeadProps {
  customSEO?: Partial<PageSEO>;
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string | null) {
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!content) {
    if (element) element.remove();
    return;
  }
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string | null) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!href) {
    if (element) element.remove();
    return;
  }
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function updateStructuredData(id: string, data: Record<string, any> | Array<Record<string, any>> | null) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function SEOHead({ customSEO }: SEOHeadProps = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Resolve page SEO based on current route
    let seo: PageSEO;

    if (staticPageSEO[pathname]) {
      seo = staticPageSEO[pathname];
    } else if (pathname.startsWith('/sessions/')) {
      const slug = pathname.replace('/sessions/', '');
      const pkg = packageSEO[slug] || {
        title: 'Personal Numerology Consultation | The Golden Numeralist',
        description: 'Comprehensive numerology consultation package with Namrattaa Lal.',
        price: '150'
      };
      seo = {
        title: pkg.title,
        description: pkg.description,
        canonicalPath: `/sessions/${slug}`,
        keywords: ['Numerology session', slug, 'Namrattaa Lal', 'The Golden Numeralist'],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Sessions', path: '/sessions' },
          { name: pkg.title.split('|')[0].trim(), path: `/sessions/${slug}` }
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': pkg.title.split('|')[0].trim(),
          'provider': {
            '@type': 'ProfessionalService',
            'name': 'The Golden Numeralist',
            'url': BASE_URL
          },
          'url': `${BASE_URL}/sessions/${slug}`,
          'description': pkg.description,
          'offers': {
            '@type': 'Offer',
            'price': pkg.price,
            'priceCurrency': 'AED',
            'availability': 'https://schema.org/InStock'
          }
        }
      };
    } else if (pathname === '/basic-package' || pathname === '/detailed-package' || pathname === '/comprehensive-package') {
      // Alias package routes - canonicalize back to /sessions/*
      const slug = pathname.substring(1);
      const pkg = packageSEO[slug];
      seo = {
        title: pkg?.title || 'Numerology Package | The Golden Numeralist',
        description: pkg?.description || 'Numerology consultation package.',
        canonicalPath: `/sessions/${slug}`,
        noindex: false
      };
    } else if (pathname.startsWith('/numerology-tools/')) {
      const slug = pathname.replace('/numerology-tools/', '');
      // Handle tool aliases canonicalizing to canonical tool slug
      const canonicalSlug = slug === 'personality' ? 'personality-number' :
                            slug === 'destiny' ? 'destiny-number' :
                            slug === 'kua-number' ? 'aura-kua-number' :
                            slug === 'name-number' ? 'name-numerology' :
                            slug === 'personal-year' ? 'personal-year-numerology' : slug;
      const tool = toolSEO[canonicalSlug] || {
        title: 'Numerology Tool Guide | The Golden Numeralist',
        description: 'Numerology calculation and interpretive guide by Namrattaa Lal.'
      };
      seo = {
        title: tool.title,
        description: tool.description,
        canonicalPath: `/numerology-tools/${canonicalSlug}`,
        keywords: [canonicalSlug.replace('-', ' '), 'Lo Shu Numerology', 'The Golden Numeralist', 'Namrattaa Lal'],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Numerology Tools', path: '/numerology-tools' },
          { name: tool.title.split('|')[0].trim(), path: `/numerology-tools/${canonicalSlug}` }
        ]
      };
    } else {
      // 404 or unknown route
      seo = {
        title: 'Page Not Found | The Golden Numeralist',
        description: 'The requested page could not be found. Explore personal numerology consultations, tools, and stories with Namrattaa Lal.',
        canonicalPath: pathname,
        noindex: true
      };
    }

    // Merge with any custom SEO passed as props
    if (customSEO) {
      seo = { ...seo, ...customSEO };
    }

    const fullCanonicalUrl = `${BASE_URL}${seo.canonicalPath}`;
    const fullOgImage = seo.ogImage || DEFAULT_OG_IMAGE;

    // 1. Update Document Title
    document.title = seo.title;

    // 2. Update Standard Meta Tags
    updateMetaTag('name', 'description', seo.description);
    if (seo.keywords && seo.keywords.length > 0) {
      updateMetaTag('name', 'keywords', seo.keywords.join(', '));
    }
    updateMetaTag('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Update Canonical Tag
    updateLinkTag('canonical', fullCanonicalUrl);

    // 4. Update Open Graph Tags
    updateMetaTag('property', 'og:title', seo.title);
    updateMetaTag('property', 'og:description', seo.description);
    updateMetaTag('property', 'og:url', fullCanonicalUrl);
    updateMetaTag('property', 'og:image', fullOgImage);
    updateMetaTag('property', 'og:type', seo.ogType || 'website');
    updateMetaTag('property', 'og:site_name', 'The Golden Numeralist');

    // 5. Update Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seo.title);
    updateMetaTag('name', 'twitter:description', seo.description);
    updateMetaTag('name', 'twitter:image', fullOgImage);

    // 6. Build & Inject BreadcrumbList Schema if breadcrumbs exist
    const schemaList: Array<Record<string, any>> = [];

    if (seo.breadcrumbs && seo.breadcrumbs.length > 1) {
      schemaList.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': seo.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': crumb.name,
          'item': `${BASE_URL}${crumb.path === '/' ? '' : crumb.path}`
        }))
      });
    }

    if (seo.schema) {
      if (Array.isArray(seo.schema)) {
        schemaList.push(...seo.schema);
      } else {
        schemaList.push(seo.schema);
      }
    }

    if (schemaList.length > 0) {
      updateStructuredData('route-schema', schemaList.length === 1 ? schemaList[0] : { '@context': 'https://schema.org', '@graph': schemaList });
    } else {
      updateStructuredData('route-schema', null);
    }
  }, [pathname, customSEO]);

  return null;
}
