console.log('js loaded');

var main;

function Soundboard(title, className, facePath, soundBitesObject){
  this.title                      = title;
  this.className                  = className;
  this.facePath                   = facePath;
  this.soundBitesObject           = soundBitesObject;
  this.soundBitesLocationArray    = Object.values(soundBitesObject);
  this.cellText                   = Object.keys(soundBitesObject);
  this.generateCellClassNames     = function() {
    var array =[];
    for (var i = 0; i < this.soundBitesLocationArray.length; i++) {
      var fileName = this.soundBitesLocationArray[i].split('/')[2];
      console.log(i);
      console.log(fileName);
      var className = fileName.split('.')[0];
      array.push(className);
    }
    return array;
  };
  this.cellClassNames             = this.generateCellClassNames();
  this.numberOfSoundBites         = Object.keys(soundBitesObject).length;

  this.start                      = function start(){
    console.log('soundboard started');
    main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';
    // body.style.backgroundImage = 'url(../' + backgroundImagePath +')';
    // this.createTitle();
    this.createGrid();
    this.makeCellsListen();
  };

  this.addToNav                   = function addToNav() {
    $('nav div ul li.' + this.className).on('click', generate.bind(this));
    function generate(){
      this.start();
    }
  };

  // this.createTitle                = function createTitle(){
  //   var title = document.createElement('h1');
  //   title.innerHTML = this.title;
  //   title.className = this.className;
  //   main.appendChild(title);
  // };

  this.createGrid                 = function createGrid(){
    var section = document.createElement('section');
    $(section).attr('class', 'container');
    var divs = [];
    var rows = [];
    for (var i = 1; i < this.numberOfSoundBites + 1; i++) {
      var img = document.createElement('img');
      var a = document.createElement('a');
      var div = document.createElement('div');
      var p = document.createElement('p');
      $(img).attr('src', this.facePath);
      $(img).attr('class', this.cellClassNames[i] + ' ' + this.className);
      $(a).attr('class', 'thumbnail');
      $(a).css('text-align', 'center');
      $(p).html(this.cellText[i]);
      $(p).css('padding-top', '4%');
      $(div).attr('class', 'col-xs-6 col-sm-4 col-md-3 col-lg-2');
      $(a).append([img, p]);
      $(div).append(a);
      divs.push(div);
      if (i % 3 === 0) {
        var row = document.createElement('div');
        $(row).attr('class', 'row');
        $(row).append(divs);
        rows.push(row);
      }
    }
    $(section).append(rows);
    $('main').append(section);
  };

  this.makeCellsListen            = function makeCellsListen(){
    for (var i = 0; i < this.numberOfSoundBites; i++) {
      var cell = $('img.' + this.cellClassNames[i]);
      $(cell).on('click', this.playAudio.bind(this));
    }
  };

  this.playAudio                  = function playAudio(e){
    var name = e.target.className.split(' ')[0];
    var index = this.cellClassNames.indexOf(name);
    new Audio(this.soundBitesLocationArray[index]).play();
  };
}

var landingPage = {

  addToNav: function(){
    $('.navbar-brand').on('click', landingPage.start);
  },

  start: function start(){
    main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';
    landingPage.createAndAppendHtml();
  },

  createAndAppendHtml: function createAndAppendHtml(){
    var jumbotron = document.createElement('div');
    var container = document.createElement('div');
    var h1 = document.createElement('h1');
    var p = document.createElement('p');

    $(jumbotron).attr('class', 'jumbotron');
    $(container).attr('class', 'container');
    $(h1).html('The Matthews Family Soundboard');
    $(p).html('Click the links above to take a trip down memomory lane');
    $(container).append([h1, p]);
    $(jumbotron).append(container);
    $('main').append(jumbotron);
  }
};

