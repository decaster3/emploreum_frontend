/**
 *
 * Candidates
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import Candidate from '../../../components/Vacancy/Candidates/Candidate/Loadable';
import CandidateWrapper from '../../../components/Vacancy/Candidates/CandidatesWrapper/Loadable';

import { getCandidates, acceptCandidate, rejectCandidate } from './actions';
import { selectCandidatesItems, selectCandidatesStatus } from './selectors';

export class Candidates extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getCandidates(this.props.vacancyId);
  }

  renderCandidates() {
    if (this.props.candidatesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.candidates.map((candidate) =>
      (<Candidate
        acceptCandidate={this.props.acceptCandidate}
        rejectCandidate={this.props.rejectCandidate}
        name={candidate.name}
        imgUrl={candidate.photoPath}
        candidateId={candidate.user.id}
        vacancyId={this.props.vacancyId}
      />)
    );
  }

  render() {
    const candidates = this.renderCandidates();
    return (
      <CandidateWrapper>
        {candidates}
      </CandidateWrapper>
    );
  }
}

Candidates.propTypes = {
  vacancyId: PropTypes.string,
  getCandidates: PropTypes.func,
  acceptCandidate: PropTypes.func,
  rejectCandidate: PropTypes.func,
  candidatesStatus: PropTypes.string,
  candidates: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    candidatesStatus: selectCandidatesStatus(state),
    candidates: selectCandidatesItems(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCandidates: (evt) => dispatch(getCandidates(evt)),
    acceptCandidate: (evt, ev) => dispatch(acceptCandidate(evt, ev)),
    rejectCandidate: (evt, ev) => dispatch(rejectCandidate(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vacancyCandidates', reducer });

export default compose(
  withReducer,
  withConnect,
)(Candidates);
