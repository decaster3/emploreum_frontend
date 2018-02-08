/**
*
* SpecificationSkillsStep
*
*/

import React from 'react';
import { SyncLoader } from 'react-spinners';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADED } from '../../../containers/Registration/constants';
import AutoComplete from './AutoComplete';
import ChoosenSpecifications from './ChoosenSpecifications';

class SpecificationSkillsStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecification();
  }
  render() {
    switch (this.props.specificationListStatus) {
      case LOADED:
        return (
          <div id="wrapper">
            <div className="main">
              <div className="panel panel-headline col-md-8 col-md-offset-1">
                <h4 className="heading">Add specification</h4>
                <hr />
                <AutoComplete
                  addItem={this.props.addSpecificationWithSkills}
                  list={this.props.specificationList}
                  whatToAdd={'specification'}
                />
                <hr />
                <ChoosenSpecifications
                  choosenSpecifications={this.props.choosenSpecifications}
                  addSkill={this.props.addSkill}
                  deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
                  deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
                />
                <div className="col-md-12 text-right">
                  <button
                    onClick={() => this.props.submitSpecificationSkillsStep()}
                    className="btn btn-success"
                    type="submit"
                    disabled={this.props.submittingSpecification}
                  >
                    { this.props.submittingSpecification
                        ? <SyncLoader color={'#ffffff'} size={5} />
                        : <span>Next</span>
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            Loadingy
          </div>
        );
    }
  }
}

SpecificationSkillsStep.propTypes = {
  specificationList: PropTypes.object,
  getSpecification: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  addSkill: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
  submittingSpecification: PropTypes.bool,
};

export default SpecificationSkillsStep;
