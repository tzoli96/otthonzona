import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import aboutUsImage from "../../pictures/about-us.png";
import aboutUsMark from "../../pictures/about-us-mark.png";
import aboutUs1 from "../../pictures/about-us-1.png";
import aboutUs2 from "../../pictures/about-us-2.png";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen">
      <Navbar />
      <div
        className="hidden md:block h-1/2 min-h-[300px] md:min-h-[700px] relative mt-8 z-30 max-h-[1100px] bg-cover bg-center bg-no-repeat"
        style={{
          background: `url(${aboutUsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0">
          <img src={aboutUsMark} alt="About Us Mark" />
        </div>
        <div className="card md:w-[80%] xl:w-[1000px] p-12 absolute md:bottom-[5%] xl:bottom-[10%] left-[10%]">
          <p className="card-heading text-lg md:!text-2xl">
            Miért jött létre az <span className="text-blue">OtthonZóna?</span>
          </p>
          <p className="text-lightgrey my-4 text-justify">
            Üdvözöljük az otthonzona.com-on, ahol az álmai otthona csak egy
            kattintásnyira van! Az otthonzona.com nem csak egy ingatlanportál,
            hanem egy kapu a kényelmes és inspiráló ingatlankeresés világába. Mi
            nem csak ingatlanokat kínálunk, hanem élményt és lehetőséget arra,
            hogy megtalálja az igazit. Arra törekszünk, hogy elkötelezett
            partnereivé váljunk az otthonkeresőknek, hiszen hiszünk abban, hogy
            minden ház, ingatlan egy komoly döntés, és mi segítünk megtalálni az
            Önhöz illő otthont díjmentesen. Az otthonzona.com egy barátságos és
            könnyen navigálható platform, ahol számtalan lehetőség vár Önre.
            Legyen szó eladó vagy kiadó ingatlanról, lakásról vagy házról,
            nálunk minden megtalálható. Az interaktív térképek, részletes
            leírások és lenyűgöző fotók segítségével könnyedén barangolhat az
            otthonok világában. Legyen szó családi fészekről vagy befektetési
            lehetőségről, az Ingatlan.com segít álmai ingatlanát valóra váltani.
            Fedezze fel a kényelmet és biztonságot, amit egy megbízható
            ingatlanportál kínálhat, és tegye még izgalmasabbá az otthonkeresést
            velünk! Válasszon bölcsen, költözzön tudatosan! - válassza az
            otthonzona.com-ot!
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 p-4 xl:p-20">
        <div className="justify-center grid">
          <img src={aboutUs1} className="max-w-full h-auto" alt="About Us 1" />
        </div>
        <div className="p-4 md:p-20 flex justify-center items-center">
          <div className="w-full">
            <p className="card-heading text-lg md:!text-2xl">
              Rólunk és <span className="text-blue">küldetésünk.</span>
            </p>
            <p className="my-4 text-lightgrey text-justify">
              Üdvözöljük az otthonzona.com-on, ahol az otthonkeresés és
              -értékesítés mindenki számára könnyed és díjmentes élményt jelent!
              <br />
              <br />
              Az otthonzona.com küldetése olyan ingatlanplatformot teremteni,
              ahol az otthonra vágyók és az eladók egyszerre találják meg
              szükségleteiket, kényelmüket és igényeiket. Az oldalra
              látogatóknak egy teljes körű szolgáltatásokat nyújtó központként
              szolgálunk, ahol minden, az otthonkereséssel és -értékesítéssel
              kapcsolatos lépést könnyedén és hatékonyan tehetnek meg.
              <br />
              <br />
              Az otthonzona.com nem csupán egy ingatlanhirdetési felület, hanem
              egy integrált platform, ahol minden szolgáltatásunk a felhasználók
              kényelmét és igényeit szolgálja. Az oldalra látogatók nemcsak
              ingatlanokat találnak, hanem egész sor olyan szolgáltatást is
              igénybe vehetnek, amelyek segítik az otthonkeresés és-értékesítés
              minden szakaszát. A költöztetéstől az ügyvédi szolgáltatásokon át
              az értékbecslésig, hitelkalkulációig és biztosításkalkulációig -
              mindez egy helyen, egy kattintással, és mindez díjmentesen!
              <br />
              <br />
              Az otthonzona.com egy valódi otthonteremtő közösség, ahol az
              ingatlan nem csak tégla és vakolat, hanem egy teljes élet
              története. Itt nem csak hirdethet és kereshet, hanem a teljes
              költözési folyamatot is kezelheti. Kínálatunk nemcsak a
              hagyományos eladó és kiadó ingatlanokat foglalja magában, hanem
              lehetőséget kínál bérlemények keresésére vagy saját ingatlan
              hirdetésére.
              <br />
              <br />
              Lépjen be az otthonzona.com világába, ahol mindenki megtalálhatja
              az igazit, és minden szükséges eszköz a rendelkezésére áll, hogy
              az otthonkeresés valódi élménnyé váljon. Itt az ideje, hogy
              megtalálja álmaid otthonát, és mi minden lépésben segítünk az
              úton. Az otthonzona.com - ahol az otthonkeresés egyszerű,
              kényelmes és mindenkinek elérhető!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 p-4 xl:p-20">
      <div className="xl:hidden justify-center grid">
        <img src={aboutUs2} className="max-w-full h-auto" alt="About Us 2" />
      </div>
        <div className="p-4 md:p-20 flex justify-center items-center order-last md:order-none">
          <div className="w-full">
            <p className="card-heading text-lg md:!text-2xl">
              Miért vagyunk más, mint <br />a többi{" "}
              <span className="text-blue">ingatlanos oldal</span>
            </p>
            <p className="text-lightgrey my-4 text-justify">
              {" "}
              Az otthonzona.com-nál mindent az otthonkeresők és -értékesítők
              kényelme érdekében terveztünk. Különlegességünk abban rejlik, hogy
              nem csak egy ingatlanportál vagyunk, hanem egy valódi
              ingatlanélményt kínáló, teljes körű szolgáltatásokkal rendelkező
              platform. Egyedi történetek, érzelmek és lehetőségek: itt minden
              egyes ingatlan mögött valóságos történetek rejlenek. Nem pusztán
              hirdetéseket talál, hanem az otthonok személyességét, amelyeket mi
              a saját különlegességünkkel hangsúlyozunk. Az ingatlanok itt nem
              csupán statikus képek vagy táblázatok, hanem valódi
              élettörténetek, amelyek segítenek az otthonok mélyebb
              megértésében.
              <br />
              <br />
              Az otthonzona.com nem csak ingatlanokat kínál, hanem teljes körű
              díjmentes szolgáltatásokat is. Költöztetéstől az ügyvédi
              szolgáltatásokon át az értékbecslésig, hitelkalkulációig és
              biztosításkalkulációig minden elérhető egy helyen. Nemcsak a
              jövőbeni vevők, hanem az eladók és bérbeadók számára is
              biztosítjuk a teljes kiszolgálást. Az otthonzona.com érdekessége
              abban is rejlik, hogy nem pusztán egy felület vagy portál, hanem
              egy valódi otthonkeresési központ, ahol minden szükséges eszközt
              megtalál egy sikeres tranzakcióhoz. A díjmentességünk nem csak
              szó, hanem egy elkötelezettség, hogy az ingatlanügyletek mindenki
              számára elérhetőek legyenek.
              <br />
              <br />
              Tehát, az otthonzona.com egy olyan platform, ahol a díjmentesség
              és az emberközpontúság találkozik, és ahol mindenki számára
              elérhetővé tesszük az otthonkeresés és -értékesítés magasabb
              szintű élményét. Ha szeretne részese lenni ennek a különleges
              közösségnek, és valódi otthonélményt keres, ne keressen tovább –
              az otthonzona.com-on megtalálod!
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <img src={aboutUs2} className="max-w-full h-auto" alt="About Us 2" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
