import { EducationFormDisplayTemplate } from "./EducationFormTemplate";

export function EducationFormDisplay({ educationInfo }) {
  const CheckIfEmpty = () => {
    let state = true;
    Object.values(educationInfo.education1).map((value) => {
      if (value !== "") state = false;
    });
    return state;
  };
  return (
    <div>
      {!CheckIfEmpty() ? (
        <EducationFormDisplayTemplate
          educationInfo={educationInfo}
        ></EducationFormDisplayTemplate>
      ) : (
        ""
      )}
    </div>
  );
}
