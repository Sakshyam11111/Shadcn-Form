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
            {...register("firstName", { required: "First Name is required" })}
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
            {...register("idNumber", { required: "ID Number is required" })}
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
              {...register("issuedDate.day", { required: "Day is required" })}
            />
            <Input
              type="number"
              placeholder="MM"
              {...register("issuedDate.month", { required: "Month is required" })}
            />
            <Input
              type="number"
              placeholder="YYYY"
              {...register("issuedDate.year", { required: "Year is required" })}
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
            {...register("fathersName", { required: "Father's Name is required" })}
          />
          {errors.fathersName && (
            <p className="text-red-600 text-sm">{errors.fathersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="grandfathersName">Grand Father's Name</Label>
          <Input
            id="grandfathersName"
            {...register("grandfathersName", { required: "Grand Father's Name is required" })}
          />
          {errors.grandfathersName && (
            <p className="text-red-600 text-sm">{errors.grandfathersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="mothersName">Mother's Name</Label>
          <Input
            id="mothersName"
            {...register("mothersName", { required: "Mother's Name is required" })}
          />
          {errors.mothersName && (
            <p className="text-red-600 text-sm">{errors.mothersName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="spouseName">Spouse Name</Label>
          <Input
            id="spouseName"
            {...register("spouseName", { required: "Spouse Name is required" })}
          />
          {errors.spouseName && (
            <p className="text-red-600 text-sm">{errors.spouseName.message}</p>
          )}
        </div>

        {/* Existing Select Fields */}
        <div className="form-section-content">
          <Label htmlFor="education">Highest Education</Label>
          <Select
            onValueChange={(value) => handleSelectChange("education", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
              <SelectItem value="masters">Master's Degree</SelectItem>
              <SelectItem value="phd">Ph.D.</SelectItem>
            </SelectContent>
          </Select>
          {errors.education && (
            <p className="text-red-600 text-sm">{errors.education.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="experience">Years of Experience</Label>
          <Select
            onValueChange={(value) => handleSelectChange("experience", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
          {errors.experience && (
            <p className="text-red-600 text-sm">{errors.experience.message}</p>
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

export default ApplicantDetails;