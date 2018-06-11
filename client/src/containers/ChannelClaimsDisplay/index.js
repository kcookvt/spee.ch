import { connect } from 'react-redux';
import { onUpdateChannelClaims } from '../../actions/show';
import View from './view';

const mapStateToProps = ({ show, site: { defaultThumbnail } }) => {
  // select channel key
  const request = show.requestList[show.request.id];
  const channelKey = request.key;
  // select channel claims
  const channel = show.channelList[channelKey] || null;
  // return props
  return {
    channelKey,
    channel,
    defaultThumbnail,
  };
};

const mapDispatchToProps = {
  onUpdateChannelClaims,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
