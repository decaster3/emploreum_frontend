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
      <div className="modal-content">
        <div className="modal-header">
          Create vacation
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body" >
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
