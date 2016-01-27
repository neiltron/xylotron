let Pads = [
  {
    key: 'q',
    keycode: 81,
    text: 'clap',
    sample: 'clap',
    color: '#fcfcfc'
  }, {
    key: 'w',
    keycode: 87,
    text: 'closed hihat',
    sample: 'closedhihat',
    color: '#fafafa'
  }, {
    key: 'e',
    keycode: 69,
    text: 'kick',
    sample: 'kick',
    color: '#fdfdfd'
  }, {
    key: 'a',
    keycode: 65,
    text: 'openhihat',
    sample: 'openhihat',
    color: '#fbfbfb'
  }, {
    key: 's',
    keycode: 83,
    text: 'ride',
    sample: 'ride',
    color: '#f9f9f9'
  }, {
    key: 'd',
    keycode: 68,
    text: 'shaker',
    sample: 'shaker',
    color: '#fcfcfc'
  }, {
    key: 'z',
    keycode: 90,
    text: 'snare',
    sample: 'snare',
    color: '#fafafa'
  }, {
    key: 'x',
    keycode: 88,
    text: 'cymbal',
    sample: 'cymbal',
    color: '#f8f8f8'
  }
];

export default Pads.map((pad) => {
    pad.active = false;
    pad.audio = new Howl({ urls: ['audio/' + pad.sample + '.WAV'] })

    return pad;
})