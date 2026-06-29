import { supabase } from "../supabaseClient"

export async function sign_up(email, first_name, last_name, password){
    const { data, error } = await supabase
    .from('credential')
    .insert([
        {
            email: email,
            first_name : first_name,
            last_name : last_name,
            password : password
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



