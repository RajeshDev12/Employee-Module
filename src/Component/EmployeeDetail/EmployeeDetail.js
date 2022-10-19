import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const location = useLocation();
  const [employeeDetail, setEmployeeDetail] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://retoolapi.dev/H2F0Ui/getemployedetail?id=${location.state.id}`
      )
      .then((res) => {
        setEmployeeDetail(res.data);
      });
  }, [location.state.id]);

  return (
    <>
      <div className="detail-container">
        {employeeDetail.map((detail, index) => (
          <div className="detail-displayer" key={index}>
            <div className="content">
              <img
                className="companyLogo"
                src={detail.company_logo}
                alt="Company_logo"
              />
              <div className="main-content">
                <h2>{detail.name}</h2>
                <p>{detail.rating}</p>
                <p>{detail.interests}</p>
                <p>{detail.designation}</p>
                <p>{detail.job_descripton}</p>
                <a href={detail.view_more} target="_blank" rel="noreferrer noopener">
                  <button className="viewButton">View more</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmployeeDetail;
