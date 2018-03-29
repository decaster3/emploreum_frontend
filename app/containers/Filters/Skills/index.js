/**
 *
 * VacanciesSearch
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { selectChoosenSkills, selectPossibleSkills } from './selectors';
import reducer from './reducer';
import { clearReducer, addSkill, deleteSkill, getSkills } from './actions';

import Skill from '../../../components/Filters/Tags/Tag';
import SkillsWrapper from '../../../components/Filters/Tags/TagsWrapper';
import SkillInput from '../../../components/Filters/FilterAutocomplete';
import SkillFilterWrapper from '../../../components/Filters/FilterWrapper';
export class Keywords extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkills();
  }
  componentWillUnmount() {
    this.props.clearReducer();
  }
  renderSkills() {
    return this.props.selectedSkills.map((skill) =>
      (<Skill
        key={skill.id}
        tag={skill}
        deleteTag={this.props.deleteSkill}
      />)
    );
  }

  render() {
    const skills = this.renderSkills();
    return (
      <SkillFilterWrapper classes={this.props.classes}>
        <SkillInput placeholder={'Enter skill'} addElement={this.props.addSkill} list={this.props.possibleSkills} />
        <SkillsWrapper>
          { skills }
        </SkillsWrapper>
      </SkillFilterWrapper>
    );
  }
}

Keywords.propTypes = {
  getSkills: PropTypes.func,
  clearReducer: PropTypes.func,
  deleteSkill: PropTypes.func,
  addSkill: PropTypes.func,
  selectedSkills: PropTypes.array,
  possibleSkills: PropTypes.array,
  classes: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    selectedSkills: selectChoosenSkills(state),
    possibleSkills: selectPossibleSkills(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearReducer: () => dispatch(clearReducer()),
    getSkills: () => dispatch(getSkills()),
    addSkill: (evt) => dispatch(addSkill(evt)),
    deleteSkill: (evt) => dispatch(deleteSkill(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'skillsFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Keywords);
