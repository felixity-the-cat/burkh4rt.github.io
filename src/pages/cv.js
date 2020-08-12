import React from "react"
import { Helmet } from "react-helmet"

import CV19 from "../docs/cv19.pdf"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Curriculum Vitae for Michael Burkhart</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
      </Helmet>

      <body>
        <embed
          style={{ position: "absolute", top: "0", left: "0", margin: "0" }}
          width="100%"
          height="100%"
          src={CV19}
          type="application/pdf"
        />
      </body>
    </>
  )
}
