import React from 'react'

const Hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h3>From inside src/app.js, which is bundled to public/bundle.js</h3>
      <button onClick={() => alert('hi')}>hello</button>
    </div>
  )
}

export default Hello;
