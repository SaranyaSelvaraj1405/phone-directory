import React, { Component, Fragment } from 'react';
import Header from "./Header";
import Elements from "./Elements";


class App extends Component {
  render() {
    // let username='Liam Payne';
    // let no_of_icecreams=20;
    // let price=20;
    return (

      <Fragment>
        {/*<div className="">
        Phone Directory
        <br></br>
        </div><div>
        <label htmlFor='username'>Username:</label><br></br>
        <input id='username' type='text' placeholder='Your Name'/><br></br>
        <label htmlFor='pass'>Password:</label><br></br>
        <input id='pass' type='password'/>
    </div>*/}

        {/*<div>
      <p>Hello {username}! The total amount you need to pay for {no_of_icecreams} ice creams is Rs. {no_of_icecreams*price}.</p>
    </div>*/}

       {/* <div>
          <Header />
        </div>
        <div>
          <button>Add</button>
        </div>
        <div>
          <span>Name</span><br></br>
          <span>Phone</span>
       </div>*/}

       <div>
         <Header/>
       </div>
        <div>
          <Elements/>
        </div>
       

      </Fragment>
    );

  }
}

export default App;
