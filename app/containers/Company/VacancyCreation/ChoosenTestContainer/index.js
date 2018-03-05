/**
 *
 * InviteEmployee
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectChoosenTest } from './selectors';
import ChoosenTest from '../../../../components/Company/CompanyFinanceComponents/VacancyCreation/ChoosenTest/Loadable';

export class ChoosenTestVacancy extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ChoosenTest test={this.props.choosenTest} />
    );
  }
}

ChoosenTestVacancy.propTypes = {
  choosenTest: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    choosenTest: selectChoosenTest(state),
  };
}

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect,
)(ChoosenTestVacancy);
