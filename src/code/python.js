import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function Python() {
  return (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line prefix="print(" space="2" text={<Hello />} suffix=")" />
      <Line />
      <Line />
    </>
  );
}
