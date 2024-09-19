import React, { useState } from 'react';

function TodoList() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");
  const [editing, setEditing] = useState(false);
  const [presentIndex, setPresentIndex] = useState(null);

  const addUpdateTask = (e) => {
    e.preventDefault();
    if (newData.trim()) {
      if(editing) {
        const updateData = [...data];
        updateData[presentIndex] = newData;
        setData(updateData);//edit
        setEditing(false);
        setPresentIndex(null);
      } else {
        setData([...data, newData]);
      }
      setNewData("");
    }
  };

  const editData = (index) => {
    setEditing(true);
    setPresentIndex(index);
    setNewData(data[index]);//UI
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_,i) => i !== index); 
    setData(updatedData); 
    
  }; 

  return ( 
    <div>
      <form onSubmit={addUpdateTask}>
        <input
          type="text"
          placeholder="Enter your data"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button type="submit">{editing ? "Edit" : "Add"} Task</button>
      </form>

      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
            <button onClick={() => editData(index)}>Edit</button>
            <button onClick={() => deleteData(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>Enter data</p>
      )}
    </div>
  );
}

export default TodoList;
