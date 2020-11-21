import amplitude from "amplitude-js";

const getApiKey = () => {
  if (window.location.href.includes("www.nav.no")) {
    return "645e5afc8fe9d8249a5d07596b1a9117"; // prod
  }
  return "645e5afc8fe9d8249a5d07596b1a9117"; // dev
};

export const loggInstance = amplitude.getInstance();

loggInstance.init(getApiKey(), "", {
  apiEndpoint: "amplitude.nav.no/collect",
  saveEvents: false,
  includeUtm: true,
  batchEvents: false,
  includeReferrer: true,
});

export const logEvent = (eventName: string, ekstraData?: object) => {
  console.log(`Sending ${eventName}`, ekstraData);
  loggInstance.logEvent(eventName, {
    appName: "nano-navigering-poc",
    ...ekstraData,
  });
};
