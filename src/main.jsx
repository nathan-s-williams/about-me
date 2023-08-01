import React from 'react'
import ReactDOM from 'react-dom/client'
import BoilerPlate from './Modules/BoilerPlate.jsx'
import Homepage from './Modules/PageContent/Homepage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BoilerPlate content={<Homepage />} />
    </React.StrictMode>,
)
