import React from 'react';

export const ResetSolutionDialog = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <div className="modal__content">
      <div className="modal__header">
        <h4>Reset your solution?</h4>
        <button>
          <i className="icon-moon icon-moon-x"></i>
        </button>
      </div>
      <div className="modal__body">
        This will replace your solution with the default setup. Are you sure?
      </div>
      <div className="modal__footer">
        <button className="btn btn-fill">Cancel</button>
        <button className="btn success" onClick={onSubmit}>
          Yes. Do it!
        </button>
      </div>
    </div>
  );
};
