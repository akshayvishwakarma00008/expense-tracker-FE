import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import * as yup from "yup"; //this is a external libraray for form valdation
import { loginUserAction } from "../../redux/slices/users/usersSlices";
import DisabledButton from "../../components/DisabledButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";

//yup form vcalidation
const formSchema = yup.object({
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
});
const Login = () => {
  //history
  const navigate = useNavigate();
  //dispacth
  const dispacth = useDispatch();

  //get data from store
  const user = useSelector(state => state?.users)
  const { userAppErr, userServerErr, userLoading, userAuth } = user
  //initializing formik to use
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispacth(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    if (userAuth) { navigate("/profile") }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth])

  return (
    <section
      style={{ height: "100vh" }}
      className="position-relative py-5  overflow-hidden bg-warning"
    >
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of what you are spending
              </h2>
              <hr className="text-warning w-100" />
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <span className="text-muted">Sign In</span>
              <h3 className="fw-bold mb-5">Login to your account</h3>
              {/* Display Err */}

              {userAppErr || userServerErr ? (
                <div class="alert alert-danger" role="alert">
                  {userServerErr}
                </div>
              ) : null}
              <form onSubmit={formik.handleSubmit}>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="form-control mb-2"
                  type="email"
                  placeholder="E-mail address"
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
                    Login
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

export default Login;
