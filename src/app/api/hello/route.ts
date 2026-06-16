export async function GET() {
  return Response.json({
    message: "Hello from Cloudflare Worker",
    time: new Date().toISOString(),
  });
}