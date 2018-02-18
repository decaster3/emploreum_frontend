/**
 *
 * Skills
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { getSpecificationsSkills } from './actions';
import { selectSpecificationsSkillsStatus, selectSpecificationsSkills } from './selectors';

import Skill from '../../../../components/Employee/EmployeeProfileComponents/Skills/Skill/Loadable';
import SkillWrapper from '../../../../components/Employee/EmployeeProfileComponents/Skills/SkillsWrapper/Loadable';

import { BASEURL } from '../../../../global-constants';

export class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecificationsSkills();
  }
  renderSkills() {
    if (this.props.specificationsSkillsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.specificationsSkills.map((specification) => {
      const skills = specification.skills.map((skill) =>
      (
        <Skill
          key={skill.id}
          name={skill.name}
          raiting={5}
          imgUrl={`${BASEURL}${skill.photoUrl}`}
        />
      )
    );
      return (
        <div key={specification.id} className="col-lg-12">
          <h4 className="text-left">{specification.name}</h4>
          {skills}
        </div>
      );
    });
  }
  render() {
    const skills = this.renderSkills();
    return (
      <SkillWrapper>
        {skills}
      </SkillWrapper>
    );
  }
}

Skills.propTypes = {
  getSpecificationsSkills: PropTypes.func,
  specificationsSkills: PropTypes.array,
  specificationsSkillsStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    specificationsSkills: selectSpecificationsSkills(state),
    specificationsSkillsStatus: selectSpecificationsSkillsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecificationsSkills: () => dispatch(getSpecificationsSkills()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'skills', reducer });

export default compose(
  withReducer,
  withConnect,
)(Skills);
