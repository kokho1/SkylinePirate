const crewData = [
    {
      name: "Molejona 'Hot Shower' Jerrick",
      role: "Captain and Chronicler",
      bounty: "1.05 billion berries",
      description:
        "Driven by a dream to forge meaningful connections across the seas while proving his strength. Jerrick's Drizzle-Drizzle Fruit makes him a formidable force.",
      icon: "🔥",
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
      likes: ["Animals", "Quiet moments", "Flying freely"],
      dislikes: ["Cruelty", "Unnecessary noise"],
      relationships: {
        bondsWith: ["Luke (Jae’s macaw)", "Contra"],
        trustedFor: "Calm demeanor and reliability",
      },
    },
  ];
  
  export default crewData;
  