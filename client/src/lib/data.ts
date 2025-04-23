export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Model Development (Predictive AI)",
    description: "A sophisticated predictive AI model designed to analyze patterns and forecast outcomes with high accuracy.",
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=2668&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "Data Science"],
    github: "https://github.com/mrjawadhere",
    demo: "#"
  },
  {
    title: "Object Detection Model",
    description: "Real-time object detection system that identifies and tracks multiple objects in videos and image streams.",
    image: "https://images.unsplash.com/photo-1625038032515-308ab14d10b9?q=80&w=2670&auto=format&fit=crop",
    technologies: ["Python", "Computer Vision", "OpenCV"],
    github: "https://github.com/mrjawadhere",
    demo: "#"
  },
  {
    title: "Jarvis 2.0",
    description: "Advanced personal assistant with natural language processing capabilities and system automation features.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2906&auto=format&fit=crop",
    technologies: ["Python", "NLP", "Speech Recognition"],
    github: "https://github.com/mrjawadhere",
    demo: "#"
  },
  {
    title: "Virtual Mouse",
    description: "Hands-free computer interface using computer vision to track hand movements for mouse control.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2670&auto=format&fit=crop",
    technologies: ["Python", "Computer Vision", "MediaPipe"],
    github: "https://github.com/mrjawadhere",
    demo: "#"
  },
  {
    title: "Face Detection Model",
    description: "Robust facial recognition system that detects and identifies faces with high accuracy in various conditions.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2787&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "Deep Learning"],
    github: "https://github.com/mrjawadhere",
    demo: "#"
  }
];
