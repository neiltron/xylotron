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
    keys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'];


export default samples.map((pad, i) => {
    pad.active = false;
    pad.audio = new Howl({ urls: ['audio/' + pad.sample + '.WAV'] })
    pad.key = keys[i];
    pad.keycode = keys[i].toUpperCase().charCodeAt(0);

    return pad;
})