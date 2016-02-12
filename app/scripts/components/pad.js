import React from 'react';
import { deactivatePad } from '../actions';
import howler from 'howler';
import { Motion, spring } from 'react-motion';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick (e) {
    this.props.onClick({ which: this.props.keycode });

    e.preventDefault();
  }

  render() {
    let springSettings = { stiffness: 300, damping: 10 };
    let style;

    if (this.props.active) {
      style = { scale: 1 }
    } else {
      style = { scale: spring(.844, springSettings) }
    }

    return (
      <Motion style={style}>
        {({scale}) =>
          <div
            className='pad'
            key={this.props.keycode}
            onMouseDown={this._handleClick.bind(this)}
            onTouchStart={this._handleClick.bind(this)}
          >
            <div style={{transform: `scale(${scale})`}}>
              {this.props.sample}
            </div>
            <small>{this.props.keybind}</small>
          </div>
        }
      </Motion>
    );
  }
}
