import React from "react"

import Button from "../../layout/Button/Button.component"

export default function KontaktContent() {
  return (
    <>
      <main id="maincontent">
        <div className="mt-24 bg-graybg">
          <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
            <div className="container mx-auto bg-white rounded shadow">
              <div className="p-4 mx-auto mt-4">
                <div className="p-4 text-lg rounded">
                  <h3 className="m-2 text-3xl text-center text-black">
                    Kontakt
                  </h3>
                  <form
                    className="text-center"
                    name="kontaktskjema"
                    method="POST"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="kontaktskjema"
                    />
                    <fieldset>
                      <legend className="container m-4 mx-auto text-xl text-center">Vennligst fyll ut kontaktskjemaet nedenfor: </legend>
                      <label className="text-black">
                        Fullt navn
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
                          id="text"
                          name="navn"
                          type="text"
                          placeholder="Fullt navn"
                          required
                          aria-required
                        />
                      </label>
                      <br />
                      <label className="text-black" htmlFor="phone">
                        Telefonnummer
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
                          id="phone"
                          name="telefon"
                          type="text"
                          placeholder="Telefon"
                          required
                          aria-required
                          pattern=".[0-9]{7}"
                        />
                      </label>
                      <br />
                      <label className="text-black" htmlFor="textarea">
                        Hva ønsker du å si?
                        <br />
                        <textarea
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
                          name="tekst"
                          id="textarea"
                          required
                          aria-required
                        ></textarea>
                      </label>
                    </fieldset>
                    <Button>Send skjema</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="kontakt-filler" className="mt-48">
            <br />
            <br />
          </div>
        </div>
      </main>
    </>
  )
}