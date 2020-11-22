import { getOmrådeFraTittel } from "../data/menuDataUtils";
import { DemoContextActions } from "../DemoControlls/demoContext";
import { OppgaveConfig } from "./brukertestState";

const testDesign: DemoContextActions[] = [
  "brukertestMinimalist",
  "brukertestMaksimalist",
  "brukertestFavoritt",
];

function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(array.length * Math.random())];
}

export const oppgaver: OppgaveConfig[] = [
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Pensjon")!,
        side: "Vil beregne fremtidig pensjon",
      },
    ],
    oppgaveTekst:
      "Se for deg at du snart skal pensjonere deg og lurer på hvor mye du vil få i pensjon",
    design: randomFromArray(testDesign),
  },
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Ditt NAV")!,
        side: "Min innboks",
      },
    ],
    oppgaveTekst:
      "Du har fått SMS fra NAV med beskjed om at det ligger en melding til deg på nav.no. Prøv å finne frem til meldingen du har fått fra NAV.",
    design: randomFromArray(testDesign),
  },
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Arbeidssøker eller permittert")!,
        side: "Ledige stillinger",
      },
    ],
    oppgaveTekst:
      "Se for deg at du leter etter ny jobb og ønsker å finne ledige stillinger",
    design: randomFromArray(testDesign),
  },
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Kontakt oss")!,
        side: "Ring til NAV kontaktsenter",
      },
    ],
    oppgaveTekst:
      "Se for deg at du ønsker å komme i kontakt med NAV og vil finne et telefonnummer du kan ringe",
    design: randomFromArray(testDesign),
  },
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Statistikk")!,
        side: "Statistikk over arbeidsledige",
      },
      {
        område: getOmrådeFraTittel("Nyheter")!,
        side: "Ny statistikk over arbeidsledighet i Norge",
      },
    ],
    oppgaveTekst:
      "Se for deg at du ønsker å finne ut hvor mange som var arbeidsledige i Norge i september 2020",
    design: randomFromArray(testDesign),
  },
  {
    løsninger: [
      {
        område: getOmrådeFraTittel("Familie")!,
        side: "Saksbehandlingstider",
      },
      {
        område: getOmrådeFraTittel("Familie")!,
        side: "Skal søke kontantstøtte",
      },
    ],
    oppgaveTekst:
      "Se for deg at du har søkt om kontantstøtte til barnet ditt, og lurer på hvor lang tid det tar før du får svar på søknaden din",
    design: randomFromArray(testDesign),
  },
];

export function getRandomOppgaver(): OppgaveConfig[] {
  return oppgaver.sort(() => 0.5 - Math.random());
}
