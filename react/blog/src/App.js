/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 맛집 추천', '여자 머리 추천']);
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>

        <button onClick={() => {
          let copy = [...title];
          copy.sort()
          setTitle(copy);
        }}>가나다순 정렬</button>

      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { setCount(count + 1) }}>😍</span> {count} </h4>
        <p>2월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 8일 발행</p>
      </div>
    </div>
  );
}

export default App;
