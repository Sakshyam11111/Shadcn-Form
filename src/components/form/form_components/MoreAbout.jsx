import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MoreAbout = ({
  register,
  errors,
  isValid,
  handleStepper,
  stepper,
}) => {
  return (
    <div className="form-section">
      {/* Permanent Address Section */}
      <h2 className="text-lg font-semibold">Permanent Address</h2>
      <div className="form-section-content-container pt-0">
        <div className="form-section-content">
          <Label htmlFor="permanent_province">Province</Label>
          <Input
            id="permanent_province"
            {...register("permanent_province", { required: "Province is required" })}
          />
          {errors.permanent_province && (
            <p className="text-red-600 text-sm">{errors.permanent_province.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_district">District</Label>
          <Input
            id="permanent_district"
            {...register("permanent_district", { required: "District is required" })}
          />
          {errors.permanent_district && (
            <p className="text-red-600 text-sm">{errors.permanent_district.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_municipality">VDC / Municipality</Label>
          <Input
            id="permanent_municipality"
            {...register("permanent_municipality", { required: "VDC/Municipality is required" })}
          />
          {errors.permanent_municipality && (
            <p className="text-red-600 text-sm">{errors.permanent_municipality.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_ward_number">Ward No.</Label>
          <Input
            id="permanent_ward_number"
            {...register("permanent_ward_number", { required: "Ward No. is required" })}
          />
          {errors.permanent_ward_number && (
            <p className="text-red-600 text-sm">{errors.permanent_ward_number.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_number_of_dependents">Number of Dependents</Label>
          <Input
            id="permanent_number_of_dependents"
            type="number"
            {...register("permanent_number_of_dependents", { required: "Number of Dependents is required" })}
          />
          {errors.permanent_number_of_dependents && (
            <p className="text-red-600 text-sm">{errors.permanent_number_of_dependents.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_age_range">Age Range</Label>
          <Select
            onValueChange={(value) => handleSelectChange("permanent_age_range", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Age Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-18">0-18</SelectItem>
              <SelectItem value="19-35">19-35</SelectItem>
              <SelectItem value="36-50">36-50</SelectItem>
              <SelectItem value="51+">51+</SelectItem>
            </SelectContent>
          </Select>
          {errors.permanent_age_range && (
            <p className="text-red-600 text-sm">{errors.permanent_age_range.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="permanent_education_level">Education Level</Label>
          <Select
            onValueChange={(value) => handleSelectChange("permanent_education_level", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Education Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="higher">Higher Education</SelectItem>
            </SelectContent>
          </Select>
          {errors.permanent_education_level && (
            <p className="text-red-600 text-sm">{errors.permanent_education_level.message}</p>
          )}
        </div>

        {/* Ownership of Residence */}
        <div className="form-section-content">
          <Label htmlFor="permanent_ownership">Ownership of Residence</Label>
          <Select
            onValueChange={(value) => handleSelectChange("permanent_ownership", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Ownership" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owned">Owned</SelectItem>
              <SelectItem value="rented">Rented</SelectItem>
              <SelectItem value="family">Family Owned</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.permanent_ownership && (
            <p className="text-red-600 text-sm">{errors.permanent_ownership.message}</p>
          )}
        </div>
      </div>

      {/* Current Residence Address Section */}
      <h2 className="text-lg font-semibold">Current Address</h2>
      <div className="form-section-content-container pt-0 mt-6">
        <div className="form-section-content">
          <Label htmlFor="current_province">Province</Label>
          <Input
            id="current_province"
            {...register("current_province", { required: "Province is required" })}
          />
          {errors.current_province && (
            <p className="text-red-600 text-sm">{errors.current_province.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_district">District</Label>
          <Input
            id="current_district"
            {...register("current_district", { required: "District is required" })}
          />
          {errors.current_district && (
            <p className="text-red-600 text-sm">{errors.current_district.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_municipality">VDC / Municipality</Label>
          <Input
            id="current_municipality"
            {...register("current_municipality", { required: "VDC/Municipality is required" })}
          />
          {errors.current_municipality && (
            <p className="text-red-600 text-sm">{errors.current_municipality.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_ward_number">Ward No.</Label>
          <Input
            id="current_ward_number"
            {...register("current_ward_number", { required: "Ward No. is required" })}
          />
          {errors.current_ward_number && (
            <p className="text-red-600 text-sm">{errors.current_ward_number.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_number_of_dependents">Number of Dependents</Label>
          <Input
            id="current_number_of_dependents"
            type="number"
            {...register("current_number_of_dependents", { required: "Number of Dependents is required" })}
          />
          {errors.current_number_of_dependents && (
            <p className="text-red-600 text-sm">{errors.current_number_of_dependents.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_age_range">Age Range</Label>
          <Select
            onValueChange={(value) => handleSelectChange("current_age_range", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Age Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-18">0-18</SelectItem>
              <SelectItem value="19-35">19-35</SelectItem>
              <SelectItem value="36-50">36-50</SelectItem>
              <SelectItem value="51+">51+</SelectItem>
            </SelectContent>
          </Select>
          {errors.current_age_range && (
            <p className="text-red-600 text-sm">{errors.current_age_range.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="current_education_level">Education Level</Label>
          <Select
            onValueChange={(value) => handleSelectChange("current_education_level", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Education Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
              <SelectItem value="higher">Higher Education</SelectItem>
            </SelectContent>
          </Select>
          {errors.current_education_level && (
            <p className="text-red-600 text-sm">{errors.current_education_level.message}</p>
          )}
        </div>

        {/* Ownership of Residence */}
        <div className="form-section-content">
          <Label htmlFor="current_ownership">Ownership of Residence</Label>
          <Select
            onValueChange={(value) => handleSelectChange("current_ownership", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Ownership" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owned">Owned</SelectItem>
              <SelectItem value="rented">Rented</SelectItem>
              <SelectItem value="family">Family Owned</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.current_ownership && (
            <p className="text-red-600 text-sm">{errors.current_ownership.message}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {!stepper[3].state && (
        <div className="form-section-content-container-single">
          <Button
            type="submit"
            onClick={() => (isValid ? handleStepper(3) : null)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default MoreAbout;