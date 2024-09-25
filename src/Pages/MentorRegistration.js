import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  makeStyles,
  Typography,
  Checkbox,
  FormControlLabel,
  Tooltip,
  IconButton,
} from "@material-ui/core";

import InfoIcon from "@mui/icons-material/Info";

import logo from "../images/slop-logo-4.png";

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
    projectLinks: [
      {
        link: "",
        beginnerFreindly: false,
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectLinkChange = (index, field, value) => {
    const updatedLinks = [...formData.projectLinks];
    updatedLinks[index][field] = value;
    setFormData({
      ...formData,
      projectLinks: updatedLinks,
    });
  };

  const addProjectLinkField = () => {
    setFormData((prevData) => ({
      ...prevData,
      projectLinks: [
        ...prevData.projectLinks,
        { link: "", beginnerFreindly: false },
      ],
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

    // validate form data here
    if (
      formData.email.trim() === "" ||
      formData.fullName.trim() === "" ||
      formData.institute.trim() === "" ||
      formData.areasOfInterest.length === 0 ||
      formData.toolsAndTechnologies.length === 0 ||
      formData.githubLink.trim() === "" ||
      formData.projectLinks.length === 0
    ) {
      alert("Please fill all the fields!");
      return;
    }

    for (let i = 0; i < formData.areasOfInterest.length; i++) {
      if (formData.areasOfInterest[i].trim() === "") {
        alert("Please fill all the fields!");
        return;
      }
    }

    for (let i = 0; i < formData.toolsAndTechnologies.length; i++) {
      if (formData.toolsAndTechnologies[i].trim() === "") {
        alert("Please fill all the fields!");
        return;
      }
    }

    for (let i = 0; i < formData.projectLinks.length; i++) {
      if (formData.projectLinks[i].link.trim() === "") {
        alert("Please fill all the fields!");
        return;
      }
    }

    // Handle form submission here (e.g., store in Firebase)
    console.log(formData);

    setLoading(true);

    const response = await fetch(process.env.REACT_APP_DB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
          GDSC SLoP 3.0 Mentor Registration
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
        <Typography
          variant="subtitle1"
          component="p"
          color="secondary"
          style={{ marginBottom: 16 }}
        >
          Last date to fill out the form: 22 September 2023
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
                required
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
                required
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
          required
          margin="normal"
        />
        <div>
          <Typography
            variant="h5"
            style={{ marginTop: "10px", marginBottom: "0" }}
            component="h4"
            color="primary"
          >
            Github link of your project
          </Typography>

          {formData.projectLinks.map((link, index) => (
            <div key={index}>
              <TextField
                required
                label={`Project Link ${index + 1}`}
                value={link.link}
                onChange={(e) =>
                  handleProjectLinkChange(index, "link", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                style={{ color: "#fff" }}
                control={
                  <Checkbox
                    checked={link.beginnerFreindly}
                    onChange={() =>
                      handleProjectLinkChange(
                        index,
                        "beginnerFreindly",
                        !link.beginnerFreindly
                      )
                    }
                    color="primary"
                  />
                }
                label="Beginner Friendly"
              />
              <Tooltip
                style={{ marginRight: "3em" }}
                title="Check this if the project is beginner friendly"
              >
                <IconButton aria-label="info" size="small">
                  <InfoIcon />
                </IconButton>
              </Tooltip>
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
