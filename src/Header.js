import React,{Component} from 'react';
import './Header.css';

const Header=function(){
return(
<div id='header' >
   <h4> Phone Directory</h4>
</div>
);
}

/*
//Class Component
class Header extends Component{
    render(){
        return(
        <div className='header'>
        Phone Directory
    </div>  )
    }
}*/

export default Header;