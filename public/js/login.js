const formLogin = document.querySelector('#formLogin')

if(formLogin instanceof HTMLFormElement){
    formLogin.addEventListener('submit', async event => {
        event.preventDefault()

        const input_email = document.querySelector('#input_email')
        const input_password = document.querySelector('#input_password')

        if(input_email instanceof HTMLInputElement && input_password instanceof HTMLInputElement){

            const sesion = {
                email:input_email.value,
                password:input_password.value
            }

            try {
                const response = await fetch('/api/users/login', {
                    method:'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sesion)
                })
                const data = await response.json() 
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
    } )
}