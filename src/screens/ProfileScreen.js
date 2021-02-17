import React from "react";
import {useSelector} from "react-redux";
import Nav from "../Nav";
import "./ProfileScreen.css";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <h4>Renewal date: 04/03/2021</h4>

              <div className="profileScreen__plansItems">
                <div className="profileScreen__plansItem">
                  <p>
                    Netflix Standard <br />
                    1080p
                  </p>
                  <button>Subscribe</button>
                </div>

                <div className="profileScreen__plansItem">
                  <p>
                    Netflix Basic <br />
                    480p
                  </p>
                  <button>Subscribe</button>
                </div>

                <div className="profileScreen__plansItem">
                  <p>
                    Netflix Premium <br />
                    4k+HDR
                  </p>
                  <button className="profileScreen__current">
                    Current Package
                  </button>
                </div>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
