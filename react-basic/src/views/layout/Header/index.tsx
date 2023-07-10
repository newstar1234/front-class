import React from 'react'

interface Props {
  count: number;
}

export default function Header({ count }:Props) {
  return (
    <div>Header : {count}</div>
  )
}
