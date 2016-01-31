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