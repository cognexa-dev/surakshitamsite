const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    if (data.get("website")) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    const required = ["name", "phone", "email", "service"];
    for (const field of required) {
      if (!data.get(field)) {
        return new Response(JSON.stringify({ error: `Missing field: ${field}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    const lead = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      company: data.get("company") || "—",
      service: data.get("service"),
      message: data.get("message") || "—",
      source: data.get("source") || "direct",
      medium: data.get("medium") || "—",
      campaign: data.get("campaign") || "—",
      gclid: data.get("gclid") || "—",
      pageUrl: data.get("pageUrl") || "—",
      referrer: data.get("referrer") || "—",
      timestamp: data.get("timestamp") || (/* @__PURE__ */ new Date()).toISOString()
    };
    const smtpHost = undefined                         ;
    const smtpUser = undefined                         ;
    const smtpPass = undefined                         ;
    const toEmail = undefined                           || "sales@cognexa.in";
    if (smtpHost && smtpUser && smtpPass) ; else {
      console.log("[Lead]", JSON.stringify(lead, null, 2));
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[Lead API Error]", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
