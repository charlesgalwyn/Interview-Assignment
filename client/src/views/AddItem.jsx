import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { apiCall } from "../common/helper";

const AddItem = () => {
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState(["India", "Africa", "Europe"]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      destination: "",
      totalTravellers: "",
      budgetPerPerson: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("This field is required.").label("Name"),
      email: yup.string().email("This field should be a valid email").required("This field is required.").label("Email"),
      destination: yup.string().required("This field is required.").label("Destination"),
      totalTravellers: yup.number().min(1, "There should be atleast 1 traveller.").integer().required("This field is required.").label("Total Travellers"),
      budgetPerPerson: yup.number().min(10, "Budget per person must be more than $10.").required("This field is required.").label("Budget per Person"),
    }),
    onSubmit: async (values) => {
      addItem(values);
    },
  });

  const addItem = async (data) => {
    setLoading(true);

    let response = await apiCall("POST", "addRecord", data, {}, {});

    if (response && response.success) {
      alert("Record has been added!");
      formik.resetForm({
        name: "",
        email: "",
        destination: "",
        totalTravellers: "",
        budgetPerPerson: "",
      });
    } else {
      alert(response.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h3 className="title"> Page-1 (Add User) </h3>

      <hr />

      <div className="col">
        <div className="form-group col">
          <label>Name</label>
          <input name="name" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter your name" />
          {formik.touched.name && formik.errors.name ? <span className="text-error">{formik.errors.name}</span> : null}
        </div>

        <div className="form-group col">
          <label>Email </label>
          <input name="email" type="email" className="form-control" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email" />
          {formik.touched.email && formik.errors.email ? <span className="text-error">{formik.errors.email}</span> : null}
        </div>
      </div>

      <div className="col">
        <div className="form-group col">
          <label>Where would you like to go?</label>
          <select name="destination" className="form-control" onChange={formik.handleChange} value={formik.values.destination}>
            <option value="">Select destination</option>

            {countries && countries.length && countries.map((item, index) => <option value={item} key={index}>{item}</option>)}
          </select>
          {formik.touched.destination && formik.errors.destination ? <span className="text-error">{formik.errors.destination}</span> : null}
        </div>

        <div className="form-group col-6">
          <label> Total Travellers </label>
          <input name="totalTravellers" type="number" className="form-control" placeholder="Enter total travellers" onChange={formik.handleChange} value={formik.values.totalTravellers} min={1} />
          {formik.touched.totalTravellers && formik.errors.totalTravellers ? <span className="text-error">{formik.errors.totalTravellers}</span> : null}
        </div>
      </div>
      <div className="col">
        <div className="form-group col-6">
          <label> Budget per Person (in $) </label>
          <input name="budgetPerPerson" type="number" className="form-control" placeholder="Enter budget per person" onChange={formik.handleChange} value={formik.values.budgetPerPerson} min={10} />
          {formik.touched.budgetPerPerson && formik.errors.budgetPerPerson ? <span className="text-error">{formik.errors.budgetPerPerson}</span> : null}
        </div>
      </div>
      <button type="submit" className="btn btn-warning col-3" onClick={formik.handleSubmit} disabled={loading}>
        {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </div>
  );
};

export default AddItem;
