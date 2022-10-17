import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [post, setPost] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://retoolapi.dev/GFHqAV/getemployees`).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  return (
    <div>
      <table className="tableDetails">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
            <th>Company Logo</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post, index) => {
            if (post.name) {
              return (
                <tr
                  onClick={() =>
                    Navigate("/EmployeeDetail", { state: { id: post.id } })
                  }
                  key={index}
                  style={{ height: "100px" }}
                >
                  <td>{post.name}</td>
                  <td>{post.designation}</td>
                  <td>{post.company}</td>
                  <td>
                    <img
                      className="logo"
                      src={post.company_logo}
                      alt="company logo"
                      style={{ height: "70px", width: "80px" }}
                    />
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
