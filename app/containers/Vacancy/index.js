import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainInfromation from './MainInformation/Loadable';
import Skills from './Skills/Loadable';
import Candidates from './Candidates/Loadable';
import { selectUserRole } from './selectors';

export const Vacancy = (props) => {
  const { match, role } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
            vacancyId={match.params.id}
          />
        </div>
        <div className="profile-right">
          <Skills
            vacancyId={match.params.id}
          />
          { role === 'COMPANY'
            ? <Candidates />
            : <div />
          }
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

Vacancy.propTypes = {
  match: PropTypes.object,
  role: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    role: selectUserRole(state),
  };
}

export default connect(mapStateToProps, null)(Vacancy);
