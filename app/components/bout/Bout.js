// @flow
import React from 'react';
import Timer from '../../containers/Timer';
import type { BoutType } from '../../reducers/bout';

type Props = {
  bout: BoutType
};

const Bout = (props: Props) => {
  const { bout } = props;
  return (
    <div>
      <h2>{bout.name}</h2>
      <Timer id={bout.timer} />
    </div>
  );
};

export default Bout;
