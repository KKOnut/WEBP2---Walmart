import { sign_up } from '../../../src/supabase/function/auth.js'
import { show_messages } from '../../../src/utils/helper.js'


function clear(){
    
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
                console.log(email)

                await sign_up(email, first_nme, last_name, password)


                show_messages("Account Succesfully Created!")
            }
            catch (e) {
                show_messages("Error = " + e)
            }
        })
       
    } else {
        console.warn('Button with id "signup-btn" not found on this page.')
    }
})
