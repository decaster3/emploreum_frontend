/**
*
* VacancyCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SpecificationSkills from './SpecificationSkills/Loadable';

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
          />
          <label htmlFor="vacancy-name" className="small">Название должности</label>
          <input type="text" placeholder="название" id="vacancy-name" className="form-control" />

          <label htmlFor="vacancy-eth" className="small">Плата в неделю</label>
          <input type="text" placeholder="палата" id="vacancy-eth" className="form-control" />

          <label htmlFor="vacancy-eth" className="small">Продолжительность (в месяцах)</label>
          <input type="text" placeholder="продолжительность" id="vacancy-dur" className="form-control" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
          <button type="button" className="btn btn-primary">Сохранить</button>
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
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
};

export default VacancyCreation;
