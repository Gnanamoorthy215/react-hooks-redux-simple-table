import { combineReducers} from 'redux';

const tableListReducer = (state=[], action) =>{
  switch(action.type){
    case "SET_TABLE_DATA":
        return action.payload;
    default:
          return state;

  }
}

const statusReducer = (state = "All", action) =>{
  switch (action.type){
      
    case "FILTER_BY_STATUS":
        return action.status
      
    default:
          return state;
  }
}

export default combineReducers({
  tableList : tableListReducer,
  selectedStatus : statusReducer
})