import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import moneySVG from "../../img/money.svg";
import { useNavigate } from "react-router-dom";
import DisabledButton from "../../components/DisabledButton";
// import redirectUser from "../../utils/redirect";
import navigate from "../../utils/navigate";
import { addNewExpAction } from "../../redux/slices/expenses/expenseAction";

//Form validation
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});

const AddExpense = () => {
  //dispatch action
  const dispatch = useDispatch();
  const history = useNavigate();
  //income

  //expense
  const expenses = useSelector((state) => state?.expenses);
  const { expLoading, expAppErr, expServerErr, isExpCreated } = expenses;
  //initialize form
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      amount: "",
      category: "",
    },
    onSubmit: (values) => {
      dispatch(addNewExpAction(values));
    },
    validationSchema: formSchema,
  });

  //Redirect

  useEffect(() => {
    if (isExpCreated) {
      navigate(history, "user-profile-expenses", undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpCreated]);
  return (
    <>
      <section className="py-5 bg-danger vh-100">
        <div className="container text-center">
          <span className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src={moneySVG}
              alt="SVGeXPENSES"
              width="200"
            />
          </span>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form onSubmit={formik.handleSubmit}>
                  <span className="text-muted">Expense</span>
                  <h2 className="mb-4 fw-light">Record New Expense</h2>
                  {/* Display income Err */}
                  {expServerErr || expAppErr ? (
                    <div className="alert alert-danger" role="alert">
                      {expServerErr} {expAppErr}
                    </div>
                  ) : null}
                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.title}
                      onBlur={formik.handleBlur("title")}
                      onChange={formik.handleChange("title")}
                      className="form-control"
                      type="text"
                      placeholder="Enter Title"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.title && formik.errors.title}
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.description}
                      onBlur={formik.handleBlur("description")}
                      onChange={formik.handleChange("description")}
                      className="form-control"
                      type="text"
                      placeholder="Enter Description"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.description && formik.errors.description}
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.amount}
                      onBlur={formik.handleBlur("amount")}
                      onChange={formik.handleChange("amount")}
                      className="form-control"
                      type="number"
                      placeholder="Enter Amount"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.amount && formik.errors.amount}
                  </div>

                  <div className="mb-3 input-group">
                    <select
                      name="category"
                      id="category"
                      className="form-control"
                      value={formik.values.category}
                      onBlur={formik.handleBlur("category")}
                      onChange={formik.handleChange("category")}
                    >
                      <option value="groceries">Groceries</option>
                      <option value="entatainment">Entatainment</option>
                      <option value="shopping">Shopping</option>
                      <option value="travel">Travel</option>
                      <option value="bill">Bill</option>
                      <option value="food & drinks">Food & Drinks</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {expLoading ? (
                    <DisabledButton />
                  ) : (
                    <button type="submit" className="btn btn-danger mb-4 w-100">
                      Record Expense
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddExpense;
