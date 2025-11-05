import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, number, service } = body;

    if (!name || !number || !service) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const [result] = await db.query(
      "INSERT INTO leads (name, number, service) VALUES (?, ?, ?)",
      [name, number, service]
    );

    return new Response(JSON.stringify({ message: "Lead saved successfully!", id: result.insertId }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
  }
}
