import React from "react";

interface SkillBarProps {
  skillName: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skillName, percentage }) => {
  const [barWidth, setBarWidth] = React.useState<number>(0);

  React.useEffect(() => {
    setBarWidth(percentage);
  }, [percentage]);

  return (
    <div className="skill">
      <span className="skill-name">{skillName}</span>
      <div className="skill-bar">
        <div
          className="skill-level"
          style={{ width: `${barWidth}%`, transition: "width 0.5s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
