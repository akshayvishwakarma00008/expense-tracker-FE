
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../components/LoadingComponent";
import ErrorDisplayMessage from "../../../components/ErrorDisplayMessage";
import { userProfileAction } from "../../../redux/slices/users/usersSlices";
import calTransaction from "../../../utils/accStatistics";
import ProfileDesign from "./ProfileDesign";
import ProfileCards from "./ProfileCards";
import LineGraph from "../../../components/UserDashboard/LineGraph";
import BarGraph from "../../../components/UserDashboard/BarGraph";
const Profile = () => {
  const [expResult, setExpResult] = useState([]);
  const [incResult, setIncResult] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //history
  const users = useSelector((state) => state?.users);
  const { profile, userLoading, userAppErr, userServerErr } = users;

  //income
  useEffect(() => {
    if (profile?.expenses) {
      const expenses = calTransaction(profile?.expenses);
      setExpResult(expenses);
    }
    if (profile?.income) {
      const income = calTransaction(profile?.income);
      setIncResult(income);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.income]);

  return (
    <>
      {userLoading ? (
        <LoadingComponent />
      ) : userAppErr || userServerErr ? (
        <>
          <ErrorDisplayMessage>{userServerErr}</ErrorDisplayMessage>
        </>
      ) : (
        <section className="py-1">
          <div className="m-1">
            <div className="position-relative rounded-2">
              <ProfileDesign profileData={profile} />
              <p className="mb-8"> </p>

              <ProfileCards
                numOfTransExp={profile?.expenses?.length}
                avgExp={expResult?.avg}
                totalExp={expResult?.sumTotal}
                minExp={expResult?.min}
                maxExp={expResult?.max}
                numOfTransInc={profile?.income?.length}
                avgInc={incResult?.avg}
                totalInc={incResult?.sumTotal}
                minInc={incResult?.min}
                maxInc={incResult?.max}
              />
              <LineGraph/>
              <BarGraph/>
              
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
