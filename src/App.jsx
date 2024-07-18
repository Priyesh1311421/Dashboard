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
                <div className='md:grid md:grid-cols-4'>
                  <div className='md:col-span-3'>
                    <OrderCard />
                  </div>
                  <div className='md:col-span-1'>
                    <CustomersCard/>
                  </div>
                </div>
            </div>
        </>
    );
}

export default App;
