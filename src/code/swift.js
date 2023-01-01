import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function Swift() {
  return (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line prefix="println(" space="2" text={<Hello />} suffix=")" />
      <Line />
      <Line />
    </>
  );
}
