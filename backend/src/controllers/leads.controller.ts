import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await prisma.lead.findMany({
      include: {
        project: { select: { title: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

export const createLead = async (req: Request, res: Response) => {
  const { name, email, phone, message, budget, businessProfileId, projectId } = req.body;
  
  try {
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        message,
        budget,
        businessProfileId,
        projectId,
      },
    });
    
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create lead' });
  }
};

export const updateLeadStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
    });
    
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lead status' });
  }
};
