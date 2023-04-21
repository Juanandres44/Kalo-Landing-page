import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, FormControlLabel, Grid, Switch, RadioGroup, Radio, TextField } from "@material-ui/core";
import { curl, straight, color, haircut, shampoo } from "./iconPaths";
import { phoneIcon } from "./iconPaths";

const skills = [
  {
    name: "React/Node",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640"
  },
  { name: "React.js", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
  { name: "Node.js", iconPath: color, iconViewBox: "-150 -20 640 640" },
  { name: "AWS", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
  {
    name: "JavaScript",
    iconPath: straight,
    iconViewBox: "-97 -20 640 640"
  },
  {
    name: "HTML",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640"
  },
  { name: "CSS", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
  { name: "Python", iconPath: color, iconViewBox: "-150 -20 640 640" },
  { name: "Typescript", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
  {
    name: "Java",
    iconPath: straight,
    iconViewBox: "-97 -20 640 640"
  },
  {
    name: "PostgresSQL",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640"
  },
  { name: "php", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
  { name: "Wordpress", iconPath: color, iconViewBox: "-150 -20 640 640" },
  { name: "MySQL", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
  {
    name: "Golang",
    iconPath: straight,
    iconViewBox: "-97 -20 640 640"
  },
  {
    name: "Angular",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640"
  },
  { name: "Android", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
  { name: "iOS", iconPath: color, iconViewBox: "-150 -20 640 640" },
  { name: "Vue.js", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
  {
    name: "Figma",
    iconPath: straight,
    iconViewBox: "-97 -20 640 640"
  },
  {
    name: "Suite Adobe",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640"
  },
  { name: "Otro", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
  

];

const roles = [
    {
      name: "Full-stack",
      iconPath: shampoo,
      iconViewBox: "-20 -20 640.01063 640"
    },
    { name: "Back-end", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
    { name: "Front-end", iconPath: color, iconViewBox: "-150 -20 640 640" },
    { name: "No Code", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
    {
      name: "DevOps",
      iconPath: straight,
      iconViewBox: "-97 -20 640 640"
    },
    {
        name: "Mobile",
        iconPath: shampoo,
        iconViewBox: "-20 -20 640.01063 640"
      },
      { name: "Data Engineer", iconPath: haircut, iconViewBox: "-20 -20 640 640" },
      { name: "Business Analyst", iconPath: color, iconViewBox: "-150 -20 640 640" },
      { name: "Data Scientist", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
      {
        name: "Machine Learning Sci/Eng",
        iconPath: straight,
        iconViewBox: "-97 -20 640 640"
      },
      { name: "UX/UI", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
      {
        name: "Otro",
        iconPath: straight,
        iconViewBox: "-97 -20 640 640"
      },
  ];

const educLevel = ["Técnico", "Tecnólogo", "Pregrado", "Posgrado", "Otro"];
const expTime = ["Menos de 1 año", "Entre 1 a 3 años", "Entre 3-5 años", "Entre 5-10 años", "Más de 10 años", "Sin experiencia"];



const getInitialStateSkills = () => {
  return skills.reduce((obj, item) => {
    obj[item.name] = false;
    return obj;
  }, {});
};

const getInitialStateRoles = () => {
    return roles.reduce((obj, item) => {
      obj[item.name] = false;
      return obj;
    }, {});
  };

const style = (theme) => ({
  root: {
    padding: 8,
    height: "100%",
    alignItems: "center",
    maxWidth: 400,
    margin: " 0 auto"
  },
  row: { borderBottom: `1px solid ${theme.palette.grey[100]}` },
  icon: {
    fill: theme.palette.grey[700],
    width: 28,
    height: 28
  }
});

function Experiencia ({ classes, formSubmitted}) {
    const [selectedEducLevel, setEducLevel] = useState(() => {
      return localStorage.getItem("educLevel") ?? ""
    });
    
    const [educForm, setEducForm] = useState(() => {
      return localStorage.getItem("educForm") ?? "";
    });    
        
    const [skillSelected, setSkillSelected] = useState(
      JSON.parse(localStorage.getItem("skills")) ?? getInitialStateSkills()
      );
    
    const [roleSelected, setRoleSelected] = useState(
        JSON.parse(localStorage.getItem("roles")) ?? getInitialStateRoles()
        );

    const [selectedExpTime, setExpTime] = useState(() => {
      return localStorage.getItem("expTime") ?? ""
    });

    const handleEducLevelChange = (e) => {
        setEducLevel(e.target.value);
        localStorage.setItem("educLevel", JSON.stringify(e.target.value));
    };

    const handleEducFormChange = (e) => {
        setEducForm(e.target.value);
        localStorage.setItem("educForm", JSON.stringify(e.target.value));
      };

    const handleSkillChange = (name) => (e) => {
        const selected = { ...skillSelected, [name]: e.target.checked };
        setSkillSelected(selected);
        localStorage.setItem("skills", JSON.stringify(selected));
    };
    
    const handleRoleChange = (name) => (e) => {
        const selected = { ...roleSelected, [name]: e.target.checked };
        setRoleSelected(selected);
        localStorage.setItem("roles", JSON.stringify(selected));
    };

    const handleExpTimeChange = (e) => {
        setExpTime(e.target.value);
        localStorage.setItem("expTime", JSON.stringify(e.target.value));
    };

    const textSelectedEducLevel = Object.keys(educLevel)
    .filter((key) => educLevel[key])
    
    const textSelectedSkill = Object.keys(skillSelected)
    .filter((key) => skillSelected[key])
    .join(", ");

    const textSelectedRole = Object.keys(roleSelected)
    .filter((key) => roleSelected[key])
    .join(", ");

    const textSelectedExpTime = Object.keys(expTime)
    .filter((key) => expTime[key])

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      spacing={0}
    >
        <Grid item xs={10}>
            <RadioGroup
                id="educLevel"
                name="educLevel"
                value={selectedEducLevel}
                onChange={handleEducLevelChange}
                row
            >
                {educLevel.map((part) => (
                <FormControlLabel
                    key={part}
                    value={part}
                    control={<Radio color="primary" />}
                    label={part}
                    labelPlacement="bottom"
                    checked={selectedEducLevel === part}
                />
                ))}
            </RadioGroup>
        </Grid>
        <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 463.009 463.009"
            className={classes.icon}
            width="24px"
            height="24px"
          >
            {phoneIcon}
          </svg>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="educForm"
            id="educForm"
            value={educForm}
            fullWidth
            margin="normal"
            label="Ingrese la carrera o curso formal tomado "
            variant="filled"
            onChange={handleEducFormChange}
          />
        </Grid>
        </Grid>
      {skills.map((skill, i) => (
        <Grid
          item
          key={skill.name}
          container
          justify="space-between"
          alignItems="center"
          className={classes.row}
        >
          <svg
            className={classes.icon}
            viewBox={skill.iconViewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            {skill.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleSkillChange(skill.name)}
                value={skill.name}
                color="primary"
              />
            }
            label={skill.name}
            checked={skillSelected[skill.name]}
            labelPlacement="start"
          />
        </Grid>
      ))}
      {roles.map((role, i) => (
        <Grid
          item
          key={role.name}
          container
          justify="space-between"
          alignItems="center"
          className={classes.row}
        >
          <svg
            className={classes.icon}
            viewBox={role.iconViewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            {role.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleRoleChange(role.name)}
                value={role.name}
                color="primary"
              />
            }
            label={role.name}
            checked={roleSelected[role.name]}
            labelPlacement="start"
          />
        </Grid>
      ))}
      <Grid item xs={10}>
            <RadioGroup
                id="expTime"
                name="expTime"
                value={selectedExpTime}
                onChange={handleExpTimeChange}
                row
            >
                {expTime.map((part) => (
                <FormControlLabel
                    key={part}
                    value={part}
                    control={<Radio color="primary" />}
                    label={part}
                    labelPlacement="bottom"
                    checked={selectedExpTime === part}
                />
                ))}
            </RadioGroup>
        </Grid>
      <input
        type="text"
        value={textSelectedEducLevel}
        name="educLevel"
        id="educLevel"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
      <input
        type="text"
        value={textSelectedSkill}
        name="skills"
        id="skills"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
      <input
        type="text"
        value={textSelectedRole}
        name="roles"
        id="roles"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
      <input
        type="text"
        value={textSelectedExpTime}
        name="expTime"
        id="expTime"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};

Experiencia.propTypes = {
  classes: PropTypes.object
};
export default withStyles(style)(Experiencia);
