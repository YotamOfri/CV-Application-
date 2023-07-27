export function Personal_Form(props) {
  return (
    <form className="personal_form">
      <h1>Personal Details</h1>
      <div className="input-field-container">
        <input
          type="text"
          name=""
          id="name"
          className="input"
          placeholder=""
          onChange={(e) => {
            props.setPerson({ ...props.person, name: e.target.value });
          }}
          value={props.person.name}
        />
        <label htmlFor="name" className="lable">
          Full Name
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="email"
          name=""
          id="email"
          className="input"
          placeholder=""
          value={props.person.email}
          required
          onChange={(e) => {
            props.setPerson({ ...props.person, email: e.target.value });
          }}
        />
        <label htmlFor="email" className="lable">
          Email
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="number"
          name=""
          id="phone-number"
          className="input"
          placeholder=""
          value={props.person.phoneNumber}
          required
          onChange={(e) => {
            props.setPerson({ ...props.person, phoneNumber: e.target.value });
          }}
        />
        <label htmlFor="phone-number" className="lable">
          Phone number
        </label>
      </div>
      <div className="input-field-container">
        <input
          type="text"
          name=""
          placeholder=""
          id="address"
          className="input"
          onChange={(e) => {
            props.setPerson({ ...props.person, address: e.target.value });
          }}
          value={props.person.address}
        />
        <label htmlFor="address" className="lable">
          Address
        </label>
      </div>
    </form>
  );
}
