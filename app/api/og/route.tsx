
import { ogImageSchema } from "@/lib/validations/og"
import { ImageResponse } from "next/og"

export const runtime = "edge"

const notoSansBold = fetch(
    new URL("../../../assets/fonts/NotoSansDevanagari-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer())
  
  const notoSansRegular = fetch(
    new URL("../../../assets/fonts/NotoSansDevanagari-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {

    const fontRegular = await notoSansRegular
    const fontBold = await notoSansBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 100 ? "70px" : "100px"

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #000 0%, #111 100%)"
                : "white",
          }}
        >
          
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "noto-sans-devnagari", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold"
              style={{
                fontFamily: "noto-sans-devnagari-bold",
                fontWeight: "bold",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: "noto-sans-devnagari-regular", fontWeight: "normal" }}
            >
              oshopedia.online
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "noto-sans-devnagari-regular",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "noto-sans-devnagari-bold",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}