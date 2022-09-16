import React from "react";
import Contact from "./Contact";
import Whis from "./images/mr-whiskerson.png"
import Fluff from "./images/fluffykins.png"
import Felix from "./images/felix.png"
import Pump from "./images/pumpkin.png"
import "./index.css"
export default function App () {
  return (
    <>
      <div className="contacts">
        <Contact
            img = {Whis}
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contact 
            img= {Fluff}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contact 
            img= {Felix}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contact 
            img= {Pump}
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
      </div>
    </>
  )
}