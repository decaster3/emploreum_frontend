import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import AutoComplete from '../AutoComplete/Loadable';
import ChoosenSkill from '../ChoosenSkill/Loadable';
import ChoosenSkills from '../ChoosenSkills/Loadable';

class ChoosenSpecification extends React.Component {
  renderChoosenSkills() {
    if (this.props.skills && this.props.skills.length > 0) {
      return this.props.skills.map((item) =>
        (<ChoosenSkill
          key={item.name}
          skillName={item.name}
          skill={item}
          specification={this.props.specification}
          deleteSkill={this.props.deleteSkill}
        />));
    }
    return <div />;
  }
  render() {
    const skills = this.renderChoosenSkills();
    return (
      <div>
        <div className="form-inline">
          <div className="form-group">
            <h4 className="heading">{this.props.specification.name}</h4>
          </div>
          <div className="form-group" style={{ marginLeft: 20 }}>
            <button
              className="btn btn-default btn-xs"
              onClick={() => this.props.deleteSpecification(this.props.specification)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <AutoComplete
          inputProps={{ className: 'form-control' }}
          addItem={this.props.addSkill}
          list={fromJS(this.props.possibleSkills)}
          whatToAdd={'skill'}
          specification={this.props.specification}
        />
        <ChoosenSkills>
          {skills}
        </ChoosenSkills>
        <div className="clearfix" />
      </div>
    );
  }
}

ChoosenSpecification.propTypes = {
  specification: PropTypes.object,
  deleteSpecification: PropTypes.func,
  addSkill: PropTypes.func,
  possibleSkills: PropTypes.array,
  deleteSkill: PropTypes.func,
  skills: PropTypes.array,
};

export default ChoosenSpecification;
