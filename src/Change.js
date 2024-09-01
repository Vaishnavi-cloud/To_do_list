import { useState } from "react";

function Change() {
  // function handleNameChange() {
  //   // const names = ["earn", "give", "grow"];
  //   // const i = Math.floor(Math.random() * 3);
  //   // return names[i];

  // }

  // const handleClick = (e) => {
  //   console.log(e.target);
  // };
  // const handleClick2 = (name) => {
  //   console.log(`thank u ${name}`);
  // };

  const [count, setCount] = useState(99);
  const [text, setText] = useState("Earn");

  function handleNameChange() {
    const names = ["earn", "give", "grow"];
    const i = Math.floor(Math.random() * 3);
    setText(names[i]);
  }
  function increFun() {
    //setCount(count+1);  //if if u repeat this function n times it doesn't pass the state actuall
    //setCount(count+1); //how many times u repeat it gonna do the same job asicre one..
    //so;

    setCount((pcount) => pcount + 1); //pass as an arg that the current state
  }

  function decreFun() {
    setCount((pcount) => pcount - 1);
    setCount((pcount) => pcount - 1); //u acn use diff name also for the arg which represent the current state
  }
  return (
    <main>
      {/* <h1 onDoubleClick={() => handleClick2("Seetha")}>
        let's {handleNameChange()} money
      </h1> */}
      {/* <button onClick={handleClick}>Click</button> */}
      {/* <button onClick={() => handleClick2("Vaishnavi")}>Click2</button>
      <button onClick={(e) => handleClick(e)}>ButtonClick</button> */}

      <p>let's {text} money</p>
      <button onClick={handleNameChange}>Subscribe</button>
      <button onClick={increFun}>+</button>
      <span>{count}</span>
      <button onClick={decreFun}>-</button>
    </main>
  );
}

export default Change;
