import { Button } from "antd";
import React from "react";
import "./AddResult.scss";
import { useNavigate } from "react-router-dom";

const AddResult = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="add_result_page">
        <div className="add_banner">
          <p>Student Result is not published yet</p>
        </div>

        <label htmlFor="student">
          Do you want to set result for : {"Demo"}
        </label>
        <div className="result_addition">
          <Button type="primary" onClick={() => navigate("/addsubsresult")}>
            Add Result
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddResult;
