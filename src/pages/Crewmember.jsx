const crewData = [
    {
      name: "Molejona 'Hot Shower' Jerrick",
      role: "Captain and Chronicler",
      bounty: "1.05 billion berries",
      description:
        "Driven by a dream to forge meaningful connections across the seas while proving his strength. Jerrick's Drizzle-Drizzle Fruit makes him a formidable force.",
      icon: "🔥",
      background:
        "Grew up with his best friend Derick and inherited a ship from his father. He developed his Drizzle-Drizzle Fruit powers while navigating the harsh trials of the Grand Line.",
      personality:
        "Cheerful, optimistic, and a natural leader. Often lighthearted but serious when needed.",
      likes: ["Camaraderie", "Meaningful conversations", "Warm showers"],
      dislikes: ["Betrayal", "Unnecessary conflict", "Rushing through plans"],
      relationships: {
        bestFriend: "Jew Frias 'Burger Destroyer' Derick",
        respectedBy: ["Entire crew as a leader and friend"],
      },
    },
    {
      name: "Jew Frias 'Burger Destroyer' Derick",
      role: "First Mate and Martial Artist",
      bounty: "500 million berries",
      description:
        "A taekwondo master with advanced haki. His loyalty and morale-boosting nature make him an essential member of the crew.",
      icon: "🍔",
      background:
        "Trained in taekwondo from a young age, Derick joined Jerrick to support their shared dream of exploring the seas. His loyalty has always been unshaken.",
      personality:
        "Calm, laid-back, and a morale booster. Shows extreme loyalty and focus in battle.",
      likes: ["Burgers", "Quiet moments", "Mentoring others"],
      dislikes: ["Recklessness", "Overly complex plans"],
      relationships: {
        childhoodFriend: "Molejona 'Hot Shower' Jerrick",
        trainingPartner: ["Campanelli 'BBC' Brandon", "Ho Ming 'Fryboy' Kok"],
      },
    },
    {
      name: "Fernandez Jaeger ('Kanade')",
      role: "Boatswain and Scholar",
      bounty: "450 million berries",
      description:
        "Jaeger is intelligent and dependable but struggles with impatience and self-doubt. His advanced armament haki and linguistic skills make him invaluable.",
      icon: "📖",
      background:
        "Grew up in isolation, surrounded by books and trained in Six Powers techniques. Joined the crew after forming a strong bond with Jaycer.",
      personality:
        "Intelligent, dependable, but struggles with self-doubt. Can be impatient when plans fail.",
      likes: ["Solitude for reflection", "Scholarly pursuits", "Ancient texts"],
      dislikes: ["Failure", "Inefficiency", "Excessive interruptions"],
      relationships: {
        closeBond: "Pidlaoan 'The Stunning Dancer' Jaycer",
        strategist: ["Molejona 'Hot Shower' Jerrick"],
      },
    },
    {
      name: "Pidlaoan 'The Stunning Dancer' Jaycer",
      role: "Lookout",
      bounty: "380 million berries",
      description:
        "Jaycer’s Glist-Glist Fruit powers and his strategic thinking make him a reliable ally. His passion for dancing extends to combat, inspiring both allies and foes.",
      icon: "💃",
      background:
        "Born into a family of performers, Jaycer dreamed of inspiring others through dance. He developed his Glist-Glist Fruit powers during a life-threatening ordeal.",
      personality:
        "Playful, lighthearted, and highly coordinated. A natural entertainer who inspires others.",
      likes: ["Dancing", "Music", "Coordinated combat moves"],
      dislikes: ["Monotony", "Excessive seriousness"],
      relationships: {
        partnerInTraining: "Fernandez Jaeger ('Kanade')",
        dynamicWith: "Molejona 'Hot Shower' Jerrick",
      },
    },
    {
      name: "Alea 'Con Artist' Jayden",
      role: "Staff and Scout",
      bounty: "750 million berries",
      description:
        "Jayden uses his Splat-Splat Fruit to create living illustrations with devastating combat potential. His observation haki ensures the crew grows stronger with each recruit.",
      icon: "🎨",
      background:
        "Once a rogue artist, Jayden honed his skills to survive. The crew welcomed him, and he quickly became a vital member for his strategic mind.",
      personality:
        "Logical, stoic, and a sharp wit. Often acts as the voice of reason.",
      likes: ["Art", "Storytelling", "Logical debates"],
      dislikes: ["Impulsiveness", "Overly emotional decisions"],
      relationships: {
        rivalry: "Campanelli 'Ambitious Wreck' Brandon (BBC)",
        respectFrom: ["Entire crew for his tactical mind"],
      },
    },
    {
      name: "Campanelli 'Ambitious Wreck' Brandon (BBC)",
      role: "Helmsman and Shipwright",
      bounty: "400 million berries",
      description:
        "BBC’s reckless tendencies are balanced by his resourcefulness and combat versatility. He’s the creative force behind the durability of the crew’s ship.",
      icon: "⚓",
      background:
        "Captured by marines at a young age, BBC was freed by the Skyline Pirates. He’s since dedicated himself to improving the crew’s ship and abilities.",
      personality:
        "Adventurous and strong-willed. Thrill-seeker with a deep sense of loyalty.",
      likes: ["Risk-taking", "Innovative designs", "Fast ships"],
      dislikes: ["Being underestimated", "Overly cautious plans"],
      relationships: {
        rivalry: "Alea 'Con Artist' Jayden",
        looksUpTo: ["Jew Frias 'Burger Destroyer' Derick", "Ho Ming 'Fryboy' Kok"],
      },
    },
    {
      name: "Geronimo 'The Man of Welcomes' Daniel (Dan)",
      role: "Second Mate and Doctor",
      bounty: "800 million berries",
      description:
        "Daniel’s Clap-Clap Fruit allows him to perform life-saving procedures with precision. His medical expertise and tactical insights make him a key crew member.",
      icon: "💉",
      background:
        "A former doctor with a passion for helping others, Daniel left his medical practice to join the crew and heal the world.",
      personality:
        "Enthusiastic, outgoing, and deeply empathetic. Often the moral compass of the crew.",
      likes: ["Helping others", "Studying combat styles", "Lively conversations"],
      dislikes: ["Injustice", "Careless injuries"],
      relationships: {
        bondWith: "Entire crew for his empathetic nature",
        inspiredBy: ["Jew Frias 'Burger Destroyer' Derick", "Alea 'Con Artist' Jayden"],
      },
    },
    {
      name: "Moses Jaeshaun 'Jae of the Slums'",
      role: "Navigator and Musician",
      bounty: "300 million berries",
      description:
        "Jae’s navigation skills and the Lizard-Lizard Fruit give him enhanced flexibility, heat storage, and regenerative abilities, making him vital for the crew’s voyages.",
      icon: "🎵",
      background:
        "Escaped captivity and developed his navigation skills alongside his love for music, which inspires the crew.",
      personality:
        "Polite and humble but brash when needed. Adds a musical and hip-hop-inspired vibe to the crew.",
      likes: ["Music", "Freestyling", "Solving navigation challenges"],
      dislikes: ["Captivity", "Disorganized plans"],
      relationships: {
        dynamicWith: "Pidlaoan 'The Stunning Dancer' Jaycer",
        companion: "Luke, his flamboyant macaw",
      },
    },
    {
      name: "Ho Ming 'Fryboy' Kok",
      role: "Cook and Staff",
      bounty: "780 million berries",
      description:
        "Kok’s Simmer-Simmer Fruit powers make him a master chef and combat tactician. His humor and culinary mastery add to the crew’s camaraderie.",
      icon: "🍳",
      background:
        "A culinary genius, Kok developed his Simmer-Simmer Fruit powers to save his friends. He’s known for his ability to boost morale with food.",
      personality:
        "Energetic and humorous. Known for thinking outside the box in both combat and cooking.",
      likes: ["Cooking", "Experimenting with recipes", "Making others laugh"],
      dislikes: ["Bland food", "Rigid rules"],
      relationships: {
        bestFriend: "Htet 'The Digital Freak' Naing",
        teasing: ["Bethany", "Angelin"],
      },
    },

    {
        name: "Htet 'The Digital Freak' Naing",
        role: "Scientist and Assassin",
        bounty: "900 million berries",
        description:
          "Naing’s Comp-Comp Fruit grants him the ability to modify inanimate objects, turning the crew’s tools and weapons into advanced, near-sentient equipment.",
        icon: "🛠️",
        background:
          "Survived the destruction of his home island through his ingenuity and resourcefulness. He later developed his Comp-Comp Fruit powers to aid the crew in combat and technology.",
        personality:
          "Blunt, practical, and highly resourceful. Focused on results and precision, he often speaks his mind without sugar-coating.",
        likes: ["Precision", "Engineering", "Efficiency"],
        dislikes: ["Wasting time", "Overly complex problems"],
        relationships: {
          childhoodFriend: "Ho Ming 'Fryboy' Kok",
          valuedBy: "Entire crew for his technical genius",
        },
      },
      {
        name: "Silvestrich 'The Snark' Matthew",
        role: "Sniper",
        bounty: "250 million berries",
        description:
          "Matthew’s pragmatic approach to survival and his bond with Contra, his scooter/shotgun hybrid, make him a reliable and precise fighter.",
        icon: "🎯",
        background:
          "Started as a bandit who relied on his wits to survive. After being saved by the crew, he joined them and created Contra, his sentient scooter/shotgun hybrid, as his signature weapon.",
        personality:
          "Witty and sarcastic, he lightens the mood with his humor but remains laser-focused in battle.",
        likes: ["Humor", "Practicality", "Challenging shots"],
        dislikes: ["Wasting resources", "Overthinking"],
        relationships: {
          bondWith: "Contra, his sentient weapon",
          respectedFor: "Pragmatism and survival skills",
        },
      },
      {
        name: "Carrizo 'Fresh Blood' Howie",
        role: "Beast Tamer and Cabin Mate",
        bounty: "200 million berries",
        description:
          "Howie’s echolocation and flight capabilities, gained through SMILE experiments, allow him to traverse dark or dangerous areas with ease.",
        icon: "🦇",
        background:
          "Captured and experimented on with SMILE fruits, Howie gained echolocation and bat-like abilities. He escaped captivity and found solace with the Skyline Pirates.",
        personality:
          "Mysterious and reserved, he rarely speaks but is deeply loyal to the crew. His calm demeanor is a source of reliability during tense situations.",
        likes: ["Animals", "Quiet moments", "Flying freely"],
        dislikes: ["Cruelty", "Unnecessary noise"],
        relationships: {
          bondsWith: ["Luke (Jae’s macaw)", "Contra"],
          trustedFor: "Calm demeanor and reliability",
        },
      },
      
  ];
  
  
  export default crewData;
  