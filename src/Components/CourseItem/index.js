import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        return (
            <div classname="card p-2">
                <img></img>
                <p className="lead font-weight-bold">ReactJS BootCamp</p>
                <p classname="lead">Instructor:</p>
                <p classname="lead">Rating: 5.0</p>
                <button className="btn btn-success">Go to detail</button>
                
            </div>

        );
    }
}
