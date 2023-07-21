import React, { useState } from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';
import data from '../data.json';

function App() {

  const [formResponses, setFormResponses] = useState({});

  const handleChange = (questionId, value) => {
    setFormResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  return (
    <>
      <div>
        <header>
          <h1>Começamos por aqui</h1>
        </header>
      </div>

      {data.tabs.map((tab) => (
        <div key={tab.id}>
          <h2>{tab.title}</h2>
          <div>
            {tab.questions.map((question) => (
              <div key={question.questionId}>
                <h3>{question.title}</h3>
                {question.items.map((item) => (
                  <div key={item.textId}>
                    {question.type === 'radio' ? (
                      <Radio
                        label={item.text}
                        id={item.textId}
                        name={question.questionId}
                        handleChange={() => handleChange(question.id, item.id)} 
                        formResponses={formResponses}
                      />
                    ) : (
                        <Checkbox
                          name={question.questionId}
                          label={item.text}
                          id={item.textId}
                          handleChange={() => handleChange(question.id, item.id)} 
                          formResponses={formResponses}

                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
