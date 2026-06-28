import { createClient } from '@supabase/supabase-js'
import { error } from 'node:console'

const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY
console.log(supabaseUrl)
try{
    const supabase = createClient(supabaseUrl, supabaseKey)
}
catch(error){
    console.log(error.message)
}
