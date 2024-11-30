import React from 'react';
import { Code, Palette, Server, Database, Cloud, Lock } from 'lucide-react';
import { Skill } from '../types';

export const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code className="w-5 h-5 text-blue-500" />,
    color: 'blue'
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="w-5 h-5 text-purple-500" />,
    color: 'purple'
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-5 h-5 text-green-500" />,
    color: 'green'
  },
  {
    name: 'Database',
    icon: <Database className="w-5 h-5 text-orange-500" />,
    color: 'orange'
  },
  {
    name: 'Cloud Services',
    icon: <Cloud className="w-5 h-5 text-cyan-500" />,
    color: 'cyan'
  },
  {
    name: 'Security',
    icon: <Lock className="w-5 h-5 text-red-500" />,
    color: 'red'
  }
];