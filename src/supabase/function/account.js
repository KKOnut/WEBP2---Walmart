import { supabase } from "../supabaseClient"

export async function send(){
    const { data, error } = await supabase
    .from('credential')
    .insert([
        {
            email: '1234@example.com',
            first_name : 'John',
            last_name : 'Doe',
            password : '1234'
         }
    ])
    .select()
    if (error) {
    console.error('Insert error:', error)
    }
    else {
        console.log('Insert successful:', data)
    }
}
