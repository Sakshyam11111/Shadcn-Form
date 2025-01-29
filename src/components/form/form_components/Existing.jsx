import React from "react";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button"; 

const Existing = ({
  register,
  errors,
  isValid,
  stepper,
  handleStepper,
}) => {
  return (
    <div className="form-section">
      <h2 className="text-xl font-semibold mb-4">Please tell us about yourself</h2>

      <div className="form-section-content mb-4">
        <Label>Are you an existing Standard Chartered Bank Customer?</Label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Input
              type="radio"
              id="existingCustomerYes"
              value="yes"
              {...register("existingCustomer", { required: "Please select an option" })}
            />
            <Label htmlFor="existingCustomerYes">
              Yes
            </Label>
          </div>
          <div className="flex items-center">
            <Input
              type="radio"
              id="existingCustomerNo"
              value="no"
              {...register("existingCustomer", { required: "Please select an option" })}
            />
            <Label htmlFor="existingCustomerNo" className="ml-2">
              No
            </Label>
          </div>
        </div>
        {errors.existingCustomer && (
          <p className="text-red-600 text-sm">{errors.existingCustomer.message}</p>
        )}
      </div>

      <div className="form-section-content">
        <Label htmlFor="existingAccountNumber">Account Number</Label>
        <Input
          id="existingAccountNumber"
          {...register("existingAccountNumber", { required: "Account Number is required" })}
        />
        {errors.existingAccountNumber && (
          <p className="text-red-600 text-sm">{errors.existingAccountNumber.message}</p>
        )}
      </div>

      {/* Next Button */}
      {!stepper[0].state && (
        <div className="form-section-content-container-single">
          <Button
            type="button" 
            onClick={() => (isValid ? handleStepper(0) : null)} 
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Existing;