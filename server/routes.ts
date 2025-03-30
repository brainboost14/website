import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using schema
      const validatedData = insertContactFormSchema.parse(req.body);
      
      // Store the contact form submission in storage
      const result = await storage.createContactForm(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error: any) {
      // Return error response
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid form data",
      });
    }
  });

  // Get all contact form submissions (for admin purposes, typically would be protected)
  app.get("/api/contact", async (req, res) => {
    try {
      const forms = await storage.getAllContactForms();
      return res.status(200).json({
        success: true,
        data: forms
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to retrieve contact forms",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
