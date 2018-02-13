/**
 *
 * VacanciesSearch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import {
  selectVacanciesStatus,
  selectVacanciesItems,
 } from './selectors';

import reducer from './reducer';

import { getVacancies, submitVacancy } from './actions';

import Vacancy from '../../../components/Employee/EmployeeVacanciesSearchComponent/Vacancies/Vacancy/Loadable';
import VacancyWrapper from '../../../components/Employee/EmployeeVacanciesSearchComponent/Vacancies/VacanciesWrapper/Loadable';

export class VacanciesSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getVacancies();
  }

  renderVacancies() {
    if (this.props.vacanciesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.vacanciesItems.map((vacancy) =>
      (<Vacancy
        key={vacancy.id}
        id={vacancy.id}
        companyId={vacancy.companyId}
        profile={vacancy.profile}
        weekPaymeent={vacancy.weekPaymeent}
        companyName={vacancy.companyName}
        acceptableCurrencies={vacancy.acceptableCurrencies}
        description={vacancy.description}
        contractDuration={vacancy.contractDuration}
        submitVacancy={this.props.submitVacancy}
      />)
    );
  }

  render() {
    const vacancies = this.renderVacancies();
    return (
      <div>
        <Helmet>
          <title>VacanciesSearch</title>
          <meta name="description" content="Description of VacanciesSearch" />
        </Helmet>
        <VacancyWrapper>
          { vacancies }
        </VacancyWrapper>
      </div>
    );
  }
}

VacanciesSearch.propTypes = {
  getVacancies: PropTypes.func,
  submitVacancy: PropTypes.func,
  vacanciesStatus: PropTypes.string,
  vacanciesItems: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    vacanciesStatus: selectVacanciesStatus(state),
    vacanciesItems: selectVacanciesItems(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVacancies: () => dispatch(getVacancies()),
    submitVacancy: (evt, ev) => dispatch(submitVacancy(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vacanciesSearch', reducer });

export default compose(
  withReducer,
  withConnect,
)(VacanciesSearch);
