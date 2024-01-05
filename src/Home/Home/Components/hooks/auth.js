// save user in mongodb

export const saveUser = user =>{
    const currentUser = {
        email:user.email,
        name:user.displayName,
        image:user.photoURL
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

}

// Get role
export const getRole = async email => {
    const response = await fetch(`http://localhost:5000/users/${email}`)
    const user = await response.json()
    return user?.role
  }

// Get All Clients info
  export const getAllBookings = async () => {
    const response = await fetch("http://localhost:5000/bookings")
    const data = await response.json()
    return data
  }
