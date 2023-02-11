import React from 'react';

export const RemoveCommentDialog = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <div className="modal__content">
      <div className="modal__header">
        <h4>Confirm</h4>
        <button>
          <i className="icon-moon icon-moon-x"></i>
        </button>
      </div>
      <div className="modal__body">You sure you want to remove this comment?</div>
      <div className="modal__footer">
        <button className="btn btn-fill">Cancel</button>
        <button className="btn success" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};
