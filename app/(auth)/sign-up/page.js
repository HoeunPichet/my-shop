import Form from "next/form";

export default function FormSignup() {
  return (
    <>
      <section className="flex justify-center items-center w-full h-screen bg-slate-950">
        <Form
          action=""
          className="bg-slate-900 w-96 px-7 py-6 rounded-xl shadow"
        >
          <h1 className="text-green-700 text-2xl font-bold text-center">
            Sign Up
          </h1>
          <fieldset className="mt-7 flex flex-col gap-5">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-slate-400"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-green-700 transition-all"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-slate-400"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-green-700 transition-all"
                placeholder="Last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-slate-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-green-700 transition-all"
                placeholder="Password"
                required
              />
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 w-full py-2.5 text-center rounded-xl"
              >
                <span className="text-white">Sign up</span>
              </button>
            </div>
          </fieldset>
        </Form>
      </section>
    </>
  );
}
