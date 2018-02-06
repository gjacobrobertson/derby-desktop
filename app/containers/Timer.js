import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { startTimer, stopTimer } from '../actions/timer';

const mapStateToProps = (state, { id }) => ({ timer: state.timer[id] });
const mapDispatchToProps = (dispatch, { id }) => ({
  start: () => dispatch(startTimer(id)),
  stop: () => dispatch(stopTimer(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
