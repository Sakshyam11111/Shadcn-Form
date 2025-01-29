import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { User, Users, Building, Eye } from "lucide-react";
import AppSidebar from "../AppSidebar";
import Heading from "./form_components/Heading";
import ApplicantDetails from "./form_components/ApplicantDetails";
import GuarantorDetails from "./form_components/GuarantorDetails";
import Existing from "./form_components/Existing";
import MoreAbout from "./form_components/MoreAbout";
import Monthly from "./form_components/Monthly";
import Facility from "./form_components/Facility";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const handleSelectChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
  };

  const [stepper, setStepper] = useState([
    { state: false, value: "Applicant Details", icon: User },
    { state: false, value: "Guarantor Details", icon: Users },
    { state: false, value: "More About You", icon: Building },
    { state: false, value: "Monthly Income", icon: Eye },
    { state: false, value: "Facility Details", icon: Building },
  ]);

  const handleStepper = (index) => {
    setStepper((prevStepper) =>
      prevStepper.map((step, idx) =>
        idx === index ? { ...step, state: true } : step
      )
    );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex w-full">
      <AppSidebar stepper={stepper} />
      <div className="flex-1">
        <Heading />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Existing
            register={register}
            errors={errors}
            isValid={isValid}
            handleSelectChange={handleSelectChange}
            stepper={stepper}
            handleStepper={handleStepper}
          />
          {stepper[0].state && (
            <div data-aos="fade-up">
              <ApplicantDetails
                register={register}
                errors={errors}
                isValid={isValid}
                handleSelectChange={handleSelectChange}
                stepper={stepper}
                handleStepper={handleStepper}
              />
            </div>
          )}
          {stepper[1].state && (
            <div data-aos="fade-up">
              <GuarantorDetails
                register={register}
                errors={errors}
                isValid={isValid}
                handleSelectChange={handleSelectChange}
                stepper={stepper}
                handleStepper={handleStepper}
              />
            </div>
          )}
          {stepper[2].state && (
            <div data-aos="fade-up">
              <MoreAbout
                register={register}
                errors={errors}
                isValid={isValid}
                handleSelectChange={handleSelectChange}
                stepper={stepper}
                handleStepper={handleStepper}
              />
            </div>
          )}
          {stepper[3].state && (
            <div data-aos="fade-up">
              <Monthly
                register={register}
                errors={errors}
                isValid={isValid}
                handleSelectChange={handleSelectChange}
                stepper={stepper}
                handleStepper={handleStepper}
              />
            </div>
          )}
          {stepper[4].state && (
            <div data-aos="fade-up">
              <Facility
                register={register}
                errors={errors}
                isValid={isValid}
                handleSelectChange={handleSelectChange}
                stepper={stepper}
                handleStepper={handleStepper}
              />
            </div>
          )}
          {stepper[4].state && (
            <Button type="submit" className="btn-primary w-full" data-aos="fade-up">
              Submit Application
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;