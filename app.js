const charlist = document.querySelector('.central');
const addbutton = document.querySelector('.button');
const char = document.querySelector('.char');
const eng = document.querySelector('.eng');
const pin = document.querySelector('.pin');
const others = document.querySelector('.others');
const eachone = document.querySelector('.eachone');
const info = document.querySelector('.info');




class Character{
   constructor(char, eng, pin, ...others){ 

    this.char = char;
    this.eng = eng;
    this.pin = pin;
    this.others = others;
    this.biglist = db.collection('characters');

   }

   async addCharacter(char){
       const charrr = {
        char : this.char,
        eng : this.eng,
        pin  : this.pin,
        others : this.others 
       }
       const response = this.biglist.add(charrr);
       return response;
   }

};


const xin1 = new Character('新', 'new', 'xin1', '心', '信' );
const hao3 = new Character('好', 'good', 'hao3', '号', '浩' );









const listo = [xin1, hao3];

addbutton.addEventListener('click', e => {
    console.log(e.target);
    console.log('clickclick');

    listo.forEach((character) => {
        // charlist.innerHTML +=
        // ` 
        // <div>${character.char}</div>
        // <div>${character.eng}</div> 
        // <div>${character.pin}</div> 
        // <div>${character.others}</div>  
        // `;

        
        // char.innerHTML +=
        // `<span className="char">${character.char}</span>`;

        // eng.innerHTML +=
        // `<span className="eng">${character.eng}</span>`;

        // pin.innerHTML +=
        // `<span className="pin">${character.pin}</span>`;

        // others.innerHTML +=
        // `<span className="others">${character.others}</span>`;

        info.innerHTML +=
        `<div class="eachone">
        <span className="char">${character.char}</span>
        <span className="eng">${character.eng}</span>
        <span className="pin">${character.pin}</span>
        <span className="others">${character.others}</span>
        </div>
        `; 

        character.addCharacter(character);

    }) 
});

//add characters to database
console.log(xin1)

const getChar = db.collection('characters').get()
    .then(snapshot => console.log(snapshot.docs[0].data()));



const myarray = [];

    db.collection('characters').get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => (myarray.push(doc.data())))
        console.log(myarray);
    }).catch(err => {
        console.log(err)
    });