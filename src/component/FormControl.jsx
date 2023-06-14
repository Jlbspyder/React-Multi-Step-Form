import React, { useState, useEffect } from "react";
import Form from "./Form";
import Plans from "./Plans";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import SidePanel from "./SidePanel";

const FormControl = () => {
  const [step, setStep] = useState(1);
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: ""
  });

  const FormTitles = ["Form", "Plans", "Addons", "Summary", "Confirm"];

  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    setSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submit) {
      setStep((prev) => prev + 1);
      activeNextStep();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const Regex = /^\+?[1-9][0-9]{7,14}$/;
    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!regEx.test(values.email)) {
      errors.email = "Please insert a valid email";
    }
    if (!values.number) {
      errors.number = "This field is required";
    } else if (!Regex.test(values.number)) {
      errors.number = "Please insert a postcode";
    }
    return errors;
  };
  
  const activeNextStep = () => {
    if (step === 0) {
      setStepOne(false);
      setStepTwo(true);
    } else if (step === 1) {
      setStepOne(false);
      setStepTwo(false);
      setStepThree(true);
    } else if (step === 2) {
      setStepThree(true);
      setStepFour(true);
      setStepThree(false);
    } else if (step === 3) {
      setStepFour(true);
      setStepThree(false);
      setStepFour(false);
    }
  };
  const activePreviousStep = () => {
    if (step === 0) {
      setStepTwo(false);
      setStepOne(true);
      setStepTwo(false);
    } else if (step === 1) {
      setStepOne(true);
      setStepTwo(true);
      setStepTwo(false);
    } else if (step === 2) {
      setStepTwo(true);
      setStepThree(false);
    } else if (step === 3) {
      setStepThree(true);
      setStepFour(false);
      setStepTwo(false);
    }
  };

  const pageDisplay = () => {
    switch (step) {
      case 0:
        return (
          <Form
            formData={formData}
            setFormData={setFormData}
            errors={formErrors}
            submit={handleSubmit}
          />
        );
      case 1:
        return (
          <Plans/>
        );
      case 2:
        return (
          <AddOns/>
        );
      case 3:
        return (
          <Summary goback={goToSecondStep} />
        );
      case 4:
        return (
        <ThankYou />
        );
    }
  };
  const nextStep = (e) => {
    e.preventDefault()
    if (step === 0) {
      handleSubmit()
    } else {
    activeNextStep();
    setStep((prev) => prev + 1);
    }
  };
  const prevStep = (e) => {
    e.preventDefault();
    activePreviousStep();
    setStep((prev) => prev - 1);
  };
  const goToSecondStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 2)
    setStepFour(false)
    setStepTwo(true)
  }

  return (
    <div>
      {pageDisplay()}
      <SidePanel
        stepone={stepOne}
        steptwo={stepTwo}
        stepthree={stepThree}
        stepfour={stepFour}
      />
      <div className={`btn ${step === FormTitles.length- 2 ? "last" : step === 4 ? "thanks" : ""}`}>
        <div className={`back ${step === FormTitles.length- 2 ? "review" : ""}`}>
        {step !== 0 && step !== FormTitles.length - 1 && (
          <button
            className="back w-[80px] text-sm font-medium  cursor-pointer text-CoolGray hover:text-MarineBlue"
            onClick={prevStep}
          >
            Go back
          </button>
        )}
        </div>
        {step !== FormTitles.length - 1 && <div className={`next ${step === FormTitles.length - 2 ? "confirm" : ""}`}>
          <button
            className={step === FormTitles.length - 2 ? "py-2 w-[85px] rounded-md text-White text-sm bg-PurplishBlue hover:bg-Hover md:w-[100px] md:rounded-md" : "py-2 w-[85px] rounded-md text-White text-sm bg-MarineBlue hover:bg-PurplishBlue md:w-[100px] md:rounded-md"}
            onClick={nextStep}
          >
            {step === FormTitles.length- 2 ? "Confirm" : "Next Step"}
          </button>
        </div>}
      </div>
    </div>
  );
};

export default FormControl;
