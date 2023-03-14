import React from 'react'
import './Home.css';
import {Product} from './Product';

function Home() {
  return (
    <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


        <div className="home__row">
          
      <Product
      id = "12323432"
      title = "The Lean Startup - How Constant Innovation Creates Radically Successful Business"
      price = {11.96}
      rating= {5}
      image ="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"  />

      
<Product
      id = "2345123"
      title ="Hydracy Water Bottle with Time Marker - Large 1 Liter 32 Oz BPA Free Water Bottle - Leak Proof   - Rose Gold"
      price = {10.35}
      rating= {4}
      image ="https://cdn05.zipify.com/rsfD7HBPw1mmRGk31-RKJMEk2c4=/fit-in/1080x0/5f2a37eb745645c792398f97888d223c/hydracy_rosegold_listingimage2-new.jpg"  />

        </div>

        <div className="home__row">

      
        <Product
      id = "12323252"
      title = "New and Improve Smarrt Speaker with Alexa(black)"
      price = {20}
      rating= {5}
      image ="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"  />

      
      
<Product
      id = "12323732"
      title = "Powerful features to help keep you connected, active, healthy and safe.."
      price = {50}
      rating= {4}
      image ="https://www.apple.com/v/watch/ax/images/overview/pride/pride_nike__2d5mylvtaiau_large.jpg"  />

      
      
<Product
      id = "123098432"
      title = "Samsung's new folding flip phone revealed in huge leak also have great deals and offers"
      price = {500.96}
      rating= {3}
      image ="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/29/11/samsung-galaxy-z-flip.jpg?quality=75&width=982&height=726&auto=webp"  />

        </div>

<div className="home__row">
  
      
<Product
      id = "12327932"
      title = " iFFALCON 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43U61 (Black) New Smart Tv in Smart home - gurantee for 1 year Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz Connectivity : 2 HDMI ports to connect set top box, Blue Ray players | 1 USB ports to connect hard drives and other USB devices"
      price = {100}
      rating= {4}
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtK2FPiGNkCxs3LRN98HrVbJHzdrTxZr-few&usqp=CAU"  />

</div>

    </div>
  )
}

export {Home}
