// app/gallery/page.tsx
import Link from 'next/link';

export default function GalleryPage() {
  
  const categories = [
    { name: 'Cityscapes', slug: 'cities' },
    { name: 'Nature Landscapes', slug: 'nature' },
    { name: 'Wildlife', slug: 'wildlife' },
    { name: 'Weddings', slug: 'weddings' },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/gallery/${category.slug}`} className="block p-4 text-center">
                <h3 className="text-xl font-bold text-pink-700">{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
