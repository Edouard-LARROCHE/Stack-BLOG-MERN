import React from 'react';

const modal = ({ isShowing, hide, ...props }) => {
  return (
    <div>
      {isShowing ? (
        <div className='modal-overlay'>
          <div className='modal-wrapper'>
            <div className='modal'>
              <div className='modal-header'>
                <div className='modal-close-button' onClick={hide} style={{ cursor: 'pointer' }}>
                  <img src='https://img.icons8.com/small/16/000000/delete-sign.png' alt='close' />
                </div>
              </div>
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default modal;
