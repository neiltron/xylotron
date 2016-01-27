import Immutable from 'immutable';
import Pads from '../pads';

export default (state = Immutable.List(Pads), action) => {
  switch(action.type) {
    case 'handleKeypress':
      return state.map((pad) => {
        if (pad.keycode == action.key) {
          pad.active = true;
          pad.audio.play();
        }

        return pad;
      })
    case 'deactivatePad':
      return state.map((pad) => {
        if (pad.keycode == action.key) {
          pad.active = false;
        }

        return pad;
      })
    default:
      return state
  }
}