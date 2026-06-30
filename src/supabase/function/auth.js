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
        return data
    }
}

export async function sign_in(email, password) {
    const { data, error } = await supabase
    .from("credential")
    .select('email, password')
    .eq('email', email)

    if (error) {
        console.error('Fetch data failed :', error)
    }
    else {
        console.log('Fetch data successful!')
        return data    
    }

}


