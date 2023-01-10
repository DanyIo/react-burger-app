import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Loader from "../../components/Main/Loader/loader";
import styled from "@emotion/styled";
//"https://burger-api-xcwp.onrender.com/contact"
const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      const loadContacts = async () => {
        const {
          data: [loadedContacts],
        } = await axios.get("https://burger-api-xcwp.onrender.com/contact");
        setContacts(loadedContacts);
        setLoading(false);
      };
      loadContacts();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div style={{ margin: 20 }}>
      {loading ? (
        <CenterLoader>
          <Loader />
        </CenterLoader>
      ) : (
        <ListStyled>
          {Object.keys(contacts).map(
            (el) =>
              el !== "locations" &&
              el !== "_id" &&
              el !== "tags" && (
                <>
                  <span style={{ fontSize: 20 }}>
                    {el}: {contacts[el]}
                  </span>
                  <br />
                </>
              )
          )}
          {contacts.locations === undefined ||
            Object.keys(contacts.locations).map((location, index) => (
              <>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                  Location №{index}
                </span>
                <br />
                <span style={{ fontSize: 20 }}>
                  {location}: {contacts.locations[location]}
                </span>
                <br />
              </>
            ))}
        </ListStyled>
      )}
    </div>
  );
};
export default Contact;
const CenterLoader = styled.div({
  position: "absolute",
  top: "50%",
  left: "47%",
  margin: "-25px 0 0 -25px",
});
const ListStyled = styled.div({
  justifyContent: "center",
  padding: "20px",
  height: "300px",
  width: "500px",
  background: "white",
  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  borderRadius: "20px",
});
