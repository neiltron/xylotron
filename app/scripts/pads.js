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
    colors = ['#fcfcfc', '#fafafa', '#f8f8f8', '#f6f6f6', '#fbfbfb', '#f9f9f9', '#f7f7f7', '#f5f5f5'],
    keys = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f'];


export default samples.map((pad, i) => {
    pad.active = false;
    pad.audio = new Howl({ urls: ['audio/' + pad.sample + '.WAV'] })
    pad.color = colors[i];
    pad.key = keys[i];
    pad.keycode = keys[i].toUpperCase().charCodeAt(0);

    return pad;
})