import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const ProfessionalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
      <div>
        <Typography component="h1" variant="h5">
          Background profesional
        </Typography>
        <form>
          <Grid container spacing={2} alignItems="center" >
            {/* Nivel de escolaridad */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullwidth>
                <FormLabel component="legend">Nivel de escolaridad</FormLabel>
                <RadioGroup
                  aria-label="level of education"
                  name="level-of-education"
                  value={values.educLevel}
                  onChange={handleChange("educLevel")}
                >
                  <FormControlLabel
                    value="tecnico"
                    control={<Radio />}
                    label="Técnico"
                  />
                  <FormControlLabel
                    value="tecnologo"
                    control={<Radio />}
                    label="Técnologo"
                  />
                  <FormControlLabel
                    value="pregrado"
                    control={<Radio />}
                    label="Pregrado"
                  />
                  <FormControlLabel
                    value="posgrado"
                    control={<Radio />}
                    label="Posgrado"
                  />
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Rol */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <FormLabel component="legend">Rol</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="Full-stack"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="Back-end"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="Front-end"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="No code"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="DevOps"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="Mobile"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.role}
                        onChange={handleChange("role")}
                      />
                    }
                    label="Data Engineer"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            {/* Skills */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullwidth>
                <FormLabel component="legend">Skills</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="React/Node"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="React.js"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Node.js"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="AWS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="JavaScript"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="HTML"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="CSS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Python"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Typescript"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Java"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="PostgresSQL"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="PHP"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="WordPress"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="MySQL"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Golang"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Angular"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Android"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="iOS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Vue.js"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Figma"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Suite Adobe"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.skill}
                        onChange={handleChange("skill")}
                      />
                    }
                    label="Otro"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            {/* Experience */}
            <Grid xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">
                  Años de experiencia
                </FormLabel>
                <RadioGroup
                  aria-label="expTime"
                  name="Experience time"
                  value={values.expTime}
                  onChange={handleChange("expTime")}
                >
                  <FormControlLabel
                    value="menos1año"
                    control={<Radio />}
                    label="Menos de 1 año"
                  />
                  <FormControlLabel
                    value="entre1y3"
                    control={<Radio />}
                    label="Entre 1-3 años"
                  />
                  <FormControlLabel
                    value="entre3y5"
                    control={<Radio />}
                    label="Entre 3-5 años"
                  />
                  <FormControlLabel
                    value="entre5y10"
                    control={<Radio />}
                    label="Entre 5-10 años"
                  />
                  <FormControlLabel
                    value="masde10"
                    control={<Radio />}
                    label="Más de 10 años"
                  />
                  <FormControlLabel
                    value="sinExp"
                    control={<Radio />}
                    label="Sin experiencia"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
             {/* Educacion formal */}
             <Grid xs={12} sm={6} md={4}>
              <TextField
                placeholder="Educación formal"
                label="Educación formal"
                onChange={handleChange("educForm")}
                defaultValue={values.educForm}
                autoComplete="educForm"
                fullWidth
              />
            </Grid>
            <Grid ixs={12} sm={6} md={4}>
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
            <Grid ixs={12} sm={6} md={4}>
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
  );
};

export default ProfessionalDetails;
