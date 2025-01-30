import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

const ApplicantDetails = ({
  register,
  errors,
  isValid,
  handleSelectChange,
  stepper,
  handleStepper,
}) => {
  return (
    <div className="form-section">
      <div className="form-section-content-container">
        {/* Existing Fields */}
        <div className="form-section-content">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            {...register("custom_customer_name", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="idNumber">ID Number</Label>
          <Input
            id="idNumber"
            {...register("custom_account_number", { required: "ID Number is required" })}
          />
          {errors.idNumber && (
            <p className="text-red-600 text-sm">{errors.idNumber.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="issuingDistrict">Issuing District</Label>
          <Input
            id="issuingDistrict"
            {...register("issuingDistrict", { required: "Issuing District is required" })}
          />
          {errors.issuingDistrict && (
            <p className="text-red-600 text-sm">{errors.issuingDistrict.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label>Issued Date</Label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="DD"
              {...register("date_of_birth.day", { required: "Day is required" })}
            />
            <Input
              type="number"
              placeholder="MM"
              {...register("date_of_birth.month", { required: "Month is required" })}
            />
            <Input
              type="number"
              placeholder="YYYY"
              {...register("date_of_birth.year", { required: "Year is required" })}
            />
          </div>
          {errors.issuedDate && (
            <p className="text-red-600 text-sm">{errors.issuedDate.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="panNumber">PAN Number</Label>
          <Input
            id="panNumber"
            {...register("panNumber", { required: "PAN Number is required" })}
          />
          {errors.panNumber && (
            <p className="text-red-600 text-sm">{errors.panNumber.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="fathersName">Father's Name</Label>
          <Input
            id="fathersName"
            {...register("fathers_name", { required: "Father's Name is required" })}
          />
          {errors.fathersName && (
            <p className="text-red-600 text-sm">{errors.fathersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="grandfathersName">Grand Father's Name</Label>
          <Input
            id="grandfathersName"
            {...register("grandfathers_name", { required: "Grand Father's Name is required" })}
          />
          {errors.grandfathersName && (
            <p className="text-red-600 text-sm">{errors.grandfathersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="mothersName">Mother's Name</Label>
          <Input
            id="mothersName"
            {...register("mothers_name", { required: "Mother's Name is required" })}
          />
          {errors.mothersName && (
            <p className="text-red-600 text-sm">{errors.mothersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="spouseName">Spouse Name</Label>
          <Input
            id="spouseName"
            {...register("spouse_name", { required: "Spouse Name is required" })}
          />
          {errors.spouseName && (
            <p className="text-red-600 text-sm">{errors.spouseName.message}</p>
          )}
        </div>

        {/* Gender Field */}
        <div className="form-section-content">
          <Label htmlFor="gender">Gender</Label>
          <Select
            onValueChange={(value) => handleSelectChange("gender", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Marital Status Field */}
        <div className="form-section-content">
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Select
            onValueChange={(value) => handleSelectChange("maritalStatus", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
          {errors.maritalStatus && (
            <p className="text-red-600 text-sm">{errors.maritalStatus.message}</p>
          )}
        </div>
      </div>
      {!stepper[1].state && (
        <div className="form-section-content-container-single">
          <Button
            type="submit"
            onClick={() => (isValid ? handleStepper(1) : null)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

ApplicantDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.object,
    lastName: PropTypes.object,
    idNumber: PropTypes.object,
    issuingDistrict: PropTypes.object,
    issuedDate: PropTypes.object,
    panNumber: PropTypes.object,
    fathersName: PropTypes.object,
    grandfathersName: PropTypes.object,
    mothersName: PropTypes.object,
    spouseName: PropTypes.object,
    gender: PropTypes.object,
    maritalStatus: PropTypes.object,
  }).isRequired,
  isValid: PropTypes.bool.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  stepper: PropTypes.array.isRequired,
  handleStepper: PropTypes.func.isRequired,
};

export default ApplicantDetails;