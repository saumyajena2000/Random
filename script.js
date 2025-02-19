const getData = async () => {
    const url = "https://randomuser.me/api/";

    try {
        const response = await fetch(url);
        if(!response.ok)
            throw new Error(`Response status : ${response.status}`);

        const data = await response.json();
        const user = data.results[0];

        document.getElementById('profileImage').src = user.picture.large;
        document.getElementById('name').innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById('email').innerText = `${user.email}`;
        document.getElementById('phone').innerText = `${user.phone}`;
        document.getElementById('location').innerText = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
    } catch(error) {
        console.log(error);
        alert('Failed to load User data');
    }
} 