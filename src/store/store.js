import { createStore } from "redux";
import reducers from "../reducers/reducers";


// let preloadedState ={}
// const listOfProjects= ()=>{
//     let items =[];
//     fetch(
//         'http://timeapi.kaaylabs.com/api/v1/project_view/',
//     )
//     .then(res =>res.json())
//     .then(apiData => items = apiData.data)
//     return items
// }

// if (listOfProjects) {
//   preloadedState = {
//     rawData: listOfProjects,
//     filteredData : []

//   }
// }

// function configureStore(preloadedState )  {
//   return createStore(reducers,preloadedState);
// }

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;