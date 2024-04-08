import './App.css';
import { CONTACT_DATA } from './constants';

import ContactCard from './components/ContactCard';
import Hedder from './components/Hedder';

function App() {
  const innerWidth = window.innerWidth;

  return (
    <>
    
    <Hedder/>
    <div className='pageWrapper'>
      <div className={`${innerWidth > 600 ? "gridBox" : "listBox"}`}>
      {
        CONTACT_DATA?.length > 0 && 
        CONTACT_DATA?.map((item) => {
          return (
            <ContactCard item={item} />
          )
        })
      }
      </div>
    </div>
    </>
  );
}

export default App;
