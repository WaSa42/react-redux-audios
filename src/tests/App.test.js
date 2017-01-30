// Like a real App @see doc
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import AudioPanel from '../containers/AudioPanel';
import { addAudio } from '../actions/Audio';
import audios from '../reducers/audios';

const testAudio = [{
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

const initAudios = () => {
    return dispatch => {
        const ids = testAudio.map(audio => dispatch(addAudio(audio)).id);
        return dispatch({
            type: 'INIT_AUDIOS',
            ids
        });
    }
};

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

class AppComp extends Component {
    componentWillMount() {
        this.props.initAudios();
    }
    render() {
        return (
            <div className="test">
                <AudioPanel />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        initAudios: () => {
            dispatch(initAudios());
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComp);

const middleWares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    middleWares.push(logger);
}

const reducers = combineReducers({
    audios,
    reducer
});

const store = createStore(
    reducers,
    applyMiddleware(...middleWares)
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

export const Test = App;
