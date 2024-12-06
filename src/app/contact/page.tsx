import { FaInstagram, FaTiktok, FaPinterest, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Get in Touch with Sophia</h1>
        <p className="text-gray-600">
          Whether you want to collaborate, book a session, or simply say hello, Sophia is just a click away!
        </p>
      </header>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-pink-700 mb-4 text-center">Follow on Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://www.instagram.com/sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaInstagram className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaTiktok className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">TikTok</span>
          </a>
          <a
            href="https://www.pinterest.com/sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaPinterest className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">Pinterest</span>
          </a>
          <a
            href="https://www.facebook.com/sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaFacebook className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">Facebook</span>
          </a>
          <a
            href="https://twitter.com/sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaTwitter className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sophialens"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <FaLinkedin className="w-10 h-10 text-pink-700 mr-4" />
            <span className="text-pink-700 font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>

       {/* Email Section */}
       <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Reach Out via Email</h2>
        <p className="text-gray-600 mb-4">Have a specific inquiry? Send an email to Sophia:</p>
        <a
          href="mailto:contact@sophialens.com"
          className="px-6 py-2 bg-pink-700 text-white font-semibold rounded hover:bg-pink-800"
        >
          contact@sophialens.com
        </a>
      </div>
    </div>
  );
}
