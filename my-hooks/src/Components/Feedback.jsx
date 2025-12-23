import React, { useState, useEffect } from 'react';

function FeedbackWidget() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    console.log('Feedback statistics updated:', feedback);
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total > 0 ? (feedback.good / total) * 100 : 0;

  return (
    <div>
      <h1>Віджет відгуків для кафе Expresso</h1>
      <button onClick={() => handleFeedback('good')}>Добре</button>
      <button onClick={() => handleFeedback('neutral')}>Нейтрально</button>
      <button onClick={() => handleFeedback('bad')}>Погано</button>
      <h2>Статистика:</h2>
      <p>Добре: {feedback.good}</p>
      <p>Нейтрально: {feedback.neutral}</p>
      <p>Погано: {feedback.bad}</p>
      <p>Загальна кількість відгуків: {total}</p>
      <p>Відсоток позитивних відгуків: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default FeedbackWidget;

