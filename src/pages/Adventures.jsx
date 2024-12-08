import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "../styles/Adventures.module.css";

const adventuresList = [
    {
      id: 1,
      title: "Battle at the Grand Line",
      description:
        "The Skyline Pirates faced a fleet of marines while defending a small island. Through teamwork and strategy, they protected the locals and escaped with treasures.",
      date: "March 22, 2024",
      crewAffected: [
        { name: "Molejona 'Hot Shower' Jerrick", role: "Captain", icon: "🔥" },
        { name: "Jew Frias 'Burger Destroyer' Derick", role: "First Mate", icon: "🍔" },
        { name: "Campanelli 'Ambitious Wreck' Brandon (BBC)", role: "Helmsman", icon: "⚓" },
        { name: "Geronimo 'The Man of Welcomes' Daniel", role: "Doctor", icon: "💉" },
      ],
    },
    {
      id: 2,
      title: "Discovery of the Lost Temple",
      description:
        "Jerrick and Rachel led the crew to an ancient temple filled with traps and treasures. They uncovered a mysterious artifact, said to hold the key to the Pirate King's treasure.",
      date: "April 15, 2024",
      crewAffected: [
        { name: "Molejona 'Hot Shower' Jerrick", role: "Captain", icon: "🔥" },
        { name: "Chmielewski 'Terrestrial Psychic' Rachel", role: "Archaeologist", icon: "📜" },
        { name: "Fernandez 'Kanade' Jaeger", role: "Boatswain", icon: "📘" },
        { name: "Moses Jaeshaun 'Jae of the Slums'", role: "Navigator", icon: "🎵" },
      ],
    },
    {
      id: 3,
      title: "The Storm of Betrayal",
      description:
        "A former ally turned on the crew, leading to a battle at sea. Despite the odds, the Skyline Pirates emerged victorious, learning valuable lessons about trust and loyalty.",
      date: "May 10, 2024",
      crewAffected: [
        { name: "Campanelli 'Ambitious Wreck' Brandon (BBC)", role: "Helmsman", icon: "⚓" },
        { name: "Webb 'Tough Broad' Bethany", role: "Quartermaster", icon: "⚖️" },
        { name: "Pidlaoan 'The Stunning Dancer' Jaycer", role: "Lookout", icon: "🦜" },
        { name: "Enriquez 'Prodigy' Angelin", role: "Spy", icon: "🎯" },
      ],
    },
  ];
  

const Adventures = () => {
  const [openAdventure, setOpenAdventure] = useState(null);

  const toggleAdventure = (id) => {
    setOpenAdventure(openAdventure === id ? null : id);
  };

  return (
    <div className={styles.adventuresContainer}>
      <h1 className={styles.adventuresHeader}>Adventures of the Skyline Pirates</h1>
      <ul className={styles.adventuresList}>
        {adventuresList.map((adventure) => (
          <motion.li
            key={adventure.id}
            className={styles.adventureItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className={styles.adventureHeader}
              onClick={() => toggleAdventure(adventure.id)}
            >
              <h2 className={styles.adventureTitle}>{adventure.title}</h2>
              {openAdventure === adventure.id ? (
                <FaChevronUp className={styles.chevronIcon} />
              ) : (
                <FaChevronDown className={styles.chevronIcon} />
              )}
            </div>
            {openAdventure === adventure.id && (
              <motion.div
                className={styles.adventureContent}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className={styles.adventureDate}>📅 {adventure.date}</p>
                <p className={styles.adventureDescription}>
                  {adventure.description}
                </p>
                <div className={styles.crewAffected}>
                  <h3 className={styles.crewHeader}>Crew Affected:</h3>
                  <ul className={styles.crewList}>
                    {adventure.crewAffected.map((member, index) => (
                      <li key={index} className={styles.crewMember}>
                        <span className={styles.crewIcon}>{member.icon}</span>
                        <span className={styles.crewName}>{member.name}</span> -{" "}
                        <span className={styles.crewRole}>{member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Adventures;
