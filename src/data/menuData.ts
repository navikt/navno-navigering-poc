import { MenuData } from "./types";

export const menuData: MenuData = {
  title: "nav.no",
  områder: [
    {
      title: "Arbeidssøker eller permittert",
      beskrivelse: "Om jobb, registrering, CV og dagpenger",
      sider: ["Arbeidsledig", "Permittert", "Har søkt dagpenger", "Utenfor arbeidslivet lenge", "Jeg er ung", "Ledige stillinger"],
    },
    {
      title: "Sykdom",
      beskrivelse: "Om sykepenger, sykmelding og hvordan komme tilbake i jobb",
      sider: ["I fare for å bli syk", "Syk hva nå", "Yrkesskade", "Har vært syk lenge"],
    },
    {
      title: "Pensjon",
      beskrivelse:
        "Om alderspensjon, beregne og søke pensjon, AFP, utland og pensjon",
      sider: ["Snart pensjonist", "Blir pensjonist", "Er pensjonert"],
    },
    {
      title: "Barn",
      beskrivelse:
        "Barn, sykdom, foreldrepenger, alene med barn, kontantstøtte",
      sider: ["Skal få barn", "Alene med barn", "Sykt barn"],
    },
    {
      title: "Økonomisk hjelp",
      beskrivelse:
        "Nødhjelp, bostøtte",
      sider: ["Jeg har ikke penger", "Trenger sted å bo", "Trenger hjelp"],
    },
    {
      title: "Ditt NAV",
      beskrivelse:
        "Innloggede tjenester, dialog med nav, personlig oppfølging, mine søknader, mine utbetalinger",
      sider: ["Min innboks", "Mine utbetalinger", "Mine søknader"],
    },
    {
      title: "Arbeidsgiver",
      beskrivelse:
        "Permittere ansatte, ansatt er syk, tilrettelegge, kontakt med NAV",
      sider: ["Ansatt er sykemeldt", "Tilrettelegge for ansatt", "Permittere ansatte"],
    },
    {
      title: "Sammarbeidspartnere",
      beskrivelse:
        "Leger, bostyrer, tiltaksarrangør, kommune, aldershjem",
      sider: ["Lege eller annen behandler", "Bostyrer", "Tiltaksarrangør eller leverandør", "Jobber med hjelpemidler i kommune/leverandør"],
    },
  ],
};
