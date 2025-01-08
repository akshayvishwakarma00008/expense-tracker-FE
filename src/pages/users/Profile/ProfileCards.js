import React from "react";
import expenses from "../../../img/expenses.svg";
import income_img from "../../../img/income_card_img.svg";
import { useNavigate } from "react-router-dom";
import navigate from "../../../utils/navigate";

const ProfileCards = ({
  numOfTransExp,
  avgExp,
  totalExp,
  minExp,
  maxExp,
  numOfTransInc,
  avgInc,
  totalInc,
  minInc,
  maxInc,
}) => {
  const history = useNavigate();
  return (
    <div className="container">
      <div className="row g-4">
        {/* Card - 1 */}
        <div className="col-12 col-md-6">
          <div className="card h-100" style={{ padding: "1rem" }}>
            <img
              className="card-img-top"
              src={expenses}
              alt="cardImage"
              style={{ height: "300px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Expense Summary</h5>
              <div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Total transaction</th>
                      <td>{numOfTransExp}</td>
                    </tr>
                    <tr>
                      <th scope="row">Minimum Spend</th>
                      <td>{minExp}</td>
                    </tr>
                    <tr>
                      <th scope="row">Maximum Spend</th>
                      <td>{maxExp}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Spend</th>
                      <td>{totalExp}</td>
                    </tr>
                    <tr>
                      <th scope="row">Average Spend</th>
                      <td>{avgExp}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => navigate(history, "user-profile-expenses", "")}
                className="btn w-100 btn-danger d-flex align-items-center justify-content-center"
              >
                <span>View Expenses History</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card - 2 */}
        <div className="col-12 col-md-6">
          <div className="card h-100" style={{ padding: "1rem" }}>
            <img
              className="card-img-top"
              src={income_img}
              alt="cardImage"
              style={{ height: "300px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Income Summary</h5>
              <div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Total transaction</th>
                      <td>{numOfTransInc}</td>
                    </tr>
                    <tr>
                      <th scope="row">Minimum Income</th>
                      <td>{minInc}</td>
                    </tr>
                    <tr>
                      <th scope="row">Maximum Income</th>
                      <td>{maxInc}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Income</th>
                      <td>{totalInc}</td>
                    </tr>
                    <tr>
                      <th scope="row">Average Income</th>
                      <td>{avgInc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => navigate(history, "user-profile-income", "")}
                className="btn w-100 btn-success d-flex align-items-center justify-content-center"
              >
                <span>View Income History</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
