import PropTypes from "prop-types"
import { useState } from "react";

import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [contentTag, setContentTag] = useState([]);

    const saveDataTag = (content) => setContentTag(content);

    const data = {
      contentTag,
      saveDataTag
    }
    
  return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider;