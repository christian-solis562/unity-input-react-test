/*eslint-disable */
import React, { useState, useEffect } from 'react'

// generic reusable input for unity prototype
export default function UnityInput(props) {

    // From https://reactjs.org/docs/hooks-state.html
  const [value, setValue] = useState(``);

    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
        // when mounted or updated
        // do something
    });

  return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange} />
    )
}
