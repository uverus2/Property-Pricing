import React from 'react';
import DatePicker from "react-datepicker";

export default function ViewMore(props) {
    const {startDate, toDate,setToDate, setFromDate} = props;

    return (
        <>
            <div className="date-picker">
                <div className="date">
                    <label>From Date</label>
                    <DatePicker selected={startDate} onChange={date => setFromDate(date)} />
                </div>
                <div className="date">
                    <label>To Date</label>
                    <DatePicker selected={toDate} onChange={date => setToDate(date)} />
                </div>
            </div>
        </>
    )
};
