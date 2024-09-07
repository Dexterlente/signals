import axios from "axios";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const title = params.slug;

  const url = new URL(req.url);
  const month = url.searchParams.get("month");
  const year = url.searchParams.get("year");

  const response = await axios.get(
    `${process.env.API_URL}/signals/cryptolist/${title}`,
    {
      params: {
        month,
        year,
      },
    }
  );

  const data = await response.data;

  return Response.json(data);
}
