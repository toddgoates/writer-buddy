import { Link } from "@remix-run/react";

export default function SignupPage() {
  return (
    <div className="grid items-center h-screen bg-gradient-to-b from-gray-500 to-gray-50">
      <div className="w-full px-6 m-auto sm:w-5/6 md:w-2/3 lg:w-1/3">
        <div className="p-6 rounded shadow-lg bg-gray-50">
          <form className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <fieldset className="flex flex-col gap-8">
              <div>
                <label htmlFor="email" className="block mb-1 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-400 rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-400 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-3 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700"
                >
                  Sign Up
                </button>
                <Link
                  to="/login"
                  className="font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  Log In
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
