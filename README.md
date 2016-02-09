# XYLOTRON 
Now in hyper-monospace.

Xylotron is a drum pad using React, Redux, and Howler. To run locally, clone the repo, then:

````
npm install
gulp watch
````

There's a deploy step in the gulpfile to host the compiled assets on Github Pages. To use, change your git remote to a repo you control and run `gulp deploy`.

## Screenshot

![XYLOTRONS](https://raw.githubusercontent.com/neiltron/xylotron/master/xylotron.png?token=AAbm2UDcNYjV9h1x6OwIQHYqM7ERXUstks5WwnRZwA%3D%3D)

## Todo/roadmap
- Better playback. setTimeout's are susceptible to blocking issues
- The ability to change key assignments
- Changing samples/kits
- Import OP-1 kits from Soundcloud
- Looping
- Saving tracks
- Support for MIDI controllers in Chrome
