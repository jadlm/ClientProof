import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        images: true,
        businessProfile: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const getProjectBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        images: { orderBy: { sortOrder: 'asc' } },
        testimonial: true,
        businessProfile: true,
      },
    });
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const { title, description, category, location, completionDate, duration, budget, userId, businessProfileId } = req.body;
  
  try {
    // Generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        category,
        location,
        completionDate: completionDate ? new Date(completionDate) : null,
        duration,
        budget,
        userId,
        businessProfileId,
      },
    });
    
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};
