/**
*
* SpecificationSkillsStep
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { LOADED } from '../../containers/Registration/constants';
import AutoComplete from '../AutoComplete/Loadable';
import ChoosenSpecification from './ChoosenSpecification/Loadable';
import ChoosenSpecifications from './ChoosenSpecifications/Loadable';
import Wrapper from './SpecificationWrapper/Loadable';
import ButtonSubmit from './ButtonSubmit/Loadable';

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
  submitSpecificationSkillsStep: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
  submittingSpecification: PropTypes.bool,
};

export default SpecificationSkillsStep;
