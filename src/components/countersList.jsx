import React, { useState } from "react";
import Couneter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь"},
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounteres = counters.filter((c) => c.id !== id);
    setCounters(newCounteres);
  };

  const handleReset = () => {
    console.log("reset");
    setCounters(initialState);
  };


  const handleIncrement = (id) => {
    const valueIncrement = counters.map(c => c.id === id ? c.value+1 : c.value+0);

    console.log(valueIncrement)
    //setCounters(valueIncrement)
  };

  // const handleDicrement = (id) => {  
  //   const ValueDicrement = counters.filter(c => c.id === id);
  //   const NewValueDicrement = ValueDicrement.value + 1
  //   console.log(NewValueDicrement)
  //   // const newValueDicrement = ValueDicrement.value - 1
  //   //  
  // };

  return (
    <>
      {counters.map((count) => (
        <Couneter key={count.id} {...count} onDelete={handleDelete} onIncrement={handleIncrement} /*onDicrement={handleDicrement}*//>
      ))}
      <button className="btn btn-primary btm-sm m-2" onClick={handleReset}>
        Сброс
      </button>
     
    </>
  );
};

export default CountersList;
