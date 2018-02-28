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
} from './selectors';
import reducer from './reducer';

import OpenVacancy from '../../../../components/Company/CompanyFinanceComponents/Vacancies/Vacancy/Loadable';
import OpenVacanciesWrapper from '../../../../components/Company/CompanyFinanceComponents/Vacancies/VacanciesWrapper/Loadable';

import { getOpenVacancies } from './actions';

export class CompanyOpenVacancies extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getOpenVacancies();
  }
  renderVacancies() {
    if (this.props.openVacanciesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.openVacanciesItems.map((vacancy) =>
      (<OpenVacancy
        id={vacancy.id}
        key={vacancy.id}
        position={vacancy.position}
        hoursPerWeek={vacancy.hoursPerWeek}
        payment={vacancy.payment}
      />)
    );
  }

  render() {
    const openVacancies = this.renderVacancies();

    return (
      <OpenVacanciesWrapper>
        {openVacancies}
      </OpenVacanciesWrapper>
    );
  }
}

CompanyOpenVacancies.propTypes = {
  openVacanciesItems: PropTypes.array,
  openVacanciesStatus: PropTypes.string,
  getOpenVacancies: PropTypes.func,
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinanceOpenVacancies', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyOpenVacancies);
