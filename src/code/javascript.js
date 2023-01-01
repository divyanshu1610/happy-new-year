import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function JavaScript() {
  return (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line prefix="console.log(" space="2" text={<Hello />} suffix=");" />
      <Line />
      <Line />
    </>
  );
}
