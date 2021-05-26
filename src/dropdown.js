import React from 'react';
import './dropdown.css';
import {useDispatch,useSelector} from 'react-redux';
import {statusFilter} from './actions/actions';


function Dropdown (){
    const [selectedStatus, setSelectedStatus] = React.useState("All");
    const [ distinctStatus, setDistinctStatus] = React.useState(["All"]);
    const tableList = useSelector( state => state.tableList);
    const dispatch = useDispatch();

    function getDistinctStatus(){
        let listOfStatus = ["All"];
        tableList.forEach( i => {
            if(!listOfStatus.includes(i.status)){
                listOfStatus.push(i.status)
            }
        })
        setDistinctStatus(listOfStatus)
    }

    React.useEffect(getDistinctStatus,[tableList])
    
    function handleDropdownChange(event){
        setSelectedStatus(event.target.value)
        dispatch(statusFilter(event.target.value))
    }
    return(
        <div className="dropdownToolbar">
            <div className="dropdown" >
                <label style={{margin : "auto",whiteSpace: "nowrap"}} htmlFor="selectStatus">Status : </label>
                <select id="selectStatus" value = {selectedStatus} onChange={handleDropdownChange}>
                    {distinctStatus.map(status =>{
                        return(
                            <option key={status} value={status}>{status}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )

}

export default Dropdown;