var hollySoundboard            = new Soundboard('Holly', 'holly', 'images/holly.jpg',
  {
    'Bagettes': 'sounds/holly/2-bagettes.m4a',
    'Dickead idiot': 'sounds/holly/dickhead-idiot.m4a',
    'Bye': 'sounds/holly/Bye.m4a',
    'Go away': 'sounds/holly/go-away.m4a',
    'Cowardly cow': 'sounds/holly/Cowardly-cow.m4a',
    'Ain\'t what': 'sounds/holly/gramma-aint-what-she-used-to-me.m4a',
    'Creame Eggs': 'sounds/holly/Creame-eggs.m4a',
    'Grona Lund': 'sounds/holly/grona-lund.m4a',
    'Happy 2': 'sounds/holly/happy2.m4a',
    'Happy 3': 'sounds/holly/happy3.m4a',
    'Hello': 'sounds/holly/hello.m4a',
    'Lovely': 'sounds/holly/lovely.m4a',
    'Medicines': 'sounds/holly/medicines.m4a',
    'Meow': 'sounds/holly/meow.m4a',
    'Mum look': 'sounds/holly/mum-look.m4a',
    'Guitar story': 'sounds/holly/Guitar-story.m4a',
    'Happy 1': 'sounds/holly/Happy1.m4a',
    'Look at me': 'sounds/holly/Look-at-me.m4a',
    'Mad man': 'sounds/holly/Mad-man.m4a',
    'Mrs Flynn': 'sounds/holly/Mrs-Flynn.m4a',
    'No': 'sounds/holly/No.m4a',
    'Shop': 'sounds/holly/Shop.m4a',
    'Sort of': 'sounds/holly/Sort-of.m4a',
    'Mummy': 'sounds/holly/mummy.m4a',
    'The walk': 'sounds/holly/The-walk.m4a',
    'A little show': 'sounds/holly/a-little-show.m4a',
    'See that dad?': 'sounds/holly/see-that-dad.m4a',
    'Shhh': 'sounds/holly/shhhhsh.m4a',
    'Sit down': 'sounds/holly/sit-down.m4a',
    'Fish': 'sounds/holly/spig.m4a',
    'Time': 'sounds/holly/time.m4a',
    'Vommit': 'sounds/holly/vom.m4a',
    'Who is Daddy?': 'sounds/holly/who-is-daddy.m4a',
    'A special helo': 'sounds/holly/a-special-hello.m4a',
    'Advert': 'sounds/holly/advert.m4a',
    'Aqarium': 'sounds/holly/aquarium.m4a',
    'Brother John': 'sounds/holly/brother-john.m4a',
    'Bye 2': 'sounds/holly/bye-2.m4a',
    'Come on Jack': 'sounds/holly/common-jack.m4a',
    'Woof': 'sounds/holly/woof.m4a',
    'Yellow': 'sounds/holly/yellow1.m4a',
    'Crying': 'sounds/holly/crying.m4a'
  }
);

