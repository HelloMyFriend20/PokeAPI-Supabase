//src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfncskptsbygpfhqlgdg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbmNza3B0c2J5Z3BmaHFsZ2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzgxMTMsImV4cCI6MjA2MjkxNDExM30.yWHIGU4L_fVJaJwP-i1kbqlLZxNb4lC9bkAuNQCVe-I';
export const supabase = createClient(supabaseUrl, supabaseKey);