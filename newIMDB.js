class Professional{   
        constructor(id,name,age=null,gender=null,weight=null,height=null,hairColor=null,eyeColor=null,isRetired=null,nationality=null,oscarNumber=null,proffesion=null,picture=null){
                this.id=id;
                this.name = name;
                this.age = age;
                this.gender = gender;
                this.weight = weight;
                this.height= height;
                this.hairColor = hairColor;
                this.eyeColor = eyeColor;
                this.isRetired = isRetired;
                this.nationality = nationality;
                this.oscarsNumber = oscarNumber;
                this.proffesion = proffesion;
                this.picture=picture;
        }
       toHtml(){
           let string=`<p>
                *  Age: ${this.age}<br>
                *  Gender: ${this.gender}<br>
                *  Weight: ${this.weight}<br>
                *  Height: ${this.height}<br>
                *  Hair Color: ${this.hairColor}<br>
                *  Eye Color: ${this.eyeColor}<br>
                *  is Retired?: ${this.isRetired}<br>
                *  Nationality: ${this.nationality}<br>
                *  Oscar Numbers: ${this.oscarsNumber}<br>
                *  Profession:  ${this.proffesion} </p>
                <p> <span onmouseover="theirMovies(${this.id})" style="color:blue; font-weight:500; cursor:pointer">Movies:</span> <span id="theirMovies"></span></p>`;
           return string;
       }


       nameString(){
           let string=`<span onclick="showProfessional(${this.id})" style="color:blue; font-weight:600; cursor:pointer">${this.name}</span>`;
           return string;
       }
}




class Movie{
    constructor(title=null, releaseYear=null, nationality=null, genre=null, picture=null,director=null,writer=null,language=null,isMCU=null,mainCharacterName=null,producer=null,distributor=null,actors){
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality=nationality;
        this.genre=genre;
        this.picture=picture;

        this.actors=actors;
        this.director=director;
        this.writer=writer;
        this.language=language;
        this.isMCU=isMCU;
        this.mainCharacterName=mainCharacterName;
        this.producer=producer;
        this.distributor=distributor;
        
    }

    toHtml(){
        let actors="";
        for(let i=0;i<this.actors.length;i++){
            if(i==this.actors.length-1){
                actors+=`${this.actors[i].nameString()}`; 
            }else{
                actors+=`${this.actors[i].nameString()}<br>`;
            }
        }
        let string=`<h2>${this.title}</h2>
        <h3>${this.director.nameString()} (${this.releaseYear})</h3>
        <p><i>Starring:</i> ${actors}<br>
        <i>Nationality:</i> ${this.nationality}<br>
        <i>Writer:</i> ${this.writer.nameString()}<br>
        <i>Language</i> ${this.language}<br>
        <i>Is it part of MCU?:</i> ${this.isMCU}<br>
        <i>Main character's Name:</i> ${this.mainCharacterName}<br>
        <i>Producer:</i> ${this.producer}<br>
        <i>Distributor:</i> ${this.distributor}<br>
        <i>Genre:</i> ${this.genre}</p>`;
        return string;
    }


}


class IMDB{
    constructor(peliculas){
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero){
        let imdbBBDD = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,imdbBBDD)
    }

    obtenerInstanciaIMDB(nombreFichero){
        let InstanciaIMDB=JSON.parse(fs.readFileSync(nombreFichero));
        let newIMDB = new IMDB(InstanciaIMDB.peliculas)
        return newIMDB; 

    }

}




