import React, { useState, useEffect } from 'react';
import { Table, Input } from 'reactstrap';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Assuming you want to fetch from the 'questions' endpoint
      const response = await axiosInstance1.get(`${BASE_URL_QUES}/question/allQuestions`);
      const data = response.data;
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleDifficultyChange = (questionId, newDifficultyLevel) => {
    // Ensure that the new difficulty level is not null or empty
    if (newDifficultyLevel) {
      // Update the difficulty level for the specific question
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === questionId ? { ...question, difficultylevel: newDifficultyLevel } : question
        )
      );
    } else {
      console.error('Invalid difficulty level selected.');
      // You may want to handle this case differently, e.g., show an error message to the user
    }
  };

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <h2 className="text-center mb-4">All Questions</h2>
      <Table striped>
        <thead>
          <tr>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>ID</th>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>Question Title</th>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>Options</th>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>Right Answer</th>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>Difficulty Level</th>
            <th style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.questionTitle}</td>
              <td>
                {question.option1}, {question.option2}, {question.option3}, {question.option4}
              </td>
              <td>{question.rightAnswer}</td>
              <td>
                <Input
                  type="select"
                  value={question.difficultylevel || ''}
                  onChange={(e) => handleDifficultyChange(question.id, e.target.value)}
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Input>
              </td>
              <td>{question.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default QuestionList;
