require('dotenv').config()
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY
)

async function setupDatabase() {
  // Create tables
  const { error: sqlError } = await supabase.sql(`
    CREATE TABLE IF NOT EXISTS profiles (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      full_name TEXT
    );
  `)
  if (sqlError) throw sqlError

  // Insert a test row
  const { error: insertError } = await supabase
    .from('profiles')
    .insert({ email: 'test@test.com', full_name: 'Test User' })

  if (insertError) throw insertError

  // Read back
  const { data, error: readError } = await supabase
    .from('profiles')
    .select('*')

  console.log('Setup done. Current data:', data)
}

setupDatabase()