import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import * as yup from "yup"; //this is a external libraray for form valdation
import { registerUserAction } from "../../redux/slices/users/usersSlices";
import DisabledButton from "../../components/DisabledButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";


const formSchema = yup.object({
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
  firstname: yup.string().required("firstname is required"),
  lastname: yup.string().required("lastname is required"),
})



const Register = () => {
  //history
  const navigate = useNavigate();
  //dispatch
  const dispatch = useDispatch()

  //get data from store
  const user = useSelector(state => state?.users)
  const { userAppErr, userServerErr, userLoading, userAuth } = user

  //formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(registerUserAction(values));
    },
    validationSchema: formSchema,
  });


  useEffect(() => {
    if (userAuth) { navigate("/") }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth])
  return (
    <section className="position-relative py-5 overflow-hidden vh-100">
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of your income and expenses flow
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <form onSubmit={formik.handleSubmit}>
                <span className="text-muted">New User</span>
                <h3 className="fw-bold mb-5">Register</h3>

                {/* Display err here */}
                {userAppErr || userServerErr ? (
                  <div class="alert alert-danger" role="alert">
                    {userServerErr}
                  </div>
                ) : null}
                <input
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  className="form-control mb-2"
                  type="text"
                  placeholder="First Name"
                />
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <input
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  className="form-control mb-2"
                  type="text"
                  placeholder="Last Name"
                />
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email"
                />
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                />
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  {userLoading ? <DisabledButton /> : <button
                    type="submit"
                    className="btn btn-primary py-2 w-100 mb-4"
                  >
                    Register
                  </button>}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;