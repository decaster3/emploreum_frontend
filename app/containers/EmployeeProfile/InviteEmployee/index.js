/**
 *
 * InviteEmployee
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import { selectOpenVacanciesStatus, selectOpenVacanciesItems } from './selectors';
import { getOpenVacancies, inviteEmployee } from './actions';
import reducer from './reducer';
import OpenVacancy from '../../../components/Employee/EmployeeProfileComponents/InviteEmployee/OpenVacancy/Loadable';
import ModalWrapper from '../../../components/Employee/EmployeeProfileComponents/InviteEmployee/ModalWrapper/Loadable';

export class InviteEmployee extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getOpenVacancies();
  }
  renderVacancies() {
    if (this.props.openVacanciesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.openVacanciesItems.map((vacancy) =>
      (<OpenVacancy
        key={vacancy.position}
        vacancy={vacancy}
        inviteEmployee={this.props.inviteEmployee}
        employeeId={this.props.employeeId}
      />)
    );
  }

  render() {
    const openVacancies = this.renderVacancies();
    return (
      <ModalWrapper>
        { openVacancies }
      </ModalWrapper>
    );
  }
}

InviteEmployee.propTypes = {
  getOpenVacancies: PropTypes.func.isRequired,
  inviteEmployee: PropTypes.func.isRequired,
  openVacanciesItems: PropTypes.array,
  openVacanciesStatus: PropTypes.string,
  employeeId: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    openVacanciesItems: selectOpenVacanciesItems(state),
    openVacanciesStatus: selectOpenVacanciesStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOpenVacancies: () => dispatch(getOpenVacancies()),
    inviteEmployee: (evt, ev) => dispatch(inviteEmployee(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'inviteEmployee', reducer });

export default compose(
  withReducer,
  withConnect,
)(InviteEmployee);
