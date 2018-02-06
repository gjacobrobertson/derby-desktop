// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as boutActions from '../../actions/bout';
import NewBout from '../../components/bout/NewBout';

const mapDispatchToProps = (dispatch) => bindActionCreators(boutActions, dispatch);

export default connect(null, mapDispatchToProps)(NewBout);
