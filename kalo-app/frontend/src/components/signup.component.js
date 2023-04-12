import React, { Component } from "react";
import UserDetails from "./userDetails";
import PersonalDetails from "./personalDetails";
import ProfessionalDetails from "./professionalDetails";
//import Confirmation from './confirmation'
import Success from "./success";

export default class SignUp extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNum: "",
    educLevel: "",
    educForm: "",
    skill: "",
    role: "",
    expTime: "",
    dateBirth: "",
    country: "",
    englishLev: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target ? e.target.value : e });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      phoneNum,
      educLevel,
      educForm,
      skills,
      role,
      expTime,
      dateBirth,
      country,
      englishLev,
    } = this.state;
    const values = {
      email,
      username,
      password,
      firstName,
      lastName,
      phoneNum,
      educLevel,
      educForm,
      skills,
      role,
      expTime,
      dateBirth,
      country,
      englishLev,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ProfessionalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
      // do nothing
    }
  }
}
