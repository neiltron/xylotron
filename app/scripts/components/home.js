import React from 'react';
import Pad from './pad';
import Que from './que';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import {
  handleKeypress,
  deactivatePad,
  toggleRecording,
  stopRecording,
  playRecording,
  stopPlaying,
  toggleAbout
} from '../actions';

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

    var notes = this.props.recordedNotes,
        startTime = notes.get(0)[2];

    notes.forEach((note, i) => {
      var playTimeAt = (note[2] - startTime) * 1000;

      setTimeout(() => {
        this.props.dispatch(handleKeypress(note[1]))

        setTimeout(() => {
          this.props.dispatch(deactivatePad(note[1]));
        }.bind(this), 275);
      }, playTimeAt)

      if (i == notes.size - 1) {
        setTimeout(() => {
          this.props.dispatch(stopPlaying())
        }.bind(this), playTimeAt)
      }
    });

    return false;
  }

  _toggleAbout () {
    this.props.dispatch(toggleAbout());

    return false;
  }

  render () {
    let containerSpring = { stiffness: 150, damping: 17 },
        controlSpring = { stiffness: 200, damping: 10 },
        style;

    if (this.props.aboutIsActive) {
      style = {
        y: spring(-90, containerSpring),
        scale: 0,
        controlY: -5
      }
    } else {
      style = {
        y: spring(0, containerSpring),
        scale: spring(1, controlSpring),
        controlY: spring(0, controlSpring)
      }
    }

    return (
      <Motion style={style}>
        {({y, scale, controlY}) =>
          <div id='container' style={{transform: `translateY(${y}vh)`}}>
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
              <a href='#record' onClick={this._toggleRecording.bind(this)} style={{transform: `scale(${scale}) translateY(${controlY}vh)`}}>
                { this.props.isRecording ? <span>recording</span> : 'record' }
              </a>
              <a href='#play' onClick={this._playRecording.bind(this)} className={this.props.recordedNotes.size > 0 ? 'play active' : 'play' } style={{transform: `scale(${scale}) translateY(${controlY}vh)`}}>
                { this.props.isPlaying ? <span>playing</span> : 'play' }
              </a>
              <a href='#que' className='que' onClick={this._toggleAbout.bind(this)}>{ this.props.aboutIsActive? 'close' : 'que?' }</a>

              <Que active={this.props.aboutIsActive} toggleAbout={this._toggleAbout.bind(this)} />
            </footer>
          </div>
        }
      </Motion>
    );
  }
}

function mapStateToProps(state) {
  return {
    pads: state.get('pads'),
    recordedNotes: state.get('recordedNotes'),
    isRecording: state.get('isRecording'),
    isPlaying: state.get('isPlaying'),
    aboutIsActive: state.get('aboutIsActive')
  }
}

export default connect(mapStateToProps)(Home)