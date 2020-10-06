/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todos: [],
    onClickXoa: null,
    onClickBatDau: null,
    onClickChuaLam: null,
    onClickChuaXong: null,
};
function TodoList(props) {
    const {
        chua,
        dang,
        xong,
        onClickXoa,
        onClickBatDau,
        onClickChuaLam,
        onClickChuaXong,
        onClickHoanThanh,
    } = props;

    function handleonClickXoa(x) {
        if (onClickXoa) {
            onClickXoa(x);
        }
    }

    function handleonClickBatDau(x) {
        if (onClickBatDau) {
            onClickBatDau(x);
        }
    }
    function handleonClickChuaLam(x) {
        if (onClickChuaLam) {
            onClickChuaLam(x);
        }
    }

    function handleonClickChuaXong(x) {
        if (onClickChuaXong) {
            onClickChuaXong(x);
        }
    }

    function handleonClickHoanThanh(x) {
        if (onClickHoanThanh) {
            onClickHoanThanh(x);
        }
    }
    return (
        <div className="">
            <div className="body row">
                <div className="chua col-ms-12">
                    <h3>Chưa làm</h3>
                    {chua.map((x, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleonClickBatDau(x)}
                                >
                                    Bắt đầu làm
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleonClickXoa(x)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dang col-ms-12">
                    <h3>Đang làm</h3>
                    {dang.map((x, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => handleonClickChuaLam(x)}
                                >
                                    Chưa làm
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleonClickHoanThanh(x)}
                                >
                                    Hoàn thành
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleonClickXoa(x)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="xong col-ms-12">
                    <h3>Hoàn thành</h3>
                    {xong.map((x, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleonClickChuaXong(x)}
                                >
                                    Chưa xong
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleonClickXoa(x)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <h1>Hello may cung</h1>
            </div>
        </div>
    );
}

export default TodoList;
