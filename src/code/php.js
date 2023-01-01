import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function PHP() {
  return (
    <>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line prefix="<?php echo" space="2" text={<Hello />} suffix=";" />
      <Line />
      <Line />
    </>
  );
}
