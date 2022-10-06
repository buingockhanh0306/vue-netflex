export default function ({ $axios, app, redirect }) {
  $axios.onRequest((config) => {
    config.params = {
      api_key: process.env.apiKey,
      language: "vi",
      append_to_response: "videos",
    };
  });

  $axios.onError((error) => {
    if (error.response.status === 401) {
      app.$auth.logout();
    } else if (error.response.status === 403) {
      if (error.response.headers["error-message"] === "duplicate_login") {
        app.$auth.logout();
        localStorage.setItem("duplicateLogin", "true");
      }
      if (error.response.headers["error-message"] === "trans.server_error") {
        app.$auth.logout();
        localStorage.setItem("severError", "true");
      }
    } else if (error.response.status === 500) {
      if (error.response.data.message === "trans.server_error") {
        app.router.push("/error-system");
      }
      if (error.response.data.message === "trans.account_locked") {
        app.router.push("/message-locked");
      }
    }
  });
}
