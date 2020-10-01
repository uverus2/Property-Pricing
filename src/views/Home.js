import React, {useState, useContext} from 'react';
import houseContext from "../store/houseStore";

//Components
import Card from "../components/Card";
import DatePicker from "../components/DatePicker";

export default function Home(props) {
    const {limit,setHouseInfo,info, clearSearch, setLimit} = props;
    const house = useContext(houseContext);

    const [startDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [dateError, setDateError] = useState(false);

    const change = () => {
        const changeLimit = limit + 20;
        setLimit(changeLimit);
    };

    const changeDate = () => {
        if(toDate !== "" || startDate !== ""){
            const filterDates = info.filter(i => new Date(startDate) < new Date(i.date) && new Date(toDate) > new Date(i.date));
            setHouseInfo(filterDates);
        }else{
            setDateError(true);
        }
    };

    const clear = () => {
        return clearSearch();
    };
    const houses = house.map(i => {
        return <Card house={i} key={i.id}/>
     });

    return (
        <> 
            <div className="content-wrap">
                <div className="hero"></div>
                <h1>Welcome to FooBar Inc</h1>
            </div>
            <div className="picker">
                <div className="dates">
                    <DatePicker startDate={startDate} toDate={toDate} setToDate={setToDate} setFromDate={setFromDate} />
                </div>
                <div className="button-container">
                    <button className="main" onClick={changeDate}>Search</button>
                    <button className="main" onClick={clear}>Clear</button>
                </div>
            </div>
            {dateError && (<h2> Both fields are required</h2>)}
            <div className="cards-container">
                {houses}
            </div>
            <div className="load-more">
                <button className="main" onClick={change}>Load More</button>
            </div>
        </>
    )
}