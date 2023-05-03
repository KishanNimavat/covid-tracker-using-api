import React, { useEffect, useState } from 'react';

function Travel_history() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/travel_history.json');
        const actualData = await res.json();
        console.log(actualData.travel_history);
        setData(actualData.travel_history);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    const head1 = {
        display: "flex",
        justifyContent:"center",
        marginTop:"50px"
    }

    return (
        <>
            <div>

                <h1 style={head1}>India Covid 19 Dashboard</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Pid</th>
                            <th>Type</th>
                            <th>Timefrom</th>
                            <th>Lat-Long</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, ind) => {
                                return (
                                    <tr>
                                        <td>{curElem.pid}</td>
                                        <td>{curElem.type}</td>
                                        <td>{curElem.timefrom}</td>
                                        <td>{curElem.latlong}</td>
                                       
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    );

}

export default Travel_history;