/**
 *
 * CompanyFinanceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectOpenVacanciesItems,
  selectOpenVacanciesStatus,
  selectIsThereOpenVacancies,
} from './selectors';
import reducer from './reducer';

import OpenVacancy from './../../../components/Company/CompanyProfile/Vacancies/Vacancy';
import OpenVacanciesWrapper from './../../../components/Company/CompanyProfile/Vacancies/VacanciesWrapper';
import NoOpenVacancies from './../../../components/Company/CompanyProfile/Vacancies/NoOpenVacancies';

import { getOpenVacancies, onCloseOpenVacanciesCompanyProfile } from './actions';

export class CompanyOpenVacancies extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getOpenVacancies(this.props.companyProfileId);
  }
  componentWillUnmount() {
    if (!this.props.onClose) {
      this.props.onCloseOpenVacanciesCompanyProfile();
    }
  }
  renderVacancies() {
    if (this.props.openVacanciesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.openVacanciesItems.map((vacancy) =>
      (<OpenVacancy
        id={vacancy.id}
        key={vacancy.id}
        specifications={vacancy.profiles}
        duration={vacancy.duration}
        weekPayment={vacancy.weekPayment}
      />)
    );
  }

  render() {
    const openVacancies = this.renderVacancies();
    if (!this.props.isThereOpenVacancies && this.props.openVacanciesStatus === 'LOADED') {
      return (
        <div>
          <NoOpenVacancies />
        </div>);
    }
    return (
      <OpenVacanciesWrapper >
        {openVacancies}
      </OpenVacanciesWrapper>
    );
  }
}

CompanyOpenVacancies.propTypes = {
  openVacanciesItems: PropTypes.array,
  openVacanciesStatus: PropTypes.string,
  companyProfileId: PropTypes.string,
  getOpenVacancies: PropTypes.func,
  onCloseOpenVacanciesCompanyProfile: PropTypes.func,
  isThereOpenVacancies: PropTypes.bool,
  onClose: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    openVacanciesItems: selectOpenVacanciesItems(state),
    openVacanciesStatus: selectOpenVacanciesStatus(state),
    isThereOpenVacancies: selectIsThereOpenVacancies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOpenVacancies: (evt) => dispatch(getOpenVacancies(evt)),
    onCloseOpenVacanciesCompanyProfile: () => dispatch(onCloseOpenVacanciesCompanyProfile()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyProfileeOpenVacancies', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyOpenVacancies);
