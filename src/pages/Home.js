import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {ConnectButton , Icon, Select, DatePicker, Input, Button} from "web3uikit";
import { useState } from "react";


import bg from "../assets/images/R.jpg";
import logo from "../assets/images/p.png";

// extra...  

const Home = () => {
  const [checkIn, setCheckIn]=useState(new Date());
  const [checkOut, setCheckOut]=useState(new Date());
  const [destination, setDestination]=useState(new Date());
  const [guests, setGuests]=useState(1);
  

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})`}}>
        <div className="containerGradinet">    
        </div>
      </div>

      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          {/* tab */}
          <div className="selected">Places to stay</div>
          <div>Experience</div>
          <div>Explore</div>
          <div>About</div>
          <div>Contact US</div>
        </div>
        <div className="lrContianers"><ConnectButton /></div>
      </div>

      {/* search bar */}
      {/* Location dropdown list  */}
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
            defaultOptionIndex={0}
            onChange={(data)=>setDestination(data.label)}
            options={[
                 {
                        id: 'pc',
                        label: 'Please choose',
                  },
                  {
                    id: 'M',
                    label: 'Mumbai',
                  
                  },
                  {
                    id: 'K',
                    label: 'Karnataka',
                    
                  },
                  {
                    id: 'g',
                    label: 'Goa',
                  
                  },
                  {
                    id: 'j',
                    label: 'Jaipur',
                  
                  }
                              // Enter more
                      ]}
                      traditionalHTML5
                      validation={{
                        required: true
                      }}
                      value="txt"    />
      </div>
        <div className="vl" />
        <div className="inputs">
          {/* Date */}
          Check In
          <DatePicker
             id="CheckIn"
               name="Select date"
               onChange={(event)=>setCheckOut(event.date)}
                validation={{}}
               value="today"   />
        </div>
        <div className="vl" />
        <div className="inputs">
          Check Out
          <DatePicker
             id="CheckOut"
               name="Select date"
                onChange={(event)=>setCheckOut(event.date)}
                
                validation={{}}
               value="today"/>
        </div>

        <div className="vl" />
        <div className="inputs">Guests
        {/* guestlist with counter */}
              <Input
                    name="AddGuests"
                    onBlur={function noRefCheck(){}}
                    onChange={(event)=>(Number(event.target.value))}
                    type="number"
                    placeholder="Enter Number"
                    validation={{
                      numberMin: 1
                    }} />
        </div>
        
                    {/* link to another page */}
        <Link to={"/Rentals"} state={{
          destination: destination,
          checkIn: checkIn,
          checkOut: checkOut,
          guests: guests

        }}>
        <div className="searchButton">
              <Icon fill="#ffffff" size={25} svg="search"/>
        </div>
        </Link>
        </div>
      </div>
     <div className="randomLocation">
        <div className="title">Feel adventurous

        </div>
        <div className="text"></div>
        <Button
        text="Explore Location"
        onClick={()=> console.log(checkOut)}
        />
     </div>

     <div className="randomContainer">
      jjj

     </div>
    </>
  );


};


export default Home;

