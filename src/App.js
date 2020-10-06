/** @format */

import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
function App() {
    const data = [
        { id: '1', title: 'di choi', status: 'C' },
        { id: '2', title: 'di sua xe', status: 'D' },
        { id: '4', title: 'di hoc', status: 'X' },
        { id: '5', title: 'di hoc', status: 'X' },
        { id: '6', title: 'di hoc', status: 'X' },
    ];
    const [todoList, setTodoList] = useState(data);
    const [timkiem, setTimkiem] = useState('');
    function handleonClickXoa(x) {
        const index = todoList.findIndex((todo) => x.id === todo.id);
        if (index < 0) {
            return;
        }

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }
    function handleonClickBatDau(x) {
        const index = todoList.findIndex((todo) => x.id === todo.id);
        if (index < 0) {
            return;
        }

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        x.status = 'D';
        newTodoList.push(x);
        setTodoList(newTodoList);
    }
    function handleonClickChuaLam(x) {
        const index = todoList.findIndex((todo) => x.id === todo.id);
        if (index < 0) {
            return;
        }

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        x.status = 'C';
        newTodoList.push(x);
        setTodoList(newTodoList);
    }
    function handleonClickChuaXong(x) {
        const index = todoList.findIndex((todo) => x.id === todo.id);
        if (index < 0) {
            return;
        }

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        x.status = 'D';
        newTodoList.push(x);
        setTodoList(newTodoList);
    }
    function handleonClickHoanThanh(x) {
        const index = todoList.findIndex((todo) => x.id === todo.id);
        if (index < 0) {
            return;
        }

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        x.status = 'X';
        newTodoList.push(x);
        setTodoList(newTodoList);
    }
    function chua() {
        return todoList.filter((todo) => todo.status === 'C');
    }
    function dang() {
        return todoList.filter((todo) => todo.status === 'D');
    }
    function xong() {
        return todoList.filter((todo) => todo.status === 'X');
    }

    function onChangeTimKiem(e) {
        console.log(e.target.value);
        setTimkiem(e.target.value);
        //   handleTimKiem();
    }

    function handleTimKiem() {
        console.log(timkiem);
        const newTodoList = data.filter(
            (todo) =>
                todo.title
                    .toLowerCase()
                    .indexOf(timkiem.toLowerCase().trim()) >= 0,
        );
        console.log(newTodoList);
        setTodoList(newTodoList);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="header">
                    <h2>Danh sách công việc</h2>
                    <div className="timkiem">
                        <input
                            type="text"
                            class="form-control"
                            id="timkiemtxt"
                            onChange={onChangeTimKiem}
                            value={timkiem}
                            placeholder="Tìm kiếm"
                        ></input>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleTimKiem}
                        >
                            Tìm
                        </button>
                    </div>
                    <button className="btn btn-success">Thêm việc mới</button>
                </div>
                <TodoList
                    chua={chua()}
                    dang={dang()}
                    xong={xong()}
                    onClickXoa={handleonClickXoa}
                    onClickBatDau={handleonClickBatDau}
                    onClickChuaLam={handleonClickChuaLam}
                    onClickChuaXong={handleonClickChuaXong}
                    onClickHoanThanh={handleonClickHoanThanh}
                />
            </div>
        </div>
    );
}

export default App;
