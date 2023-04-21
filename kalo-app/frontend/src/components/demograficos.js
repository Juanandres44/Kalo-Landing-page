import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  withStyles,
  Grid,
  RadioGroup,
  TextField,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { calendar, clock } from "./iconPaths";

const englishLevel = ["Principiante A1", "Elemental A2", "Intermedio B1", "Intermedio Alto B2","Avanzado C1","Proficiency C2"];

const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing.unit * 3,
      height: "100%",
      maxWidth: 450,
      margin: " 0 auto"
    },
    icon: {
      height: 28,
      width: 28,
      fill: theme.palette.grey[500]
    }
  };
};
function Demograficos({ classes }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date(localStorage.getItem("date") ?? Date.now())
  );
  const [country, setCountry] = useState(() => {
    return localStorage.getItem("country") ?? "";
  });

  const [englishLev, setEnglishLev] = useState(() => {
    return localStorage.getItem("englishLev") ?? "";
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem("date", date);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    localStorage.setItem("country", JSON.stringify(e.target.value));
  };
  const handleEnglishLevChange = (e) => {
    setEnglishLev(e.target.value);
    localStorage.setItem("englishLev", e.target.value);
  };
  const textSelected = Object.keys(englishLev)
    .filter((key) => englishLev[key])

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
          {calendar}
        </svg>
      </Grid>
      <Grid item xs={10}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.picker}>
            <DatePicker
              inputProps={{ id: "date" }}
              value={selectedDate}
              autoOk
              onChange={handleDateChange}
              name="date"
              id="date"
              fullWidth
              variant="filled"
              format="yyyy-MM-dd"
            />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
          {calendar}
        </svg>
      </Grid>
      <Grid item xs={10}>
        <TextField
            name="country"
            id="country"
            value={country}
            fullWidth
            margin="normal"
            label="Ingrese su ciudad de residencia"
            variant="filled"
            onChange={handleCountryChange}
          />
      </Grid>
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className={classes.icon}
        >
          {clock}
        </svg>
      </Grid>
      <Grid 
        item xs={10}
        >
          <RadioGroup
            name="englishLev"
            id="englishLev"
            value={englishLev}
            onChange={handleEnglishLevChange}
            row
          >
            {englishLevel.map((part) => (
              <FormControlLabel
                key={part}
                value={part}
                control={<Radio color="primary" />}
                label={part}
                labelPlacement="bottom"
                checked={englishLev === part}
            />  
          ))}
        </RadioGroup>
      </Grid>
      <input
        type="text"
        value={textSelected}
        name="englishLev"
        id="englishLev"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
}

export default withStyles(styles)(Demograficos);
