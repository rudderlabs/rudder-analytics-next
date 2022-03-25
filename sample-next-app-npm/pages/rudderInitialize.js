export async function rudderInitialize() {
  window.rudderanalytics = await import("rudder-sdk-js");

  window.rudderanalytics.load("<WRITE-KEY>", "<DATA-PLANE-URL>", {
    integrations: { All: true }, // load call options
  });

  window.rudderanalytics.ready(() => {
    console.log("we are all set!!!");
  });
}
