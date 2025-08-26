export async function mockSubmitApi(payload) {
  await new Promise((r) => setTimeout(r, 700));
  console.log("[MOCK SUBMIT]", JSON.stringify(payload, null, 2));
  return { ok: true, id: Math.floor(Math.random() * 10000) };
}
