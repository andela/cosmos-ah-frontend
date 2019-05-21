import React from 'react';


const StrippedModal = props => (
  <div id='stripped-modal' className="ui small basic modal test">
    <div className="ui icon header">
      <i className="archive icon"></i>
      {props.modalTitle}
    </div>
    <div className="content">
      <p>
        {props.modalText}
      </p>
    </div>
    <div className="actions">
      <div onClick={props.handleClickReject} className="ui red basic cancel inverted button">
        <i className="remove icon"></i>
        {props.rejectText}
      </div>
      <div onClick={props.handleClickApprove} className="ui green ok inverted button">
        <i className="checkmark icon"></i>
        {props.approveText}
      </div>
    </div>
  </div>
);

export default StrippedModal;
