import Global from "Global";

export default async function inMain(data: any, endpoinds: string = "") {
  const api = Global.API;
  try {
    const response = await fetch(`${api}${endpoinds}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    console.log("fetch error:", error);
    throw error;
  }
}
