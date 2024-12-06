import Image from "next/image";
import Link from "next/link";

export default function CategoryAlbum({ params }: { params: { category: string } }) {
  const category = params.category;

  const totalImages = 5;


  const images = Array.from({ length: totalImages }, (_, index) => `${index + 1}.jpg`);

  return (
    <div className="container mx-auto py-12 relative">
     
      <Link
        href="/gallery"
        className="absolute top-4 left-4 text-pink-700 hover:text-pink-500"
      >
        <span className="inline-flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Go Back to Gallery</span>
        </span>
      </Link>

      {/* Naslov albuma */}
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-8">Album - {category}</h2>

      {/* Prikaz slika */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/${category}/${image}`} // Dinamički put do slike
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
