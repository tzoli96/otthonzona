import React from "react";
import whyUsImage from "../pictures/why-us.png";
import checkboxIcon from "../icons/check.svg";
import {Link} from "react-router-dom";

const points = [
  "Szakértői hivatásunk céljai feltérképezése, ezt követően formába öntése és a számára is komfortos kivitelezés megvalósítása.",
  "Célunk, hogy végig vezessük az ingatlanpiac színterein zajló ügyintézési és gyakorlati folyamatokon annak érdekében, hogy mind értékesítőként, mind vásárlóként megtalálja a számára megfelelő kivitelezési stratégiát.",
  "Küldetésünk, hogy a vevők díjmentesen találják meg álmaik ingatlanját, ezért minél kevesebb díj megfizetése mellett tudja eladni ingatlanját az eladó nálunk.",
];

function WhyUs() {
  return (
      <div className="w-10/12 mx-auto py-8 my-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center w-full text-center">
          <img src={whyUsImage} alt="" className="w-auto h-auto w-max-full max-lg:max-h-[500px] m-auto"/>
        </div>

        <div className="mt-8 md:mt-0 flex">
          <div>
            <p className="section-heading">
              Miért <span className="text-blue">válasszon minket?</span>
            </p>

            <p className="text-lightgrey text-md my-4">
              Ön is találja meg nálunk álmai otthonát! <br/>
              Szeretnénk összekapcsolni az egyéni célkitűzéseket, <br/> jól
              kidolgozott, gördülékeny stratégiáinkkal!
            </p>

            <div className="my-2">
              {points.map((p) => (
                  <div className="flex gap-3 text-lightgrey my-4">
                    <img src={checkboxIcon} className="h-6 w-6"/>
                    <span>{p}</span>
                  </div>
              ))}
            </div>

            <div className="w-full md:w-64">
              <Link to="/about-us">
                <button className="orange-button my-4 !w-full">Tudj meg többet</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default WhyUs;
