import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TableComponent = ({props}) => {

    const stockData = props;
    
    const [data, setData] = useState(stockData);

    useEffect(() => {
       setData(stockData)
    }, [stockData]);

    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Stock Price</th>
                        <th scope="col">Time Elapsed</th>
                    </tr>
                </thead>
                { data.map(info => (
                <tbody key={info.company}>
                    <tr>
                        <td>{info.company}</td>
                        <td>{info.ticker}</td>
                        <td>{info.stockPrice}</td>
                        <td>{info.timeElapsed}</td>
                    </tr>
                </tbody>
                ))}
            </table>

            <button className="btn btn-outline-secondary">
                <Link to={'/'}>Go back</Link>
            </button>
        </div>
    )
};
