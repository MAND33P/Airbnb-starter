import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {ConnectButton , Icon, Select, DatePicker, Input, Button, CryptoCards, Skeleton} from "web3uikit";
import { useState } from "react";


// bootstrap..........................................................................................................




// bootstrap.........................................................................................................

import bg from "../assets/images/R.jpg";
import logo from "../assets/images/p.png";



// extra...  

const Home = () => {
  const [checkIn, setCheckIn]=useState(new Date());
  const [checkOut, setCheckOut]=useState(new Date());
  const [destination, setDestination]=useState(new Date());
  const [guests, setGuests]=useState(1);

  // by me

  const images = [
    { url: "https://unsplash.com/photos/7KLa-xLbSXA" },
    { url: "..assests/images/2.JPG" },
    { url: "../assets/images/R.jpg" },
    { url: "../assets/images/R.jpg" },
    { url: "../assets/images/R.jpg" },
    { url: "../assets/images/R.jpg" },
    { url: "../assets/images/R.jpg" },
  ];
  // ..............................................................
  

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
     {/* CARDS  ACCEPTED */}

     <div className="randomContainer">


      {/* Crypto cards */}

      
     <CryptoCards
  bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
  btnText="View Endpoints"
  chain="ethereum"
  chainType="Network"
  onClick={function noRefCheck(){}}
/>
<CryptoCards
  bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
  btnText="View Endpoints"
  chain="binance"
  chainType="Network"
  onClick={function noRefCheck(){}}
/>
<CryptoCards
  bgColor="linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)"
  btnText="View Endpoints"
  chain="polygon"
  chainType="Network"
  onClick={function noRefCheck(){}}
/>
<CryptoCards
  bgColor="linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)"
  btnText="View Endpoints"
  chain="avalanche"
  chainType="Network"
  onClick={function noRefCheck(){}}
/>

</div>

          <div className="randomContainer">
            
                  <div>
                    ...
                    
                  </div>
                    <div>
                      <Skeleton theme="image"/>
                                            
                    </div>

          </div>
    </>
  );


};


export default Home;

