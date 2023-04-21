import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Grid, Typography, withStyles, Button } from "@material-ui/core";
import WizardHeader from "./wizardHeader";
import Experiencia from "./experiencia";
import Demográficos from "./demograficos";
import Contacto from "./contacto";
import Cuenta from "./cuenta";
import axios from "axios";

const style = (theme) => ({
  navigation: {
    width: 110,
    fontSize: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 90
    }
  },
  prevBtn: {
    color: theme.palette.grey[700],
    background: theme.palette.common.white,
    boxShadow: theme.shadows[5]
  }
});
const Content = ({ classes }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(
    localStorage.getItem("step") ? Number(localStorage.getItem("step")) : 0
  );
  const handleChange = (index) => (e) => {
    setActiveStep(index);
    localStorage.setItem("step", index);
  };
  const nandleNext = () => {
    setActiveStep(activeStep + 1);
    localStorage.setItem("step", activeStep + 1);
  };
  const nandlePrev = () => {
    setActiveStep(activeStep - 1);
    localStorage.setItem("step", activeStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    setFormSubmitted(true);
    const data = Array.from(e.target.elements)
      .map((el) => el.id)
      .filter(Boolean)
      .reduce((accObj, field) => {
        accObj[field] = e.target.elements[field].value;
        return accObj;
      }, {});

      axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          alert("User successfully registered")
        } else {
          alert("Error registering user");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error registering user");
      });
    
    alert(JSON.stringify(data, null, 2));
  };
  const tabs = ["Cuenta", "Contacto", "Demográficos", "Experiencia"];
  return (
    <Paper style={{}} elevation={5} className="signupComp">
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        style={{ padding: "0 8px" }}
      >
        Registro de cuenta
      </Typography>
      <Typography gutterBottom>
        ¡Gracias por elegir Kalo! Queremos que hagas parte de la tech house con más relevancia de latinoamérica. Llena el siguiente formulario y crece junto a nosotros.
      </Typography>
      <WizardHeader
        tabs={tabs}
        activeStep={activeStep}
        handleChange={handleChange}
        formSubmitted={formSubmitted}
      />

      <form onSubmit={handleSubmit}>
        <SwipeableViews index={activeStep} onChangeIndex={handleChange}>
          <Cuenta/>
          <Contacto/>
          <Demográficos />
          <Experiencia formSubmitted={formSubmitted}/>
        </SwipeableViews>
        <Grid
          container
          justify="space-between"
          style={{ padding: "16px 16px" }}
        >
          <Grid item>
            <Button
              disabled={activeStep === 0 || formSubmitted}
              onClick={nandlePrev}
              variant="contained"
              color="default"
              className={`${classes.navigation} ${classes.prevBtn}`}
            >
              Back
            </Button>
          </Grid>
          {activeStep < tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                className={classes.navigation}
                variant="contained"
                onClick={nandleNext}
                disabled={formSubmitted}
              >
                Next
              </Button>
            </Grid>
          )}
          {activeStep === tabs.length - 1 && (
            <Grid item>
              <Button
                type="submit"
                color="primary"
                className={classes.navigation}
                variant="contained"
                disabled={formSubmitted}
              >
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};
export default withStyles(style)(Content);
