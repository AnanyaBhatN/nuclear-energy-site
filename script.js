// THEME
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

// PAGES
const pages = {

home: `
<section class="min-h-[80vh] bg-slate-900 text-white flex items-center">
  <div class="max-w-5xl mx-auto px-6">
    <h1 class="text-5xl font-heading font-bold mb-6">
      Powering the World <span class="text-nuclear-500">Atom by Atom</span>
    </h1>
    <p class="text-lg text-slate-300 mb-8">
      A modern, science-based exploration of nuclear energy, safety, myths, and the future.
    </p>
    <button onclick="router.navigate('basics')" class="px-6 py-3 bg-nuclear-600 rounded-lg font-bold">
      Start Learning
    </button>
  </div>
</section>

<section class="py-20 bg-white dark:bg-slate-900">
  <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
    <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
      <i class="fa-solid fa-hospital text-2xl text-nuclear-500 mb-3"></i>
      <h4 class="font-bold">Healthcare</h4>
      <p class="text-sm">Cancer treatment and medical imaging.</p>
    </div>
    <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
      <i class="fa-solid fa-rocket text-2xl text-purple-500 mb-3"></i>
      <h4 class="font-bold">Space</h4>
      <p class="text-sm">Powering deep-space missions.</p>
    </div>
    <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
      <i class="fa-solid fa-leaf text-2xl text-green-500 mb-3"></i>
      <h4 class="font-bold">Climate</h4>
      <p class="text-sm">Zero-carbon electricity.</p>
    </div>
    <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
      <i class="fa-solid fa-industry text-2xl text-blue-500 mb-3"></i>
      <h4 class="font-bold">Industry</h4>
      <p class="text-sm">Non-destructive testing.</p>
    </div>
  </div>
</section>
`,

basics: `
<section class="max-w-4xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Nuclear Energy Basics</h2>
<p class="mb-6">
Nuclear energy is released when atoms split (fission), converting a small amount of mass into a huge amount of energy.
</p>

<div class="bg-nuclear-600 text-white p-6 rounded-xl">
<h3 class="font-bold mb-2">In Simple Words</h3>
<ul class="list-disc pl-6 text-sm">
<li>Atoms store energy</li>
<li>Splitting atoms releases heat</li>
<li>Heat → steam → turbine → electricity</li>
</ul>
</div>
</section>
`,

working: `
<section class="max-w-5xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">How a Nuclear Plant Works</h2>
<ol class="list-decimal pl-6 space-y-2">
<li>Controlled fission heats water</li>
<li>Steam spins turbine</li>
<li>Generator produces electricity</li>
<li>Cooling system recycles water</li>
</ol>
</section>
`,

benefits: `
<section class="max-w-4xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Benefits</h2>
<ul class="space-y-3">
<li>✔ Zero carbon emissions</li>
<li>✔ Extremely reliable</li>
<li>✔ High energy density</li>
</ul>
</section>
`,

risks: `
<section class="max-w-4xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Risks & Safety</h2>
<p>
Modern reactors use multiple safety layers and passive systems to prevent accidents.
</p>
</section>
`,

myths: `
<section class="max-w-4xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Common Myths</h2>
<p><strong>Myth:</strong> Nuclear plants explode like bombs.</p>
<p><strong>Fact:</strong> Physically impossible.</p>
</section>
`,

today: `
<section class="max-w-4xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Future of Nuclear</h2>
<p>SMRs, Fusion, and clean-energy innovation.</p>
</section>
`,

resources: `
<section class="max-w-3xl mx-auto px-6 py-16">
<h2 class="text-4xl font-heading font-bold mb-6">Resources</h2>
<ul class="list-disc pl-6">
<li>IAEA</li>
<li>World Nuclear Association</li>
<li>Department of Energy</li>
</ul>
</section>
`
};

// ROUTER
const router = {
  navigate(page) {
    const app = document.getElementById('app');
    app.style.opacity = 0;
    setTimeout(() => {
      app.innerHTML = pages[page];
      document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
      const active = document.getElementById(`nav-${page}`);
      if (active) active.classList.add('active');
      app.style.opacity = 1;
      window.scrollTo(0,0);
    }, 200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  router.navigate('home');
  document.getElementById('app').style.transition = 'opacity 0.3s';
});
