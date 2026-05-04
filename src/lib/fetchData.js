export const tilesData = async () => {
  try {
    const res = await fetch("https://tiles-gallery-app-sand.vercel.app/data.json");
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};