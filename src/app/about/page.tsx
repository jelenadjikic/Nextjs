export default function AboutPage() {
  const cameras = [
    {
      name: "Canon EOS R5",
      image: "/cameras/canon-eos-r5.jpg",
      description:
        "The Canon EOS R5 is a top choice for cityscapes and architectural photography. With its high-resolution sensor and advanced autofocus system, it captures intricate details of urban environments with stunning clarity and precision.",
      for: "Perfect for capturing cities and architectural photography.",
    },
    {
      name: "Nikon D850",
      image: "/cameras/nikon-d850.jpg",
      description:
        "The Nikon D850 is a versatile full-frame DSLR camera, ideal for nature and landscape photography. Its remarkable dynamic range and sharpness help bring out the beauty of mountains, forests, and serene landscapes.",
      for: "Ideal for landscapes and nature photography.",
    },
    {
      name: "Sony Alpha A7 III",
      image: "/cameras/sony-alpha-a7-iii.jpg",
      description:
        "The Sony Alpha A7 III is perfect for wildlife photography, offering fast autofocus, impressive low-light performance, and excellent burst rates. It is built for capturing fast-moving animals and moments in nature.",
      for: "Best for wildlife and action shots.",
    },
  ];

  const funFacts = [
    "Sophia has traveled to over 15 countries for photography projects.",
    "Her favorite subject to capture is natural light portraits.",
    "She began her journey as a photographer 15 years ago with a simple point-and-shoot camera.",
  ];

  return (
    <div className="bg-pink-50 py-12">
   
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-pink-700 text-center">About Sophia</h2>
          <p className="text-lg text-gray-600 mb-4 text-center">
            Sophia Lens is a passionate photographer from New York with over 15 years of experience. She specializes in capturing a variety of subjects, including cityscapes, nature landscapes, and wildlife. Known for her ability to capture the essence of each scene, Sophia's work stands out in its emotional depth and technical precision.
          </p>
          <p className="text-lg text-gray-600 text-center">
            When she's not behind the camera, Sophia enjoys teaching photography workshops and exploring new destinations for inspiration.
          </p>
        </div>
      </div>


 
      <div className="bg-pink-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">Fun Facts</h2>
          <ul className="space-y-4 text-gray-600">
            {funFacts.map((fact, index) => (
              <li key={index} className="bg-white rounded-lg shadow-lg p-4">{fact}</li>
            ))}
          </ul>
        </div>
      </div>


      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Cameras and Gear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cameras.map((camera, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={camera.image}
                alt={camera.name}
                className="w-64 h-64 object-cover object-center mx-auto" // Fiksna veličina za slike
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-700">{camera.name}</h3>
                <p className="text-gray-600">{camera.description}</p>
                <p className="text-gray-600 mt-2 font-semibold">{camera.for}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          
    </div>
  );
}
