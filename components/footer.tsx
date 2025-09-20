import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Samawada</span>
            </div>

            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Canadian registered charitable organization providing access to clean water to underserved communities in
              East Africa, with particular focus in Somalia.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@samawada.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (613) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ottawa, ON, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#impact" className="text-background/80 hover:text-background transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#donate" className="text-background/80 hover:text-background transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              <p>© 2024 Samawada Organization. All rights reserved.</p>
              <p className="mt-1">Registered Charity Number: 723571485 RR 0002</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
