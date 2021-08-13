import React from "react";
var FontAwesome = require("react-fontawesome");

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("blur").style.filter = "blur(4px)";
  document.getElementById("fix-btn").style.display = "none";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("blur").style.filter = "blur(0px)";
  document.getElementById("fix-btn").style.display = "block";
}

export default function sakshi() {
  return (
    <div
      style={{
        marginTop: "100px",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div id="blur">
        <div className="stud-video">
          <video
            id="stu-video"
            style={{ margin: "auto" }}
            poster={require("./../../assets/images/sakshi-img.jpg")}
            width="45%"
            controls
            preload="none"
          >
            <source
              src={require("./../../assets/images/sakshi-vid.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div id="fix-btn" onClick={openForm}>
          Contact Now
        </div>

        <div className="brief" style={{ width: "90%", margin: "auto" }}>
          <h3>Brief</h3>
          <p
            style={{
              color: "#484444",
              fontWeight: "500",
            }}
          >
            I am Sakshi. I am a student of class 1st. I want to become a
            teacher. l love dancing but my father lost his work due to COVID and
            I have to hold my studies. Now he is working as a salesman in the
            Sadar market of Delhi and earns only INR 7000.
          </p>
          <p
            style={{
              color: "#484444",
              fontWeight: "500",
            }}
          >
            I hereby bring your notice that from the previous job of my father,
            he earns decent amount but due this COVID he lost his job and have
            to work at a diminutive amount to make ends meet. Unfortunately,
            this costs my education. I want to become a teacher in future and
            prove myself and This not possible without the proper guidance and
            financial assistance. I am very sure about my efforts to achieve my
            dream and I will be very thankful to the one who help me in my tough
            times to continue my studies and achieve my goal.
          </p>
        </div>
        <div className="detail" style={{ width: "90%", margin: "auto" }}>
          <h3>Details</h3>
          <p
            style={{
              color: "#484444",
              fontWeight: "500",
            }}
          >
            <ul>
              <li>Name: Sakshi</li>
              <li>Location: Delhi</li>
              <li>Age: 6</li>
              <li>Doctor</li>
            </ul>
          </p>
        </div>
        <div className="achievement" style={{ width: "90%", margin: "auto" }}>
          <h3>Achievements</h3>
          <p
            style={{
              color: "#484444",
              fontWeight: "500",
            }}
          >
            <ul>
              <li>98.6% in first class</li>
              <li>Class Topper</li>
            </ul>
          </p>
        </div>
        <div className="amount" style={{ width: "90%", margin: "auto" }}>
          <h3>Amount</h3>

          <p
            style={{
              color: "#484444",
              fontWeight: "500",
            }}
          >
            ₹50,000/Year
          </p>
        </div>
        <br />
        <br />
      </div>
      <div>
        {/* form */}
        <div class="contactPopup">
          <div class="formPopup" id="popupForm">
            <h3 className="form-head">Contact Us</h3>
            <FontAwesome
              className="form-icon cancel"
              name="times"
              onClick={closeForm}
            />
            <hr className="line" />
            <form action="/action_page.php" class="formContainer">
              <div>
                <input
                  type="text"
                  className="form-field"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                />
                <FontAwesome className="form-icon" name="user" />
              </div>
              <div>
                <input
                  type="email"
                  className="form-field"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                />
                <FontAwesome className="form-icon" name="envelope" />
              </div>
              <div>
                <input
                  type="tel"
                  className="form-field"
                  id="phone"
                  placeholder="Phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                />
                <FontAwesome className="form-icon" name="phone" />
              </div>
              <div>
                <input
                  type="text"
                  className="form-field"
                  id="location"
                  placeholder="Location"
                  name="location"
                  required
                />
                <FontAwesome className="form-icon" name="map-marker" />
              </div>
              <button type="submit" class="btn">
                Confirm
              </button>
            </form>
          </div>
        </div>
        {/* form */}
      </div>
    </div>
  );
}
