export function EducationForm({
  isToggle,
  educationInfo,
  setEducationInfo,
  lastProperty,
  setLastProperty,
}) {
  console.log(educationInfo[lastProperty]);
  const UpdateState = (info, where) => {
    const newObject = { ...educationInfo };
    newObject[lastProperty][where] = info;
    setEducationInfo(newObject);
  };
  const SaveBtn = (event) => {
    event.preventDefault();
    const keys = Object.keys(educationInfo);
    const last = keys[keys.length - 1];
    const newObject = { ...educationInfo };
    if (newObject[last].name !== "") {
      const number = parseInt(last[last.length - 1]);
      const name = `education${number + 1}`;
      newObject[name] = {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      };
      setEducationInfo(newObject);
    }
    setEducationInfo(newObject);
    setLastProperty(keys[keys.length - 1]);
    isToggle();
  };
  return (
    <form className="education-form">
      <div className="input-field-container">
        <input
          type="text"
          name=""
          id="school"
          className="input"
          placeholder=""
          required
          value={educationInfo[lastProperty].school}
          onChange={(event) => {
            UpdateState(event.target.value, "school");
          }}
        />
        <label htmlFor="school" className="lable">
          School
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="text"
          name=""
          id="degree"
          className="input"
          placeholder=""
          required
          value={educationInfo[lastProperty].degree}
          onChange={(event) => {
            UpdateState(event.target.value, "degree");
          }}
        />
        <label htmlFor="email" className="lable">
          Degree
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="date"
          name=""
          id="start-date"
          className="input"
          placeholder=""
          required
          value={educationInfo[lastProperty].startDate}
          onChange={(event) => {
            UpdateState(event.target.value, "startDate");
          }}
        />
        <label htmlFor="phone-number" className="lable">
          Start Date
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="date"
          name=""
          placeholder=""
          id="end-date"
          className="input"
          required
          value={educationInfo[lastProperty].endDate}
          onChange={(event) => {
            UpdateState(event.target.value, "endDate");
          }}
        />
        <label htmlFor="address" className="lable">
          End Date
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="text"
          name=""
          id="location"
          className="input"
          placeholder=""
          value={educationInfo[lastProperty].location}
          onChange={(event) => {
            UpdateState(event.target.value, "location");
          }}
        />
        <label htmlFor="location" className="lable">
          Location
        </label>
      </div>
      <div className="education-btns">
        <button className="btn" id="delete">
          <i className="bx bxs-trash-alt"></i>
          Delete
        </button>
        <div className="education-btns-right-side">
          <button className="btn" id="cancel" onClick={isToggle}>
            Cancel
          </button>
          <button className="btn" id="save" onClick={SaveBtn}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
