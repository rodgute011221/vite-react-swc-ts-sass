import Global from "Global";

export default async function outMain(endpoinds: string = "") {
  const api = Global.API;
  const response = await fetch(`${api}${endpoinds}`);
  return await response.json();
}
