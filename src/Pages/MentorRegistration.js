import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

import logo from "../images/slop-logo-3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  removeBtn: {
    margin: "12px 0",
  },
}));

function MentorForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    institute: "",
    areasOfInterest: [""],
    toolsAndTechnologies: [""],
    githubLink: "",
    projectLinks: [""],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectLinkChange = (index, value) => {
    const updatedLinks = formData.projectLinks.map((link, i) =>
      i === index ? value : link
    );
    setFormData((prevData) => ({
      ...prevData,
      projectLinks: updatedLinks,
    }));
  };

  const addProjectLinkField = () => {
    setFormData((prevData) => ({
      ...prevData,
      projectLinks: [...prevData.projectLinks, ""],
    }));
  };

  const removeProjectLinkField = (index) => {
    const updatedLinks = formData.projectLinks.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      projectLinks: updatedLinks,
    }));
  };

  const handleAreasOfInterestChange = (index, value) => {
    const updatedInterests = [...formData.areasOfInterest];
    updatedInterests[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      areasOfInterest: updatedInterests,
    }));
  };

  const addAreaOfInterestField = () => {
    setFormData((prevData) => ({
      ...prevData,
      areasOfInterest: [...prevData.areasOfInterest, ""],
    }));
  };

  const removeAreaOfInterestField = (index) => {
    const updatedInterests = formData.areasOfInterest.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      areasOfInterest: updatedInterests,
    }));
  };

  const handleToolsChange = (index, value) => {
    const updatedTools = [...formData.toolsAndTechnologies];
    updatedTools[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      toolsAndTechnologies: updatedTools,
    }));
  };

  const addToolField = () => {
    setFormData((prevData) => ({
      ...prevData,
      toolsAndTechnologies: [...prevData.toolsAndTechnologies, ""],
    }));
  };

  const removeToolField = (index) => {
    const updatedTools = formData.toolsAndTechnologies.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      toolsAndTechnologies: updatedTools,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., store in Firebase)
    console.log(formData);

    setLoading(true);


    const response = await fetch(
      process.env.REACT_APP_DB_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const res = await response.json();

    if (res) {
      console.log(res);
      setLoading(false);
      alert("Details Submitted Successfully!");
      window.location = "/";
    }
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className="form-header">
        <img
          src={logo}
          alt="Slop3.0 logo"
          style={{ height: "240px", margin: "auto" }}
        />
        <Typography
          variant="h3"
          component="h1"
          color="primary"
          style={{ marginBottom: 10 }}
        >
          DSC SLoP 3.0 Mentor Registration
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="primary"
          style={{ marginBottom: 6 }}
        >
          SLoP - Semester Long Projects is the flagship event which allows Open
          Source Organizations to get some fresh updates and commits while
          students gain an experience on Open Source Development.
        </Typography>
        <Typography variant="subtitle1" component="p" color="secondary">
          Event Starts: 1 October 2022
        </Typography>
        <Typography variant="subtitle1" component="p" color="secondary">
          Mentor Registration closes on: 20th September
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="secondary"
          style={{ marginBottom: 16 }}
        >
          Student Registration starts on: 21st September
        </Typography>
        <Typography variant="subtitle2" component="p" color="primary">
          Contact us at{" "}
          <Typography variant="caption" color="secondary">
            dsc@daiict.ac.in
          </Typography>{" "}
          for any queries!
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Institute/Organization Name"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <div>
          <Typography
            variant="h5"
            style={{ marginTop: "10px", marginBottom: "0" }}
            component="h4"
            color="primary"
          >
            Areas Of Interest
          </Typography>

          {formData.areasOfInterest.map((link, index) => (
            <div key={index}>
              <TextField
                label={`Areas Of Interest ${index + 1}`}
                value={link}
                onChange={(e) =>
                  handleAreasOfInterestChange(index, e.target.value)
                }
                fullWidth
                margin="normal"
              />
              {index > 0 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeAreaOfInterestField(index)}
                  className={classes.removeBtn}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outlined"
            className={classes.removeBtn}
            color="primary"
            onClick={addAreaOfInterestField}
          >
            Add Areas Of Interest
          </Button>
        </div>

        <div>
          <Typography
            variant="h5"
            style={{ marginTop: "10px", marginBottom: "0" }}
            component="h4"
            color="primary"
          >
            Tools and Technologies
          </Typography>

          {formData.toolsAndTechnologies.map((link, index) => (
            <div key={index}>
              <TextField
                label={`Tools and Technologies ${index + 1}`}
                value={link}
                onChange={(e) => handleToolsChange(index, e.target.value)}
                fullWidth
                margin="normal"
              />
              {index > 0 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeToolField(index)}
                  className={classes.removeBtn}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outlined"
            className={classes.removeBtn}
            color="primary"
            onClick={addToolField}
          >
            Add Tools and Technologies
          </Button>
        </div>
        <TextField
          label="Github Profile Link"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <div>
          <Typography
            variant="h5"
            style={{ marginTop: "10px", marginBottom: "0" }}
            component="h4"
            color="primary"
          >
            Project Links
          </Typography>

          {formData.projectLinks.map((link, index) => (
            <div key={index}>
              <TextField
                label={`Project Link ${index + 1}`}
                value={link}
                onChange={(e) => handleProjectLinkChange(index, e.target.value)}
                fullWidth
                margin="normal"
              />
              {index > 0 && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeProjectLinkField(index)}
                  className={classes.removeBtn}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outlined"
            className={classes.removeBtn}
            color="primary"
            onClick={addProjectLinkField}
          >
            Add Project Link
          </Button>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default MentorForm;
