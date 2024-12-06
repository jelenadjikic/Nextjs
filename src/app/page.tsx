import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-pink-700 mb-6">
            Welcome to Sophia Lens Photography
          </h1>
          <p className="text-lg text-pink-600">
            Discover the art of storytelling through the lens. Explore a curated collection of stunning photographs capturing the beauty of life.
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="px-6 py-2 bg-pink-700 text-white font-semibold rounded hover:bg-pink-800"
            >
              About Sophia
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-transparent text-pink-700 border border-pink-700 font-semibold rounded hover:bg-pink-700 hover:text-white"
            >
              Contact Sophia
            </Link>
          </div>
        </header>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6 text-center">
            Preview of Sophia's Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Urban Photography */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/1.jpg"
                alt="Urban Photography"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">
                  Urban Photography
                </h3>
                <p className="text-pink-600">
                  Capturing the essence of the city with striking urban landscapes and architecture.
                </p>
              </div>
            </div>

            {/* Landscapes and Nature */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/2.jpg"
                alt="Landscapes and Nature"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">
                  Landscapes and Nature
                </h3>
                <p className="text-pink-600">
                  Breathtaking views of mountains, forests, and serene natural sceneries.
                </p>
              </div>
            </div>

            {/* Wildlife */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/3.jpg"
                alt="Wildlife"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">Wildlife</h3>
                <p className="text-pink-600">
                  Experience the majesty of animals captured in their natural habitats.
                </p>
              </div>
            </div>

            {/* Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/4.jpg"
                alt="Events"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">Events</h3>
                <p className="text-pink-600">
                  Memorable moments from special occasions, perfectly preserved in photographs.
                </p>
              </div>
            </div>

            {/* Night Photography */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/5.jpg"
                alt="Night Photography"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">Night Photography</h3>
                <p className="text-pink-600">
                  Explore the magic of the night with stunning images of starry skies, city lights, and moonlit landscapes.
                </p>
              </div>
            </div>

            {/* Retro Style */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/home/6.jpg"
                alt="Retro Style"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">Retro Style</h3>
                <p className="text-pink-600">
                  A nostalgic journey through vintage aesthetics and timeless moments.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 mb-8">
          <Link
            href="/gallery"
            className="bg-pink-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-900"
          >
            View Full Gallery
          </Link>
        </div>

        {/* About Sophia div */}
        <div className="text-center bg-pink-100 py-8 px-4 rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Meet Sophia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sophia is an award-winning photographer with over a decade of experience in capturing life's most memorable moments. Whether it's urban landscapes, natural beauty, or heartfelt portraits, Sophia brings a unique perspective and a touch of magic to every shot.
          </p>
        </div>
      </div>
    </div>
  );
}
