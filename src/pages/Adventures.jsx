import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
    coordinates: [35.6895, 139.6917], // Tokyo
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
    coordinates: [34.6937, 135.5023], // Osaka
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
    coordinates: [33.5904, 130.4017], // Fukuoka
  },
];

const Adventures = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const openModal = (adventure) => {
    setSelectedAdventure(adventure);
  };

  const closeModal = () => {
    setSelectedAdventure(null);
  };

  return (
    <div className={styles.adventuresContainer}>
      <h1 className={styles.adventuresHeader}>Adventures of the Skyline Pirates</h1>

      {/* Interactive Map Section */}
      <div className={styles.mapContainer}>
        <h2 className={styles.mapHeader}>Explore the Grand Line</h2>
        <MapContainer
          center={[36.2048, 138.2529]} // Center on Japan
          zoom={5}
          style={{ height: "400px", width: "100%", marginBottom: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {adventuresList.map((adventure) => (
            <Marker key={adventure.id} position={adventure.coordinates}>
              <Popup>
                <h3>{adventure.title}</h3>
                <p>{adventure.date}</p>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => openModal(adventure)}
                >
                  Read More
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Modal for Adventure Details */}
      {selectedAdventure && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeModalBtn} onClick={closeModal}>
              ✖
            </button>
            <h2>{selectedAdventure.title}</h2>
            <p>📅 {selectedAdventure.date}</p>
            <p>{selectedAdventure.description}</p>
            <div className={styles.crewAffected}>
              <h3>Crew Affected:</h3>
              <ul className={styles.crewList}>
                {selectedAdventure.crewAffected.map((member, index) => (
                  <li key={index} className={styles.crewMember}>
                    <span className={styles.crewIcon}>{member.icon}</span>
                    <span className={styles.crewName}>{member.name}</span> -{" "}
                    <span className={styles.crewRole}>{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adventures;
