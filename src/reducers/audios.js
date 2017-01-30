const audio = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_AUDIO':
            return {
                id: action.id,
                ...action.audio
            };
        case 'SET_AUDIO_SRC':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                attributes: {
                    src: action.src,
                }
            };
        case 'SET_AUDIO_VOLUME':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                volume: action.volume,
            };
        default:
            return state
    }
};

const audios = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AUDIO':
            return [
                ...state,
                audio(undefined, action)
            ];
        case 'SET_AUDIO_SRC':
            return state.map(a =>
                audio(a, action)
            );
        case 'SET_AUDIO_VOLUME':
            return state.map(a =>
                audio(a, action)
            );
        default:
            return state
    }
};

export default audios
