import { Descriptions } from "antd";
import React from "react";
import "./SearchResult.scss";

const SearchResult = ({ email }) => {
  console.log("email", email);
  return (
    <>
      <div className="search_result_page">
        <div className="result_card">
          <Descriptions
            title="Student result has been published"
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item span={3} label="Result of">
              Cloud Database
            </Descriptions.Item>

            <Descriptions.Item label="Results are">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
