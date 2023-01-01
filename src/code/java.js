import React from 'react';

import Line from '../Line';
import Hello from './hello';

export default function Java() {
  return (
    <>
      <Line text="class Hello" />
      <Line text="{" />
      <Line text="public static void main(String args[])" space="2" />
      <Line text="{" space="2" />
      <Line
        prefix="System.out.println("
        space="4"
        text={<Hello />}
        suffix=");"
      />
      <Line text="}" space="2" />
      <Line text="}" />
    </>
  );
}
