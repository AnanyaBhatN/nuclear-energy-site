// --- 1. THEME LOGIC ---
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem(
        'theme',
        html.classList.contains('dark') ? 'dark' : 'light'
    );
}

// Initialize Theme
if (
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

/* --------------------------------------------------
   REUSABLE CONTINUE CTA (matches your CSS)
-------------------------------------------------- */
function continueButton(nextPage, label = 'Continue') {
    return `
        <div class="cta-container mt-20 border-t border-slate-200 dark:border-slate-800 pt-10">
            <div class="max-w-4xl mx-auto flex justify-end px-4">
                <button onclick="router.navigate('${nextPage}')"
                    class="cta-button bg-nuclear-600 hover:bg-nuclear-700
                           text-white px-6 py-3 rounded-xl font-semibold
                           flex items-center gap-2 transition-all">
                    ${label}
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}


// --- 2. CONTENT STORE ---
const pages = {
    home: `
        <!-- Hero Section -->
        <div class="relative bg-slate-900 text-white min-h-[600px] flex items-center overflow-hidden">
            <div class="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1569091791842-7cf9646552dd?auto=format&fit=crop&w=2070&q=80" 
                    class="w-full h-full object-cover opacity-30 dark:opacity-20 transition-opacity duration-500"
                    alt="Nuclear Reactor Blue Glow"
                    onerror="this.src='https://placehold.co/1920x1080/0f172a/ffffff?text=Nuclear+Energy'"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
            </div>
            
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 animate-fade-in">
                <div class="max-w-3xl">
                    <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-nuclear-500/30 bg-nuclear-500/10 text-nuclear-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                        <span class="w-2 h-2 rounded-full bg-nuclear-400 mr-2 animate-pulse"></span>
                        The Future is Fission
                    </span>
                    <h1 class="font-heading text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
                        Powering Humanity <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-nuclear-400 to-cyan-300">Atom by Atom</span>
                    </h1>
                    <p class="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                        Discover the science behind the most energy-dense fuel source in the universe. Zero carbon emissions, maximum reliability.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-5">
                        <button onclick="router.navigate('basics')" class="px-8 py-4 bg-nuclear-600 hover:bg-nuclear-700 text-white font-bold rounded-xl shadow-lg shadow-nuclear-600/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                            Start Learning <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                        <button onclick="router.navigate('myths')" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                            <i class="fa-solid fa-check-double mr-2"></i> Fact vs Fiction
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Info Grid -->
        <section class="py-24 bg-white dark:bg-dark-900 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 animate-slide-up" style="animation-delay: 0.2s;">
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Nuclear Matters</h2>
                    <p class="text-slate-500 dark:text-slate-400 text-lg">Three pillars of the atomic age.</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div onclick="router.navigate('benefits')" class="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 cursor-pointer animate-slide-up" style="animation-delay: 0.3s;">
                        <div class="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Zero Carbon</h3>
                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Generates massive amounts of electricity without releasing greenhouse gases during operation. A key ally against climate change.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div onclick="router.navigate('working')" class="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-nuclear-500/10 transition-all duration-300 cursor-pointer animate-slide-up" style="animation-delay: 0.4s;">
                        <div class="w-14 h-14 bg-nuclear-100 dark:bg-nuclear-900/30 text-nuclear-600 dark:text-nuclear-400 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">High Density</h3>
                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A single uranium fuel pellet the size of a fingertip contains as much energy as one ton of coal or 17,000 cubic feet of natural gas.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div onclick="router.navigate('today')" class="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer animate-slide-up" style="animation-delay: 0.5s;">
                        <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                            <i class="fa-solid fa-rocket"></i>
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Future Tech</h3>
                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                            From Small Modular Reactors (SMRs) to the dream of Fusion, the technology is evolving to be safer, smaller, and cheaper.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
    basics: `
        <section class="max-w-4xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-nuclear-600 dark:text-nuclear-400 font-bold tracking-widest uppercase text-xs">Fundamentals</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">The Physics of the Atom</h2>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div class="order-2 md:order-1">
                    <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">What is Nuclear Energy?</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        Everything around you is made of atoms. The nucleus (core) of an atom holds an immense amount of energy—the "strong force" that binds protons and neutrons together. Nuclear energy is released when we break these bonds.
                    </p>
                    <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                        <p class="text-blue-800 dark:text-blue-200 font-medium">
                            <i class="fa-solid fa-lightbulb mr-2 text-yellow-500"></i>
                            <strong>Einstein's Insight:</strong> E=mc² explains this. A tiny amount of mass (m) can be converted into a massive amount of energy (E).
                        </p>
                    </div>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                    <div class="relative w-64 h-64 flex items-center justify-center">
                        <div class="absolute w-full h-full border border-nuclear-200 dark:border-nuclear-700 rounded-full animate-[spin_3s_linear_infinite]"></div>
                        <div class="absolute w-full h-full border border-nuclear-200 dark:border-nuclear-700 rounded-full animate-[spin_4s_linear_infinite]" style="transform: rotate(60deg);"></div>
                        <div class="absolute w-full h-full border border-nuclear-200 dark:border-nuclear-700 rounded-full animate-[spin_5s_linear_infinite]" style="transform: rotate(120deg);"></div>
                        <div class="w-8 h-8 bg-nuclear-500 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.6)] z-10 relative"></div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white flex items-center">
                        <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mr-3 text-sm"><i class="fa-solid fa-arrows-split-up-and-left"></i></span>
                        Fission (Splitting)
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                        Current nuclear power plants use <strong>Fission</strong>. A neutron strikes a large atom (like Uranium-235), splitting it into two smaller atoms. This split releases heat and more neutrons, creating a chain reaction.
                    </p>
                </div>
                
                <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white flex items-center">
                        <span class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mr-3 text-sm"><i class="fa-solid fa-compress-arrows-alt"></i></span>
                        Fusion (Combining)
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                        The sun uses <strong>Fusion</strong>, smashing small atoms (Hydrogen) together to form larger ones. Scientists are working to replicate this on Earth (ITER project) for clean, safe energy.
                    </p>
                </div>
            </div>
        </section>
    `,
    working: `
        <section class="max-w-5xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-nuclear-600 dark:text-nuclear-400 font-bold tracking-widest uppercase text-xs">Mechanics</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">How a Reactor Works</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">At its core, it's a sophisticated way to boil water.</p>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-12 border border-slate-100 dark:border-slate-700">
                <div class="bg-slate-100 dark:bg-slate-900 p-8 flex justify-center items-center h-72 border-b border-slate-200 dark:border-slate-700 relative">
                     <!-- Simple CSS/SVG Diagram Placeholder -->
                    <div class="relative w-full max-w-2xl h-full">
                        <div class="absolute left-[10%] bottom-10 w-24 h-32 bg-slate-300 dark:bg-slate-700 rounded-t-xl border-4 border-slate-400 dark:border-slate-600 flex items-center justify-center">
                            <div class="w-16 h-24 bg-red-400/20 animate-pulse rounded"></div>
                            <span class="absolute -bottom-8 text-xs font-bold text-slate-500">Reactor</span>
                        </div>
                        <div class="absolute left-[25%] bottom-20 w-32 h-4 bg-slate-400"></div>
                        <div class="absolute left-[40%] bottom-10 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full border-4 border-slate-400 flex items-center justify-center">
                            <i class="fa-solid fa-fan text-3xl text-slate-500 animate-spin"></i>
                            <span class="absolute -bottom-8 text-xs font-bold text-slate-500">Turbine</span>
                        </div>
                        <div class="absolute left-[55%] bottom-20 w-32 h-4 bg-slate-400"></div>
                        <div class="absolute right-[10%] bottom-10 w-20 h-40 bg-slate-200 dark:bg-slate-700 rounded-t-full border-x-4 border-slate-300 flex items-end justify-center pb-2">
                             <span class="absolute -bottom-8 text-xs font-bold text-slate-500">Cooling</span>
                             <i class="fa-solid fa-cloud text-white opacity-50 text-4xl mb-20 animate-bounce"></i>
                        </div>
                    </div>
                </div>
                <div class="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
                    <div class="p-6">
                        <div class="text-nuclear-600 dark:text-nuclear-400 font-bold mb-2 text-lg">01. The Core</div>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Uranium fuel rods create a controlled chain reaction, heating water to over 500°F.</p>
                    </div>
                    <div class="p-6">
                        <div class="text-nuclear-600 dark:text-nuclear-400 font-bold mb-2 text-lg">02. Steam Gen</div>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Hot water flows through pipes to heat a separate water supply, flashing it into high-pressure steam.</p>
                    </div>
                    <div class="p-6">
                        <div class="text-nuclear-600 dark:text-nuclear-400 font-bold mb-2 text-lg">03. Turbine</div>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Steam hits turbine blades at 1,000+ mph. The spinning turbine turns a generator to make electricity.</p>
                    </div>
                    <div class="p-6">
                        <div class="text-nuclear-600 dark:text-nuclear-400 font-bold mb-2 text-lg">04. Cooling</div>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Steam is cooled back into water (often via cooling towers) and recycled back to the start.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    benefits: `
        <section class="max-w-4xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-green-600 dark:text-green-400 font-bold tracking-widest uppercase text-xs">Advantages</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">Why Go Nuclear?</h2>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300">
                    <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 text-xl">
                        <i class="fa-solid fa-cloud-open"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">Clean Air</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Nuclear is the largest source of clean power in the US. It prevents over 470 million metric tons of carbon emissions annually—equivalent to taking 100 million cars off the road.
                    </p>
                </div>
                
                <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300">
                    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 text-xl">
                        <i class="fa-solid fa-cube"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">Incredible Density</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <strong>1 Uranium Pellet</strong> (size of a gummy bear) = <br>
                        • 1 Ton of Coal<br>
                        • 149 Gallons of Oil<br>
                        • 17,000 Cubic Feet of Natural Gas
                    </p>
                </div>
            </div>

            <div class="bg-slate-900 dark:bg-black rounded-2xl p-8 text-white shadow-2xl">
                <h3 class="font-bold text-lg mb-6">Capacity Factor (Reliability)</h3>
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between text-sm mb-2"><span class="font-bold">Nuclear</span><span>92.5%</span></div>
                        <div class="w-full bg-slate-700 rounded-full h-3"><div class="bg-blue-500 h-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style="width: 92.5%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm mb-2"><span>Geothermal</span><span>74.3%</span></div>
                        <div class="w-full bg-slate-700 rounded-full h-3"><div class="bg-slate-500 h-3 rounded-full" style="width: 74.3%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm mb-2"><span>Natural Gas</span><span>56.6%</span></div>
                        <div class="w-full bg-slate-700 rounded-full h-3"><div class="bg-slate-500 h-3 rounded-full" style="width: 56.6%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm mb-2"><span>Solar</span><span>24.9%</span></div>
                        <div class="w-full bg-slate-700 rounded-full h-3"><div class="bg-slate-500 h-3 rounded-full" style="width: 24.9%"></div></div>
                    </div>
                </div>
                <p class="text-xs text-slate-400 mt-6 text-center">Source: U.S. Energy Information Administration (2021)</p>
            </div>
        </section>
    `,
    risks: `
        <section class="max-w-4xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-red-500 font-bold tracking-widest uppercase text-xs">Challenges</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">Risks & Safety</h2>
            </div>

            <div class="space-y-6">
                <div class="flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-red-500 dark:border-red-500">
                    <div class="min-w-[60px] flex justify-center pt-2"><i class="fa-solid fa-triangle-exclamation text-3xl text-red-500"></i></div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Radioactive Waste</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Fuel rods remain radioactive for thousands of years. Currently, waste is stored safely in concrete-and-steel dry casks at plant sites. Long-term solutions involve deep geological repositories (like Finland's Onkalo).
                        </p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-orange-400 dark:border-orange-400">
                    <div class="min-w-[60px] flex justify-center pt-2"><i class="fa-solid fa-burst text-3xl text-orange-400"></i></div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Accidents</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            History has seen three major accidents: Three Mile Island, Chernobyl, and Fukushima. Modern Gen III+ reactors have passive safety systems (gravity/convection) that shut down the reactor automatically without electricity or human intervention.
                        </p>
                    </div>
                </div>

                 <div class="flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-yellow-400 dark:border-yellow-400">
                    <div class="min-w-[60px] flex justify-center pt-2"><i class="fa-solid fa-sack-dollar text-3xl text-yellow-400"></i></div>
                    <div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">High Cost & Time</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Nuclear plants are massive infrastructure projects. They face high upfront capital costs and long regulatory timelines (10+ years) compared to natural gas or solar farms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
    myths: `
        <section class="max-w-4xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-xs">Debunked</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">Common Myths</h2>
            </div>

            <div class="space-y-8">
                <!-- Myth 1 -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700">
                    <div class="bg-red-50 dark:bg-red-900/20 px-8 py-4 border-b border-red-100 dark:border-red-900/30 flex items-center">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase mr-3">Myth</span>
                        <h3 class="font-bold text-slate-800 dark:text-red-200">"Nuclear plants can explode like a bomb."</h3>
                    </div>
                    <div class="p-8">
                        <div class="flex items-start">
                            <i class="fa-solid fa-check text-green-500 mt-1 mr-4 text-xl"></i>
                            <p class="text-slate-600 dark:text-slate-300"><strong>Fact:</strong> Physically impossible. Reactor fuel contains only 3-5% fissionable Uranium-235. Weapons-grade material requires 90%+. It's like trying to make wet wood explode—it simply lacks the density to detonate.</p>
                        </div>
                    </div>
                </div>

                <!-- Myth 2 -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700">
                    <div class="bg-red-50 dark:bg-red-900/20 px-8 py-4 border-b border-red-100 dark:border-red-900/30 flex items-center">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase mr-3">Myth</span>
                        <h3 class="font-bold text-slate-800 dark:text-red-200">"Nuclear waste is green glowing goo."</h3>
                    </div>
                    <div class="p-8">
                        <div class="flex items-start">
                            <i class="fa-solid fa-check text-green-500 mt-1 mr-4 text-xl"></i>
                            <p class="text-slate-600 dark:text-slate-300"><strong>Fact:</strong> That's cartoon physics. Nuclear waste is a solid, dull metal ceramic pellet, stored inside corrosion-resistant metal tubes. It doesn't glow, flow, or leak like liquid.</p>
                        </div>
                    </div>
                </div>

                <!-- Myth 3 -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700">
                    <div class="bg-red-50 dark:bg-red-900/20 px-8 py-4 border-b border-red-100 dark:border-red-900/30 flex items-center">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase mr-3">Myth</span>
                        <h3 class="font-bold text-slate-800 dark:text-red-200">"Nuclear plants emit tons of radiation."</h3>
                    </div>
                    <div class="p-8">
                        <div class="flex items-start">
                            <i class="fa-solid fa-check text-green-500 mt-1 mr-4 text-xl"></i>
                            <p class="text-slate-600 dark:text-slate-300"><strong>Fact:</strong> You get more radiation from eating a banana, sleeping next to another person, or flying on a plane than living next to a nuclear plant. Coal plants actually release more radioactive fly ash into the environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    today: `
        <section class="max-w-4xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <span class="text-nuclear-600 dark:text-nuclear-400 font-bold tracking-widest uppercase text-xs">Innovation</span>
                <h2 class="font-heading text-4xl font-bold mt-2 text-slate-900 dark:text-white">Nuclear Today & Tomorrow</h2>
                <p class="mt-4 text-slate-500 dark:text-slate-400">The technology isn't standing still.</p>
            </div>

            <div class="space-y-12">
                <!-- SMR Section -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-700">
                    <div class="md:w-1/2 h-64 md:h-auto relative bg-slate-200 dark:bg-slate-700">
                        <img 
                            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" 
                            alt="SMR Lab" 
                            class="w-full h-full object-cover"
                            onerror="this.src='https://placehold.co/800x600/1e293b/ffffff?text=SMR+Tech'"
                        >
                        <div class="absolute top-4 left-4 bg-nuclear-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">2030s</div>
                    </div>
                    <div class="p-8 md:w-1/2 flex flex-col justify-center">
                        <h3 class="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">Small Modular Reactors</h3>
                        <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Factory-built, "plug-and-play" reactors. They are safer (passive cooling), cheaper to finance, and flexible enough to power remote towns or data centers.
                        </p>
                    </div>
                </div>

                <!-- Fusion Section -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse border border-slate-100 dark:border-slate-700">
                    <div class="md:w-1/2 h-64 md:h-auto relative bg-slate-200 dark:bg-slate-700">
                        <img 
                            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80" 
                            alt="Fusion Tokamak" 
                            class="w-full h-full object-cover"
                            onerror="this.src='https://placehold.co/800x600/1e293b/ffffff?text=Fusion+Power'"
                        >
                        <div class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">2050+</div>
                    </div>
                    <div class="p-8 md:w-1/2 flex flex-col justify-center">
                        <h3 class="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">Nuclear Fusion</h3>
                        <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Replicating the sun's power. It uses seawater isotopes as fuel, produces zero long-lived waste, and has no meltdown risk. Projects like ITER are paving the way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
     resources: `
       <section class="max-w-3xl mx-auto px-4 py-16 animate-slide-up">
            <div class="text-center mb-16">
                <h2 class="font-heading text-3xl font-bold mt-2 text-slate-900 dark:text-white">Resources</h2>
                <p class="mt-4 text-slate-600 dark:text-slate-400">Verified sources for further research.</p>
            </div>

            <ul class="space-y-4">
                <li>
                    <a href="https://www.iaea.org/" target="_blank" class="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-nuclear-500 hover:shadow-md transition flex justify-between items-center group">
                        <span class="font-medium text-slate-700 dark:text-slate-200 group-hover:text-nuclear-600 dark:group-hover:text-nuclear-400">International Atomic Energy Agency (IAEA)</span>
                        <i class="fa-solid fa-external-link-alt text-slate-400 group-hover:text-nuclear-500"></i>
                    </a>
                </li>
                <li>
                    <a href="https://world-nuclear.org/" target="_blank" class="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-nuclear-500 hover:shadow-md transition flex justify-between items-center group">
                        <span class="font-medium text-slate-700 dark:text-slate-200 group-hover:text-nuclear-600 dark:group-hover:text-nuclear-400">World Nuclear Association</span>
                        <i class="fa-solid fa-external-link-alt text-slate-400 group-hover:text-nuclear-500"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.energy.gov/ne/office-nuclear-energy" target="_blank" class="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-nuclear-500 hover:shadow-md transition flex justify-between items-center group">
                        <span class="font-medium text-slate-700 dark:text-slate-200 group-hover:text-nuclear-600 dark:group-hover:text-nuclear-400">U.S. Dept of Energy - Office of Nuclear Energy</span>
                        <i class="fa-solid fa-external-link-alt text-slate-400 group-hover:text-nuclear-500"></i>
                    </a>
                </li>
            </ul>
        </section>
    `
};

// --- 3. ROUTER LOGIC ---
const router = {
    navigate: (pageName) => {
        const app = document.getElementById('app');

        // Fade out
        app.style.opacity = '0';

        setTimeout(() => {
            app.innerHTML = pages[pageName] || pages.home;
            window.scrollTo(0, 0);
            app.style.opacity = '1';

            // Update nav active state
            document.querySelectorAll('.nav-link')
                .forEach(el => el.classList.remove('active'));

            const activeBtn = document.getElementById(`nav-${pageName}`);
            if (activeBtn) activeBtn.classList.add('active');
        }, 200);
    }
};

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
    document.getElementById('app').style.transition = 'opacity 0.3s ease';
});