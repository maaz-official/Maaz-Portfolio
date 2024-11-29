import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <a
          href={post.url}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          Read More →
        </a>
      </div>
    </motion.article>
  );
};

export default BlogCard