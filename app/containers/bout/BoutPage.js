// @flow
import { connect } from 'react-redux';
import Bout from '../../components/bout/Bout';
import type { BoutType } from '../../reducers/bout';

type Props = {
  bout: BoutType
};

const mapStateToProps = (state, ownProps): Props => {
  const { match: { params } } = ownProps;
  const bout = state.bout[params.id];
  return { bout };
};

export default connect(mapStateToProps)(Bout);
