import sntp from 'sntp';

export default (action, delay = 0) => async (dispatch) => {
  const offset = await sntp.offset();
  const timestamp = Date.now() + offset;
  if (delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  return dispatch({ ...action, timestamp });
};
