# react-redux-audios
Handle audio components with react &amp; redux
```console
npm install react-redux-audios --save
```
## How it works ?
### Adding audio
Fist of all, we need an audio file `public/medias/musics/myAudioFile.mp3`

Then we initialized our audio props 'attributes are the same as html audio element).
```javascript
const audios = [{
    attributes: {
        autoPlay: true,
        controls: true,
        loop: true,
        src: '/medias/musics/Solar Eclipses (Instrumental) - Hollywood Principle.mp3',
        title: 'Solar Eclipses (Instrumental) - Hollywood Principle'
    },
    sources: {},
    tags: ['music', 'test'],
    volume: 0.5
}];
```
Then, we dispatch our audio with the `addAudio` action in a `componentWillMount` for example.
```javascript
import ReactReduxAudios from 'react-redux-audios';
const initAudios = () => {
    return dispatch => {
        const ids = audios.map(audio => dispatch(ReactReduxAudios.addAudio(audio)).id);
        return dispatch({
            type: 'INIT_AUDIOS',
            ids
        });
    }
};
```
In this example, we dispatch a custom action saving ids in our component sate for accessibility.
```javascript
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_AUDIOS':
            return {
                ...state,
                audiosId: action.ids
            };
        default:
            return state;
    }
};
```
### Manipulate audios
With ids saved in the component state, we can simpply dispatch an action passing `id` in argument.
```javascript
import ReactReduxAudios from 'react-redux-audios';
const mapDispatchToProps = (dispatch) => {
    return {
        pauseAudio: id => {
            dispatch(ReactReduxAudios.pauseAudio(id));
        }
    };
};
```

## Actions
action | arguments
------------ | -------------
addAudioTextTrack | id : bool
loadAudio | id  :bool
playAudio | id : bool
pauseAudio | id : bool
setAudioSrc | id : bool, src : string
setAudioVolume | id : bool, volume : float
addAudio | audio : Audio @see "Adding audio"
