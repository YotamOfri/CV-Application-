import { useState } from "react";
import { EducationDropDown } from "./EducationDropDown";
export function EducationForm({ educationInfo, setEducationInfo }) {
  const [isAnimated, setIsAnimated] = useState(false);
  // dropdown's Form
  const [isOpen, setIsOpen] = useState(false);
  const handleAnimation = () => {
    setIsAnimated((current) =>
      current === "dropdown" ? "dropup" : "dropdown"
    );
  };
  return (
    <div>
      <div className="education-btn-container" onClick={handleAnimation}>
        <div className="eductaion-btn-right">
          <i className="bx bxs-graduation"></i>
          <h1>Education</h1>
        </div>
        <i className={`bx bx-chevron-down ${isAnimated}`}></i>
      </div>
      {isAnimated === "dropdown" ? (
        <EducationDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        ></EducationDropDown>
      ) : (
        ""
      )}
    </div>
  );
}
