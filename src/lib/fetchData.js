export const tilesData = async () => {
  try {
    const res = await fetch("http://localhost:3000/data.json");
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
