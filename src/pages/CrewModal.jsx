import React, { useState } from "react";
import styles from "../styles/CrewModal.module.css";
import crewStats from "./Crewstats"; // Import crewStats

const CrewModal = ({ member, onClose }) => {
  const [activeSection, setActiveSection] = useState(null); // Track active section

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle sections
  };

  if (!member) return null;

  // Retrieve stats, dynamic abilities, and weapon from crewStats
  const stats = crewStats[member.name]?.stats || {};
  const dynamic = crewStats[member.name]?.dynamic || "No dynamic info available.";
  const weapon = crewStats[member.name]?.weapon || "No weapon info available.";

  // Prevent modal close when clicking inside modal content or buttons
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {/* Display Icon */}
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{member.icon}</span>
        </div>
        <h2 className={styles.modalTitle}>{member.name}</h2>
        <p className={styles.modalRole}>
          <strong>Role:</strong> {member.role}
        </p>
        <p className={styles.modalBounty}>
          <strong>Bounty:</strong> {member.bounty}
        </p>
        <p className={styles.modalDescription}>{member.description}</p>

        <div className={styles.detailsRow}>
          <div className={styles.leftButtons}>
            <button
              className={`${styles.detailsButton} ${
                activeSection === "background" ? styles.activeButton : ""
              }`}
              onClick={() => toggleSection("background")}
            >
              Background
            </button>
            <button
              className={`${styles.detailsButton} ${
                activeSection === "personality" ? styles.activeButton : ""
              }`}
              onClick={() => toggleSection("personality")}
            >
              Personality
            </button>
            <button
              className={`${styles.detailsButton} ${
                activeSection === "likes" ? styles.activeButton : ""
              }`}
              onClick={() => toggleSection("likes")}
            >
              Likes
            </button>
            <button
              className={`${styles.detailsButton} ${
                activeSection === "dislikes" ? styles.activeButton : ""
              }`}
              onClick={() => toggleSection("dislikes")}
            >
              Dislikes
            </button>
            <button
              className={`${styles.detailsButton} ${
                activeSection === "relationships" ? styles.activeButton : ""
              }`}
              onClick={() => toggleSection("relationships")}
            >
              Relationships
            </button>
          </div>
        </div>

        {/* Display Section Content */}
        <div className={styles.sectionContentWrapper}>
          {activeSection === "background" && (
            <div className={styles.sectionContent}>
              <h3>Background</h3>
              <p>{member.background}</p>
            </div>
          )}
          {activeSection === "personality" && (
            <div className={styles.sectionContent}>
              <h3>Personality</h3>
              <p>{member.personality}</p>
            </div>
          )}
          {activeSection === "likes" && (
            <div className={styles.sectionContent}>
              <h3>Likes</h3>
              <ul>
                {member.likes.map((like, index) => (
                  <li key={index}>{like}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "dislikes" && (
            <div className={styles.sectionContent}>
              <h3>Dislikes</h3>
              <ul>
                {member.dislikes.map((dislike, index) => (
                  <li key={index}>{dislike}</li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "relationships" && (
            <div className={styles.sectionContent}>
              <h3>Relationships</h3>
              <ul>
                {Object.entries(member.relationships).map(([key, value], index) => (
                  <li key={index}>
                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                    {Array.isArray(value) ? value.join(", ") : value}
                  </li>
                ))}
              </ul>
            </div>
          )}
         {activeSection === "stats" && (
          <div className={styles.sectionContent}>
            <h3>Stats</h3>
            <div className={styles.statsGrid}>
              {Object.entries(stats).map(([statName, statValue], index) => (
                <div key={index} className={styles.statItem}>
                  <strong>{statName}</strong>: {statValue}
                </div>
              ))}
            </div>
          </div>
          )}
          {activeSection === "dynamic" && (
            <div className={styles.sectionContent}>
              <h3>Dynamic</h3>
              <p>{dynamic}</p>
            </div>
          )}
          {activeSection === "weapon" && (
            <div className={styles.sectionContent}>
              <h3>Weapon</h3>
              <p>{weapon}</p>
            </div>
          )}
        </div>
      </div>
      {/* Right Buttons Outside the Modal */}
      <div className={styles.rightButtons}>
        <button
          className={`${styles.detailsButton} ${
            activeSection === "stats" ? styles.activeButton : ""
          }`}
          onClick={() => toggleSection("stats")}
        >
          Stats
        </button>
        <button
          className={`${styles.detailsButton} ${
            activeSection === "dynamic" ? styles.activeButton : ""
          }`}
          onClick={() => toggleSection("dynamic")}
        >
          Dynamic
        </button>
        <button
          className={`${styles.detailsButton} ${
            activeSection === "weapon" ? styles.activeButton : ""
          }`}
          onClick={() => toggleSection("weapon")}
        >
          Weapon
        </button>
      </div>
    </div>
  );
};

export default CrewModal;
