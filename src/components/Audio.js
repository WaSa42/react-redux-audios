import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';

class Audio extends Component {
    renderSources() {
        return _.map(this.props.sources, (source, index) => <source key={index} src={source.src} type={source.type} />);
    }
    render() {
        return React.createElement(
            'audio',
            {...this.props.attributes, id: `audio-${this.props.id}`},
            <div className="react-redux-audio audio-sources">
                {this.renderSources()}
                Your browser does not support the <code>audio</code> element.
            </div>
        );
    }
}

// https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio
Audio.propTypes = {
    id: PropTypes.number,
    attributes: PropTypes.shape({
        accesskey: PropTypes.string,
        autoPlay: PropTypes.bool,
        autobuffer : PropTypes.bool, // Deprecated since Gecko 2.0
        controls: PropTypes.bool,
        hidden: PropTypes.bool,
        lang: PropTypes.bool,
        loop: PropTypes.bool,
        muted: PropTypes.bool,
        preload: PropTypes.oneOf(['none', 'metadata', 'auto', " "]),
        src: PropTypes.string.isRequired,
        title: PropTypes.string,
        volume: PropTypes.number
    }),
    sources: PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.oneOf(['audio/ogg', 'audio/mpeg', 'audio/wav'])
    })
};

export default Audio;
