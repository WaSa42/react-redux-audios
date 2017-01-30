import React, { Component, PropTypes } from 'react';
import Audio from '../components/Audio';
import './css/AudioPanel.css';

class AudioPanelComp extends Component {
    renderAudios() {
        return this.props.audios.map(audio => {
            return (
                <li key={`audio-${audio.id}`}>
                    <div className="title">{audio.attributes.title}</div>
                    <Audio
                        id={audio.id}
                        attributes={audio.attributes}
                        sources={audio.sources}
                        className={audio.className}
                        style={audio.style}
                    />
                </li>
            )
        })
    }
    render() {
        return (
            <div className="react-redux-audio audios audio-panel">
                <header>
                    <h4>AudioPanel</h4>
                </header>
                <ul>{this.renderAudios()}</ul>
            </div>
        )
    }
}

AudioPanelComp.propTypes = {
    audios: PropTypes.arrayOf(PropTypes.shape(Audio.propTypes)).isRequired,
};

export default AudioPanelComp