import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Simple contact message interface
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and return success
      console.log('Contact form submission:', { name, email, subject, message });
      
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Server error, please try again later' });
    }
  });

  // Download resume endpoint (placeholder for actual file handling)
  app.get('/api/resume', (req: Request, res: Response) => {
    // In a real application, you would return a PDF file here
    // For now, we'll just return a success message
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Resume download endpoint' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
