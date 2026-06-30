import { show_messages } from "../../../src/utils/helper"
import { sign_in } from "../../../src/supabase/function/auth"

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-sign_in')

    if (btn) {
        btn.addEventListener('click', async (e) => {
            try {
                let email = document.getElementById('email').value
                let email_trimmed = email.trim()
                let password = document.getElementById('password').value

                let user_data = await sign_in(email_trimmed)
                if (email_trimmed == user_data[0]['email'] && password == user_data[0]['password']) {
                    show_messages('You are logged in!')
                    window.location.href = '/index.html'
                }
                else {
                    show_messages("Email or password is wrong. Please try again!")
                }
            }
            catch (e) {
                show_messages("Error = " + e)
            }
        })
       
    } else {
        console.warn('Button with id "btn-sign_in" not found on this page.')
    }
})
