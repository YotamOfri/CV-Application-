export function EducationFormDisplayTemplate({
  educationInfo,
  condition = false,
}) {
  return (
    <div className="education-display-container">
      <div className="education-header">Education</div>
      <div className="education-info-container">
        {Object.keys(educationInfo).map((title) => {
          return (
            <div key={title} className="education-info">
              <div className="education-info-group">
                <div className="dates">
                  <p>
                    {educationInfo[title].startDate
                      ? `(${educationInfo[title].startDate})`
                      : ""}
                  </p>
                  <span>{educationInfo[title].endDate ? " - " : ""}</span>
                  <p>
                    {educationInfo[title].endDate
                      ? ` (${educationInfo[title].endDate})`
                      : ""}
                  </p>
                </div>
                <p>{educationInfo[title].location}</p>
              </div>
              <div className="education-school">
                <h3>{educationInfo[title].school}</h3>
                <h4>{educationInfo[title].degree}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
