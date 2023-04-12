import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3, 0),
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: theme.spacing(3),
    },
  }));

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
    const classes = useStyles();
  
    const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };


  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h4" align="center">
          Informacion Personal
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="First Name"
                label="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>

              <TextField
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                  label="Fecha de nacimiento"
                  inputFormat="MM/DD/YYYY"
                  onChange={handleChange("dateBirth")}
                  defaultValue={values.dateBirth}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      helperText="MM/DD/YYYY"
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
              <TextField
                placeholder="Country of Residence"
                label="Country of Residence"
                onChange={handleChange("country")}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
              />
            </Grid>

            {/* level of education */}
            <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Nivel de inglés</FormLabel>
                <RadioGroup
                  aria-label="englishLev"
                  name="englishLev"
                  value={values.level}
                  onChange={handleChange("englishLev")}
                >
                  <FormControlLabel
                    value="principianteA1"
                    control={<Radio />}
                    label="Principiante A1"
                  />
                  <FormControlLabel
                    value="elementalA2"
                    control={<Radio />}
                    label="Elemental A2"
                  />
                  <FormControlLabel
                    value="intermedioB1"
                    control={<Radio />}
                    label="Intermedio B1"
                  />
                  <FormControlLabel
                    value="intermedioAltoB2"
                    control={<Radio />}
                    label="Intermedio Alto B2"
                  />
                  <FormControlLabel
                    value="avanzadoC1"
                    control={<Radio />}
                    label="Avanzado C1"
                  />
                  <FormControlLabel
                    value="proficiencyC2"
                    control={<Radio />}
                    label="Proficiency C2"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PersonalDetails;
