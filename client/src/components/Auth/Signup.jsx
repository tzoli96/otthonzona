import React, { useState } from "react"; // Add useState
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../Elements/Input";
import signupImage from "../../pictures/signup.png";
import { Link } from "react-router-dom";
import { request } from "../../utils/request";
import convertFormDataToJson from "../../utils/fd";
import toast from "react-hot-toast";

function SignUp() {
  const [emailSent, setEmailSent] = useState(false); // New state
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const json = convertFormDataToJson(e.target);
    if (isNaN(json.phone) || json.phone[0] === "+") {
      return toast.error("Nem megfelelő telefonszám");
    }
    json.phone = "36" + json.phone;
    request("/api/auth/register", {
      body: JSON.stringify(json),
      method: "POST",
    }).then((data) => {
      if (data.error) {
        return toast.error(data.error);
      }
      setEmailSent(true); // Set state
      // window.location = "/login"; // Don't redirect yet
    });
  };

  return (
    <div>
      <Navbar />
      <div className="lg:grid grid-cols-2 bg-gray-50">
        <div className="max-lg:hidden bg-[rgb(247,247,247)]">
          <img
            className="min-w-full min-h-full object-contain"
            src={signupImage}
          />
        </div>
        <div className="p-6 md:p-16 flex justify-center items-center bg-[rgb(247,247,247)]">
          <div>
            {emailSent ? (
              <h1>
                Kérjük, erősítsd meg az email címedet a visszaigazoló emailben
                található linken keresztül.
              </h1>
            ) : (
              <>
                <h1 className="text-4xl font-bold my-8">
                  <span className="text-orange">Otthon Zóna</span>
                  <br />
                  Profil létrehozása
                </h1>
                <p className="text-lightgrey text-lg w-full 2xl:w-2/3">
                  Kérjük, add meg az adataidat, hogy létrehozhassuk a
                  profilodat. A regisztráció után az email címedre küldünk egy
                  linket, amivel aktiválni tudod a profilodat.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-2 w-full 2xl:w-2/3">
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
                  <div className="my-2 mt-4 w-full 2xl:w-2/3">
                    <p className="font-bold my-2">E-mail cím</p>
                    <Input
                      placeholder="Írd be az e-mail címed"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4 mt-4 w-full 2xl:w-2/3">
                    <p className="font-bold my-2">Telefon</p>
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
                        placeholder="Írd be a telefonszámod"
                        name="phone"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full 2xl:w-2/3">
                    <div className="mb-4">
                      <p className="font-bold my-2">Jelszó</p>
                      <Input
                        placeholder="Írd be a jelszavad"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <p className="font-bold my-2">Jelszó újra</p>
                      <Input
                        placeholder="Írd be a jelszavad"
                        name="confirmPassword"
                        type="password"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full 2xl:w-2/3 mt-8">
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
                  <div className="w-full 2xl:w-2/3 mt-8">
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
