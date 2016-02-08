import React from 'react';
import Pad from './pad';
import { connect } from 'react-redux';
import { handleKeypress, deactivatePad, toggleRecording, playRecording } from '../actions';

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

  _toggleRecording () {
    this.props.dispatch(toggleRecording());

    return false;
  }

  _playRecording () {
    this.props.dispatch(playRecording());

    return false;
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

        <footer>
          <h1>XYLOTRON</h1>
          <a href='#record' onClick={this._toggleRecording.bind(this)}>
            { this.props.isRecording ? <span>recording</span> : 'record' }
          </a>
          <a href='#play' onClick={this._playRecording.bind(this)} className={this.props.recordedNotes.size > 0 ? 'play active' : 'play' }>
            play
          </a>
          <a href='#que' className='que'>que?</a>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pads: state.get('pads'),
    isRecording: state.get('isRecording'),
    recordedNotes: state.get('recordedNotes')
  }
}

export default connect(mapStateToProps)(Home)