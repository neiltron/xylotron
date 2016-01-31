import React from 'react';
import Pad from './pad';
import { connect } from 'react-redux';
import { handleKeypress, deactivatePad } from '../actions';

class Home extends React.Component {
  constructor(props, dispatch) {
    super(props);
  }

  componentDidMount () {
    document.addEventListener("keydown", this._handleKeydown.bind(this), false);
  }

  _handleKeydown (e) {
    this.props.dispatch(handleKeypress(e.which));

    setTimeout(() => {
      this.props.dispatch(deactivatePad(e.which));
    }.bind(this), 275);
  }

  render () {
    return (
      <div id='container'>
        {this.props.pads.map((pad) => {
          return <Pad
            color={pad.color}
            text={pad.text}
            sample={pad.sample}
            key={pad.keycode}
            keybind={pad.key}
            keycode={pad.keycode}
            active={pad.active}
            onClick={this._handleKeydown.bind(this)} />
        })}
      </div>
    );
  }
}

function mapStateToProps(pads) {
  return {
    pads
  }
}

export default connect(mapStateToProps)(Home)