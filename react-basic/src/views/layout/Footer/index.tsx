import React from 'react'
import { useState } from 'react'

interface Human {
  name: string;
  age: number;
}

export default function Footer() {

  const [human, setHuman] = useState<Human>({name : '홍길동', age :20});

  const changeHuman = () => {
    human.name='김철수';
    human.age=30;
    setHuman(human);

  }
  return (
    <div>
    <div>{human.name} {human.age}</div>
    <button onClick={changeHuman}>변경</button>
    </div>
  )
}
