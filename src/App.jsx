import { useState } from "react";
import "./styles/App.css";
import "./styles/root.css";
import "./styles/inputStyling.css";
import "./styles/Form.css";
import "./styles/education.css";
import { Button } from "./components/Button";
import { Personal_Form } from "./components/PersonalForm";
import { PersonalFromDisplay } from "./components/PersonalFormDisplay";
import { EducationForm } from "./components/Education";
import { EducationFormDisplay } from "./components/EducationFormDisplay";

export function App() {
  // dark Mode Toggle
  const [theme, setTheme] = useState("light");
  const Toggle_darkMode = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  // Clear Resume
  const clear = () => {
    setPersonalInfo({ name: "", email: "", phoneNumber: "", address: "" });
    setEducationInfo({
      education1: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    });
  };
  // Personal Info
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  //  Education Info
  const [educationInfo, setEducationInfo] = useState({
    education1: {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  });
  // Eample Resume
  const Example = () => {
    setPersonalInfo({
      name: "John Doe",
      email: "john.doe@email.com",
      phoneNumber: "0534567890",
      address: "1234 Elm Street, Cityville",
    });
    setEducationInfo({
      education1: {
        school: "Stanford University",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2021-03-25",
        endDate: "2023-08-24",
        location: "Stanford, California, USA",
      },
      education2: {
        school: "Harvard",
        degree: "Master of Liberal Arts (A.L.M.)",
        startDate: "2010-06-21",
        endDate: "2015-02-12",
        location: "Cambridge, Massachusetts",
      },
      education3: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    });
  };
  return (
    <div className="app" id={theme}>
      <div className="app-container">
        <div className="input-container">
          <div className="upper-buttons">
            <Button text="Load Example" onClick={Example}></Button>
            <Button text="Clear Resume" onClick={clear}></Button>
          </div>
          <div className="personal-form-container">
            <Personal_Form
              setPerson={setPersonalInfo}
              person={personalInfo}
            ></Personal_Form>
          </div>
          <div className="personal-form-container">
            <EducationForm
              educationInfo={educationInfo}
              setEducationInfo={setEducationInfo}
            ></EducationForm>
          </div>
        </div>
        <div className="form-container">
          <PersonalFromDisplay
            personalInfo={personalInfo}
          ></PersonalFromDisplay>
          <EducationFormDisplay
            educationInfo={educationInfo}
          ></EducationFormDisplay>
        </div>
      </div>
    </div>
  );
}
