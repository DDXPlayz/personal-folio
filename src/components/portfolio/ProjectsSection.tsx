import linguaImage from '@/assets/lingua-project.jpg';
import aiImage from '@/assets/ai-project-bg.jpg';

const ProjectsSection = () => {
  // Six projects chosen for spread of capability rather than recency: native
  // mobile, full-stack 3D commerce, simulation, deterministic geometry,
  // creative 3D and a real payment flow. Every description here is checked
  // against what the code actually does — an earlier version of this list
  // advertised an "AI-powered" study planner written in "Python, AI/ML, Flask"
  // that is in fact a deterministic TypeScript scheduler with no AI in it.
  const projects = [
    {
      title: 'VIBES',
      description: 'A handloom saree house where one phone photograph becomes a reusable 3D asset: the cloth is found in the image, draped on a mannequin by a position-based cloth solver, lit, rendered from every angle and published as a product page.',
      image: aiImage,
      tech: ['Next.js 15', 'React Three Fiber', 'Prisma', 'Cloth simulation'],
      github: 'https://github.com/DDXPlayz/vibes',
      live: null,
      featured: true
    },
    {
      title: 'Beyond the Race',
      description: 'A team presentation built as a film. The page never scrolls — the wheel scrubs one GSAP timeline through twelve three.js environments on a single camera path with no cuts.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tech: ['three.js', 'GSAP', 'WebGL', 'Vite'],
      github: 'https://github.com/DDXPlayz/beyond-the-race',
      live: 'https://vp.anantamracing.com/',
      featured: true
    },
    {
      title: 'Tech Verify',
      description: 'Drop a CAD export in the browser and every STEM Racing regulation is checked against the real geometry in under a tenth of a second. Anything geometry cannot prove is reported as needing manual verification rather than guessed.',
      image: aiImage,
      tech: ['TypeScript', 'three.js', 'Computational geometry'],
      github: 'https://github.com/DDXPlayz/techverify',
      live: 'https://tools.anantamracing.com/techverify',
      featured: true
    },
    {
      title: 'Wheel Physics Lab',
      description: 'A wheel and bearing simulator built on the insight that the wheels are passive flywheels spun up by ground friction alone, with Monte Carlo sweeps over manufacturing tolerances.',
      image: aiImage,
      tech: ['Simulation', 'Numerical methods', 'JavaScript'],
      github: 'https://github.com/DDXPlayz/wheel-physics-lab',
      live: 'https://anantamracing.com/wheel_physics_sim/',
      featured: true
    },
    {
      title: 'Anantam Tickets',
      description: 'The ticketing system that ran a launch event: Razorpay payments with server-side signature verification, tickets composed as images and emailed, and QR verification at the gate.',
      image: aiImage,
      tech: ['Flask', 'Razorpay', 'Pillow', 'SQLite'],
      github: 'https://github.com/DDXPlayz/anantam-tickets',
      live: 'https://tickets.anantamracing.com/',
      featured: true
    },
    {
      title: 'Lingua',
      description: 'Multilingual chat that expands chat shorthand into whole words before translating, so the translator never sees "brb". Flask and SQLite with a local transformer model for spelling correction.',
      image: linguaImage,
      tech: ['Python', 'Flask', 'Transformers', 'SQLite'],
      github: null,
      live: null,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine creativity with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-tile group ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {/* Guarded like the live link below: a project whose repository
                      is private has github: null, and an <a> with no href is a
                      dead button rather than an absent one. */}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm inline-flex items-center justify-center"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center transition-all duration-300 hover:bg-primary-glow text-sm inline-flex items-center justify-center"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            id="profile-link"
            href="https://github.com/DDXPlayz" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center justify-center"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;