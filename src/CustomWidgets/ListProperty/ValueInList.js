import React from 'react';
import PropTypes from 'prop-types';
import style from 'PVWStyle/ReactProperties/MapProperty.mcss';

export default class ValueInList extends React.Component {
  constructor(props) {
    super(props);

    // Bind callback
    this.removeItem = this.removeItem.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }

  removeItem(e) {
    if (this.props.onChange) {
      if (this.props.idx >= 0) {
        this.props.onChange(this.props.idx);
      }
    }
  }

  valueChange(e) {
    const value = e.target.value;

    if (this.props.onChange) {
      if (this.props.idx >= 0) {
        this.props.onChange(this.props.idx, value);
      } else {
        this.props.onChange(null, value);
      }
    }
  }

  render() {
    return (
      <tr>
        <td className={style.inputColumn}>
          <input
            className={style.input}
            name="value"
            type="text"
            value={this.props.value.value}
            onChange={this.valueChange}
          />
        </td>
        <td className={style.actionColumn}>
          <i className={style.deleteButton} onClick={this.removeItem} />
        </td>
      </tr>
    );
  }
}

ValueInList.propTypes = {
  idx: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

ValueInList.defaultProps = {};
