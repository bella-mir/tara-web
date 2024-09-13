import React from "react";
import styles from "./teamMembers.module.scss";

interface TeamMemberProps {
  photo: string;
  name: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  photo,
  name,
  description,
}) => {
  return (
    <div className={styles.teamMember}>
      <img src={photo} alt={name} className={styles.teamImg} />
      <div>
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
