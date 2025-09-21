// app/api/generate/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "URL and shorturl are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if shorturl already exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "Short URL already exists",
        }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert new URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "URL Generated Successfully",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("POST /api/generate error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Internal Server Error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
