import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  let url = `${process.env.API_URL}/signals/cryptolist`;

  const response = await axios.get(url);
  const data = response.data;
  return Response.json(data);
}
