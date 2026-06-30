import { sign_up } from '../../../src/supabase/function/auth.js'
import { show_messages } from '../../../src/utils/helper.js'


function clear(){
    let email = document.getElementById('email')
    let first_name = document.getElementById('first_name')
    let last_name = document.getElementById('last_name')
    let password = document.getElementById('password')

    email.value = ""
    first_name.value = ""
    last_name.value = ""
    password.value = ""

}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-create_acc')

    if (btn) {
        btn.addEventListener('click', async (e) => {
            try {
                let user_data = document.querySelectorAll('input')

                let email = user_data[0].value
                let first_nme = user_data[1].value
                let last_name = user_data[2].value
                let password = user_data[3].value

                await sign_up(email, first_nme, last_name, password)
                clear()
                show_messages("Account Succesfully Created!") 
                window.location.href = '/web/account/sign_in/sign_in.html'
            }
            catch (e) {
                show_messages("Error = " + e)
            }
        })
       
    } else {
        console.warn('Button with id "signup-btn" not found on this page.')
    }
})
