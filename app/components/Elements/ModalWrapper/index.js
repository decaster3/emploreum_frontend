/**
*
* CandidatesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const ModalWrapper = (props) => {
  const { children, title, modalName } = props;
  return (
    <div
      className="modal fade"
      id={`modal-${modalName}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modal-label"
      aria-hidden="true"
      style={{ display: 'none' }}
    >
      <div className="modal-dialog modal">
        <div className="modal-content" style={{ overflow: 'hidden' }}>
          <div className="modal-header">
            { title }
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

          </div>
          <div className="modal-body" style={{ maxHeight: '435', overflowY: 'auto' }}>
            <ul className="list-unstyled todo-list">
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  title: PropTypes.string,
  modalName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModalWrapper;