//Create objects Professional:
let tarantino= new Professional('tarantino',"Quentin Tarantino",54,"male",80,184,"Black","Brown",false,"Us citizen",2,"Director",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/1200px-Quentin_Tarantino_by_Gage_Skidmore.jpg")
let georgeLucas= new Professional('georgeLucas',"George Lucas",75,"male",90,184,"Black","Brown",true,"Us citizen",1,"Director", 
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/George_Lucas_cropped_2009.jpg")
let jonFavreau = new Professional('jonFavreau',"Jon Favreau",54,"male",80,184,"Black","Brown",false,"Us citizen",2,"Director",
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jon_Favreau_2016.jpeg")
let stanLee = new Professional('stanLee',"Stan Lee",95,"male",73,180,"White","Blue",false,"Us citizen",1,"screenwriter",
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg")
let robertDowney = new Professional('robertDowney',"Robert Downey Jr",55,"male",74,175,"dark blonde","grey",true,"Us citizen",2,"Actor",
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg")
let carrieFisher = new Professional('carrieFisher',"Carrie Fisher",60,"female",74,156,"blonde","brown",false,"Us citizen",2,"Actress",
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Carrie_Fisher_2013-a_straightened.jpg")
let harrisonFord = new Professional('harrisonFord',"Harrison Ford",78,"male",90,180,"white","brown",false,"Us citizen",0,"actor",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Harrison_Ford_by_Gage_Skidmore_2.jpg")
let umaThurman= new Professional('umaThurman',"Uma Thurman", 50, "female",60,183,"blonde","blue",false,"Us citizen",0,"actress",
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Uma_Thurman_Cannes_2017_%28cropped%29.jpg")
let dicaprio = new Professional('dicaprio',"Leo Dicaprio",46,"male",80,183,"blonde","blue",false,"us citizen",0,"actor",
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg")
let bradPitt = new Professional('bradPitt',"Brad Pitt",57,"male",78,180,"blonde", "blue",true,"Us citizen",2,"actor",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg")
let penelopeCruz = new Professional('penelopeCruz',"Penelope Cruz",46,"female",55,165,"brunette","brown",true,"Spanish",1,"actress",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pen%C3%A9lope_Cruz.jpg/170px-Pen%C3%A9lope_Cruz.jpg")
let eduardoNoriega = new Professional('eduardoNoriega',"Eduardo Noruega",47,"male",75,179,"brunet","brown",false,"spanish",0,"actor",
    "https://www.moncloa.com/wp-content/uploads/2020/03/Eduardo-Noriega-coronavirus.jpg")
let alejandroAmenabar = new Professional('alejandroAmenabar',"Alejandro Amenabar",48,"male",65,180,"brown","black",true,"spanish",1,"director",
    "https://static1.abc.es/media/play/2019/08/07/alejandro-amenabar-k9ZD--1200x630@abc.jpg")
let mateoGil = new Professional('mateoGil','Mateo Gil', 48, 'male',90,178,'brown','brown',false,'Spanish',0,'screenwriter',
    "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/personajes/mateo-gil/32188141-2-esl-ES/mateo-gil.jpg")
let peterJackson= new Professional('peterJackson','Peter Jackson',59,'male', 95,180,'gray','brown',false,'New Zealander',3,'director',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Peter_Jackson_SDCC_2014.jpg/220px-Peter_Jackson_SDCC_2014.jpg')
let philippa = new Professional('philippa','Philippa Jane Boyens',58,'female',75,170,'brunette','brown',false,'New Zealander',1,'screenwriter',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Philippa_Boyens.jpg/220px-Philippa_Boyens.jpg')
let elijahWood = new Professional('elijahWood','Elijah Wood',40,'male',80,165,'black','blue',false,'American',0,'actor',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Elijah_Wood-D.jpg/170px-Elijah_Wood-D.jpg')
let monaghan = new Professional('monaghan', 'Dominic Monaghan',44,'male',80,170,'blond','brown',false,'German-British',0,'actor',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dominic_Monaghan_2003.jpg/220px-Dominic_Monaghan_2003.jpg')
let livTyler = new Professional('livTyler','Liv Tyler',43,'female',55,167,'brunette','blue',false,'American',0,'actress',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Liv_Tyler_2008.jpg/220px-Liv_Tyler_2008.jpg')
let jonWatts = new Professional('jonWatts', 'Jon Watts',39,'male',85,180,'black','brown',false,'American',0,'director',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jon_Watts_by_Gage_Skidmore_2.jpg/220px-Jon_Watts_by_Gage_Skidmore_2.jpg')
let chrisMcKenna = new Professional('chrisMcKenna', 'Chris McKenna',38,'male',87,180,'brown','brown',false,'American',0,'screenwriter',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chris_McKenna_%2814584155278%29.jpg/220px-Chris_McKenna_%2814584155278%29.jpg')
let tomHolland = new Professional('tomHolland','Thomas Stanley Holland',24,'male',80,180,'brown','brown',false,'British',0,'actor',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/220px-Tom_Holland_MTV_2018_%2802%29.jpg')
let markHamill = new Professional('markHamill','Mark Hamill',69,'male',85,175,'blond','blue',false,'American',0,'actor',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mark_Hamill_%2848419236062%29_Cropped.jpg/440px-Mark_Hamill_%2848419236062%29_Cropped.jpg')

let people=[tarantino,georgeLucas,jonFavreau,stanLee,robertDowney,carrieFisher,harrisonFord,umaThurman,dicaprio,bradPitt,penelopeCruz,eduardoNoriega,
    alejandroAmenabar,mateoGil,peterJackson,philippa,elijahWood,monaghan,livTyler,jonWatts,chrisMcKenna,tomHolland,markHamill]

//Create objects Movie:
let ironMan=new Movie('Iron Man',2008,'American','action',"https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg",
    jonFavreau,stanLee,'English',true,'Tony Stark','Marvel Studios','Paramount Pictures',[robertDowney,jonFavreau])
let starWars1=new Movie('Star Wars: A New Hope',1977,'American','Sci-Fi',"https://images-na.ssl-images-amazon.com/images/I/91H91NbI2xL._SL1500_.jpg",
    georgeLucas,georgeLucas,'English',false,'Luke Skywalker','Lucasfilm Ltd','20th Century fox',[markHamill,carrieFisher,harrisonFord])
let starWars2=new Movie('Star Wars: The Empire Strikes Back',1980,'American','Sci-Fi',"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/SW_-_Empire_Strikes_Back.jpg/220px-SW_-_Empire_Strikes_Back.jpg",
    georgeLucas,georgeLucas,'English',false,'Luke Skywalker','Lucasfilm Ltd','20th Century fox',[markHamill,carrieFisher,harrisonFord])
let starWars3=new Movie('Star Wars: The Return of the Jedi',1983,'American','Sci-Fi',"https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg",
    georgeLucas,georgeLucas,'English',false,'Luke Skywalker','Lucasfilm Ltd','20th Century fox',[markHamill,carrieFisher,harrisonFord])
let hollywood=new Movie('Once Upon a Time in Hollywood',2019,'American', 'comedy-drama',
    "https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png",
    tarantino,tarantino,'English',false,'Rick Dalton','Columbia Pictures','Sony Picturtes',[bradPitt, dicaprio])
let abreOjos=new Movie('Abre los Ojos', 1997, 'Spanish', 'Sci-Fi',"https://pics.filmaffinity.com/Abre_los_ojos-562220135-large.jpg",
    alejandroAmenabar,mateoGil,'Spanish',false,'César','Sogecine','Artisan Entertainment',[penelopeCruz,eduardoNoriega])
let fellowship= new Movie("The Fellowship of the Ring",2001,'New Zealand','fantasy','https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg',
    peterJackson,philippa,'English',false,'Frodo Baggins', 'WingNut Films','New Line Cinema',[elijahWood,monaghan,livTyler])
let twoTowers= new Movie("The Two Towers",2002,'New Zealand','fantasy','https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg',
    peterJackson,philippa,'English',false,'Frodo Baggins', 'WingNut Films','New Line Cinema',[elijahWood,monaghan,livTyler])
let returnKing= new Movie("The Return of the King",2003,'New Zealand','fantasy','https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg',
    peterJackson,philippa,'English',false,'Frodo Baggins', 'WingNut Films','New Line Cinema',[elijahWood,monaghan,livTyler])
let homeComing= new Movie('Spiderman: Homecoming',2017,'American','action','https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
    jonWatts,chrisMcKenna,'English',true,'Peter Parker','Marvel Studios', 'Sony Pictures',[tomHolland,robertDowney,jonFavreau])
let farFromHome= new Movie('Spiderman: Far from Home',2019,'American','action','https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
    jonWatts,chrisMcKenna,'English',true,'Peter Parker','Marvel Studios', 'Sony Pictures',[tomHolland,robertDowney,jonFavreau])



//Create object IMDB

let imdb = new IMDB([ironMan,hollywood,starWars1,starWars2,starWars3,abreOjos,fellowship,twoTowers,returnKing,homeComing,farFromHome])
console.log(imdb);




/////////////////////////////////

//    Programa Principal      //

////////////////////////////////



function fillDropdown(){
    $("#dropdown").html("");
    for(let i=0;i<imdb.peliculas.length;i++){
        $("#dropdown").append(`<a id="${i}" class="dropdown-item" onclick="showMovie(${i})" data-toggle="modal" 
        data-target="#movieModal" style="cursor:pointer">${imdb.peliculas[i].title}</a>`)
    }
}

function fillDropdownProfessional(){
    $("#dropdownProfessional").html("");
    for(let i=0;i<people.length;i++){
        $("#dropdownProfessional").append(`<a id="${people[i].id}" class="dropdown-item" onclick="showProfessional(${people[i].id})" data-toggle="modal" 
        data-target="#movieModal" style="cursor:pointer">${people[i].name}</a>`)
    }
}



function fillGrid(){
    $("#fila").html("");
        for(let i=0;i<imdb.peliculas.length;i++){
            $("#fila").append(`   
                <div class="col-sm" style="max-height:300px; margin-bottom:10px;">
                        <img onclick="showMovie(${i})" src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" 
                        data-toggle="modal" data-target="#movieModal" style=" max-height:300px; width:auto; height:auto cursor:pointer">
                </div>`)
        }
}



function showMovie(i){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">Movie: ${imdb.peliculas[i].title}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="${i}" class="container-fluid">
                <div class="row">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    ${imdb.peliculas[i].toHtml()}
                    </div>
                </div>
            </div>
  </div>`)
}


function showProfessional(professional){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">${professional.name}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="${professional.id}" class="container-fluid">
                <div class="row">
                    <div class="col-sm">
                    <img src="${professional.picture}" alt="${professional.name}" style="max-width:100%; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    ${professional.toHtml()}
                    </div>
                </div>
            </div>
  </div>`)
}



function theirMovies(professional){
    let theirMovies=""
    console.log(imdb.peliculas)
    for (let i=0;i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].director==professional){
            theirMovies+=`<br>Directed <span onclick="showMovie(${i})" style=" color:blue; font-weight:600; cursor:pointer">${imdb.peliculas[i].title}</span>`
        }
        if(imdb.peliculas[i].writer==professional){
            theirMovies+=`<br>Wrote <span onclick="showMovie(${i})" style=" color:blue; font-weight:600; cursor:pointer">${imdb.peliculas[i].title}</span>`
        }
        if(imdb.peliculas[i].actors.includes(professional)){
            theirMovies+=`<br>Starred in <span onclick="showMovie(${i})" style=" color:blue; font-weight:600; cursor:pointer">${imdb.peliculas[i].title}</span>`
        }
    }
    //return theirMovies;
    $("#theirMovies").html(theirMovies);
};



function createMovie(){
    let title= $('#title').val();
    let director= new Professional($('#director').val().replace(' ',''),$('#director').val());
    let releaseYear= $('#releaseYear').val();
    let writer=new Professional($('#writer').val().replace(' ',''),$('#writer').val());
    let isMCU= $('#isMCU').val();
    let mainCharacterName=$('#mainCharacterName').val();
    let nationality= $('#nationality').val();
    let language= $('#languagr').val();
    let producer= $('#producer').val();
    let distributor= $('#distributor').val();
    let picture= $('#picture').val();
    let genre= $('#genre').val();
    let actors=[people[Math.round(Math.random()*people.length)],people[Math.round(Math.random()*people.length)]];
    let newMovie= new Movie(title,releaseYear,nationality,genre,picture,director,writer,language,isMCU,mainCharacterName,producer,distributor,actors);

    imdb.peliculas.push(newMovie);
    window[director.id]=director;
    window[writer.id]=writer;
    people.push(director.id)
    people.push(writer.id)
    console.log(imdb.peliculas)
    fillDropdown();
    fillGrid();
};


function activateSearch(){
    $("#searchButton").show();
}

function searchByTitle(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].title.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}



function searchByProfessional(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the professionals that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<people.length;i++){
        if(people[i].name.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showProfessional(${people[i].id})" class="row match">
                    <div class="col-sm">
                    <img src="${people[i].picture}" alt="${people[i].name}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${people[i].name}</h3>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}


function searchByYear(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies released in ${$('#searchBar').val()}:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].releaseYear==$('#searchBar').val()){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}


function searchByCharacter(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].mainCharacterName.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    <h5>Main character's name: ${imdb.peliculas[i].mainCharacterName}</h5>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}



function searchByGenre(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].genre.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    <h5>Genre: ${imdb.peliculas[i].genre}</h5>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}


function searchByLanguage(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].language.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    <h5>Language: ${imdb.peliculas[i].language}</h5>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}


function searchByProducer(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].producer.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    <h5>Producer: ${imdb.peliculas[i].producer}</h5>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}

function searchByDistributor(){
    $("#modalFill").html(`<div class="modal-header">
    <h5 class="modal-title">These are the movies that match your search:</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div id="matchesContainer" class="container-fluid">
                
            </div>
  </div>`)
    let count=0;
    for (let i=0; i<imdb.peliculas.length;i++){
        if(imdb.peliculas[i].distributor.toLowerCase().includes(($('#searchBar').val()).toLowerCase())){
            $("#matchesContainer").append(`
                <div onclick="showMovie(${i})" class="row match">
                    <div class="col-sm">
                    <img src="${imdb.peliculas[i].picture}" alt="${imdb.peliculas[i].title}" style="max-width:100%; max-height:200px; height:auto;width:auto">
                    </div>
                    <div class="col-sm">
                    <h3>${imdb.peliculas[i].title}</h3>
                    <h5>Producer: ${imdb.peliculas[i].distributor}</h5>
                    </div>
                </div>`);
            count++;
        }
    }
    if(count===0){
        $("#matchesContainer").append(`<h3>We found no matches :(</h3>`);
    }
}








