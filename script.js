//your code here
let img = document.getElementById('idPhotoDiv');
let name = document.getElementById('name');
let info = document.getElementById('displayInfo');
let age = document.getElementById('idPhotoDiv');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((product) => {
        let obj = product.results[0];
        console.log(obj)
        let nameObj = obj.name;
        let namee = `${nameObj.first} ${nameObj.last}`;
        let agee = obj.dob.age;
        let emaill = obj.email;
        let phonee = obj.phone;
        let imagee = obj.picture.large;
        // console.log(imagee);

        img.innerHTML = `<img src="${imagee}" alt="xyz">`;
        name.innerText = `${namee}`;

        age.addEventListener('click', ()=>{
            info.innerText = `${agee}`;
        })
    })

