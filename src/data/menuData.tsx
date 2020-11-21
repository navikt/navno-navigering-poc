import * as React from "react";
import { MenuData } from "./types";
import PensjonIkon from "../Ikoner/Pensjon";
import ØkonomiIkon from "../Ikoner/Økonomi";
import ArbeidIkon from "../Ikoner/ArbeidIkon";
import FamilieIkon from "../Ikoner/FamilieIkon";
import DittNavIkon from "../Ikoner/DittNavIkon";
import SykdomIkon from "../Ikoner/SykdomIkon";
import ArbeidsgiverIkon from "../Ikoner/Arbeidsgiver";
import SamarbeidspartnerIkon from "../Ikoner/SamarbeidspartnerIkon";
import NyhetsIkon from "../Ikoner/NyhetsIkon";
import StatistikkIkon from "../Ikoner/StatistikkIkon";
import Korona from "../Ikoner/Korona";
import Eøs from "../Ikoner/EØS";
import KlageIkon from "../Ikoner/KlageIkon";
import TilOgFraIkon from "../Ikoner/TilOgFraIkon";
import NedsattFunksjonIkon from "../Ikoner/NedsattFunksjonIkon";
import KontaktIkon from "../Ikoner/KontaktIkon";
import FlereTemaIkon from "../Ikoner/FlereTemaIkon";

