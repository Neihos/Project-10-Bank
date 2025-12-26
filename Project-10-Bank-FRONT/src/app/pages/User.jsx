import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFirstName as setFirstNameAction } from "../store/authSlice";

export default function User() {
  const token = useSelector((state) => state.auth.token);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();

        if (!res.ok) {
          console.log("Profile error:", json.message);
          return;
        }

        dispatch(setFirstNameAction(json.body.firstName));
        setUser(json.body);
        setFirstName(json.body.firstName);
        setLastName(json.body.lastName);
      } catch (err) {
        console.log("API error:", err);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        console.log("Update failed:", json.message);
        return;
      }

      dispatch(setFirstNameAction(json.body.firstName));
      setUser(json.body);
      setIsEditing(false);
    } catch (err) {
      console.log("Update API error:", err);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {!isEditing && user ? `${user.firstName} ${user.lastName}` : ""}
        </h1>

        {!isEditing ? (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        ) : (
          <form onSubmit={handleSave}>
            <div className="edit-inputs">
              <input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="edit-actions">
              <button type="submit" className="edit-button">
                Save
              </button>
              <button
                type="button"
                className="edit-button"
                onClick={() => {
                  setIsEditing(false);
                  setFirstName(user.firstName);
                  setLastName(user.lastName);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
