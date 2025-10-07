import Chatbot from "@/components/Chatbot";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-content-center gap-4 bg-gray-100 p-2">
                <img
                    src="https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/250x80/scproudly_1744608269__72588.original.png"
                    alt="Sleep Country Logo"
                    className="h-6 mx-auto m-4"/>
                <img
                    src="https://cdn.sanity.io/images/d0kd7r9c/production/c3fc21cec5bbd27d8f43fd5d85e995e63522dc17-347x84.png?fit=min&auto=format"
                    alt="Endy Logo"
                    className="h-6 mx-auto m-4"/>
                <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo_Simba?fmt=png-alpha" alt="Simba Logo"
                     className="h-6 mx-auto m-4"/>
                <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo-hush?fmt=png-alpha" alt="Hush Logo"
                     className="h-6 mx-auto m-4"/>
                <img src="https://s7d9.scene7.com/is/image/sleepcountry/Silk-Snow-Dark-Logo?fmt=png-alpha"
                     alt="Silk & Snow Logo"
                     className="h-4 mx-auto m-4"/>
                <img src="https://s7d9.scene7.com/is/image/sleepcountry/Logo_Casper?fmt=png-alpha" alt="Csaper Logo"
                     className="h-6 mx-auto m-4"/>
            </div>
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-4 mt-4 text-black">SleepSage</h1>
                <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">Your AI-powered smart advisor for product reviews</h2>
            </div>
            <Chatbot/>
        </main>
    );
}
