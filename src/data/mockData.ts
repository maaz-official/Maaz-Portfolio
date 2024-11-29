import { Project, BlogPost, SocialLink } from '../types';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/muhammadmaaz/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "OpenAI", "Socket.io", "Express"],
    githubUrl: "https://github.com/muhammadmaaz/ai-chat"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/muhammadmaaz/portfolio"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for building large-scale React applications",
    date: "2024-03-01",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    url: "/blog/scalable-react-apps"
  },
  {
    id: 2,
    title: "Modern JavaScript Features You Should Know",
    excerpt: "Exploring the latest JavaScript features and their practical applications",
    date: "2024-02-15",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
    url: "/blog/modern-javascript"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/muhammadmaaz",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/muhammadmaaz",
    icon: "Linkedin"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/muhammadmaaz",
    icon: "Twitter"
  }
];