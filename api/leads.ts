import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from './_lib/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from('leads')
        .select('*, project:projects(title)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return res.json(data || []);
    }

    if (req.method === 'POST') {
      const { name, email, phone, message, budget, business_profile_id, project_id } = req.body;

      const { data, error } = await supabaseAdmin
        .from('leads')
        .insert({
          name, email, phone, message, budget,
          business_profile_id, project_id,
          status: 'NEW',
        })
        .select()
        .single();

      if (error) throw error;
      return res.status(201).json(data);
    }

    if (req.method === 'PATCH') {
      const { id, status } = req.body;

      const { data, error } = await supabaseAdmin
        .from('leads')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return res.json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
