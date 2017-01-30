let nextAudioId = 0;

export const addAudioTextTrack = (index) => {
    document.addEventListener('DOMContentLoaded', () => document.querySelector(`#audio-${index}`).addTextTrack());
    return {
        type: 'ADD_AUDIO_TEXT_TRACK',
        index,
    };
};

export const loadAudio = (index) => {
    document.addEventListener('DOMContentLoaded', () => document.querySelector(`#audio-${index}`).load());
    return {
        type: 'LOAD_AUDIO',
        index,
    };
};

export const playAudio = (index) => {
    document.addEventListener('DOMContentLoaded', () => document.querySelector(`#audio-${index}`).play());
    return {
        type: 'PLAY_AUDIO',
        index,
    };
};

export const pauseAudio = (index) => {
    document.addEventListener('DOMContentLoaded', () => document.querySelector(`#audio-${index}`).pause());
    return {
        type: 'PAUSE_AUDIO',
        index,
    };
};

export const setAudioSrc = (index, src) => {
    return {
        type: 'SET_AUDIO_SRC',
        index,
        src
    };
};

export const setAudioVolume = (index, volume) => {
    document.addEventListener('DOMContentLoaded', () => document.querySelector(`#audio-${index}`).volume = volume);
    return {
        type: 'SET_AUDIO_VOLUME',
        index,
        volume
    };
};

export const addAudio = (audio) => {
    return dispatch => {
        const id = dispatch({
            type: 'ADD_AUDIO',
            id: nextAudioId++,
            audio
        }).id;

        return dispatch(setAudioVolume(id, audio.volume));
    };
};
