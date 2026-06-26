import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { url } from 'node:inspector'

const URL = process.env.SUPABASE_URL
const KEY = process.env.SUPABASE_PUBLISHABLE_KEY

const supabase = createClient(
    URL,
    KEY
)

const { data, error } = await supabase
    .from('credential')
    .insert([
    {
        email: '3456@example.com',
        first_name: 'Lalisa',
        last_name: 'Mamisa',
        password: '1234'
    }
    ])

if (error) {
    console.error('Error : ', error)
}
else {
    console.log('Data sucessfully inserted')
}