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

import { getVacancies } from './actions';

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
        specifications={vacancy.profiles}
        weekPaymeent={vacancy.weekPayment}
        companyName={vacancy.name}
        acceptableCurrencies={['eth']}
        info={vacancy.info}
        duration={vacancy.duration}
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vacanciesSearch', reducer });

export default compose(
  withReducer,
  withConnect,
)(VacanciesSearch);
