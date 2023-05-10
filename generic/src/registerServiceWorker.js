export default function register() {
  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(
        window.location.hostname
      )
  );

  if (
    process.env.NODE_ENV !== "production" ||
    !("serviceWorker" in navigator)
  ) {
    return;
  }

  const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
  if (publicUrl.origin !== window.location.origin) {
    return;
  }

  window.addEventListener("load", () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (!isLocalhost) {
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  console.log(
                    "A new version of the app is available. Please refresh the page."
                  );
                } else {
                  console.log("The app is now available offline.");
                }
              }
            };
          };
        })
        .catch((error) => {
          console.error("Error during service worker registration:", error);
        });
    } else {
      fetch(swUrl)
        .then((response) => {
          if (
            response.status === 404 ||
            response.headers.get("content-type").indexOf("javascript") === -1
          ) {
            navigator.serviceWorker.ready.then((registration) => {
              registration.unregister().then(() => {
                console.log(
                  "The app is now offline. Please check your internet connection."
                );
                window.location.reload();
              });
            });
          } else {
            navigator.serviceWorker
              .register(swUrl)
              .then((registration) => {
                registration.onupdatefound = () => {
                  const installingWorker = registration.installing;
                  installingWorker.onstatechange = () => {
                    if (installingWorker.state === "installed") {
                      if (navigator.serviceWorker.controller) {
                        console.log(
                          "A new version of the app is available. Please refresh the page."
                        );
                      } else {
                        console.log("The app is now available offline.");
                      }
                    }
                  };
                };
              })
              .catch((error) => {
                console.error(
                  "Error during service worker registration:",
                  error
                );
              });
          }
        })
        .catch(() => {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        });
    }
  });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister().then(() => {
          console.log("Service worker unregistered.");
        });
      })
      .catch((error) => {
        console.error("Error during service worker unregistration:", error);
      });
  }
}
