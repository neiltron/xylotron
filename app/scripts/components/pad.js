import React from 'react';
import { deactivatePad } from '../actions';
import howler from 'howler';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick (e) {
    this.props.onClick({ keyCode: this.props.keycode });

    e.preventDefault();
  }

  render() {
    let styles = {
      container: {
        backgroundColor: this.props.color,
        float: 'left'
      },
      label: {
        transform: 'scale(' + (this.props.active ? .844 : 1) + ')'
      }
    };

    return (
      <div
        className='pad'
        style={styles.container}
        key={this.props.keycode}
        onClick={this._handleClick.bind(this)}
        onTouchTap={this._handleClick.bind(this)}
      >
        <div style={styles.label}>
          {this.props.text}
        </div>
        <small>{this.props.keybind}</small>
      </div>
    );
  }
}
