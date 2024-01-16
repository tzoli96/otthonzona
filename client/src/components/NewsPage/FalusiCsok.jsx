import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MekkoratVehetunk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white px-5 py-10">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-[#006FB9] text-3xl font-extrabold text-center mb-6">
            A Falusi CSOK összege új lakóház vásárlásakor jelenleg, illetve
            2024-től
          </h1>
          <article className="text-md">
            <p>
              Új lakóház vásárlásánál 2024-ben a jelenlegi (2023. végéig
              érvényes) CSOK támogatási összegek lesznek érvényesek a preferált
              kistelepüléseken.{" "}
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>1 gyermek esetén 600 ezer forint</li>
                <li>2 gyermek esetén 2,6 millió forint</li>
                <li>3 vagy több gyermek esetén 10 millió forint</li>
              </ul>
            </p>
            <p className="mt-4">
              Fontos, hogy a támogatás kizárólag az új építésű, egylakásos
              lakóépületek esetében marad meg. Vagyis az új építésű, többlakásos
              lakóépületekben lévő önálló lakások megvételéhez nem lesz
              felhasználható 2024-től a kedvezmény.
            </p>
            <p className="mt-4">
              A Falusi CSOK összege kistelepülésen történő használt lakás
              vásárlása esetén, amennyiben ezzel együtt korszerűsítés és/vagy
              bővítés is történik
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>
                  1 gyermek esetén 1 millió forint (a jelenlegi 600 ezer forint
                  helyett)
                </li>
                <li>
                  2 gyermek esetén 4 millió forint (a jelenlegi 2,6 millió
                  forint helyett)
                </li>
                <li>
                  3, vagy több gyermek esetén 15 millió forint (a jelenlegi 10
                  millió forint helyett)
                </li>
              </ul>
            </p>
            <p className="mt-4">
              A kapott támogatásnak legfeljebb a fele fordítható a használt
              lakás megvásárlására!
            </p>
            <p className="mt-4">
              A Falusi CSOK összege meglévő ingatlan korszerűsítése esetén
            </p>
            <p className="mt-4">
              A már meglévő, akár korábban CSOK támogatással vásárolt
              lakóingatlanok korszerűsítésére is igényelhető marad 2024-től a
              Falusi CSOK.
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>
                  1 gyermek esetén 500 ezer forint (a jelenlegi 300 ezer forint
                  helyett)
                </li>
                <li>
                  2 gyermek esetén 2 millió forint (a jelenlegi 1,3 millió
                  forint helyett)
                </li>
                <li>
                  3, vagy több gyermek esetén 7,5 millió forint (a jelenlegi 5
                  millió forint helyett)
                </li>
              </ul>
            </p>
            <p className="mt-4">
              A támogatás összege bővítés, vagy bővítéssel egyidejűleg
              megvalósuló korszerűsítés esetén.
            </p>
            <p className="mt-4">
              Bővítésnek az minősül, ha legalább egy lakószobával nő az
              ingatlan, illetve megfelelő lehet a tetőtér- beépítés,
              emelet-ráépítés is. Egy meglévő, jelenleg nem lakószobaként
              funkcionáló helyiség lakószobává átalakítása ugyanakkor nem
              megfelelő.
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>
                  1 gyermek esetén 600 ezer forint (a jelenlegi 300 ezer forint
                  helyett)
                </li>
                <li>
                  2 gyermek esetén 2 millió forint (a jelenlegi 1,3 millió
                  forint helyett)
                </li>
                <li>
                  3, vagy több gyermek esetén 7,5 millió forint (a jelenlegi 5
                  millió forint helyett)
                </li>
              </ul>
            </p>
            <p className="mt-4">A kistelepüléseken megmarad a CSOK hitel is!</p>
            <p className="mt-4">
              Jelentős pénzügyi előnyt jelent a piaci hitelekhez képest a
              maximum 3%-os fix kamatú CSOK hitel, ami a kistelepüléseken
              elérhető marad azok számára, akik legalább 2 gyerekre igénylik a
              CSOK-ot.
            </p>
            <p className="mt-4">
              Új lakás vásárlása esetén az elérhető maximális hitelösszeg:
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>1 gyermek esetén 0 forint</li>
                <li>2 gyermek esetén 10 millió forint</li>
                <li>3, vagy több gyermek esetén 15 millió forint</li>
              </ul>
            </p>
            <p className="mt-4">
              Használt lakás vásárlással egy időben megvalósuló korszerűsítés
              és/vagy bővítés esetén az elérhető maximális hitelösszeg:
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>1 gyermek esetén 0 forint</li>
                <li>2 gyermek esetén 10 millió forint</li>
                <li>3, vagy több gyermek esetén 15 millió forint</li>
              </ul>
            </p>
            <p className="mt-4">
              Meglévő ingatlan korszerűsítése és/vagy bővítése esetén elérhető
              maximális hitelösszeg:
            </p>
            <p className="mt-4">
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>1 gyermek esetén 0 forint</li>
                <li>2 gyermek esetén 5 millió forint</li>
                <li>3, vagy több gyermek esetén 7,5 millió forint</li>
              </ul>
            </p>
          </article>
          <p className="font-semibold text-md mt-4">
            Forrás:
            <a
              href="https://bankmonitor.hu/mediatar/cikk/falusi-csok-2024-uj-feltetelek-es-telepuleslista/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006FB9] hover:underline"
            >
              {" "}
              Bankmonitor.hu
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MekkoratVehetunk;
