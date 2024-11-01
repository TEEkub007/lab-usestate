import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  const update = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>ลูกชินปิ้งนัฐพงษ์</h2>
      <h2>เมื่อก่อนผสมแป้งเดี๋ยวนี้แป้งล้วน</h2>
      <h1>
        ราคาไม้ละ:{counter}บาท&nbsp;&nbsp;
        <button onClick={update}>+</button>
        &nbsp;
        <button onClick={decrease}>-</button>
      </h1>
      <p>ราคา5ไม้:{counter * 5}บาท</p>
      <p>ราคา10ไม้:{counter * 10}บาท</p>
      <p>ราคา20ไม้:{counter * 20}บาท</p>
      <p>ราคา30ไม้:{counter * 30}บาท</p>
    </div>
  );
};

export default App;
