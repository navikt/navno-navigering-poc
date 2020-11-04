import { MenuData } from "./types";

export const menuData: MenuData = {
  title: "nav.no",
  områder: [
    {
      title: "Arbeidssøker eller permittert",
      beskrivelse: "Om jobb, registrering, CV og dagpenger",
      sider: ["Arbeidsledig", "Permittert", "Har søkt dagpenger"],
    },
    {
      title: "Sykdom",
      beskrivelse: "Om sykepenger, sykmelding og hvordan komme tilbake i jobb",
      sider: ["I fare for å bli syk", "Syk hva nå"],
    },
    {
      title: "Pensjon",
      beskrivelse:
        "Om alderspensjon, beregne og søke pensjon, AFP, utland og pensjon",
      sider: ["Snart pensjonist", "Blir pensjonist", "Er pensjonert"],
    },
  ],
};
