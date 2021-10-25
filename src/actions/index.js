import axios from 'axios';
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_SMURF = 'ADD_SMURF'

export const fetchSmurfs = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_SMURFS });

		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				dispatch({ type: FETCH_SUCCESS, payload: res.data })
			})
			.catch(err => { console.log(err) })
	
		};
		
	};

export const addSmurf = (smurf) => {
	return ({type: ADD_SMURF, payload: smurf})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.