export const menuData: MenuData = {
  title: "nav.no",
  områder: [
    {
      title: "Ditt NAV",
      ikon: <DittNavIkon />,
      beskrivelse:
        "Innloggede tjenester, dialog med nav, personlig oppfølging, mine søknader, mine utbetalinger",
      sider: ["Min innboks", "Mine utbetalinger", "Mine søknader"],
      toppTreKandidat: true,
    },
    {
      title: "Koronavirus",
      ikon: <Korona />,
      beskrivelse: "Hva gjelder i min situasjon?",
      sider: ["Jeg har blitt syk", "Jeg har blitt permittert"],
    },
    {
      title: "EØS-saken",
      ikon: <Eøs />,
      beskrivelse: "Informasjon og status",
      sider: ["Jeg har mistet rettighetene mine"],
      toppTreKandidat: true,
    },
    {
      title: "Pensjon",
      ikon: <PensjonIkon />,
      beskrivelse:
        "Beregne og søke pensjon, avtalefestetpensjon, andre pensjonsordninger, alderspensjon og utland ",
      sider: [
        "Vil beregne fremtidig pensjon",
        "Skal søke om alderspensjon",
        "Skal søke om avtalefestet pensjon",
        "Bor i Norge og skal søke pensjon fra utlandet",
        "Vil ta med alderspensjon til utlandet",
        "Om alderspensjon",
        "Om andre pensjonsordninger",
        "Om omsorgsarbeid og pensjonsopptjening",
        "Skjema",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Kontakt oss",
      ikon: <KontaktIkon />,
      beskrivelse: "Ring, send melding eller finn oss i ditt nærmiljø",
      footerKandidat: true,
      sider: [
        "Ring til NAV kontaktsenter",
        "Send en melding",
        "Finn ditt lokalkontor",
        "Send skjema",
      ],
    },
    {
      title: "Arbeidssøker eller permittert",
      ikon: <ArbeidIkon />,
      beskrivelse:
        "Jobb, registrering, dagpenger og oppfølging, ledige stillinger",
      sider: [
        "Har mistet jobben",
        "Er permittert",
        "Har søkt dagpenger",
        "Er lærling",
        "Har vært utenfor arbeidslivet lenge",
        "Ung og lite jobberfaring",
        "Ledige stillinger",
        "Skjema",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Helse",
      ikon: <SykdomIkon />,
      beskrivelse:
        "Sykepenger, sykmelding, AAP, uføretrygd, yrkesskade, yrkessykdom og sykdom i familien",
      sider: [
        "Sykmeldt",
        "Skal søke eller har AAP",
        "Skal søke eller har uføretrygd",
        "Sykdom i familien",
        "Har yrkesskade eller yrkessykdom",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Familie",
      ikon: <FamilieIkon />,
      beskrivelse:
        "Venter barn, alene med barn, mistet et familiemedlem, kontantstøtte, barnetrygd, barnebidrag og foreldreansvar",
      sider: [
        "Venter barn",
        "Alene med barn",
        "Skal søke kontantstøtte",
        "Har mistet et familiemedlem",
        "Betaler eller mottar barnebidrag",
        "Har foreldreansvar (farskap og morskap)",
        "Skjema/søknad",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Økonomisk sosialhjelp og rådgivning",
      ikon: <ØkonomiIkon />,
      beskrivelse:
        "Økonomisk sosialhjelp, nødhjelp, rådgivning og gjeldsrådgivning",
      sider: [
        "Trenger økonomisk sosialhjelp",
        "Trenger økonomisk rådgivning/gjeldsrådgivning",
        "Trenger hjelp til bolig",
        "Er i en nødssituasjon",
        "Trenger råd og veiledning",
        "Søk økonomsik sosialhjelp",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Nedsatt funksjonsevne",
      ikon: <NedsattFunksjonIkon />,
      beskrivelse:
        "Hjelpemidler, tilrettelegging, tolketjenesten, bil og flere tjenester",
      sider: [
        "Skal søke om et hjelpemiddel",
        "Trenger tjenester (tolk, bil m.fl.)",
        "Trenger funksjonsassistanse",
        "Lese- og skrivevansker",
        "Nedsatt syn",
        "Nedsatt hørsel",
        "Vansker med tale og språk",
        "Vansker med å huske, planlegge og organisere",
        "Vansker med bevegelse og forflytning",
        "Skjema",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Til eller fra Norge",
      ikon: <TilOgFraIkon />,
      beskrivelse: "Jobb og opphold i utlandet, jobb og opphold i Norge",
      sider: [
        "Skal jobbe eller oppholde meg i utlandet",
        "Ønsker jobb eller opphold i Norge",
        "Skjema",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Arbeidsgiver",
      ikon: <ArbeidsgiverIkon />,
      beskrivelse:
        "Permittere ansatte, ansatt er syk, tilrettelegge, kontakt med NAV",
      contextKandidat: true,
      sider: [
        "Ansatt er sykemeldt",
        "Tilrettelegge for ansatt",
        "Permittere ansatte",
      ],
    },
    {
      title: "Samarbeidspartner",
      ikon: <SamarbeidspartnerIkon />,
      beskrivelse: "Leger, bostyrer, tiltaksarrangør, kommune, aldershjem",
      contextKandidat: true,
      sider: [
        "Lege eller annen behandler",
        "Bostyrer",
        "Tiltaksarrangør eller leverandør",
        "Jobber med hjelpemidler i kommune/leverandør",
      ],
    },
    {
      title: "Klage",
      ikon: <KlageIkon />,
      footerKandidat: true,
      beskrivelse: "Klage, feil, hjelp, har blitt behandlet dårlig",
      sider: [
        "Jeg har blitt behandlet dårlig",
        "Jeg vil klage på vedtak",
        "Skjema",
        "Saksbehandlingstider",
        "Utbetalingsdatoer",
      ],
    },
    {
      title: "Nyheter",
      ikon: <NyhetsIkon />,
      beskrivelse: "Nyheter, endringer, for journalister, EØS-saken",
      toppTreKandidat: true,
      sider: [
        "Grunnbelløpet endres i dag",
        "Endring i pensjonsoppgjøret 2020",
        "Ny NAV-direktør",
        "Koronasituasjonen fortsetter",
      ],
    },
    {
      title: "Statistikk",
      ikon: <StatistikkIkon />,
      beskrivelse: "Nyheter, tall",
      footerKandidat: true,
      sider: [
        "Ny undersøkelse",
        "Flere er arbeidsledige",
        "Rekkordstor pågang",
      ],
    },
    /*
    {
      title: "Flere temaer",
      ikon: <FlereTemaIkon />,
      beskrivelse:
        "Saksbehandlingstider, utbetalinger, satser, kurs, innkreving og innbetaling,meldekort",
      sider: [
        "Skal sjekke saksbehandlingstid",
        "Skal sjekke utbetalinger",
        "Skal sende meldekort",
        "Skal sjekke stønadssatsen min",
        "Skal sjekke kurs fra NAV",
        "Om innkreving fra NAV",
        "Om innbetaling til NAV",
      ],
    },
     */
  ],
};
