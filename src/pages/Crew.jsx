import React, { useState } from "react";
import crewData from "./Crewmember"; // Import the crew data
import CrewModal from "./CrewModal"; // Modal for displaying crew details
import styles from "../styles/Crew.module.css";

const Crew = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleViewDetails = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className={styles.crewPage}>
      <h1 className={styles.header}>Meet the Skyline Pirates Crew</h1>
      <div className={styles.crewList}>
        {crewData.map((member, index) => (
          <div
            key={index}
            className={`${styles.crewmemberCard} ${
              selectedMember === member ? styles.activeCard : ""
            }`}
            onClick={() => handleViewDetails(member)} // Entire card is clickable
            role="button" // Accessibility
            tabIndex="0" // Accessibility for keyboard navigation
            onKeyPress={(e) => {
              if (e.key === "Enter") handleViewDetails(member); // Handle "Enter" key
            }}
          >
            <div className={styles.iconPlaceholder}>{member.icon}</div>
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bounty}>
              <strong>Bounty:</strong> {member.bounty}
            </p>
          </div>
        ))}
      </div>
      {selectedMember && (
        <CrewModal member={selectedMember} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Crew;
