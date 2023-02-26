import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { SearchEmail } from "../../API/api";
import "./SearchWithEmail.scss";
import SearchResult from "../SearchResult/SearchResult";
import AddResult from "../AddResullt/AddResult";

const SearchWithEmail = () => {
  const [std_email, setEmail] = useState("");
  //   const [data, setData] = useState([]);
  console.log(std_email);
  //   Handle email on change
  const handleEmail = (e) => {
    setEmail(e);
    sessionStorage.setItem("email", JSON.stringify(e));
  };

  //   Form to hit the btn and send to url
  const onFinish = async (value) => {
    try {
      const display = await SearchEmail(std_email);
      console.log(display);
      // setData()
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="std_result_page">
        <div className="container">
          <div className="search">
            <label className="label_text" htmlFor="Search">
              Enter Your Email to Find Student *
            </label>
            <div>
              <Form
                className="input_btn"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  style={{ width: "100%" }}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your student email!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    onChange={(e) => handleEmail(e.target.value)}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="result_compo">
            {/* Demo logic */}
            {std_email ? <SearchResult std_email={std_email} /> : <AddResult/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchWithEmail;
