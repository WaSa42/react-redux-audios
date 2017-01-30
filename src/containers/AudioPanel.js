import { connect } from 'react-redux';
import AudioPanelComp from '../components/AudioPanel';

const mapStateToProps = (state) => {
    return {
        audios: state.audios
    };
};

const mapDispatchToProps = () => {
    return {};
};

const AudioPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioPanelComp);

export default AudioPanel;
