import React from 'react';
import styles from '../styles/Alliances.css';
import AllianceSymbol from './AllianceSymbol';

const alliances = [
  {
    name: 'Maritime Memento Guild',
    members: 'Jerrick (Captain & Chronicler), Jayden (Scout & Visual Storyteller), Rachel (Archaeologist & Tailor)',
    purpose: 'To meticulously document grand historical events, crew exploits, and noteworthy encounters, presenting them with style and absurdity.',
    funnyTwist: 'Monthly “Scrapbook Symposiums” transforming brutal battle reports into coffee-table albums with sarcastic commentary.',
    symbolDetail: 'A quill pen and spyglass crossed over an open scrapbook, with ink dripping into the lens.',
    detailedDescription: `
      The Maritime Memento Guild unites Jerrick’s earnest chronicling, Jayden’s vibrant combat sketches, and Rachel’s scholarly flair.
      Expect witty marginalia, footnotes that would baffle historians, and illustrations that turn violent struggles into artistic, if confusing, masterpieces.
    `,
    symbolType: 'maritime'
  },
  {
    name: 'Sea-Sauce Syndicate',
    members: 'Kok (Cook & Staff), BBC (Helmsman & Shipwright), Derick (First Mate & Martial Artist)',
    purpose: 'To blend culinary arts with daring navigation and combat prowess, ensuring gourmet chaos and a well-fed crew.',
    funnyTwist: 'Mid-battle “Stir-Fry Duels” where spicy steam blinds foes and Derick’s kicks land on well-seasoned enemies. Loser washes dishes!',
    symbolDetail: 'A ladle stirring a compass rose, dripping hot sauce. Direction should have a kick!',
    detailedDescription: `
      The Sea-Sauce Syndicate marries flavor and ferocity.
      Kok spices the journey, BBC steers with gusto, and Derick’s martial finesse ensures no one chokes on ambition.
      Meals bring tears of delight or terror, depending on your alignment.
    `,
    symbolType: 'sauce'
  },
  {
    name: 'Harmonized Hull-Busters',
    members: 'Jaeger (Boatswain & Scholar), Angelin (Spy & Six Powers Prodigy), Daniel (Doctor & Soundwave Surgeon)',
    purpose: 'Maintain the ship’s integrity, secure stealthy advantages, and heal wounds—all in perfect melodic harmony.',
    funnyTwist: '“Meditative Maintenance” every Monday: each hammer strike follows a scale. Off-key notes earn gentle teasing and a karaoke penalty.',
    symbolDetail: 'A harp-shaped hammer tapping on a miniature hull, musical notes drifting from its head.',
    detailedDescription: `
      The Harmonized Hull-Busters unite craft, espionage, and medical precision under a tuneful umbrella.
      They fix masts with lullabies, silence foes with hush-hush harmonies, and cure fevers with a gentle serenade.
    `,
    symbolType: 'harmonized'
  },
  {
    name: 'Dancing Dagger Alliance',
    members: 'Jaycer (Lookout & Dancer), Tamao (Swordswoman & Fox-Fox Fruit User), Jae (Navigator & Musician)',
    purpose: 'Choreograph dazzling battle routines that blend dance, blades, and music into awe-inspiring performances.',
    funnyTwist: '“Tap & Slash Rehearsal” before battles: sword strikes land on musical downbeats, leaving foes confused and impressed.',
    symbolDetail: 'A musical note entwined with a slender sword atop a tiny metronome, symbolizing rhythmic precision.',
    detailedDescription: `
      The Dancing Dagger Alliance turns battlefields into grand stages.
      Jaycer’s fancy footwork, Tamao’s sword dances, and Jae’s rhythmic freestyle leave foes unsure whether to applaud or flee.
    `,
    symbolType: 'dancing'
  },
  {
    name: 'Groovy Gearheads Guild',
    members: 'Naing (Scientist & Assassin), Bethany (Quartermaster), Howie (Beast Tamer), Kaede (Scholar & Swashbuckler), Erika (Swordswoman)',
    purpose: 'Designing bizarre yet brilliant ship modifications, taming odd creatures, and crafting gadgets that confuse foes and amuse allies.',
    funnyTwist: '“Mechanical Masquerades” require new contraptions to wear tiny costumes—gears with top hats, cannons with bow ties—debuting in style.',
    symbolDetail: 'A gear wheel with a monocle and mustache atop a curved blade, for classy mechanical mayhem.',
    detailedDescription: `
      The Groovy Gearheads Guild engineers elegant absurdity.
      Naing’s cunning mods, Bethany’s resource distribution, Howie’s beast-wrangling, Kaede’s linguistic brilliance, and Erika’s revolving artistry form a steam-powered dream team of inventive insanity.
    `,
    symbolType: 'gearheads'
  }
];

const Alliances = () => {
  return (
    <div className="alliances-container">
      <h1 className="alliances-title">Skyline Pirates - Alliances & Allegiances</h1>
      <div className="alliances-grid">
        {alliances.map((alliance, idx) => (
          <div className="alliance-card" key={idx}>
           <div className="alliance-symbol-container">
        <AllianceSymbol type={alliance.symbolType} />
        </div>
            <div className="alliance-info">
              <h2>{alliance.name}</h2>
              <p className="alliance-members"><strong>Members:</strong> {alliance.members}</p>
              <p className="alliance-purpose"><strong>Purpose:</strong> {alliance.purpose}</p>
              <p className="alliance-funnyTwist"><strong>Funny Twist:</strong> {alliance.funnyTwist}</p>
              <p className="alliance-symbol"><strong>Symbol:</strong> {alliance.symbolDetail}</p>
              <p className="alliance-description">{alliance.detailedDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alliances;
