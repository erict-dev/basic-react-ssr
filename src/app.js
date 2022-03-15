import React from 'react'
import ReactDom from 'react-dom'
import Hello from './hello'

ReactDom.hydrate(<Hello />, document.getElementById("root"))
