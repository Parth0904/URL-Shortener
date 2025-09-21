import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = params  // <-- correct destructuring

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const existing = await collection.findOne({ shorturl: shorturl });

  if (existing) {
    // Redirect to the original URL
    redirect(existing.url)
  } else {
    // Redirect to home if short URL not found
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

  // This line is never reached because redirect() ends execution
  return null;
}
