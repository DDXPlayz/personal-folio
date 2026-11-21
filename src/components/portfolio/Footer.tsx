const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold glow-text">DG</span>
              <span className="text-lg font-semibold">Dhruva Goyal</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Developer, STEM Racing engineer and music creator. Native mobile,
              3D web, simulation and AI.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/DDXPlayz" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruva-goyal-bb57a0342/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/ddxplayz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCHLooarCfbB5C0STgMx6teA" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#music" className="block text-muted-foreground hover:text-primary transition-colors">
                Music
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:dhruvagoyal102@gmail.com" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                dhruvagoyal102@gmail.com
              </a>
              <p className="text-muted-foreground">Available for collaborations</p>
              <p className="text-muted-foreground">Open to exciting opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dhruva Goyal. Built with passion and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;