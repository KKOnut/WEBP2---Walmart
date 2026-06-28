import { createClient } from '@supabase/supabase-js'

const URL = process.env.SUPABASE_URL
const KEY = process.env.SUPABASE_PUBLISHABLE_KEY

const supabase = createClient(
    URL,
    KEY
)

function clear() {
    let user_email = document.getElementById('email')
    let user_first = document.getElementById('first_name')
    let user_last = document.getElementById('last_name')
    let user_password = document.getElementById('password')

    console.log(user_email.user_password)
    user_email.value = ""
    user_first.value = ""
    user_last.value = ""
    user_password.value = ""
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