import React from 'react';
import ShowcardContainer from './components/ShowcardContainer';
import OrderCard from './components/OrderCard';
import { ComplexNavbar } from './components/Navbar';
import CustomersCard from './components/CustomersCard';

function App() {
    return (
        <>
            <div>
                <div>
                  <ComplexNavbar/>
                </div>
                <div >
                  <ShowcardContainer />
                </div>
                <div className='md:grid md:grid-cols-2'>
                  <div className='col-span-3'>
                    <OrderCard />
                  </div>
                  <div className='col-span-1'>
                    <CustomersCard/>
                  </div>
                </div>
            </div>
        </>
    );
}

export default App;
