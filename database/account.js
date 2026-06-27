import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const URL = process.env.SUPABASE_URL
const KEY = process.env.SUPABASE_PUBLISHABLE_KEY

const supabase = createClient(
    URL,
    KEY
)

function clear_input() {
    console.log('button is clicked')
    let email = document.getElementsByClassName('input-group')
    console.log(email)
}

async function insert_data() {
    const { data, error } = await supabase
        .from('credential')
        .insert([
        {
            email: '32536@example.com',
            first_name: 'Lalisa',
            last_name: 'Mamisa',
            password: '0234'
        }
        ])

    if (error) {
        console.error('Error : ', error)
    }
    else {
        console.log('Data sucessfully inserted')
    }
}
