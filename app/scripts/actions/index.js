export function handleKeypress(key) {
  return {
    type: 'handleKeypress',
    key
  };
}

export function deactivatePad(key) {
  return {
    type: 'deactivatePad',
    key
  };
}

export function toggleRecording() {
  return { type: 'toggleRecording' };
}

export function stopRecording() {
  return { type: 'stopRecording' };
}

export function playRecording() {
  return { type: 'playRecording' };
}

export function stopPlaying() {
  return { type: 'stopPlaying' };
}