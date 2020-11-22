import { createReducerContext } from "react-use";

export type DemoContextActions =
  | "skjulMeny"
  | "visMeny"
  | "toggleKontaktOssIBanner"
  | "visIkoner"
  | "skjulIkoner"
  | "ikkeVisUndersiderIMeny"
  | "visUndersiderIMeny"
  | "visBrødsmuler"
  | "skjulBrødsmuler"
  | "visUndersiderPaForside"
  | "skjulUndersiderPaForside"
  | "toggleToppTre"
  | "toggleBorder"
  | "toggleChevron"
  | "toggleOmrådebeskrivelse"
  | "toggleOmrådebeskrivelseNavigasjonsside"
  | "toggleContextNavigering"
  | "toggleFooterNavigering"
  | "toggleUndersiderIFooter"
  | "toggleContextTabs"
  | "toggleSøkIHeader"
  | "toggleSøkIMeny"
  | "toggleTillatTreIBredden"
  | "brukertestMinimalist"
  | "brukertestMaksimalist"
  | "brukertestFavoritt"
  | "toggleIkonerToppTre"
  | "toggleSituasjonTekst"
  | "toggeleKoronabanner";

const initialState = {
  visMeny: true,
  visIkoner: true,
  undersiderIMeny: false,
  undersiderPaForside: false,
  visBrødsmuler: true,
  toppTre: false,
  ikonerToppTre: true,
  border: true,
  chevron: true,
  områdeBeskrivelse: true,
  contextNavigering: false,
  footerNavigering: false,
  undersiderIFooter: true,
  contextTabs: false,
  søkIHeader: false,
  søkIMeny: false,
  tillatTreLenkerIBredden: false,
  coronaBanner: false,
  situasjonTekst: false,
  kontaktOssIBanner: false,
  områdebeskrivelseNavigasjonsside: true,
};

type State = typeof initialState;

const reducer = (state: State, action: DemoContextActions) => {
  switch (action) {
    case "skjulMeny":
      return {
        ...state,
        visMeny: false,
      };
    case "toggleKontaktOssIBanner":
      return {
        ...state,
        kontaktOssIBanner: !state.kontaktOssIBanner,
      };
    case "visMeny":
      return {
        ...state,
        visMeny: true,
      };
    case "skjulIkoner":
      return {
        ...state,
        visIkoner: false,
      };
    case "visIkoner":
      return {
        ...state,
        visIkoner: true,
      };
    case "ikkeVisUndersiderIMeny":
      return {
        ...state,
        visMeny: true,
        undersiderIMeny: false,
      };
    case "visUndersiderIMeny":
      return {
        ...state,
        visMeny: true,
        undersiderIMeny: true,
      };
    case "visBrødsmuler":
      return {
        ...state,
        visBrødsmuler: true,
      };
    case "skjulBrødsmuler":
      return {
        ...state,
        visBrødsmuler: false,
      };
    case "skjulUndersiderPaForside":
      return {
        ...state,
        undersiderPaForside: false,
      };
    case "visUndersiderPaForside":
      return {
        ...state,
        undersiderPaForside: true,
      };
    case "toggleToppTre":
      return {
        ...state,
        toppTre: !state.toppTre,
      };
    case "toggleBorder":
      return {
        ...state,
        border: !state.border,
      };
    case "toggleChevron":
      return {
        ...state,
        chevron: !state.chevron,
      };
    case "toggleOmrådebeskrivelse":
      return {
        ...state,
        områdeBeskrivelse: !state.områdeBeskrivelse,
      };
    case "toggleOmrådebeskrivelseNavigasjonsside":
      return {
        ...state,
        områdebeskrivelseNavigasjonsside: !state.områdebeskrivelseNavigasjonsside,
      };
    case "toggleContextNavigering":
      return {
        ...state,
        contextNavigering: !state.contextNavigering,
      };
    case "toggleFooterNavigering":
      return {
        ...state,
        footerNavigering: !state.footerNavigering,
      };
    case "toggleUndersiderIFooter":
      return {
        ...state,
        footerNavigering: true,
        undersiderIFooter: !state.undersiderIFooter,
      };
    case "toggleContextTabs":
      return {
        ...state,
        contextTabs: !state.contextTabs,
      };
    case "toggleSøkIMeny":
      return {
        ...state,
        søkIMeny: !state.søkIMeny,
      };
    case "toggleSøkIHeader":
      return {
        ...state,
        søkIHeader: !state.søkIHeader,
      };
    case "toggleTillatTreIBredden":
      return {
        ...state,
        tillatTreLenkerIBredden: !state.tillatTreLenkerIBredden,
      };
    case "brukertestMinimalist":
      return {
        ...initialState,
        områdeBeskrivelse: false,
        visBrødsmuler: false,
        områdebeskrivelseNavigasjonsside: false,
      };
    case "brukertestMaksimalist":
      return {
        ...initialState,
        undersiderPaForside: true,
        søkIHeader: true,
        søkIMeny: true,
        contextNavigering: true,
        footerNavigering: true,
        undersiderIFooter: true,
        toppTre: true,
        coronaBanner: true,
        situasjonTekst: true,
        undersiderIMeny: true,
        tillatTreLenkerIBredden: true,
        kontaktOssIBanner: true,
      };
    case "brukertestFavoritt":
      return {
        ...initialState,
        tillatTreLenkerIBredden: true,
        chevron: false,
        border: false,
        toppTre: false,
        ikonerToppTre: false,
        footerNavigering: true,
        undersiderIFooter: false,
        contextNavigering: true,
        coronaBanner: true,
        situasjonTekst: true,
        kontaktOssIBanner: true,
      };
    case "toggleIkonerToppTre":
      return {
        ...state,
        ikonerToppTre: !state.ikonerToppTre,
        toppTre: true,
      };
    case "toggeleKoronabanner":
      return {
        ...state,
        coronaBanner: !state.coronaBanner,
      };
    case "toggleSituasjonTekst":
      return {
        ...state,
        situasjonTekst: !state.situasjonTekst,
      };
  }
};

export const [useContext, Provider] = createReducerContext(
  reducer,
  initialState
);

export const useDemoContext = useContext;
export const DemoProvider = Provider;
