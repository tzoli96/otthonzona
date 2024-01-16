import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const FalusiCsokBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white px-5 py-10">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-[#006FB9] text-3xl font-extrabold text-center mb-6">
            Mekkora lakást vehetünk most 35 millió forintból?
          </h1>
          <article className="text-md mt-4">
            <p>
              Pesten egy garzonlakást lehet venni, ha valaki egy korábbi lakását
              eladja 25 millióért és felvesz rá egy tízmilliós hitelt, több
              vidéki városban családi ház is kijön ennyi pénzből.
            </p>
            <p className="mt-4">
              Nem ez jut eszünkbe először az ünnepi időszakról, de kimondottan
              sokan ilyenkor gondolkoznak el a költözésen – az ingatlan.com
              adatai szerint nem sokkal ez után, január elején szoktak általában
              megdőlni a keresleti és a látogatottsági csúcsok. Erre most rátesz
              egy lapáttal az, hogy a kamatok csökkennek.
            </p>
            <p className="mt-4">
              Az ingatlan.com és a money.com azt nézte meg, hogy ha valaki egy
              korábbi ingatlan eladásából vagy másmilyen forrásból 25 millió
              forint önerőt le tud rakni, erre felvesz 10 millió forint
              lakáshitelt, akkor abból a 35 millióból milyen lakást tud venni.
              Ez azért még a szerencsésebb forgatókönyv – egy ilyen hitel a
              januártól életbe lépő 7,3 százalékos thm-plafonnal havi 80 ezer
              forint alatti törlesztőrészletet jelent.
            </p>
            <p className="mt-4">
              Ennyi pénzből Budapest legtöbb részén egy jó minőségű garzonlakás
              jön ki. Pesterzsébeten, Csepelen vagy Soroksáron majdnem 50
              négyzetméteres lakást is lehet találni 35 millióért (jó minőségű
              ingatlanról van szó), de persze a pesti Belvárosban már csak 22
              négyzetmétert lehet kihozni egy ekkora keretből.
            </p>
            <p className="mt-4">
              Elsőre meglepő lehet, de nem ez a legdrágább hely az országban:
              Tihanyban egy 19 négyzetméteres minilakásra elég csak a 35 millió
              forint. Vidéken azért sok helyen egy-egy korszerű családi ház is
              befér 35 millióba. Az ellenkező végpont a Jász-Nagykun-Szolnok
              megyei Kunmadaras, ott akár 507 négyzetméter is kijönne egy ekkora
              összegből – már ha volna ilyen lakás, de nyilván ez csak egy
              elméleti példa az ottani átlagos négyzetméterárral számolva.
            </p>
          </article>
          <p className="font-semibold text-md mt-4">
            Forrás:
            <a
              href="https://hvg.hu/gazdasag/20231218_Mekkora_lakast_vehet_aki_ossze_tud_gyujteni_35_millio_forin tot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006FB9] hover:underline"
            >
              {" "}
              HVG.hu
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FalusiCsokBlog;
