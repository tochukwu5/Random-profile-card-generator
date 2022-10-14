const body = document.querySelector('body')
const hero = document.querySelector('.hero')
const input = document.querySelector('#input')
const searchBtn = document.querySelector('button')
const clearAll = document.querySelector('.span')


async function getData(num){
    const res = await fetch(`https://randomuser.me/api?results=${num}`);
    const { results } = await res.json()

    results.forEach(card =>{
      const container = document.createElement('div');
      container.classList.add('container');
      container.innerHTML = `
      <div class="bg"></div>
        <div class="image">
        <img src="${card.picture.large}" alt="${card.name.title}">
    </div>
        <div class="content">
            <div class="content-body">
                <li><strong>name: </strong>${card.name.first} ${card.name.last}</li>
                <li><strong>age: </strong>${card.dob.age} years</li>
                <li><strong>phone: </strong>${card.phone}</li>
                <li><strong>Address: </strong>${card.location.city}, ${card.location.country}</li>
                <li><strong>email: </strong>${card.email}</li>
            </div>
        </div>
      `
      hero.appendChild(container)
      clearAll.style.display = 'block'
    })

}


function getResult(){
    hero.innerHTML = ''
   if(input.value === ''){
       alert('Enter the numbers of card you want (1 - 3000)')
   }else{
    num = input.value 
    getData(num)
    input.value = ''
   } 
}

clearAll.onclick = ()=>{
   hero.innerHTML = '';
   clearAll.style.display = 'none';
   hero.innerHTML = '<p>designed by <a href="https://tochukwu5.github.io/portfolio/">David</a><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png" alt="" class="emoji"></p>'
}


searchBtn.addEventListener('click', getResult)


input.addEventListener('keypress', enterKey);

function enterKey(e){
    if (e.keyCode == 13){
        getResult()
    }
}

 