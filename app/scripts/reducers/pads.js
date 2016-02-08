import Immutable from 'immutable';
import Pads from '../pads';

const initialState = Immutable.Map({
  pads: Pads,
  recordedNotes: Immutable.List(),
  isRecording: false,
  isPlaying: false,
  playStartTime: 0
});

export default (state = initialState, action) => {
  switch(action.type) {
    case 'handleKeypress':
      var pads = state.get('pads'),
          sample, keycode;

      state = state.set('pads', pads.map((pad) => {
        if (pad.keycode == action.key) {
          pad.active = true;
          pad.audio.play();
          sample = pad.sample;
          keycode = pad.keycode;
        }

        return pad;
      }))

      if (state.get('isRecording') && typeof sample !== 'undefined') {
        return state.set('recordedNotes', state.get('recordedNotes').push([sample, keycode, Howler.ctx.currentTime]))

      } else {
        return state
      }

    case 'deactivatePad':
      var pads = state.get('pads');

      return state.set('pads', pads.map((pad) => {
        if (pad.keycode == action.key) {
          pad.active = false;
        }

        return pad;
      }))

    case 'toggleRecording':
      var isRecording = state.get('isRecording'),
          state = Immutable.fromJS(state);

      if (!isRecording) {
        state = state.set('recordedNotes', Immutable.List())
      }

      return state.set('isRecording', !isRecording);

    case 'stopRecording':
      return state.set('isRecording', false);

    case 'playRecording':
      return state.set('isPlaying', true)

    case 'stopPlaying':
      return state.set('isPlaying', false)

    default:
      return state
  }
}