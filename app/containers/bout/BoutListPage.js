// @flow
import { connect } from 'react-redux';
import BoutList from '../../components/bout/BoutList';
import type { BoutType } from '../../reducers/bout';

const mapStateToProps = (state): {bouts: BoutType[]} => ({ bouts: Object.values(state.bout) });

export default connect(mapStateToProps)(BoutList);
