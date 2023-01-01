import React from 'react';

export default function Line({
  text = '',
  color = '#143147',
  space,
  prefix,
  suffix,
}) {
  const spaces = [];
  for (let i = 0; i < space; i++) {
    spaces.push(<>&nbsp;</>);
  }

  return (
    <p style={{ color }}>
      {...spaces.map((s) => s)}
      {prefix}
      {text || (!prefix && !suffix ? <br /> : null)}
      {suffix}
    </p>
  );
}
