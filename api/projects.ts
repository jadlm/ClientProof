import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from './_lib/supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from('projects')
        .select('*, images:project_images(*), business_profile:business_profiles(*)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return res.json(data || []);
    }

    if (req.method === 'POST') {
      const { title, description, category, location, completion_date, duration, budget, user_id, business_profile_id } = req.body;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

      const { data, error } = await supabaseAdmin
        .from('projects')
        .insert({
          title, slug, description, category, location,
          completion_date, duration, budget,
          user_id, business_profile_id,
        })
        .select()
        .single();

      if (error) throw error;
      return res.status(201).json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
