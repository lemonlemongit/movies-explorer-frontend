import React from 'react';
import './SubmitBtn.css';

function SubmitBtn({ label, submitHandler, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={isDisabled ? 'submit-btn' : 'submit-btn submit-btn_type-active'}
      onSubmit={submitHandler}
    >
      {label}
    </button>
  );
}

export default SubmitBtn;
