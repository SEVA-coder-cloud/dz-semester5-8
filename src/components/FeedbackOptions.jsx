const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            textTransform: 'capitalize',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;