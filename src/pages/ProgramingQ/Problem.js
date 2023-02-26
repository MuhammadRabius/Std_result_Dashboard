import { Button, Form, Input, Tag } from "antd";
import React, { useState } from "react";
import "./Problem.scss";

const Problem = () => {
  const [gpa, setGpa] = useState(0);
  const subjectLength = 5;

  //      Form data to achive subjects data
  const onFinish = (values) => {
    console.log(values);
    const { Bangla, English, Math, Economy, Science } = values;

    //    Get GPA for each subject
    const gpaForB = getGPA(parseInt(Bangla));
    const gpaForEn = getGPA(parseInt(English));
    const gpaForM = getGPA(parseInt(Math));
    const gpaForEc = getGPA(parseInt(Economy));
    const gpaForSc = getGPA(parseInt(Science));
    // Condition
    if (
      gpaForB === 0 ||
      gpaForEn === 0 ||
      gpaForM === 0 ||
      gpaForEc === 0 ||
      gpaForSc === 0
    ) {
      return setGpa(0);
    }
    const TotalMark = gpaForB + gpaForEn + gpaForM + gpaForEc + gpaForSc;
    const GPA = parseFloat(TotalMark / subjectLength);
    setGpa(GPA);
  };

  return (
    <>
      <div className="prb_two_page">
        <div className="container">
          {gpa === 0 ? (
            <h1>
              Problem 2 ||The student grade is <Tag color="error">{"FAIL"}</Tag>{" "}
              CGPA {`${gpa}`}
            </h1>
          ) : (
            <h1>
              Problem 2 ||The student grade is{" "}
              <Tag color="success">{"PASS"}</Tag> CGPA {`${gpa}`}
            </h1>
          )}

          <hr />
          <div className="std_result_calculation">
            <label htmlFor="result">Enter Number Calculate Result (CGPA)</label>
            <div className="subject_number_form">
              <Form
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Bangla"
                  name="Bangla"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Bangla Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  label="English"
                  name="English"
                  rules={[
                    {
                      required: true,
                      message: "Please input your English  Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  label="Math"
                  name="Math"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Math Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  label="Science"
                  name="Science"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Science Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  label="Economy"
                  name="Economy"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Economy Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Calculate
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;

const getGPA = (number) => {
  if (number >= 80 && number <= 100) {
    return 5;
  } else if (number >= 70 && number <= 79) {
    return 4;
  } else if (number >= 60 && number <= 69) {
    return 3;
  } else if (number >= 50 && number <= 59) {
    return 2;
  } else if (number >= 40 && number <= 49) {
    return 1;
  } else if (number >= 0 && number <= 39) {
    return 0;
  }

  //   switch (number) {
  //     case (number) => 80:
  //       return 5;

  //     case (number) => 70:
  //       return 4;

  //     case (number) => 60:
  //       return 3;

  //     case (number) => 50:
  //       return 2;

  //     case (number) => 40:
  //       return 1;

  //     default:
  //       return 0;
  //   }
};
