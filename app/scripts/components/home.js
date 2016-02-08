import React from 'react';
import Pad from './pad';
import { connect } from 'react-redux';
import { handleKeypress, deactivatePad, toggleRecording, stopRecording, playRecording } from '../actions';

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
    this.props.dispatch(stopRecording());
    this.props.dispatch(playRecording());

    var notes = this.props.recordedNotes;

    notes.forEach((note) => {
      setTimeout(() => {
        this.props.dispatch(handleKeypress(note[1]))

        setTimeout(() => {
          this.props.dispatch(deactivatePad(note[1]));
        }.bind(this), 275);
      }, note[2] * 1000)
    });

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
            { this.props.isPlaying ? <span>playing</span> : 'play' }
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
    recordedNotes: state.get('recordedNotes'),
    isRecording: state.get('isRecording'),
    isPlaying: state.get('isPlaying')
  }
}

export default connect(mapStateToProps)(Home)