import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function CPP() {
  return (
    <>
      <Line text="#include<iostream>" />
      <Line />
      <Line text="int main" />
      <Line text="{" />
      <Line prefix="cout << " space="2" text={<Hello />} suffix=";" />
      <Line text="return 0;" space="2" />
      <Line text="}" />
    </>
  );
}
