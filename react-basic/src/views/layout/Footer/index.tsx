import React from 'react'
import { useState } from 'react'

interface Human {
  name: string;
  age: number;
}

export default function Footer() {

  const [human, setHuman] = useState<Human>({name : '홍길동', age :20});
  const [value, setValue] = useState<string>('');

  // let value = '';

  const changeHuman = () => {
    const newHuman: Human = {
      name: '김철수',
      age: 30
    }
    setHuman(newHuman); //! 새로운 주소를 받아서 넣어야 렌더링이 됨
  } 

  return (
    <div>
      <div>{human.name} {human.age}</div>
      <button onClick={changeHuman}>변경</button>
      <div>
        <input onChange={(event) => {setValue(event.target.value)}}/> {value}
      </div>
    </div>
  )
}
