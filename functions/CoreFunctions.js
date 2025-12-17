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
