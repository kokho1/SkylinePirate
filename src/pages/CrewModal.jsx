import React, { useState } from "react";
import styles from "../styles/CrewModal.module.css";

const CrewModal = ({ member, onClose }) => {
  const [activeSection, setActiveSection] = useState(null); // Track active section

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle sections
  };

  if (!member) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
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
        </div>
      </div>
    </div>
  );
};

export default CrewModal;
