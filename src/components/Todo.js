import React, { useState } from 'react';
import './Todo.css';
import { useNavigate, Link } from 'react-router-dom'; 
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();
    const toggleSelected = (index) => {
        const newSelectedItems = [...selectedItems];
        if (newSelectedItems.includes(index)) {
            newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
        } else {
            newSelectedItems.push(index);
        }
        setSelectedItems(newSelectedItems);
    };
    const logout=()=>{
        navigate('/')
    }
    const addItems = () => {
        if (!inputData) {
            alert("Please enter data");
        } else {
            if (editIndex === -1) {
                setItems([...items, inputData]);
            } else {
                const newItems = [...items];
                newItems[editIndex] = inputData;
                setItems(newItems);
                setEditIndex(-1);
            }
            setInputData(""); 
        }
    };

    const deleteItem = (index) => {
        alert('Are you sure , want to delete this activity');
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems); 
    };

    const startEditing = (index) => {
        setInputData(items[index]);
        setEditIndex(index);  };

    const removeAll = () => {
        alert("Are you sure, want to delete all items ?");
        setItems([]);
    }

    return (
        <div className="container mt-5">
            <h4 className='text-center text-danger pb-3'>Daily Activity List</h4>
      <buton className=" btn btn-secondary mt-3 me-3 "onClick={logout}>Logout</buton>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter an item"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addItems}>
                    {editIndex === -1 ? "Add Item" : "Update Item"}
                </button>
            </div>

            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col" className='d-flex align-items-baseline justify-content-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map((curEle, index) => (
                    <tr key={index} style={{ backgroundColor: selectedItems.includes(index) ? 'grey' : '' }}>
                        <th scope="row"><div className="form-check">
                                <input className="form-check-input" type="checkbox" id={`checkbox-${index}`} checked={selectedItems.includes(index)} onChange={() => toggleSelected(index)} />
                            </div></th>
                        <td>{curEle}</td>
                        <td className='d-flex align-items-baseline justify-content-center'>
                            
                            <button className="btn btn-info me-2" onClick={() => startEditing(index)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            <div>
                <button className="btn btn-warning" onClick={removeAll} disabled={items.length === 0}>Remove All</button>
            </div>
        </div>
    );
};

export default Todo;
