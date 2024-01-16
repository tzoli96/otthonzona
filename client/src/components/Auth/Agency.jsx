import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../Elements/Input";
import signupImage from "../../pictures/signup.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { request } from "../../utils/request";
import convertFormDataToJson from "../../utils/fd";

function SignUp() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const json = convertFormDataToJson(e.target);
    request("/api/auth/send-details", {
      body: JSON.stringify(json),
      method: "POST",
    }).then((data) => {
      if (data.error) {
        return alert(data.error);
      }
      setEmailSent(true); // Set state
      // window.location = "/login"; // Don't redirect yet
    });
  };

  return (
    <div>
      <Navbar />
      <div className="md:grid grid-cols-2 bg-gray-50">
        <div>
          <img className="min-w-full min-h-full" src={signupImage} />
        </div>
        <div className="p-6 md:p-16 flex justify-center items-center bg-[rgb(247,247,247)]">
          <div>
            {emailSent ? (
              <h1>
                Köszönjük, hogy regisztráltál! Kollégáink hamarosan felveszik
                veled a kapcsolatot.
              </h1>
            ) : (
              <>
                <h1 className="text-4xl font-bold my-8">
                  <span className="text-orange">Otthon Zóna</span>
                  <br />
                  Ingatlan iroda létrehozása
                </h1>
                <p className="text-lightgrey text-lg w-full md:w-2/3">
                  Kérjük, add meg az ingatlan iroda adatait. A regisztráció után
                  kollégáink felveszik veled a kapcsolatot, hogy egyeztessék a
                  további részleteket.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-2 w-full md:w-2/3">
                    <div className="mt-8">
                      <p className="font-bold my-2">Vezetéknév</p>
                      <Input
                        placeholder="Írd be a vezetékneved"
                        name="lastName"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mt-8">
                      <p className="font-bold my-2">Keresztnév</p>
                      <Input
                        placeholder="Írd be a keresztneved"
                        name="firstName"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="my-2 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Irodai neve</p>
                    <Input
                      placeholder="Írd be az iroda nevét"
                      name="officeName"
                      type="text"
                      required
                    />
                  </div>
                  <div className="my-2 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Irodai email cím</p>
                    <Input
                      placeholder="Írd be az e-mail címed"
                      name="officeEmail"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Irodai telefonszám</p>
                    <div
                      className="grid gap-2"
                      style={{ gridTemplateColumns: "80px 1fr" }}
                    >
                      <Input
                        value="+36"
                        className="text-center font-bold text-gray-600"
                        disabled={true}
                      />
                      <Input
                        placeholder="Írd be a telefonszámot"
                        name="officePhone"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Hálózat</p>
                    <div className="grid gap-2">
                      <Input
                        placeholder="Írd be a hálózatot"
                        name="network"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Cégnév</p>
                    <div className="grid gap-2">
                      <Input
                        placeholder="Írd be a cégnevet"
                        name="officeCompany"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-4 w-full md:w-2/3">
                    <p className="font-bold my-2">Székhely</p>
                    <div className="grid gap-2">
                      <Input
                        placeholder="Írd be a székhelyet"
                        name="officeAddress"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 mt-8">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="termsAndConditions"
                        required
                        className="mr-5"
                      />
                      <span className="text-sm">
                        A regisztráció gombra kattintva elfogadod az
                        otthonzona.com{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          to="/otthonzona_aszf.pdf"
                          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        >
                          Adatvédelmi Szabályzatát
                        </Link>{" "}
                        és az{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          to="/adatkezelesi_tajekoztato.pdf"
                          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        >
                          Általános Szerződési Feltételeit
                        </Link>
                        .
                      </span>
                    </label>
                  </div>
                  <div className="w-full md:w-2/3 mt-8">
                    <button type="submit" className="orange-button !w-full">
                      Regisztráció
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
