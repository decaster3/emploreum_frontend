import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

const ButtonSubmit = (props) => {
  const {
    submitting,
    submit,
    nextStep,
  } = props;
  return (
    <div className="col-md-12 text-right no-padding padding-top-30 padding-bottom-30">
      <button
        style={{ marginRight: '5px' }}
        onClick={() => nextStep()}
        className="btn btn-default"
        type="submit"
      > Skip step </button>
      <button
        onClick={() => submit()}
        className="btn btn-success"
        type="submit"
        disabled={submitting}
      >
        { submitting
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Next</span>
        }
      </button>
    </div>
  );
};

ButtonSubmit.propTypes = {
  submitting: PropTypes.bool,
  submit: PropTypes.func,
  nextStep: PropTypes.func,
};

export default ButtonSubmit;
