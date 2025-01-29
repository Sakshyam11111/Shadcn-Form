import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Monthly = ({
  register,
  errors,
  isValid,
  handleStepper,
  stepper,
}) => {
  return (
    <div className="form-section">
      <h2 className="text-lg font-semibold">Income and Expenses</h2>
      <div className="form-section-content-container pt-0">
        
        {/* Salary Income */}
        <div className="form-section-content">
          <Label htmlFor="salary_income">Salary Income</Label>
          <Input
            id="salary_income"
            type="number"
            {...register("salary_income", { required: "Salary Income is required" })}
          />
          {errors.salary_income && (
            <p className="text-red-600 text-sm">{errors.salary_income.message}</p>
          )}
        </div>

        {/* Business Income */}
        <div className="form-section-content">
          <Label htmlFor="business_income">Business Income</Label>
          <Input
            id="business_income"
            type="number"
            {...register("business_income", { required: "Business Income is required" })}
          />
          {errors.business_income && (
            <p className="text-red-600 text-sm">{errors.business_income.message}</p>
          )}
        </div>

        {/* Retail Income */}
        <div className="form-section-content">
          <Label htmlFor="retail_income">Retail Income</Label>
          <Input
            id="retail_income"
            type="number"
            {...register("retail_income", { required: "Retail Income is required" })}
          />
          {errors.retail_income && (
            <p className="text-red-600 text-sm">{errors.retail_income.message}</p>
          )}
        </div>

        {/* Total Income */}
        <div className="form-section-content">
          <Label htmlFor="total_income">Total Income</Label>
          <Input
            id="total_income"
            type="number"
            {...register("total_income", { required: "Total Income is required" })}
          />
          {errors.total_income && (
            <p className="text-red-600 text-sm">{errors.total_income.message}</p>
          )}
        </div>

        {/* Household Expenses */}
        <div className="form-section-content">
          <Label htmlFor="household_expenses">Household Expenses</Label>
          <Input
            id="household_expenses"
            type="number"
            {...register("household_expenses", { required: "Household Expenses are required" })}
          />
          {errors.household_expenses && (
            <p className="text-red-600 text-sm">{errors.household_expenses.message}</p>
          )}
        </div>

        {/* Retail Expenses */}
        <div className="form-section-content">
          <Label htmlFor="retail_expenses">Retail Expenses</Label>
          <Input
            id="retail_expenses"
            type="number"
            {...register("retail_expenses", { required: "Retail Expenses are required" })}
          />
          {errors.retail_expenses && (
            <p className="text-red-600 text-sm">{errors.retail_expenses.message}</p>
          )}
        </div>

        {/* Other Bank EMI */}
        <div className="form-section-content">
          <Label htmlFor="other_bank_emi">Other Bank EMI</Label>
          <Input
            id="other_bank_emi"
            type="number"
            {...register("other_bank_emi", { required: "Other Bank EMI is required" })}
          />
          {errors.other_bank_emi && (
            <p className="text-red-600 text-sm">{errors.other_bank_emi.message}</p>
          )}
        </div>

        {/* Tax/Miscellaneous Expenses */}
        <div className="form-section-content">
          <Label htmlFor="tax_miscellaneous_expenses">Tax/Miscellaneous Expenses</Label>
          <Input
            id="tax_miscellaneous_expenses"
            type="number"
            {...register("tax_miscellaneous_expenses", { required: "Tax/Miscellaneous Expenses are required" })}
          />
          {errors.tax_miscellaneous_expenses && (
            <p className="text-red-600 text-sm">{errors.tax_miscellaneous_expenses.message}</p>
          )}
        </div>

        {/* Total Expenses */}
        <div className="form-section-content">
          <Label htmlFor="total_expenses">Total Expenses</Label>
          <Input
            id="total_expenses"
            type="number"
            {...register("total_expenses", { required: "Total Expenses are required" })}
          />
          {errors.total_expenses && (
            <p className="text-red-600 text-sm">{errors.total_expenses.message}</p>
          )}
        </div>

        {/* Disposable Income */}
        <div className="form-section-content">
          <Label htmlFor="disposable_income">Disposable Income</Label>
          <Input
            id="disposable_income"
            type="number"
            {...register("disposable_income", { required: "Disposable Income is required" })}
          />
          {errors.disposable_income && (
            <p className="text-red-600 text-sm">{errors.disposable_income.message}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {!stepper[4].state && (
        <div className="form-section-content-container-single">
          <Button
            type="submit"
            onClick={() => (isValid ? handleStepper(4) : null)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Monthly;