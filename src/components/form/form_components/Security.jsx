import React from "react";
import { Label } from "@/components/ui/label";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Security = ({
    register,
    errors,
    isValid,
    handleStepper,
    stepper
}) => {
    return (
        <div className="form-section">
            <div className="form-section-content-container-single pt-0">
                <h2 className="text-lg font-semibold">List of Securities</h2>

                <div className="form-section-content">
                    <h3 className="text-lg font-semibold mt-4">Property Details</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Field</TableHead>
                                <TableHead>Input</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell><Label>Property</Label></TableCell>
                                <TableCell>
                                    <select {...register("property")}>
                                        <option value="">Select Property</option>
                                        {/* Add property options here */}
                                    </select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Name of Owner</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("name_of_owner")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Area (Sq.mt)</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("data_rqrw")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Location</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("location_of_property")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>VDC/Municipality</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("vdcmunicipality")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Ward No</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("ward_no")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Land Revenue Office</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("land_revenue_office")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>District</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("district")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Place (Street Name)</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("placestreet_name")} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div className="form-section-content">
                    <h3 className="text-lg font-semibold mt-4">Description of the Land</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Field</TableHead>
                                <TableHead>Input</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell><Label>Shape of Land</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("shape_of_land")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Road Width</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("road_width")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Any road setbacks?</Label></TableCell>
                                <TableCell>
                                    <select {...register("any_road_setbacks")}>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Any High Tension setbacks?</Label></TableCell>
                                <TableCell>
                                    <select {...register("any_hightension_setbacks")}>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Motorable Road Access</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("motorable_road_access")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Road Access From</Label></TableCell>
                                <TableCell>
                                    <input type="text" {...register("road_access_from")} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Label>Any river/canal setbacks?</Label></TableCell>
                                <TableCell>
                                    <select {...register("any_rivercanal_setbacks")}>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <h2 className="text-lg font-semibold mt-6">Valuer Assignment</h2>
                <div className="mt-4">
                    <Label>Email of a Valuer</Label>
                    <input type="email" {...register("email_of_a_valuer")} />
                </div>
            </div>

            {!stepper[5].state && (
                <div className="form-section-content-container-single mt-6">
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

Security.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isValid: PropTypes.bool.isRequired,
    handleStepper: PropTypes.func.isRequired,
    stepper: PropTypes.array.isRequired,
};

export default Security;