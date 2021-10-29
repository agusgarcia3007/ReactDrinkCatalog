import React  from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Provider from './context/Categories';

const App = () => {
    return ( 
        <Provider>
            <Header />


            <div className="container mt-5">
                <div className="row">
                    <Form />
                </div>
            </div>
        </Provider>
     );
}
 
export default App;