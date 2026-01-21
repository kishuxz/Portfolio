import { FiZap, FiMessageCircle } from 'react-icons/fi';

export default function AITeaser() {
    return (
        <section className="section section-white">
            <div className="container-custom">
                <div className="flex items-center gap-4 mb-12 md:mb-16">
                    <span className="text-xs font-mono text-gray-400">05 / 06</span>
                    <h2 className="heading-lg">
                        AI & Systems
                    </h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                        Explore my work with LLM agents, RAG systems, and production AI infrastructure.
                        Ask questions about technical implementations or system design.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/ai"
                            className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiZap />
                            Explore AI / Agents
                        </a>
                        <button
                            className="px-6 md:px-8 py-3 md:py-4 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiMessageCircle />
                            Ask about my work
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-8 uppercase tracking-wide">
                        Powered by LangChain + Open-Source Models
                    </p>
                </div>
            </div>
        </section>
    );
}
