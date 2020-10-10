import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItem';
import { connect } from 'react-redux';
import Axios from 'axios';


class HomeScreen extends Component {
    render() {
        return (
            <div>
                
                <h1 className="display-4 text-center">Danh sách khóa học</h1>
                <div classname="container">
                    <div classname="row">
                        {this.props.courseList.map((item, index) => (
                                <div className="col-3">
                                    <CourseItem />
                                </div>
                            ))}

                    </div>
                </div>
            </div>

        );
    }

    componentDidMount() {
        Axios({
            method: "GET",
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP04'
        }).then((res) => {
            this.props.dispatch({
                type: 'FETCH_COURSES',
                payload: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }
}
const mapStateToProps = state => ({
    courseList: state.course.courses
});

export default connect(mapStateToProps)(HomeScreen);
