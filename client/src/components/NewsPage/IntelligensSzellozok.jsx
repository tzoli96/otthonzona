import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const IntelligensSzellozok = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white px-5 py-10">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-[#006FB9] text-3xl font-extrabold text-center mb-6">
            Az intelligens szellőzőrendszerek előnyei
          </h1>
          <article className="text-md mt-4">
            <h1 className="text-md font-extrabold mb-6">
              Építészeti tudatosság fejlődése
            </h1>
            <p className="mb-6">
              Az építészeti trendek és szabályozások változásával új
              technológiák születnek annak érdekében, hogy a fenntarthatóság és
              energiahatékonyság jegyében megfeleljenek folyamatosan változó
              szükségleteinknek. Ilyen modern technológiák közé tartozik az
              intelligens szellőző rendszer, mely képesek teljes mértékben
              kiküszöbölni a jelentős energiaveszteséggel járó, elavult
              megoldásokat, mint például az ablakon keresztüli szellőztetés.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Az ingatlanpiac kihívásai a megújuló energiaforrások integrációja
            </h1>
            <p className="mb-6">
              Az épületek optimális működésében az energiahatékonyságot és
              fenntarthatóságot tekintve kiemelkedő szerepe van a megújuló
              energiaforrások integrációjának. Az EU tagállamok egyre inkább
              felismerik és előírják a szabályozott szellőzés bevezetését az
              épületekben.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Korszerű energiatakarékosság és egészséges környezet
            </h1>
            <p className="mb-6">
              A korszerű épületekben a jó hőszigetelés és nyílászárók mellett a
              modern szellőzőrendszerek jelentős mértékben hozzájárulnak az
              energiahatékony felhasználáshoz, emellett biztosítják a
              folyamatosan cserélődő friss levegőt, mely nélkülözhetetlen az
              egészséges környezet megteremtéséhez.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Szabályozatlan szellőzés hátrányai
            </h1>
            <p className="mb-6">
              A szabályozatlan légcsere és az ablakon keresztüli szellőztetés
              jelentős fűtési hőveszteséggel jár, melynek mértéke nem
              megfelelően szigetelt épületek esetében az 50%- ot is
              meghaladhatja.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Energiahatékonyság és a szabályozott szellőzés szükségessége
            </h1>
            <p className="mb-6">
              A fenntarthatóság jegyében a szellőzés és energiahatékonyság
              harmonikus egyesítése kiemelkedően fontos. Az intelligens
              szellőzőrendszerek előnye, hogy folyamatosan érzékelik a levegő
              minőségét és optimalizálják a légutánpótlást, légelszívást, akár a
              hővisszanyerést is.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Hővisszanyerést biztosító modern szellőzőrendszerek
            </h1>
            <p className="mb-6">
              Az intelligens szellőzőrendszereknek komplex kihívásoknak kell
              szembenézniük, beleértve a változó környezeti feltételekhez való
              alkalmazkodást és az energiafogyasztás minimalizálását. Az
              elektromos árammal működő hővisszanyerős szellőzőrendszer az
              elhasznált, kidobott levegő hőmérsékletét visszanyeri.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Mechanikusan működő, páraszabályozott szellőzőrendszerek
            </h1>
            <p className="mb-6">
              A páraszabályozott szellőzőrendszerek mechanikus működésük által
              szintén hatékonyabb és gazdaságosabb megoldást nyújtanak a
              hagyományos szellőztetésnél. A légcsere a beltéri levegő
              páratartalmának érzékelése által megy végbe, ezzel biztosítva a
              kül- és és beltéri levegő folyamatos cserélődését, valamint a
              friss levegő szükségszerű automatikus pótlását.
            </p>
            <h1 className="text-md font-extrabold mb-6">
              Építészeti tudatosság előnyei
            </h1>
            <p className="mb-6">
              Azok, akik az építészeti tudatosság és fenntarthatóság mellett
              döntenek, előnyt élveznek az innovatív és fenntartható
              szellőztetési megoldásokkal, mely - mindamellett, hogy “luxus” - a
              létfontosságú egészséges környezetet, optimális kényelmet és
              fenntarthatóságot biztosítja a lakók számára.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IntelligensSzellozok;
