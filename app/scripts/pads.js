let samples = [
        { sample: 'clap' },
        { sample: 'closedhihat' },
        { sample: 'kick' },
        { sample: 'openhihat' },
        { sample: 'ride' },
        { sample: 'shaker' },
        { sample: 'snare' },
        { sample: 'cymbal' }
    ],
    colors = ['#fcfcfc', '#fafafa', '#fdfdfd', '#fbfbfb', '#f9f9f9', '#fcfcfc', '#fafafa', '#f8f8f8'],
    keys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'];


export default samples.map((pad, i) => {
    pad.active = false;
    pad.audio = new Howl({ urls: ['audio/' + pad.sample + '.WAV'] })
    pad.color = colors[i];
    pad.key = keys[i];
    pad.keycode = keys[i].toUpperCase().charCodeAt(0);

    return pad;
})