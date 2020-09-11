import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

// Method one in getting async logs
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

// Method two
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// For adding logs
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Contect-Type": "application/json",
      },
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Just setting the loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