var mumSoundboard            = new Soundboard('Mum', 'mum', 'images/mum.jpg',
  {
    'Tourists': 'sounds/mum/Chorist.m4a',
    'Hejdå': 'sounds/mum/hejda.m4a',
    'Sunup': 'sounds/mum/sun-up.m4a',
    'Hejsan': 'sounds/mum/hejsan.m4a',
    'Hej': 'sounds/mum/hey.m4a',
    'Holly och Jack': 'sounds/mum/holly-och-jack.m4a',
    'Uppsala': 'sounds/mum/uppsala.m4a',
    'Holly': 'sounds/mum/holly.m4a',
    'Hundreds and hundreds': 'sounds/mum/hundreds-and-hundreds.m4a',
    'Var gör jag?': 'sounds/mum/var-gor-jag.m4a',
    'Hus': 'sounds/mum/husss.m4a',
    'I told you not to': 'sounds/mum/i-told-you-not-to.m4a',
    'Weather': 'sounds/mum/weather.m4a',
    'Incy Wincy Spider': 'sounds/mum/incy-wincy-spider.m4a',
    'Weee!': 'sounds/mum/wee.m4a',
    'klockan är': 'sounds/mum/klockan-ar.m4a',
    'What is like?': 'sounds/mum/what-is-like.m4a',
    'Kömmer': 'sounds/mum/kommer.m4a',
    'Woo 2': 'sounds/mum/wooo-2.m4a',
    'Laga mat': 'sounds/mum/larga-mat.m4a',
    'Woo 3': 'sounds/mum/wooo-3.m4a',
    'Philip!': 'sounds/mum/philip.m4a',
    'Woo 1': 'sounds/mum/wooo.m4a',
    'Pick da pockets': 'sounds/mum/pick-da-pockets.m4a',
    'Woops 2': 'sounds/mum/woops-2.m4a',
    'Hello to the kids': 'sounds/mum/say-hello-to-the-kids.m4a',
    'Woops 3': 'sounds/mum/woops-3.m4a',
    'So forth and so on': 'sounds/mum/so-forth-and-so-on.m4a',
    'Sunbadding': 'sounds/mum/sunbadding.m4a',
    'Toeloop': 'sounds/mum/toeloop.m4a',
    'Gimme five': 'sounds/mum/gimme-five.m4a',
    'Food Nazi': 'sounds/mum/food-nazi.m4a',
    'Food Nazi 2': 'sounds/mum/food-nazi-2.m4a',
    'Feeling': 'sounds/mum/feeling.m4a',
    'Fatty': 'sounds/mum/fatty.m4a',
    'Duktig flicka': 'sounds/mum/duktig-flicka.m4a',
    'Diska': 'sounds/mum/diskar.m4a',
    'Covent Garden': 'sounds/mum/convent-garden.m4a.m4a',
    'Constantly asking': 'sounds/mum/constantly-asking.m4a',
    'Very very fast': 'sounds/mum/very-very-fast.m4a',
    'Tourist office': 'sounds/mum/chorist-office.m4a',
    'Hey': 'sounds/mum/HEy2.m4a',
    'Can I ask a question?': 'sounds/mum/can-I-ask-a-question.m4a',
    'Var är footen?': 'sounds/mum/var-ar-footen.m4a',
    'Badding': 'sounds/mum/badding.m4a',
    'TV': 'sounds/mum/TV.m4a',
    'Jack': 'sounds/mum/Jack.m4a'
  }
);

var dadSoundboard            = new Soundboard('Mum', 'dad', 'images/dad.jpg',
  {
    'Hylarious': 'sounds/dad/hylarious.m4a',
    'Jag vert inte': 'sounds/dad/jag-vert-inte.m4a',
    'Medicines': 'sounds/dad/medicines.m4a',
    'Mor du bra?': 'sounds/dad/mor-du-bra.m4a',
    'Nose': 'sounds/dad/nose_.m4a',
    'Phone call': 'sounds/dad/phone.m4a',
    'Say hej Holly': 'sounds/dad/say-hej-holly.m4a',
    'Smarmy boys': 'sounds/dad/smarmy-boys.m4a',
    'Tyker du om dansa?': 'sounds/dad/tucker-du-om-dansa.m4a',
    'Wow': 'sounds/dad/wow.m4a',
    'Holly': 'sounds/dad/holly.m4a',
    'Hey Mia': 'sounds/dad/hey-mia.m4a',
    'Hejsan Holly': 'sounds/dad/hejsan-holly.m4a',
    'Good lad': 'sounds/dad/good-lad.m4a',
    'She didn\'t like that last one': 'sounds/dad/she-didnt-like-the-last-one.m4a',
    'Dance with Holly': 'sounds/dad/dance-with-holly.m4a',
    'Cutie': 'sounds/dad/being-cute-to-holly.m4a',
    'What have you got?': 'sounds/dad/What-have-you-got.m4a',
    'Not particularly intersting': 'sounds/dad/not-particulary-intresting.m4a',
    'Say goodnight': 'sounds/dad/Say-goodnight.m4a ',
    'Pièce de résistance': 'sounds/dad/Pista-resistance.m4a',
    'Phone 2': 'sounds/dad/Phone-2.m4a',
    'King of beers': 'sounds/dad/King-of-beers.m4a',
    'Let me see your tonsils': 'sounds/dad/let-me-see-your-tonsils.m4a',
    'Hejdå': 'sounds/dad/Hejda.m4a',
    'Go away Jack': 'sounds/dad/Go-away-jack.m4a',
    'Go away Jack 2': 'sounds/dad/Go-away-jack-2.m4a'
  }
);


window.onload = app;

function app(){
  landingPage.addToNav();
  hollySoundboard.addToNav();
  mumSoundboard.addToNav();
  dadSoundboard.addToNav();
  landingPage.start();
}
