import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
    return ( 
        <>
            <Header />


            <div className="container mt-5">
                <div className="row">
                    <Form />
                </div>
            </div>
        </>
     );
}
 
export default App;