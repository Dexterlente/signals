// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   let url = `${process.env.API_URL}/signals/cryptolist`;

//   const response = await axios.get(url);
//   const data = response.data;
//   return Response.json(data);
// }

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let url = `${process.env.API_URL}/signals/cryptolist`;
  console.log("url", url);

  try {
    const response = await axios.get(url);
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
