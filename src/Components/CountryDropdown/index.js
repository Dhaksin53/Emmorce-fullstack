import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import{ DialogTitle} from '@mui/material/DialogTitle';
import {Dialog} from '@mui/material/Dialog';

// const Transition=React.forwardRef(function Transition(props,ref){
//     return <Slide directon='up' ref={ref}{...props}/>;
// })
const countryDropdown=()=>{
    // const[isOpenModal,setisOpenModal]=useState(false);
    // useEffect(()=>{

    // },)
    return(
        <>
      
        <Button className ='countryDrop' >
            <div className ='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ml-auto'><FaAngleDown  /></span>
        </Button>

<Dialog  open={true}>


  </Dialog>
</>
        
       
    )

}
export default countryDropdown;