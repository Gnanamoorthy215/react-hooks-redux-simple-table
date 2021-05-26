import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {setTableData} from '../actions/actions'
import '../styles/dataTable.css'
import loader from '../loading.gif'

function DataTable(){
    const [tableEntries,setTableEntries] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const status = useSelector(state => state.selectedStatus);
    const tableList = useSelector( state => state.tableList);
    const dispatch = useDispatch();

    function filterByStatus(){
        if(status && status != "All"){
            let filteredresult = tableList.filter( row =>  row.status == status );
            setTableEntries(filteredresult)
        }else{
            setTableEntries(tableList)
        }
        
    }

    const fetchProjects = async()=>{
        fetch(
            'http://timeapi.kaaylabs.com/api/v1/project_view/',
        )
        .then(res =>res.json())
        .then(apiData => {
            setTableEntries(apiData.data)
            dispatch(setTableData(apiData.data))
            setIsLoading(false)
        })

    }

    React.useEffect(filterByStatus,[status,tableList])


    React.useEffect( () => {
        fetchProjects()
    },[])

    return (
        <div style={{minHeight : "10vh"}}>
            {isLoading ?
                <img style={{ margin: "10% auto" }} src={loader} alt="Loading..." />
                :
                <table className="table" id="data-table">
                    <thead>
                        <tr>
                            <th>Project Id</th>
                            <th>Project Code</th>
                            <th>Description</th>
                            <th>Company Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableEntries && tableEntries.map((row) => {
                            return (
                                <tr key={row.project_id}>
                                    <td>{row.project_id}</td>
                                    <td>{row.project_code}</td>
                                    <td>{row.description}</td>
                                    <td>{row.company_name}</td>
                                    <td>{row.start_date}</td>
                                    <td>{row.end_date}</td>
                                    <td>{row.status}</td>
                                </tr>
                            )
                        })}

                    </tbody>


                </table>

            }

        </div>
    )
}

export default DataTable;