const Form = () => {
    return (
        <article>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="name" className="sr-only">
                        Name
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Nickname"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-b-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                        id="subscribe"
                        name="subscribe"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                        border-gray-300 rounded"
                        />
                        <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-900">
                            Subsribe to our newsletter
                        </label>
                    </div>           
                </div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-white bg-lime-600 hover:bg-lime-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
                >
                    Submit
                </button>
          </form>
        </article>
    );
}

export default Form;