import React from "react";

const state = {
    tasks: []
};

const StateContext = React.createContext(state); //passing initial value



export default StateContext;