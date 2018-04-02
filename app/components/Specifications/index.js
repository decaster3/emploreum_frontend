/**
*
* SpecificationSkillsStep
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { LOADED } from '../../containers/Registration/constants';
import AutoComplete from '../AutoComplete';
import ChoosenSpecification from './ChoosenSpecification';
import ChoosenSpecifications from './ChoosenSpecifications';
import Wrapper from './SpecificationWrapper';
import ButtonSubmit from './ButtonSubmit';

class SpecificationSkillsStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecification();
  }
  renderChoosenSpecification() {
    if (this.props.choosenSpecifications.toJS().length < 0) {
      return (<div>Choose specification please</div>);
    }
    return this.props.choosenSpecifications.toJS().map((item) =>
    (<ChoosenSpecification
      key={item.specification.name}
      specification={item.specification}
      deleteSpecification={this.props.deleteSpecificationFromChoosen}
    />));
  }

  render() {
    const specifications = this.renderChoosenSpecification();
    switch (this.props.specificationListStatus) {
      case LOADED:
        return (
          <Wrapper>
            <AutoComplete
              addItem={this.props.addSpecificationWithSkills}
              list={this.props.specificationList}
              whatToAdd={'specification'}
            />
            <hr />
            <ChoosenSpecifications>
              {specifications}
            </ChoosenSpecifications>
            <ButtonSubmit
              submitting={this.props.submittingSpecification}
              submit={this.props.submitSpecificationSkillsStep}
              nextStep={this.props.nextStep}
            />
          </Wrapper>
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
  nextStep: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
  submittingSpecification: PropTypes.bool,
};

export default SpecificationSkillsStep;
