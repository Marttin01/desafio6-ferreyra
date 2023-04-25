const formLogout = document.querySelector('#formLogout') 

if(formLogout instanceof HTMLFormElement){
    formLogout.addEventListener('submit', async event =>{
        // event.preventDefault()

        const logoutButton = document.querySelector('#logoutButton')

        if(logoutButton instanceof HTMLButtonElement){
            await fetch('/api/users/logout', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        }
        
    })
}