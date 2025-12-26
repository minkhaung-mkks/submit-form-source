import React, { useMemo, useState } from "react";
import "../form.css";
import { useRef } from "react";
export default function SimpleProfileForm() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("other");
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("general staff");
  const hobbyRef = useRef([])
  return (
    <div className="form_box">
      {!submitted ? (
        <form className="form">
          <div className="input_box">
            <span className="input_label">Username</span>
            <input
              className="input_item"
              value={username}
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input_box">
            <span className="input_label">Firstname</span>
            <input
              value={firstname}
              className="input_item"
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="input_box">
            <span className="input_label">Lastname</span>
            <input
              className="input_item"
              value={lastname}
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="radio_box">
            <h4>Gender</h4>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              <span>Male</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              <span>Female</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "Other"}
                onChange={() => setGender("Other")}
              />
              <span>Other</span>
            </label>
          </div>

          <div className="check_box">
            <h4>Hobbies</h4>
            <label>
              <input
                type="checkbox"
                ref={el => hobbyRef.current[0] = el}
              />
              <span>Music</span>
            </label>
            <label>
              <input
                type="checkbox"
                ref={el => hobbyRef.current[1] = el}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                type="checkbox"
                ref={el => hobbyRef.current[2] = el}
              />
              <span>Plastic Model</span>
            </label>
          </div>

          <h5>Role</h5>
          <select
            className="selection_box"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="General Staff">General Staff</option>
            <option value="Developer">Developer</option>
            <option value="System Analyst">System Analyst </option>
          </select>
          <br />
          <button type="button" onClick={()=>setSubmitted(true)} className="submit_btn">Submit</button>
        </form>
      ) : (
        <div className="form">
          <h3>Submitted Data</h3>
          <br />
          <div className="summary_box">
            <div className="summary_item">
              <label>Username:</label>
              <span>{username || ""}</span>
            </div>
            <div className="summary_item">
              <label>Firstname:</label>
              <span>{firstname || ""}</span>
            </div>
            <div className="summary_item">
              <label>Lastname:</label>
              <span>{lastname || ""}</span>
            </div>
            <div className="summary_item">
              <label>Gender:</label>
              <span>{gender || ""}</span>
            </div>
            <div className="summary_item">
              <label>Hobbies:</label>
              <span>    {hobbyRef.current
    .map((el) => (el?.checked ? el?.nextElementSibling?.textContent?.trim() : null))
    .filter(Boolean)
    .join(", ")}</span>
            </div>
            <div className="summary_item">
              <label>Role:</label>
              <span>{role || ""}</span>
            </div>
          </div>
          <br />
          <button onClick={()=>setSubmitted(false)}>Back to form</button>
        </div>
      )}
    </div>
  );
}
