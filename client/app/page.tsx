import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src="/placeholder.svg"
            alt="Children learning with globe illustration"
            width={600}
            height={600}
            className="w-full"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Cogno</h1>
          <p className="text-xl mb-8">Empower young minds through play</p>
          <div className="space-y-4">
            <Link
              href="/register"
              className="block w-full bg-purple-600 text-white py-3 px-6 rounded-lg text-center hover:bg-purple-700 transition-colors"
            >
              Join
            </Link>
            <Link
              href="/login"
              className="block w-full bg-white text-black py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

