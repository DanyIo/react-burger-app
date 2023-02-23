import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Loader from "../../components/Main/Loader/loader";
import styled from "@emotion/styled";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


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
    <div style={{ margin: 20, justifyContent: "center", display: "flex" }}>
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
                    {el}{" "}
                    {el === "fb" && (
                      <FacebookIcon style={{ position: "absolute" }} />
                    )}
                    {el === "inst" && (
                      <InstagramIcon style={{ position: "absolute" }} />
                    )}
                    {el === "phone" && (
                      <LocalPhoneIcon style={{ position: "absolute" }} />
                    )}
                    {el === "web" && (
                      <WebIcon style={{ position: "absolute" }} />
                    )}
                    {el === "email" && (
                      <EmailIcon style={{ position: "absolute" }} />
                    )}{el === "worktime" && (
                      <WorkHistoryIcon style={{ position: "absolute" }} />
                    )}
                     <br></br>
                    {contacts[el]}
                  </span>
                  <br />
                </>
              )
          )}
          {contacts.locations === undefined ||
            Object.keys(contacts.locations).map((location, index) => (
              <>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                  Location №{index + 1}
                  <LocationOnIcon style={{position:"absolute"}}/>
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
  padding: "20px",
  height: "60%",
  width: "500px",
  background: "white",
  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  borderRadius: "20px",
  textAlign: "center",
  display: "table-cell" ,
  verticalAlign: "middle",
});
