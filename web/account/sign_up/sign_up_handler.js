import { send } from '/src/supabase/function/account.js'

// Wait for the DOM to be fully loaded before looking for the button
document.addEventListener('DOMContentLoaded', () => {
    // Replace 'signup-btn' with the actual ID of your button or form
    const btn = document.getElementById('btn-create_acc')
    
    if (btn) {
        btn.addEventListener('click', send)
    } else {
        console.warn('Button with id "signup-btn" not found on this page.')
    }
})