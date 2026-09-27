import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { mapItems } from '@/data/siteData';

export function NumerologyMap() {
  const [selectedMap, setSelectedMap] = useState(mapItems[0]);
  return (
    <section className="map-section section-shell">
      <SectionHeading eyebrow="A closer look" title="The numerology map." text="Each number offers a different lens. Select a point on the map to explore what it traditionally represents." align="center" />
      <div className="map-layout">
        <div className="map-visual">
          <div className="map-lines" />
          <div className="map-core">YOUR<br /><strong>NUMBERS</strong></div>
          {mapItems.map((item, index) => (
            <button key={item.label} className={`map-point point-${index + 1} ${selectedMap.label === item.label ? 'active' : ''}`} onClick={() => setSelectedMap(item)}>
              <span>{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
        <div className="map-detail">
          <span className="eyebrow">{selectedMap.label}</span>
          <h3>{selectedMap.text.split('.')[0]}.</h3>
          <p>{selectedMap.text}</p>
          <dl>
            <div><dt>Traditionally calculated from</dt><dd>{selectedMap.calc}</dd></div>
            <div><dt>Relevant consultation</dt><dd>{selectedMap.session}</dd></div>
          </dl>
          <BookingButton label="Explore this session" variant="outline" />
        </div>
      </div>
    </section>
  );
}
