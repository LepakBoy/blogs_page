import React from 'react';

export default function LabelPage({ params }: { params: { label: string } }) {
  const { label } = params;
  return <div>{label}</div>;
}
