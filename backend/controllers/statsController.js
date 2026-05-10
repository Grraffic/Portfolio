const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.getStats = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('stats')
      .select('count')
      .eq('id', 'page_views')
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.incrementViews = async (req, res, next) => {
  try {
    // Using rpc or a simple update for now
    // Since it's a simple counter, we can just do count + 1
    const { data: current, error: fetchError } = await supabase
      .from('stats')
      .select('count')
      .eq('id', 'page_views')
      .single();

    if (fetchError) throw fetchError;

    const { data, error } = await supabase
      .from('stats')
      .update({ count: (current.count || 0) + 1 })
      .eq('id', 'page_views')
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};
