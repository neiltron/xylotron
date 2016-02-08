import Immutable from 'immutable';
import Pads from '../pads';

const initialState = Immutable.Map({
  pads: Pads,
  isRecording: false,
  recordedNotes: Immutable.List()
});

export default (state = initialState, action) => {
  switch(action.type) {
    case 'handleKeypress':
      var pads = state.get('pads'),
          sample;

      state = state.set('pads', pads.map((pad) => {
        if (pad.keycode == action.key) {
          pad.active = true;
          pad.audio.play();
          sample = pad.sample;
        }

        return pad;
      }))

      if (state.get('isRecording') && typeof sample !== 'undefined') {
        return state.set('recordedNotes', state.get('recordedNotes').push([sample, Howler.ctx.currentTime]))

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
        state
          .set('recordedNotes', Immutable.List())
      }

      return state.set('isRecording', !isRecording);

    case 'playRecording':
      var notes = state.get('recordedNotes');

      notes.forEach((note) => {
        setTimeout(() => {
          var snd = new Howl({ urls: ['audio/' + note[0] + '.WAV'] })
          snd.play()
        }, note[1] * 1000)
      })
    default:
      return state
  }
}