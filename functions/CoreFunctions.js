export async function getSetting(key) {
  try {
    const response = await fetch("../settings.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const settings = await response.json();

    if (!(key in settings)) {
      throw new Error(`Key "${key}" not found in settings.`);
    }

    return settings[key];
  } catch (error) {
    console.error("Error fetching setting:", error.message);
    return null;
  }
}

export function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

export async function fetchAPIdata() {
  const apiAddress = await getSetting("api_address");
  if (!apiAddress) {
    console.error("API address is not defined in settings.");
    return null;
  }

  try {
    const response = await fetch(apiAddress);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    return null;
  }
}