/** @format */

import React, { useRef, useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
function App() {
    const [data, setdata] = useState([
        { id: '1', title: 'di choi', status: 'C' },
        { id: '2', title: 'di sua xe', status: 'D' },
        { id: '4', title: 'di hoc', status: 'X' },
    ]);
    const [todoList, setTodoList] = useState(data);
    const [timkiem, setTimkiem] = useState('');
    const [taomoi, setTaoMoi] = useState('');
    const typingTimeountRef = useRef(null);

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
        const value = e.target.value;
        if (typingTimeountRef.current) {
            clearTimeout(typingTimeountRef.current);
        }

        typingTimeountRef.current = setTimeout(() => {
            handleTimKiem(value.trim());
        }, 300);

        //
    }

    function handleTimKiem(x = '') {
        console.log('dsffd', x);
        if (typeof x === 'object') {
            setTodoList(data);
            return;
        }
        const newTodoList = data.filter(
            (todo) =>
                todo.title.toLowerCase().indexOf(x.toLowerCase().trim()) >= 0,
        );

        setTodoList(newTodoList);
    }

    function handleTaoMoi() {
        console.log(timkiem);
        const newTodoList = [...data];
        const id = Date.now().toString();
        newTodoList.push({
            id: id,
            title: timkiem,
            status: 'C',
        });
        console.log(newTodoList);
        data.push({ id: id, title: timkiem, status: 'C' });

        setdata(newTodoList);
        setTodoList(newTodoList);
        setTimkiem('');
        onChangeTimKiem({
            target: {
                value: '',
            },
        });
    }
    return (
        <div className="App">
            <div className="container">
                <div className="header">
                    <h2>Danh sách công việc</h2>
                    <div className="timkiem">
                        <input
                            className="txt-timkiem"
                            type="text"
                            className="form-control"
                            id="timkiemtxt"
                            onChange={onChangeTimKiem}
                            value={timkiem}
                            placeholder="Nhập công việc để tìm hoặc tạo mới"
                        ></input>
                        <div className="tohop">
                            {/* <button
                                type="submit"
                                className="btn-timkiem btn btn-info"
                                onClick={handleTimKiem}
                            >
                                Tìm
                            </button> */}
                            <button
                                type="submit"
                                className="btn-taomoi btn btn-success"
                                onClick={handleTaoMoi}
                            >
                                Lưu
                            </button>
                        </div>
                    </div>

                    {/* <button className="btn btn-success">Thêm việc mới</button> */}
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
