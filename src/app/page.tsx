import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center bg-gray-100 py-4">
            <img src="https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/250x80/scproudly_1744608269__72588.original.png" alt="Logo"
                 className="h-12 mx-auto my-4"/>
            <img src="https://cdn.sanity.io/images/d0kd7r9c/production/c3fc21cec5bbd27d8f43fd5d85e995e63522dc17-347x84.png?fit=min&auto=format" alt="Logo"
                 className="h-12 mx-auto my-4"/>
            <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo_Simba?fmt=png-alpha" alt="Logo"
                 className="h-12 mx-auto my-4"/>
            <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo-hush?fmt=png-alpha" alt="Logo"
                 className="h-12 mx-auto my-4"/>
            <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo_Casper?fmt=png-alpha" alt="Logo"
                 className="h-12 mx-auto my-4"/>
        </div>
        <div className="max-w-2xl mx-auto p-4">

            <h1 className="text-3xl font-bold text-center mb-4 mt-4">Welcome to the Reviews Analysis Chatbot</h1>
        </div>
      <Chatbot />
    </main>
  );
}
