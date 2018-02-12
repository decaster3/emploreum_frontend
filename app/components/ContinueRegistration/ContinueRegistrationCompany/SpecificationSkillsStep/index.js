/**
*
* SpecificationSkillsStep
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADED } from '../../../../containers/Registration/constants';
import AutoComplete from './AutoComplete/Loadable';
import ChoosenSpecifications from './ChoosenSpecifications/Loadable';
import ChoosenSpecification from './ChoosenSpecification/Loadable';
import SpecificationWrapper from './SpecificationWrapper/Loadable';
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
      key={item.specification}
      specification={item.specification}
      deleteSpecification={this.props.deleteSpecificationFromChoosen}
    />));
  }

  render() {
    const choosenSpecifications = this.renderChoosenSpecification();
    switch (this.props.specificationListStatus) {
      case LOADED:
        return (
          <SpecificationWrapper>
            <AutoComplete
              addItem={this.props.addSpecificationWithSkills}
              list={this.props.specificationList}
              whatToAdd={'specification'}
            />
            <hr />
            <ChoosenSpecifications>
              {choosenSpecifications}
            </ChoosenSpecifications>
            <ButtonSubmit
              submitting={this.props.submittingSpecification}
              submit={this.props.submitSpecificationSkillsStep}
            />
          </SpecificationWrapper>
        );
      default:
        return (
          <div>
            Loading
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
