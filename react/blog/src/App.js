/* eslint-disable */

import './App.css';
import { useState } from 'react';

let App = () => {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 맛집 추천', '여자 머리 추천', '캠핑 장소 추천']);
  const countArray = new Array(title.length).fill(0);
  let [count, setCount] = useState(countArray);
  const modalArray = new Array(title.length).fill(false);
  let [modal, setModal] = useState(modalArray);

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

      {
        title.map(function (a, i) {
          return (
            <div className="list">
              <h4 style={{ display: 'flex' }}>
                <span onClick={() => {
                  let copyModal = [...modal];
                  if (modal[i]) {
                    copyModal[i] = false;
                    setModal(copyModal);
                  } else {
                    copyModal[i] = true;
                    setModal(copyModal);
                  }
                }}>{title[i]}
                </span>
                <span onClick={() => {
                  let countCopy = [...count];
                  countCopy[i] += 1;
                  setCount(countCopy);
                }}>
                  &nbsp;😍
                </span>
                {count[i]}
              </h4>
              <p>2월 8일 발행</p>
              {
                modal[i] ? <Modal title={title} num={i} setTitle={setTitle} /> : null
              }
            </div>
          )
        })
      }
    </div>
  );
}

let Modal = (props) => {
  let title = props.title;
  let num = props.num;
  return (
    <div className='modal'>
      <h4>{title[num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copyTitle = [...title];
        if (num === title.length - 1) {
          copyTitle[num] = title[0];
          props.setTitle(copyTitle);
        } else {
          copyTitle[num] = title[num + 1];
          props.setTitle(copyTitle);
        }
      }}>글수정</button>
    </div>
  )
}

export default App;
