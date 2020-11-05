import * as React from "react";
import { MenuData } from "./types";
import PensjonIkon from "../Ikoner/Pensjon";
import ØkonomiIkon from "../Ikoner/Økonomi";
import ArbeidIkon from "../Ikoner/ArbeidIkon";
import BarnIkon from "../Ikoner/BarnIkon";
import DittNavIkon from "../Ikoner/DittNavIkon";
import SykdomIkon from "../Ikoner/SykdomIkon";
import ArbeidsgiverIkon from "../Ikoner/Arbeidsgiver";
import SammarbeidspartnerIkon from "../Ikoner/SammarbeidspartnerIkon";

export const menuData: MenuData = {
  title: "nav.no",
  områder: [
    {
      title: "Arbeidssøker eller permittert",
      ikon: <ArbeidIkon />,
      beskrivelse: "Om jobb, registrering, CV og dagpenger",
      sider: [
        "Arbeidsledig",
        "Permittert",
        "Har søkt dagpenger",
        "Utenfor arbeidslivet lenge",
        "Jeg er ung",
        "Ledige stillinger",
      ],
    },
    {
      title: "Sykdom",
      ikon: <SykdomIkon />,
      beskrivelse: "Om sykepenger, sykmelding og hvordan komme tilbake i jobb",
      sider: [
        "I fare for å bli syk",
        "Syk hva nå",
        "Yrkesskade",
        "Har vært syk lenge",
      ],
    },
    {
      title: "Pensjon",
      ikon: <PensjonIkon />,
      beskrivelse:
        "Om alderspensjon, beregne og søke pensjon, AFP, utland og pensjon",
      sider: ["Snart pensjonist", "Blir pensjonist", "Er pensjonert"],
    },
    {
      title: "Barn",
      ikon: <BarnIkon />,
      beskrivelse:
        "Barn, sykdom, foreldrepenger, alene med barn, kontantstøtte",
      sider: ["Skal få barn", "Alene med barn", "Sykt barn"],
    },
    {
      title: "Økonomisk hjelp",
      ikon: <ØkonomiIkon />,
      beskrivelse: "Nødhjelp, bostøtte",
      sider: ["Jeg har ikke penger", "Trenger sted å bo", "Trenger hjelp"],
    },
    {
      title: "Ditt NAV",
      ikon: <DittNavIkon />,
      beskrivelse:
        "Innloggede tjenester, dialog med nav, personlig oppfølging, mine søknader, mine utbetalinger",
      sider: ["Min innboks", "Mine utbetalinger", "Mine søknader"],
    },
    {
      title: "Arbeidsgiver",
      ikon: <ArbeidsgiverIkon />,
      beskrivelse:
        "Permittere ansatte, ansatt er syk, tilrettelegge, kontakt med NAV",
      sider: [
        "Ansatt er sykemeldt",
        "Tilrettelegge for ansatt",
        "Permittere ansatte",
      ],
    },
    {
      title: "Sammarbeidspartnere",
      ikon: <SammarbeidspartnerIkon />,
      beskrivelse: "Leger, bostyrer, tiltaksarrangør, kommune, aldershjem",
      sider: [
        "Lege eller annen behandler",
        "Bostyrer",
        "Tiltaksarrangør eller leverandør",
        "Jobber med hjelpemidler i kommune/leverandør",
      ],
    },
  ],
};
