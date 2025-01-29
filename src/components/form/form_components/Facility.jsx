import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Facility = ({
  register,
  errors,
  isValid,
  handleStepper,
  stepper,
}) => {
  return (
    <div className="form-section">
      <h2 className="text-lg font-semibold">Facility Details</h2>
      <div className="form-section-content-container pt-0">

        {/* Facility Type */}
        <div className="form-section-content">
          <Label htmlFor="facility_type">Facility Type</Label>
          <Input
            id="facility_type"
            {...register("facility_type", { required: "Facility Type is required" })}
          />
          {errors.facility_type && (
            <p className="text-red-600 text-sm">{errors.facility_type.message}</p>
          )}
        </div>

        {/* Tenure (In Months) */}
        <div className="form-section-content">
          <Label htmlFor="tenure">Tenure (In Months)</Label>
          <Input
            id="tenure"
            type="number"
            {...register("tenure", { required: "Tenure is required" })}
          />
          {errors.tenure && (
            <p className="text-red-600 text-sm">{errors.tenure.message}</p>
          )}
        </div>

        {/* Proposal Limit */}
        <div className="form-section-content">
          <Label htmlFor="proposal_limit">Proposal Limit</Label>
          <Input
            id="proposal_limit"
            type="number"
            {...register("proposal_limit", { required: "Proposal Limit is required" })}
          />
          {errors.proposal_limit && (
            <p className="text-red-600 text-sm">{errors.proposal_limit.message}</p>
          )}
        </div>

        {/* Base Rate */}
        <div className="form-section-content">
          <Label htmlFor="base_rate">Base Rate</Label>
          <Input
            id="base_rate"
            type="number"
            {...register("base_rate", { required: "Base Rate is required" })}
          />
          {errors.base_rate && (
            <p className="text-red-600 text-sm">{errors.base_rate.message}</p>
          )}
        </div>

        {/* IR Premium Proposed */}
        <div className="form-section-content">
          <Label htmlFor="ir_premium">IR Premium Proposed</Label>
          <Input
            id="ir_premium"
            type="number"
            {...register("ir_premium", { required: "IR Premium Proposed is required" })}
          />
          {errors.ir_premium && (
            <p className="text-red-600 text-sm">{errors.ir_premium.message}</p>
          )}
        </div>

        {/* Service Fees */}
        <div className="form-section-content">
          <Label htmlFor="service_fees">Service Fees</Label>
          <Input
            id="service_fees"
            type="number"
            {...register("service_fees", { required: "Service Fees are required" })}
          />
          {errors.service_fees && (
            <p className="text-red-600 text-sm">{errors.service_fees.message}</p>
          )}
        </div>

        {/* Purpose */}
        <div className="form-section-content">
          <Label htmlFor="purpose">Purpose</Label>
          <Input
            id="purpose"
            as="textarea"
            {...register("purpose", { required: "Purpose is required" })}
          />
          {errors.purpose && (
            <p className="text-red-600 text-sm">{errors.purpose.message}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {!stepper[4].state && (
        <div className="form-section-content-container-single">
          <Button
            type="submit"
            onClick={() => (isValid ? handleStepper(5) : null)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Facility;