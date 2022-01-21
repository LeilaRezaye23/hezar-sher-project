import './Ganjine.css';
import ShaerSlider from './ShaerSlider';



const Ganjine=()=>{
    
    return(
       <div className="ganjine">
           <div className='ganjine-yellow-part'>
               <div className='ganjine-img'>
               </div>
           </div>
           <div className='ganjine--blue-part'>
               <ShaerSlider></ShaerSlider>
           </div>
       </div> 
    )
}

export default Ganjine;