export async function POST(req) {
  try {
    const body = await req.json();
    const { name, number, service } = body;

    if (!name || !number || !service) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: "Lead received successfully!" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}
