# Haqikos - Official Website

A comprehensive, modern website for Haqikos, an advanced AI company, inspired by Perplexity.ai and Claude.ai designs. Built with Next.js, featuring a professional, futuristic design with smooth animations and full responsiveness.

##  Features

### **Core Website Pages**
-  **Home** (`/`) - Landing page with hero section, features, and company overview
-  **About Us** (`/about`) - Company information and team details
-  **Vision & Mission** (`/vision-mission`) - Company vision, mission, and values
-  **Projects** (`/projects`) - Comprehensive product showcase and services
-  **Research & Innovation** (`/research`) - Research areas, papers, and partnerships
-  **Careers** (`/careers`) - Job opportunities, internships, and company culture
-  **Blog & Resources** (`/blog`) - AI insights, research updates, and educational content
-  **Contact Us** (`/contact`) - Multiple contact methods and forms
-  **Privacy Policy** (`/privacy-policy`) - Data protection and privacy information
-  **Terms & Conditions** (`/terms`) - Legal terms and service agreements
-  **FAQ** (`/faq`) - Frequently asked questions with search functionality
-  **Community** (`/community`) - Community features and future plans
-  **API Documentation** (`/api-docs`) - Developer resources and SDKs

### **Design & User Experience**
-  **Modern Design** - Inspired by Perplexity.ai and Claude.ai
-  **Dark Theme** - Professional black/dark gray color scheme
-  **Smooth Animations** - Framer Motion animations throughout
-  **Fully Responsive** - Optimized for desktop, tablet, and mobile
-  **Accessibility** - ARIA labels, keyboard navigation, and focus management
-  **SEO Optimized** - Meta tags, structured data, and Open Graph

### **Technical Features**
-  **Performance** - Optimized images, lazy loading, and performance monitoring
- ️ **Error Handling** - Error boundaries and graceful error management
-  **Security** - Form validation and secure practices
-  **Analytics Ready** - Performance monitoring and Core Web Vitals tracking

## ️ Project Structure

```
Haqikos/
├── components/                 # Reusable React components
│   ├── Header.jsx            # Navigation header with dropdowns
│   ├── Footer.jsx            # Comprehensive footer with links
│   ├── HeroSection.jsx       # Main landing hero section
│   ├── Features.jsx          # Company features showcase
│   ├── ProductHighlight.jsx  # Product highlights
│   ├── QIAShowcase.jsx       # QIA AI assistant showcase
│   ├── ResearchCards.jsx     # Research area cards
│   ├── Testimonials.jsx      # Customer testimonials
│   ├── Updates.jsx           # Company updates section
│   ├── ErrorBoundary.jsx     # Error handling component
│   ├── LoadingSpinner.jsx    # Loading states
│   └── PerformanceMonitor.jsx # Performance tracking
├── pages/                     # Next.js pages
│   ├── _app.jsx              # App wrapper with error boundary
│   ├── index.jsx             # Home page
│   ├── about.jsx             # About Us page
│   ├── vision-mission.jsx    # Vision & Mission page
│   ├── products.jsx          # AI Products page
│   ├── research.jsx          # Research & Innovation page
│   ├── careers.jsx           # Careers page
│   ├── blog.jsx              # Blog & Resources page
│   ├── contact.jsx           # Contact Us page
│   ├── privacy-policy.jsx    # Privacy Policy page
│   ├── terms.jsx             # Terms & Conditions page
│   ├── faq.jsx               # FAQ page
│   ├── community.jsx         # Community page
│   └── api-docs.jsx          # API Documentation page
├── styles/                    # Global styles and CSS
│   └── globals.css           # Tailwind CSS and custom styles
├── public/                    # Static assets
│   ├── favicon.svg           # Website favicon
│   ├── logo.png              # Company logo
│   └── logo.svg              # Vector logo
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── README.md                 # This file
```

## ️ Technology Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter and JetBrains Mono for typography
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

##  Getting Started

### **Prerequisites**
- Node.js 16+ 
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Haqikos
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**

```bash
npm run build
npm start
```

##  Customization

### **Colors & Theme**
The website uses a sophisticated dark theme with:
- Primary: Black (#000000)
- Secondary: Dark Gray (#111827)
- Accent: Blue (#3B82F6) to Purple (#8B5CF6) gradients
- Text: White (#FFFFFF) and Gray (#9CA3AF)

### **Components**
All components are modular and reusable. Key components include:
- **Header**: Responsive navigation with dropdown menus
- **Footer**: Comprehensive footer with multiple sections
- **Cards**: Consistent card design for content sections
- **Buttons**: Gradient and secondary button styles
- **Forms**: Styled form inputs and validation

### **Animations**
Framer Motion animations include:
- Fade-in effects on scroll
- Hover animations on interactive elements
- Smooth page transitions
- Loading states and micro-interactions

##  Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt seamlessly across devices with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for each screen size
- Responsive typography and spacing

##  SEO & Performance

### **SEO Features**
- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Semantic HTML structure
- Optimized page titles and descriptions

### **Performance Optimizations**
- Image optimization
- Lazy loading for components
- Performance monitoring
- Core Web Vitals tracking
- Optimized bundle sizes

##  Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

### **Other Platforms**
- **Netlify**: Use `npm run build` and deploy `out` folder
- **AWS Amplify**: Connect repository and auto-deploy
- **Traditional Hosting**: Build and upload static files

##  Content Management

### **Adding New Pages**
1. Create new page in `pages/` directory
2. Follow existing page structure
3. Add navigation links in Header component
4. Update Footer with new page links

### **Updating Content**
- Edit content directly in component files
- Update images in `public/` directory
- Modify styles in `styles/globals.css`
- Update Tailwind config for new design tokens

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  License

This project is proprietary to Haqikos. All rights reserved.

##  Support

For technical support or questions:
- **Email**: dev-support@haqikos.ai
- **Documentation**: Check this README and code comments
- **Issues**: Create GitHub issues for bugs or feature requests

##  Future Enhancements

### **Planned Features**
- [ ] User authentication and accounts
- [ ] Interactive AI demos
- [ ] Real-time chat support
- [ ] Advanced search functionality
- [ ] Multi-language support
- [ ] CMS integration
- [ ] E-commerce capabilities
- [ ] Advanced analytics dashboard

### **Technical Improvements**
- [ ] TypeScript migration
- [ ] Unit and integration tests
- [ ] CI/CD pipeline
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] PWA capabilities

---

**Built with ️ by the Haqikos Team**

*Shaping the future of artificial intelligence* 