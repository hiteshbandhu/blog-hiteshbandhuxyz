import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Hitesh Bandhu | Blog'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-black">
        <div tw="flex flex-col w-full py-12 px-8">
          <h2 tw="text-6xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p tw="mt-4 text-2xl text-gray-300">
            Writing about Gen-AI, startups, and technology.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
