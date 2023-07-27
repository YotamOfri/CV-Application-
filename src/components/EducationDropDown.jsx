import { useState } from "react";
import { EducationList } from "./EducationsList";
import { EducationForm } from "./EducationForm";

export function EducationDropDown({
  isOpen,
  setIsOpen,
  educationInfo,
  setEducationInfo,
}) {
  const isToggle = () => {
    setIsOpen((current) => (current ? false : true));
  };
  // finding the last key
  const keys = Object.keys(educationInfo);
  const [lastProperty, setLastProperty] = useState(keys[keys.length - 1]);
  return (
    <div>
      {isOpen ? (
        <EducationForm
          isToggle={isToggle}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          lastProperty={lastProperty}
          setLastProperty={setLastProperty}
        ></EducationForm>
      ) : (
        <EducationList
          isToggle={isToggle}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          setLastProperty={setLastProperty}
        ></EducationList>
      )}
    </div>
  );
}
