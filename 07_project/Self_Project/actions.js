//API
let isDataShown = false; // Track toggle state


const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)

xhr.onreadystatechange = function () {
    console.log(xhr.responseText);

    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)

        console.log(typeof data)

        console.log(data.followers);


        // name changing
        button.addEventListener('click', () => {

            if (!isDataShown) {
                name.innerHTML = `${data.name}`
                role.innerHTML = `${data.bio}`

                //for image 
                image.setAttribute('src', data.avatar_url)
                // document.createElement('img')
                isDataShown = true;
                
            } else {
                name.innerHTML = 'Name';
                role.innerHTML = `<p id="role">Architect & Engineer</p>`;
                image.setAttribute('src', 'https://www.bing.com/th/id/OIP.Op8CEP99HoMDn_I3yBusrgHaEI?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')
            console.log('reverse');
            
            isDataShown = false;
            console.log(isDataShown);

            }

        }
        )
    }

}
xhr.send();

//code 
const button = document.querySelector('#button')

const card = document.querySelector('.card')

const name = document.querySelector('h4')

const role = document.querySelector('#role')

const image = document.querySelector('img')

