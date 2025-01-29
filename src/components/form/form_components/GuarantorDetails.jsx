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

const GuarantorDetails = ({
  register,
  errors,
  isValid,
  handleSelectChange,
  handleStepper,
  stepper
}) => {
  return (
    <div className="form-section">
      <div className="form-section-content-container pt-0">
        <div className="form-section-content">
          <Label htmlFor="guarantor_name">First Name</Label>
          <Input
            id="guarantor_name"
            {...register("guarantor_name", {
              required: "First Name is required",
            })}
          />
          {errors.guarantor_name && (
            <p className="text-red-600 text-sm">{errors.guarantor_name.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="guarantor_lastName">Last Name</Label>
          <Input
            id="guarantor_lastName"
            {...register("guarantor_lastName", {
              required: "Last Name is required",
            })}
          />
          {errors.guarantor_lastName && (
            <p className="text-red-600 text-sm">{errors.guarantor_lastName.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="guarantor_primary_phone">Primary Phone</Label>
          <Input
            id="guarantor_primary_phone"
            type="tel"
            {...register("guarantor_primary_phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.guarantor_primary_phone && (
            <p className="text-red-600 text-sm">{errors.guarantor_primary_phone.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="guarantor_email">Email</Label>
          <Input
            id="guarantor_email"
            type="email"
            {...register("guarantor_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.guarantor_email && (
            <p className="text-red-600 text-sm">{errors.guarantor_email.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="guarantor_secondary_phone">Secondary Phone</Label>
          <Input
            id="guarantor_secondary_phone"
            type="tel"
            {...register("guarantor_secondary_phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.guarantor_secondary_phone && (
            <p className="text-red-600 text-sm">{errors.guarantor_secondary_phone.message}</p>
          )}
        </div>

        <div className="form-section-content">
          <Label htmlFor="guarantor_relation">Relation to Applicant</Label>
          <Select
            onValueChange={(value) => handleSelectChange("guarantor_relation", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select relation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="sibling">Sibling</SelectItem>
              <SelectItem value="spouse">Spouse</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.guarantor_relation && (
            <p className="text-red-600 text-sm">{errors.guarantor_relation.message}</p>
          )}
        </div>
      </div>

      {/* Button to proceed to the next step */}
      {!stepper[2].state && (
        <div className="form-section-content-container-single">
          <Button
            type="submit"
            onClick={() => (isValid ? handleStepper(2) : null)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuarantorDetails;