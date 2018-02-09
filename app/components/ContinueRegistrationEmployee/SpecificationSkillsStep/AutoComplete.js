import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
      isButton: false,
    });
  }

  render() {
    return (
      <div className="input-group">
        <ReactAutocomplete
          inputProps={{ className: 'form-control' }}
          items={this.props.list.toJS()}
          shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item) => item}
          renderItem={(item) => (
            <div key={item}>
              {item}
            </div>
          )}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onSelect={(value) => {
            this.setState({ value });
            this.unlockButton();
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
  specification: PropTypes.string,
  list: PropTypes.object,
  addItem: PropTypes.func,
};

export default AutoComplete;
