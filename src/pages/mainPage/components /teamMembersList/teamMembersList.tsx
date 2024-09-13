import React from "react";
import TeamMember from "./teamMember";
import styles from "./teamMembers.module.scss";

interface TeamMemberData {
  photo: string;
  name: string;
  description: string;
}

interface TeamListProps {
  members: TeamMemberData[];
}

export const TeamMembersList: React.FC<TeamListProps> = ({ members }) => {
  return (
    <div className={styles.teamList}>
      {members.map((member, index) => (
        <TeamMember
          key={index}
          photo={member.photo}
          name={member.name}
          description={member.description}
        />
      ))}
    </div>
  );
};
