import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import renderField from '../../forms/fields/FormRegisterField';
import { emailValidation } from '../../forms/validation/EmailValidation';
import { required } from '../../forms/validation/RequiredValidation';
import { LOGGING_IN } from '../../containers/UserSession/constants';


const FormLogin = (props) => {
  const { error, handleSubmit, login, userStatus } = props;
  const submitting = userStatus === LOGGING_IN;
  return (
    <form onSubmit={handleSubmit(login)}>
      <h3>Login</h3>
      <Field
        name="email"
        component={renderField}
        validate={[emailValidation, required]}
        label="Email"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        validate={required}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={submitting}
      >
        { submitting
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
        }
      </button>
      <Link to="/registration" className="btn btn-default btn-xs modal-close btn-block">Registration</Link>
    </form>
  );
};

export default reduxForm({
  form: 'FormLogin',
})(FormLogin);

FormLogin.propTypes = {
  handleSubmit: PropTypes.func,
  login: PropTypes.func,
  userStatus: PropTypes.string,
  error: PropTypes.string,
};

