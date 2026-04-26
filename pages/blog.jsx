import Head from "next/head";


import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Shield,
  Users, 
  Calendar, 
  Clock, 
  ArrowRight,
  ExternalLink,
  Tag,
  Search,
  User
} from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "research", name: "Research", count: 8 },
    { id: "ai-news", name: "AI News", count: 6 },
    { id: "tutorials", name: "Tutorials", count: 5 },
    { id: "company", name: "Company", count: 3 },
    { id: "ethics", name: "AI Ethics", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AGI: A Comprehensive Overview",
      excerpt: "Exploring the current state of artificial general intelligence research and what lies ahead in our quest for human-level AI.",
      author: "Dr. Sarah Chen",
      authorRole: "Lead AI Researcher",
      category: "research",
      tags: ["AGI", "Research", "Future of AI"],
      publishDate: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      image: "",
      slug: "future-of-agi-overview"
    },
    {
      id: 2,
      title: "Quantum AI: Breaking the Classical Limits",
      excerpt: "How quantum computing is revolutionizing artificial intelligence and enabling breakthroughs previously thought impossible.",
      author: "Dr. Michael Rodriguez",
      authorRole: "Quantum AI Specialist",
      category: "research",
      tags: ["Quantum AI", "Quantum Computing", "Machine Learning"],
      publishDate: "2024-01-12",
      readTime: "12 min read",
      featured: true,
      image: "",
      slug: "quantum-ai-breaking-limits"
    },
    {
      id: 3,
      title: "Building Responsible AI: A Developer's Guide",
      excerpt: "Practical guidelines for developing AI systems that are safe, ethical, and beneficial to humanity.",
      author: "Elena Petrov",
      authorRole: "AI Ethics Engineer",
      category: "tutorials",
      tags: ["AI Ethics", "Responsible AI", "Development"],
      publishDate: "2024-01-10",
      readTime: "15 min read",
      featured: false,
      image: "",
      slug: "building-responsible-ai-guide"
    },
    {
      id: 4,
      title: "Large Language Models: Understanding the Technology",
      excerpt: "A deep dive into how large language models work, their capabilities, and their implications for the future.",
      author: "Dr. Raj Patel",
      authorRole: "NLP Researcher",
      category: "tutorials",
      tags: ["LLMs", "NLP", "Deep Learning"],
      publishDate: "2024-01-08",
      readTime: "10 min read",
      featured: false,
      image: "",
      slug: "large-language-models-understanding"
    },
    {
      id: 5,
      title: "AI in Healthcare: Transforming Patient Care",
      excerpt: "How artificial intelligence is revolutionizing healthcare delivery, diagnosis, and treatment planning.",
      author: "Dr. Wei Zhang",
      authorRole: "AI Healthcare Lead",
      category: "ai-news",
      tags: ["Healthcare", "AI Applications", "Medical AI"],
      publishDate: "2024-01-05",
      readTime: "7 min read",
      featured: false,
      image: "",
      slug: "ai-healthcare-transforming-care"
    },
    {
      id: 6,
      title: "The Ethics of AI Decision Making",
      excerpt: "Examining the moral implications of AI systems making decisions that affect human lives and society.",
      author: "Dr. James Wilson",
      authorRole: "AI Ethics Researcher",
      category: "ethics",
      tags: ["AI Ethics", "Decision Making", "Moral AI"],
      publishDate: "2024-01-03",
      readTime: "11 min read",
      featured: false,
      image: "",
      slug: "ethics-ai-decision-making"
    }
  ];

  const resources = [
    {
      title: "AI Research Papers",
      description: "Access our latest research publications and technical papers",
      iconType: "BookOpen",
      link: "/research",
      type: "Research"
    },
    {
      title: "Developer Documentation",
      description: "Comprehensive guides and API documentation for developers",
      iconType: "FileText",
      link: "/api-docs",
      type: "Technical"
    },
    {
      title: "AI Safety Guidelines",
      description: "Best practices and frameworks for building safe AI systems",
      iconType: "Shield",
      link: "/safety-guidelines",
      type: "Guidelines"
    },
    {
      title: "Educational Videos",
      description: "Video tutorials and presentations on AI concepts",
      iconType: "Video",
      link: "/videos",
      type: "Educational"
    }
  ];

  const renderResourceIcon = (type) => {
    switch (type) {
      case "BookOpen": return <BookOpen className="w-8 h-8 text-blue-400 mx-auto" />;
      case "FileText": return <FileText className="w-8 h-8 text-blue-400 mx-auto" />;
      case "Shield": return <Shield className="w-8 h-8 text-blue-400 mx-auto" />;
      case "Video": return <Video className="w-8 h-8 text-blue-400 mx-auto" />;
      default: return null;
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Head>
        <title>Blog & Resources - Haqikos | AI Insights & Research</title>
        <meta
          name="description"
          content="Stay updated with the latest AI research, insights, and educational content from Haqikos. Explore our blog, research papers, and resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
                Blog & Resources
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest AI research, insights, and educational content 
                from our team of experts and researchers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, research, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important and insightful content on AI research and development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-6">
                    {post.image ? (
                      <div className="text-6xl">{post.image}</div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <BookOpen size={32} />
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{post.author}</p>
                        <p className="text-gray-400 text-sm">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{formatDate(post.publishDate)}</p>
                      <p className="text-gray-500 text-sm">{post.readTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of AI insights, research updates, and educational content.
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="space-y-6 mb-20">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card group hover:scale-102 transition-transform duration-300"
                  >
                    <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {post.image ? (
                        <div className="text-4xl">{post.image}</div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                          <FileText size={24} />
                        </div>
                      )}
                    </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full">
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </span>
                          <span className="text-gray-500 text-sm">{formatDate(post.publishDate)}</span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">{post.author}</p>
                              <p className="text-gray-400 text-xs">{post.authorRole}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag, idx) => (
                                <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <a
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">No posts found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filters.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of AI resources, documentation, and educational materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4">{renderResourceIcon(resource.iconType)}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mb-4">
                    {resource.type}
                  </span>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest AI research, insights, and company updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
