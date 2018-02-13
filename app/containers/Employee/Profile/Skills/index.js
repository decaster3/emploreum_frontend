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

export class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecificationsSkills();
  }
  renderSkills() {
    if (this.props.specificationsSkillsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.specificationsSkills.map((skill) => (
      <Skill
        name={skill.name}
        raiting={skill.raiting}
        imgUrl={skill.photo_path}
      />
    ));
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
