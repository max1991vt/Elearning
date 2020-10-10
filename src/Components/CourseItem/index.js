import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        return (
            <div classname="card p-2 mb-4">
                <img src={this.props.item.hinhAnh} style={{width:"100%",height:280}}></img>
        <p className="lead font-weight-bold ">{this.props.item.tenKhoaHoc}</p>
                <p classname="lead ">Instructor: {this.props.item.nguoiTao.hoTen}</p>
                <p classname="lead ">Rating: 5.0</p>
                <button className="btn btn-success ">Go to detail</button>
                
            </div>

        );
    }
}
