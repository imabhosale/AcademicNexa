import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import axiosInstance1,{ BASE_URL_QUES} from '../../Components/API/Url2'; 


const AddQuestion = () => {
  const [formData, setFormData] = useState({
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    difficultyLevel: '',
    category: '',
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerChange = (e) => {
    setFormData({
      ...formData,
      rightAnswer: e.target.value,
    });
  };

  const handleDifficultyChange = (e) => {
    setFormData({
      ...formData,
      difficultyLevel: e.target.value,
    });
  };

  

  const submitForm = async () => {
    try {
      console.log('Form Data:', formData);  // Log formData
      const response = await axiosInstance1.post(`${BASE_URL_QUES}/question/add`, formData);
      console.log('Response from backend:', response.data);
      setSuccessMsg('Question is added successfully!');
    } catch (error) {
      console.error('Error adding question:', error);
      // You can handle errors here, e.g., display an error message to the user.
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ size: 6, offset: 3 }}>
          <div className="question-box">
            <Form>
              <h2 className="text-center mb-4">Add question</h2>

              <FormGroup>
                <Label for="questionTitle">Question Title:</Label>
                <Input
                  type="text"
                  id="questionTitle"
                  name="questionTitle"
                  value={formData.questionTitle}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              {[1, 2, 3, 4].map((option) => (
                <FormGroup key={option}>
                  <Label for={`option${option}`}>{`Option ${option}:`}</Label>
                  <Input
                    type="text"
                    id={`option${option}`}
                    name={`option${option}`}
                    value={formData[`option${option}`]}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              ))}

              <FormGroup tag="fieldset">
                <legend>Right Answer:</legend>
                {[1, 2, 3, 4].map((option) => (
                  <FormGroup key={option} check>
                    <Input
                      type="radio"
                      id={`rightAnswer${option}`}
                      name="rightAnswer"
                      value={option}
                      checked={formData.rightAnswer === `${option}`}
                      onChange={handleAnswerChange}
                    />
                    <Label for={`rightAnswer${option}`}>{`Option ${option}`}</Label>
                  </FormGroup>
                ))}
              </FormGroup>

              <FormGroup>
                <Label for="difficultyLevel">Difficulty Level:</Label>
                <Input
                  type="select"
                  id="difficultyLevel"
                  name="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleDifficultyChange}
                  required
                >
                  <option value="">Select Difficulty</option>
                  <option value="Hard">Hard</option>
                  <option value="Medium">Medium</option>
                  <option value="Easy">Easy</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="category">Category:</Label>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Button color="primary" onClick={submitForm}>
                Submit
              </Button>
            </Form>

            {successMsg && <p className="text-success mt-3">{successMsg}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddQuestion;
