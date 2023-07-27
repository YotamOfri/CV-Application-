export function PersonalFromDisplay({ personalInfo }) {
  const iconList = ["bx bxl-gmail", "bx bxs-phone", "bx bx-current-location"];
  return (
    <div className="perosnal_Info">
      <h1 className="name">{personalInfo.name}</h1>
      <div className="personal_info_icons">
        {Object.keys(personalInfo).map((key, index) => {
          if (personalInfo[key] !== "" && key !== "name") {
            return (
              <div className="icon" key={key}>
                <i className={iconList[index - 1]}></i>
                <span>{personalInfo[key]}</span>
              </div>
            );
          } else return "";
        })}
      </div>
    </div>
  );
}
