import { EducationForm } from "./EducationForm";

export function EducationList({
  isToggle,
  educationInfo,
  setEducationInfo,
  setLastProperty,
}) {
  const CheckIfEmpty = (key) => {
    let state = true;
    Object.values(educationInfo[key]).map((value) => {
      if (value !== "") state = false;
    });
    return state;
  };
  const ChangeScreen = (key) => () => {
    setLastProperty(key);
    isToggle();
  };
  return (
    <div className="educations-container">
      <div className="education-list">
        {Object.keys(educationInfo).map((key) => {
          return (
            <div key={key}>
              {!CheckIfEmpty(key) ? (
                <div className="education-list-item-container">
                  <div
                    className="education-list-item"
                    onClick={ChangeScreen(key)}
                  >
                    {educationInfo[key].school}
                  </div>
                  <i className="bx bx-low-vision"></i>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="education-add-btn-container">
        <button onClick={isToggle} className="education-add-btn">
          + Education
        </button>
      </div>
    </div>
  );
}
