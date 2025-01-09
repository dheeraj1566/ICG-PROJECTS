import React from "react";

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <div>
            <h2 className="question-text">{question.question}</h2>
            <form onSubmit={onSubmit}>
                <div className="options-container">
                    {question.options.map((option, index) => (
                        <label
                            key={index}
                            className={`option ${
                                selectedOption === option ? "selected" : ""
                            }`}
                        >
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={onOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Question;
