/**
*
* FilterAutocomplete
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class FilterAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.clearInput = this.clearInput.bind(this);
  }
  clearInput() {
    this.setState({
      value: '',
    });
  }
  render() {
    return (
      <div>
        <ReactAutocomplete
          wrapperStyle={{ position: 'relative' }}
          inputProps={{ className: 'form-control', placeholder: this.props.placeholder }}
          menuStyle={{
            top: '34',
            left: '5',
            width: '100%',
            background: '#fff',
            fontSize: '18px',
            border: '1px solid #ddd',
            zIndex: '1000',
            position: 'absolute',
          }}
          items={this.props.list || []}
          shouldItemRender={(item, element) => item.name.toLowerCase().indexOf(element.toLowerCase()) > -1}
          getItemValue={(item) => item.name}
          renderItem={(item) => (
            <div key={item.name}>
              {item.name}
            </div>
          )}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.currentTarget.value })}
          onSelect={(value) => {
            this.props.list.forEach((el) => {
              if (el.name === value) {
                this.props.addElement(el);
                this.clearInput();
                this.props.reload();
              }
            });
          }}
        />
      </div>
    );
  }
}

FilterAutocomplete.propTypes = {
  reload: PropTypes.func,
  addElement: PropTypes.func,
  list: PropTypes.array,
  placeholder: PropTypes.string,
};

export default FilterAutocomplete;
