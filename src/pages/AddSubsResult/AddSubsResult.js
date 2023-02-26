import React from "react";
import { Button, Form, Input, message } from "antd";
import "./AddSubsResult.scss";

const AddSubsResult = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="subs_result_page">
        <div className="container">
          <div className="banner">
            <h3>Add result For : {`Demo`}</h3>
          </div>

          <div className="subject_label">
            <label htmlFor="Bangla">Demo</label>
            <Input type="number"></Input>
            <Button type="primary">Save Result</Button>
          </div>
          <div className="subject_label">
            <label htmlFor="English">Demo</label>
            <Input type="number"></Input>
            <Button type="primary">Save Result</Button>
          </div>
          <div className="subject_label">
            <label htmlFor="Math">Demo</label>
            <Input type="number"></Input>
            <Button type="primary">Save Result</Button>
          </div>

          <div className="subject_label">
            <label htmlFor="Science">Demo</label>
            <Input type="number"></Input>
            <Button type="primary">Save Result</Button>
          </div>

          <div className="subject_label">
            <label htmlFor="Economy">Demo</label>
            <Input type="number"></Input>
            <Button type="primary">Save Result</Button>
          </div>

          {/* <Form
            className="input_btn"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your student email!",
                },
              ]}
            >
              <Input type="number" />
              <Button>Save Result</Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form> */}
        </div>
      </div>
    </>
  );
};

export default AddSubsResult;
