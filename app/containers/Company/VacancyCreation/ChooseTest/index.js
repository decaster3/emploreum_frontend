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
import { selectTestsStatus, selectTestsItems } from './selectors';
import { getTests, chooseTest } from './actions';
import reducer from './reducer';
import Test from '../../../../components/Company/CompanyFinanceComponents/VacancyCreation/SelectTest/Test/Loadable';
import ModalWrapper from '../../../../components/Company/CompanyFinanceComponents/VacancyCreation/SelectTest/ModalWrapper/Loadable';

export class InviteEmployee extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTests();
  }
  renderTests() {
    if (this.props.testsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.testsItems.map((test) =>
      (<Test
        key={test.id}
        test={test}
        chooseTest={this.props.chooseTest}
      />)
    );
  }

  render() {
    const tests = this.renderTests();
    return (
      <ModalWrapper>
        { tests }
      </ModalWrapper>
    );
  }
}

InviteEmployee.propTypes = {
  getTests: PropTypes.func.isRequired,
  chooseTest: PropTypes.func.isRequired,
  testsItems: PropTypes.array,
  testsStatus: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    testsItems: selectTestsItems(state),
    testsStatus: selectTestsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTests: () => dispatch(getTests()),
    chooseTest: (evt, ev) => dispatch(chooseTest(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chooseTestVacancy', reducer });

export default compose(
  withReducer,
  withConnect,
)(InviteEmployee);
