import { Router } from 'express';
import { getLeads, createLead, updateLeadStatus } from '../controllers/leads.controller';

const router = Router();

router.get('/', getLeads);
router.post('/', createLead);
router.patch('/:id/status', updateLeadStatus);

export default router;
