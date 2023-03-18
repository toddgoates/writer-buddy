import { Link } from "@remix-run/react";

export default function IndexPage() {
  return (
    <div className="grid items-center justify-center h-screen">
      <div className="grid gap-12 text-center">
        <h1 className="text-6xl font-extrabold text-transparent uppercase bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
          Writer Buddy
        </h1>
        <h2 className="text-xl">
          A community for writers to work on their stories
        </h2>
        <div>
          <Link
            to="/signup"
            className="w-auto px-4 py-3 font-bold text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
