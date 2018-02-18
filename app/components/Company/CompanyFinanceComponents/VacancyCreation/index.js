/**
*
* VacancyCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SpecificationSkills from '../../../SpecificationsSkills/Loadable';
import FormCreationVacancy from './Form/Loadable';
// import styled from 'styled-components';

class VacancyCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create vacancy
          </h3>
        </div>
        <SpecificationSkills
          specificationList={this.props.specificationList}
          getSpecification={this.props.getSpecification}
          deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
          addSpecificationWithSkills={this.props.addSpecificationWithSkills}
          addSkill={this.props.addSkill}
          deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
          choosenSpecifications={this.props.choosenSpecifications}
          specificationListStatus={this.props.specificationListStatus}
          modal
        />
        <FormCreationVacancy
          createVacancy={this.props.createVacancy}
        />
      </div>
    );
  }
}

VacancyCreation.propTypes = {
  specificationList: PropTypes.object,
  getSpecification: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  addSkill: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  createVacancy: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
};

export default VacancyCreation;
