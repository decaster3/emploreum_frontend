import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valueString: '',
      isButton: false,
    };
    this.unlockButton = this.unlockButton.bind(this);
    this.sendElement = this.sendElement.bind(this);
  }
  unlockButton() {
    this.setState({
      isButton: true,
    });
  }
  sendElement(value) {
    if (this.props.specification) {
      this.props.addItem(this.props.specification, value);
    } else {
      this.props.addItem(value);
    }
    this.setState({
      value: '',
      valueString: '',
      isButton: false,
    });
  }
  render() {
    return (
      <div className="input-group">
        <ReactAutocomplete
          wrapperStyle={{}}
          inputProps={{ className: 'form-control' }}
          menuStyle={{ className: 'autocomplete' }}
          items={this.props.list.toJS()}
          shouldItemRender={(item, valueString) => item.name.toLowerCase().indexOf(valueString.toLowerCase()) > -1}
          getItemValue={(item) => item.name}
          renderItem={(item) => (
            <div key={item.name}>
              {item.name}
            </div>
          )}
          value={this.state.valueString}
          onChange={(e) => this.setState({ valueString: e.target.value })}
          onSelect={(value) => {
            this.props.list.toJS().forEach((el) => {
              if (el.name === value) {
                this.setState({ value: el });
                this.setState({ valueString: value });
                this.unlockButton();
              }
            });
          }}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            disabled={!this.state.isButton}
            onClick={() => {
              this.sendElement(this.state.value);
            }}
          >
            Add
          </button>
        </span>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  specification: PropTypes.object,
  list: PropTypes.object,
  addItem: PropTypes.func,
};

export default AutoComplete;
