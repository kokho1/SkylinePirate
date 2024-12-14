const crewStats = {
  "Molejona 'Hot Shower' Jerrick": {
    stats: {
      strength: 8,
      intelligence: 9,
      charisma: 10,
      combatSkill: 7,
      speed: 8,
      durability: 7,
      haki: 9,
      creativity: 8,
    },
    dynamic:
      "Inspires loyalty through charisma and optimism. Maintains balance between authority and camaraderie.",
    weapon: {
      name: "Aqua Blade",
      detail:
        "A water-infused sword that amplifies his Drizzle-Drizzle Fruit powers, capable of unleashing devastating water slashes and defensive barriers.",
    },
    specialAbility: "Aqua Tempest",
    specialAbilityDescription:
      "Unleashes a massive water vortex using the Aqua Blade, disorienting enemies and creating a defensive barrier for allies.",
    awakeningBoost: "Ocean's Blessing",
    awakeningBoostDescription:
      "Boosts charisma, haki, and durability by 20%. Allies within the vortex gain a temporary increase in morale and defense.",
    quirk: "Insists on taking a warm shower before every battle, no matter the circumstances.",
  },
  "Jew Frias 'Burger Destroyer' Derick": {
    stats: {
      strength: 9,
      intelligence: 7,
      charisma: 8,
      combatSkill: 10,
      speed: 8,
      durability: 9,
      haki: 10,
      creativity: 7,
    },
    dynamic:
      "Supports the crew by boosting morale and strategizing combat plans.",
    weapon: {
      name: "Haki-Infused Gauntlets",
      detail:
        "Designed for high-impact taekwondo strikes and advanced haki techniques.",
    },
    specialAbility: "Haki Barrage",
    specialAbilityDescription:
      "Rapid, high-impact taekwondo strikes infused with advanced haki, creating shockwaves that knock back multiple enemies.",
    awakeningBoost: "Iron Resolve",
    awakeningBoostDescription:
      "Increases strength, combat skill, and haki by 25%. Enhances gauntlets with indestructible energy for the duration.",
    quirk: "Always sneaks a burger into strategy meetings and eats it mid-discussion.",
  },
  "Fernandez Jaeger ('Kanade')": {
    stats: {
      strength: 6,
      intelligence: 10,
      charisma: 6,
      combatSkill: 8,
      speed: 7,
      durability: 6,
      haki: 9,
      creativity: 10,
    },
    dynamic:
      "Analyzes situations with a scholar's mindset, ensuring efficiency and precision in plans.",
    weapon: {
      name: "Ancient Tome Blade",
      detail:
        "A weapon forged from historical texts with embedded haki powers.",
    },
    specialAbility: "Tome of Ruin",
    specialAbilityDescription:
      "Summons pages from the Ancient Tome Blade that unleash powerful haki-imbued strikes, binding enemies in chains of energy.",
    awakeningBoost: "Scholar's Insight",
    awakeningBoostDescription:
      "Doubles intelligence and creativity for strategy and problem-solving. Boosts combat skill for precise, calculated attacks.",
    quirk: "Shouts obscure historical quotes in battle, confusing both enemies and allies.",
  },
  "Pidlaoan 'The Stunning Dancer' Jaycer": {
    stats: {
      strength: 7,
      intelligence: 8,
      charisma: 9,
      combatSkill: 8,
      speed: 10,
      durability: 7,
      haki: 8,
      creativity: 10,
    },
    dynamic:
      "Combines dance and combat techniques to inspire the crew and confuse opponents with his Glist-Glist Fruit powers.",
    weapon: {
      name: "Rhythmic Blades",
      detail:
        "Lightweight, flexible swords that synchronize with his dance movements.",
    },
    specialAbility: "Blazing Waltz",
    specialAbilityDescription:
      "Combines his Glist-Glist Fruit powers with Rhythmic Blades to create a dazzling display of fiery slashes and unpredictable movements.",
    awakeningBoost: "Dance of Vitality",
    awakeningBoostDescription:
      "Increases speed, charisma, and creativity by 30%. Allies are inspired, gaining temporary haste and enhanced coordination.",
    quirk: "Refuses to fight unless background music is playing.",
  },
  "Alea 'Con Artist' Jayden": {
    stats: {
      strength: 7,
      intelligence: 10,
      charisma: 7,
      combatSkill: 8,
      speed: 7,
      durability: 6,
      haki: 9,
      creativity: 10,
    },
    dynamic:
      "Uses observation haki and artistic abilities to manipulate the battlefield with precision.",
    weapon: {
      name: "Illustrator's Pen",
      detail:
        "A tool powered by his Splat-Splat Fruit that brings drawings to life.",
    },
    specialAbility: "Masterpiece Strike",
    specialAbilityDescription:
      "Uses the Splat-Splat Fruit to summon lifelike constructs to overwhelm foes and create impenetrable barriers.",
    awakeningBoost: "Artistic Precision",
    awakeningBoostDescription:
      "Increases intelligence, haki, and creativity by 25%. Constructs gain additional durability and offensive capabilities.",
    quirk: "Constantly doodles embarrassing caricatures of the crew in his spare time.",
  },
  "Campanelli 'Ambitious Wreck' Brandon (BBC)": {
    stats: {
      strength: 8,
      intelligence: 7,
      charisma: 7,
      combatSkill: 9,
      speed: 7,
      durability: 10,
      haki: 7,
      creativity: 9,
    },
    dynamic:
      "An adventurous shipwright who thrives in high-risk situations, ensuring the crew's ship is always ready.",
    weapon: {
      name: "Iron Wrench Hammer",
      detail:
        "A versatile tool for both construction and combat, enhanced with haki.",
    },
    specialAbility: "Wrecking Storm",
    specialAbilityDescription:
      "Uses the Iron Wrench Hammer to summon a flurry of strikes, causing widespread destruction to both enemies and terrain.",
    awakeningBoost: "Steel Fortress",
    awakeningBoostDescription:
      "Boosts durability and creativity by 30%. The ship gains an impenetrable shield and enhanced speed for a limited time.",
    quirk: "Builds overly complicated contraptions that often backfire hilariously.",
  },
  "Geronimo 'The Man of Welcomes' Daniel (Dan)": {
    stats: {
      strength: 7,
      intelligence: 9,
      charisma: 9,
      combatSkill: 7,
      speed: 8,
      durability: 7,
      haki: 9,
      creativity: 8,
    },
    dynamic:
      "Balances empathy and combat tactics to support the crew as a healer and second mate.",
    weapon: {
      name: "Medical Chakram",
      detail:
        "A dual-purpose tool for both surgical precision and combat efficiency.",
    },
    specialAbility: "Surgical Precision",
    specialAbilityDescription:
      "Launches the Medical Chakram to perform precise, long-range attacks while healing allies caught in its path.",
    awakeningBoost: "Healing Aura",
    awakeningBoostDescription:
      "Increases intelligence, charisma, and speed by 20%. Allies gradually regenerate health and recover from status effects.",
    quirk: "Diagnoses everyone’s injuries, even when they’re completely fine.",
  },
  "Moses Jaeshaun 'Jae of the Slums'": {
    stats: {
      strength: 6,
      intelligence: 8,
      charisma: 8,
      combatSkill: 7,
      speed: 9,
      durability: 8,
      haki: 8,
      creativity: 9,
    },
    dynamic:
      "Blends navigation skills and musical artistry to boost crew morale and steer them through challenges.",
    weapon: {
      name: "Lyrical Blade",
      detail:
        "A musical sword that emits vibrations to disorient foes.",
    },
    specialAbility: "Lyrical Symphony",
    specialAbilityDescription:
      "Emits hypnotic vibrations with the Lyrical Blade, confusing enemies and enhancing allies’ combat effectiveness.",
    awakeningBoost: "Melody of Freedom",
    awakeningBoostDescription:
      "Boosts speed, haki, and creativity by 25%. Allies become immune to crowd-control effects and gain enhanced mobility.",
    quirk: "Breaks into a freestyle rap at the most inappropriate moments.",
  },
  "Ho Ming 'Fryboy' Kok": {
    stats: {
      strength: 8,
      intelligence: 8,
      charisma: 9,
      combatSkill: 7,
      speed: 8,
      durability: 7,
      haki: 8,
      creativity: 10,
    },
    dynamic:
      "Uses his culinary creativity and Simmer-Simmer Fruit powers to keep the crew energized and entertained.",
    weapon: {
      name: "Cooking Flare Whisk",
      detail:
        "A heated whisk that doubles as a close-range weapon.",
    },
    specialAbility: "Inferno Feast",
    specialAbilityDescription:
      "Creates a fiery explosion of simmering energy, cooking enemies in the area while boosting ally stamina.",
    awakeningBoost: "Culinary Surge",
    awakeningBoostDescription:
      "Increases creativity and charisma by 30%. Allies affected by Kok’s food gain enhanced strength and regeneration for a short time.",
    quirk: "Secretly adds absurd ingredients like sea king tears to his recipes, claiming it 'enhances flavor.'",
  },
  "Htet 'The Digital Freak' Naing": {
    stats: {
      strength: 7,
      intelligence: 10,
      charisma: 6,
      combatSkill: 8,
      speed: 7,
      durability: 8,
      haki: 9,
      creativity: 10,
    },
    dynamic:
      "Combines scientific expertise and combat precision to innovate and enhance the crew's tools.",
    weapon: {
      name: "Tech Gauntlet",
      detail:
        "A multi-functional glove powered by his Comp-Comp Fruit.",
    },
    specialAbility: "Digital Overload",
    specialAbilityDescription:
      "Unleashes a flurry of automated attacks from modified tools, overwhelming enemies with precision strikes.",
    awakeningBoost: "System Upgrade",
    awakeningBoostDescription:
      "Increases intelligence, combat skill, and durability by 25%. All crew equipment gains enhanced functionality and efficiency.",
    quirk: "Creates overcomplicated user manuals for his inventions that no one reads.",
  },
  "Silvestrich 'The Snark' Matthew": {
    stats: {
      strength: 6,
      intelligence: 9,
      charisma: 8,
      combatSkill: 8,
      speed: 9,
      durability: 7,
      haki: 7,
      creativity: 9,
    },
    dynamic:
      "A pragmatic sniper with a quick wit and a strong bond with his sentient weapon, Contra.",
    weapon: {
      name: "Contra",
      detail:
        "A scooter/shotgun hybrid with sentient capabilities for long-range precision.",
    },
    specialAbility: "Precision Volley",
    specialAbilityDescription:
      "Fires a series of pinpoint-accurate shots from Contra, capable of taking out multiple enemies simultaneously.",
    awakeningBoost: "Hawkeye Focus",
    awakeningBoostDescription:
      "Boosts speed, intelligence, and haki by 20%. Increases Contra’s range and accuracy, allowing for devastating long-range attacks.",
    quirk: "Engages in long, sarcastic arguments with Contra, his sentient weapon.",
  },
  "Carrizo 'Fresh Blood' Howie": {
    stats: {
      strength: 6,
      intelligence: 7,
      charisma: 7,
      combatSkill: 6,
      speed: 9,
      durability: 8,
      haki: 7,
      creativity: 8,
    },
    dynamic:
      "Blends echolocation and flight abilities to scout dangerous terrain and aid the crew.",
    weapon: {
      name: "Bat Wing Blades",
      detail:
        "Dual curved blades that resemble wings, ideal for aerial combat.",
    },
    specialAbility: "Sonic Wings",
    specialAbilityDescription:
      "Generates high-pitched sonic waves with his wings, disorienting enemies while enhancing ally perception.",
    awakeningBoost: "Aerial Supremacy",
    awakeningBoostDescription:
      "Increases speed, haki, and creativity by 25%. Gains enhanced flight speed and maneuverability, making him nearly untouchable in the air.",
    quirk: "Sleeps upside down like a bat and scares the crew awake by hanging over their beds.",
  },
};

export default crewStats;
