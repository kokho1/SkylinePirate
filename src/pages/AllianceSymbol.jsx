import React from 'react';

const AllianceSymbol = ({ type }) => {
  switch (type) {
    case 'maritime':
      // Maritime Memento Guild
      // Symbol: A quill pen & spyglass crossed over an open scrapbook
      // We'll show an open book at bottom, with a stylized quill and spyglass crossing above it.
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          {/* Soft background circle (optional) */}
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>
          
          {/* Open Book */}
          <path 
            d="M30 60 C 35 55, 65 55, 70 60 Q 50 58 30 60 Z" 
            fill="#f5e9d6" 
            stroke="#bbb" strokeWidth="1"
          />
          <path 
            d="M30 60 L30 58 Q50 56 70 58 L70 60"
            fill="#fff" 
            stroke="#aaa" strokeWidth="0.5"
          />

          {/* Spyglass (angled) */}
          <g transform="translate(50,45) rotate(-25)">
            <line x1="0" y1="0" x2="0" y2="15" stroke="#8b6c42" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="0" cy="17" r="3" fill="#8b6c42" stroke="#555" strokeWidth="1"/>
          </g>

          {/* Quill Pen (opposite angle) */}
          <g transform="translate(50,45) rotate(25)">
            <line x1="0" y1="0" x2="0" y2="15" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M0,6 C5,10 5,14 0,18 C-5,14 -5,10 0,6Z" fill="#ffffff" stroke="#333" strokeWidth="0.5"/>
          </g>
        </svg>
      );

    case 'sauce':
      // Sea-Sauce Syndicate
      // Symbol: Ladle stirring a compass rose (circle with cross) + hot sauce motif
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>
          {/* Compass rose: circle with cross */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="#d9534f" strokeWidth="3"/>
          <line x1="50" y1="30" x2="50" y2="70" stroke="#4b2e2e" strokeWidth="2"/>
          <line x1="30" y1="50" x2="70" y2="50" stroke="#4b2e2e" strokeWidth="2"/>

          {/* Ladle: A small bowl + handle above the compass rose */}
          <g transform="translate(50,50)">
            <path d="M0,-10 A10,10 0 0,1 0,-10.01" fill="#a0522d" stroke="#4b2e2e" strokeWidth="1"/>
            <line x1="0" y1="-10" x2="0" y2="-20" stroke="#4b2e2e" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </svg>
      );

    case 'harmonized':
      // Harmonized Hull-Busters
      // Symbol: Harp-shaped hammer tapping on a miniature hull + musical notes
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>

          {/* Hull (small arc at bottom) */}
          <path d="M35 65 Q50 60 65 65" fill="none" stroke="#614126" strokeWidth="3"/>

          {/* Hammer handle */}
          <line x1="50" y1="40" x2="50" y2="55" stroke="#8c8c8c" strokeWidth="4" strokeLinecap="round"/>

          {/* Hammer head */}
          <rect x="47" y="35" width="6" height="8" fill="#ccc" stroke="#aaa" strokeWidth="1" rx="1"/>

          {/* Musical notes */}
          <text x="55" y="30" fontSize="10" fill="#ffffaa" fontWeight="bold">♪</text>
          <text x="60" y="25" fontSize="8" fill="#ffffaa" fontWeight="bold">♫</text>
        </svg>
      );

    case 'dancing':
      // Dancing Dagger Alliance
      // Symbol: Musical note + sword on a metronome
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>

          {/* Metronome (triangle) */}
          <path d="M45 65 L55 65 L50 45 Z" fill="#555" stroke="#333" strokeWidth="1"/>

          {/* Sword (vertical line + hilt) */}
          <line x1="50" y1="45" x2="50" y2="60" stroke="#000" strokeWidth="2"/>
          <rect x="48" y="60" width="4" height="4" fill="#333"/>

          {/* Musical note: a note head and a stem */}
          <circle cx="58" cy="55" r="3" fill="#87ceeb"/>
          <line x1="58" y1="52" x2="58" y2="45" stroke="#000" strokeWidth="1.5"/>
        </svg>
      );

    case 'gearheads':
      // Groovy Gearheads Guild
      // Symbol: Gear with a monocle and mustache on a blade
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>

          {/* Gear circle */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="#888" strokeWidth="5"/>

          {/* Monocle (small circle off to one side) */}
          <circle cx="62" cy="42" r="5" fill="#fff" stroke="#555" strokeWidth="1"/>

          {/* Mustache: two angled lines */}
          <line x1="53" y1="48" x2="58" y2="46" stroke="#000" strokeWidth="2"/>
          <line x1="47" y1="48" x2="42" y2="46" stroke="#000" strokeWidth="2"/>

          {/* Blade (curved line under gear) */}
          <path d="M40 60 Q50 55 60 60" fill="none" stroke="#4a4a4a" strokeWidth="3"/>
        </svg>
      );

    default:
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ display: 'block', margin: '0 auto' }}>
          <circle cx="50" cy="50" r="48" fill="#e0f7fa" stroke="#d0e8eb" strokeWidth="2"/>
          <text x="50" y="55" textAnchor="middle" fontSize="14" fill="#333">?</text>
        </svg>
      );
  }
};

export default AllianceSymbol;
