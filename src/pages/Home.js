import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/bg.svg";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;
  return (
    <>
      <div>
        {/* <nav className="px-0 py-3 navbar navbar-expand-lg navbar-light">
    <div className="max-w-screen-xl container-xl">
      
      <a className="navbar-brand" href="#">
        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" className="h-10" alt="..."/>
      </a>
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarCollapse">
        
        <ul className="navbar-nav mx-lg-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        
        <div className="navbar-nav ms-lg-4">
          <a className="nav-item nav-link" href="#">Sign in</a>
        </div>
        
        <div className="mt-3 d-flex align-items-lg-center mt-lg-0">
          <a href="#" className="w-full btn btn-sm btn-neutral w-lg-auto">
            Register
          </a>
        </div>
      </div>
    </div>
  </nav> */}
        <div className="py-md-32 position-relative">
          <div className="max-w-screen-xl container-lg" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 ms-auto d-none d-lg-block">
                <div className="mb-5 mb-lg-0 w-11/10 position-relative">

                  <div className="svg-fluid position-relative overlap-10">
                    {/* <svg id="ab47acfe-844d-4101-aa7b-df38aa50dbe4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="971.0518" height="628.38145" viewBox="0 0 971.0518 628.38145">
                      <path d="M847.93141,636.215h0a249.62642,249.62642,0,0,1-2.09461-54.11121l2.09461-29.88879h0c-11.54175,22.96552-8.93335,53.1922,0,83.99994Z" transform="translate(-114.4741 -135.80928)" fill="#cacaca" />
                      <path d="M856.93141,641.215h0a183.49726,183.49726,0,0,1-1.00781-32.209l1.00781-17.791h0C851.37831,604.885,852.63331,622.877,856.93141,641.215Z" transform="translate(-114.4741 -135.80928)" fill="#cacaca" />
                      <path d="M896.93606,663.21738v10a3.01557,3.01557,0,0,1-3,3h-5a.99647.99647,0,0,0-1,1v82a3.01557,3.01557,0,0,1-3,3h-61a3.0023,3.0023,0,0,1-3-3v-82a1.003,1.003,0,0,0-1-1h-6a3.0023,3.0023,0,0,1-3-3v-10a2.99585,2.99585,0,0,1,3-3h80A3.009,3.009,0,0,1,896.93606,663.21738Z" transform="translate(-114.4741 -135.80928)" fill="#f2f2f2" />
                      <rect x="706.5518" y="542.50808" width="67" height="3" fill="#e6e6e6" />
                      <path d="M887.93606,722.46217c-22.41974,9.27794-45.084,9.38019-68,0V701.327a106.78989,106.78989,0,0,1,68,0Z" transform="translate(-114.4741 -135.80928)" fill="#e6e6e6" />
                      <circle cx="451.48125" cy="213.98538" r="36.39575" fill="#2f2e41" />
                      <path d="M576.09529,314.40075a36.40078,36.40078,0,0,1,32.03936,53.66882,36.38707,36.38707,0,1,0-60.4544-39.98248A36.306,36.306,0,0,1,576.09529,314.40075Z" transform="translate(-114.4741 -135.80928)" fill="#2f2e41" />
                      <circle cx="383.4705" cy="106.99576" r="106.91249" fill="#2f2e41" />
                      <path d="M414.03572,176.47092A106.89327,106.89327,0,0,1,562.20289,165.261c-.87427-.83106-1.73926-1.66886-2.6477-2.47643a106.91251,106.91251,0,0,0-142.0661,159.80724c.90844.80758,1.84179,1.56848,2.76953,2.33935A106.89336,106.89336,0,0,1,414.03572,176.47092Z" transform="translate(-114.4741 -135.80928)" fill="#2f2e41" />
                      <circle cx="382.5645" cy="144.14332" r="68.85889" fill="#ffb8b8" />
                      <path d="M532.21437,367.50466l-73.68847,3.31269s6.15038,38.10812-33.71528,41.73229-76.10721-7.24829-90.60382,19.93283-8.24829,123.96607-8.24829,123.96607,27.18115,97.85211,48.92605,112.34875,212.01291-5.43622,212.01291-5.43622L666.5259,562.81735l-2.697-77.53951c-1.40839-40.49105-38.37693-70.89154-78.1935-63.39829q-1.17287.22073-2.36205.47539s-8.74743-6.53759-32.74743-18.53759C535.8492,396.479,532.21437,367.50466,532.21437,367.50466Z" transform="translate(-114.4741 -135.80928)" fill="#cacaca" />
                      <path d="M372.26039,410.73757s17.5138,31.77787,10.26551,77.07978,23.164,141.11428,23.164,141.11428l21.74494-5.43622s-14.49662-94.228-10.87244-115.9729,4.62414-85.91251-13.49661-96.78494S372.26039,410.73757,372.26039,410.73757Z" transform="translate(-114.4741 -135.80928)" fill="#2f2e41" />
                      <path d="M581.99873,427.39977l7.61682,200.62579,14.49658,9.06037s20.83887-220.16727,9.96643-220.16727H591.95607a9.97041,9.97041,0,0,0-9.9704,9.97043Q581.98567,427.14457,581.99873,427.39977Z" transform="translate(-114.4741 -135.80928)" fill="#2f2e41" />
                      <circle cx="301.18217" cy="479.53178" r="9.06039" fill="#6c63ff" />
                      <circle cx="482.38982" cy="488.59217" r="9.06038" fill="#6c63ff" />
                      <polygon points="323.672 58.069 323.672 126.928 339.619 126.928 359.914 105.183 357.196 126.928 427.685 126.928 423.336 105.183 432.034 126.928 443.269 126.928 443.269 58.069 323.672 58.069" fill="#2f2e41" />
                      <ellipse cx="312.79955" cy="129.6467" rx="5.43622" ry="9.96642" fill="#ffb8b8" />
                      <ellipse cx="452.32945" cy="129.6467" rx="5.43622" ry="9.96642" fill="#ffb8b8" />
                      <path d="M717.62587,744.25542v6.07a13.34036,13.34036,0,0,1-.91,4.87,13.68347,13.68347,0,0,1-.97,2,13.4372,13.4372,0,0,1-11.55,6.56h-446.55a13.43737,13.43737,0,0,1-11.55-6.56,13.68965,13.68965,0,0,1-.97-2,13.34125,13.34125,0,0,1-.91-4.87v-6.07a13.42638,13.42638,0,0,1,13.42282-13.43h25.74717v-2.83a.55906.55906,0,0,1,.55816-.56h13.43183a.5591.5591,0,0,1,.56.55817v2.83185h8.39v-2.83a.55906.55906,0,0,1,.55816-.56h13.43183a.5591.5591,0,0,1,.56.55817v2.83185h8.4v-2.83a.55906.55906,0,0,1,.55817-.56h13.43182a.5591.5591,0,0,1,.56.55817v2.83185h8.39v-2.83a.55906.55906,0,0,1,.55817-.56h13.43182a.5591.5591,0,0,1,.56.55817v2.83185h8.39v-2.83a.55907.55907,0,0,1,.55817-.56h13.43182a.5591.5591,0,0,1,.56.55817v2.83185h8.4v-2.83a.55906.55906,0,0,1,.55816-.56h13.43183a.5591.5591,0,0,1,.56.55817v2.83185h8.39v-2.83a.55908.55908,0,0,1,.55817-.56H526.80586a.55908.55908,0,0,1,.56.55817v2.83185h8.4v-2.83a.55908.55908,0,0,1,.55817-.56h13.43182a.5655.5655,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.55817-.56h13.43182a.55908.55908,0,0,1,.56.55817v2.83185h8.39v-2.83a.55908.55908,0,0,1,.55816-.56h13.43183a.55908.55908,0,0,1,.56.55817v2.83185h8.4v-2.83a.55908.55908,0,0,1,.55816-.56h13.43183a.557.557,0,0,1,.55.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.55817-.56h13.43182a.55908.55908,0,0,1,.56.55817v2.83185h8.39v-2.83a.55908.55908,0,0,1,.55817-.56h13.43182a.55908.55908,0,0,1,.56.55817v2.83185h39.17a13.42639,13.42639,0,0,1,13.43,13.42273Z" transform="translate(-114.4741 -135.80928)" fill="#3f3d56" />
                      <rect y="626.38145" width="971.0518" height="2" fill="#3f3d56" />
                      <path d="M681.66835,488.62124H272.6248a11.2586,11.2586,0,0,0-11.25861,11.2586V727.79131A11.25867,11.25867,0,0,0,272.62477,739.05H681.66835a11.25866,11.25866,0,0,0,11.2586-11.25867V499.87984a11.2586,11.2586,0,0,0-11.2586-11.2586Z" transform="translate(-114.4741 -135.80928)" fill="#3f3d56" />
                      <circle cx="362.99998" cy="432.38142" r="25" fill="#6c63ff" />
                      <polygon points="517.763 267.219 643.969 140.016 703.552 140.016 703.552 138.016 643.134 138.016 642.841 138.313 516.341 265.813 517.763 267.219" fill="#3f3d56" />
                      <rect x="776.32793" y="87.79227" width="146.22388" height="13.02985" fill="#6c63ff" />
                      <path d="M872.981,244.87035H842.02589V213.91478H872.981Zm-28.95508-2H870.981V215.91478H844.02589Z" transform="translate(-114.4741 -135.80928)" fill="#3f3d56" />
                      <rect x="776.32793" y="131.2251" width="146.22388" height="13.02985" fill="#6c63ff" />
                      <path d="M872.981,288.303H842.02589V257.34789H872.981Zm-28.95508-2H870.981V259.34789H844.02589Z" transform="translate(-114.4741 -135.80928)" fill="#3f3d56" />
                      <rect x="776.32793" y="174.65794" width="146.22388" height="13.02985" fill="#6c63ff" />
                      <path d="M872.981,331.73558H842.02589V300.78051H872.981Zm-28.95508-2H870.981V302.78051H844.02589Z" transform="translate(-114.4741 -135.80928)" fill="#3f3d56" />
                    </svg> */}
                    <img
                      style={{ objectFit: "cover" }}
                      src={bg}
                      alt=""
                    />
                  </div>

                  <div className="bottom-0 w-64 h-64 p-5 transform position-absolute start-72 mt-n4 translate-y-n1/2 translate-x-n1/2 gradient-bottom-right start-purple-400 end-cyan-500 filter blur-100 rounded-4"> </div>
                </div>
              </div>
              <div className="col-lg-6 order-md-0">

                <h5 className="mb-5 h5 text-uppercase text-warning">
                  Expense Tracker App
                </h5>

                <h1 className="mb-5 ls-tight font-bolder display-3">
                  Keep Track of Your Income & Expenses.
                </h1>

                <p className="mb-10 lead">
                  View all your income and expenses flow from your team in one
                  dashboard.
                </p>

                {!userAuth ? <div className="mx-n2">
                  <Link to="/login" className="mx-2 shadow-sm btn btn-lg btn-success px-lg-8">
                    Sign In
                  </Link>
                  <Link to="/register" className="mx-2 shadow-sm btn btn-lg btn-primary px-lg-8">
                    Sign Up
                  </Link>
                </div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
