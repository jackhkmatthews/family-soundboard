console.log('js loaded');

var main;

function Soundboard(title, className, facePath, soundBitesObject){
  this.title                      = title;
  this.className                  = className;
  this.facePath                   = facePath;
  this.soundBitesObject           = soundBitesObject;
  this.soundBitesLocationArray    = Object.values(soundBitesObject);
  this.directory                  = this.soundBitesLocationArray[0].split('/')[0];
  this.cellText                   = Object.keys(soundBitesObject);
  this.generateCellClassNames     = function() {
    var array =[];
    for (var i = 0; i < this.soundBitesLocationArray.length; i++) {
      var fileName = this.soundBitesLocationArray[i].split('/')[1];
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
      $(img).attr('src', this.facePath);
      $(img).attr('class', this.cellClassNames[i-1] + ' ' + this.className);
      $(a).attr('class', 'thumbnail');
      $(div).attr('class', 'col-xs-6 col-sm-3');
      $(a).append(img);
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

var hollySoundboard            = new Soundboard('Holly', 'holly', 'images/holly.jpg',
  {
    'after': 'daft-punk/after.wav',
    'better': 'daft-punk/better.wav',
    'do it': 'daft-punk/do_it.wav',
    'ever': 'daft-punk/ever.wav',
    'faster': 'daft-punk/faster.wav',
    'harder': 'daft-punk/harder.wav',
    'hour': 'daft-punk/hour.wav',
    'make it': 'daft-punk/make_it.wav',
    'makes us': 'daft-punk/makes_us.wav',
    'more than': 'daft-punk/more_than.wav',
    'never': 'daft-punk/never.wav',
    'our': 'daft-punk/our.wav',
    'over': 'daft-punk/over.wav',
    'stronger': 'daft-punk/stronger.wav',
    'work is': 'daft-punk/work_is.wav',
    'work it': 'daft-punk/work_it.wav'
  }
);

var miaSoundboard            = new Soundboard('Mum', 'mum', 'images/mum.jpg',
  {
    'doh!': 'homer-simpson/doh.mp3',
    'mbeernut': 'homer-simpson/mbeernut.mp3',
    'mburger': 'homer-simpson/mburger.mp3',
    'mchocola': 'homer-simpson/mchocola.mp3',
    'mcrumble': 'homer-simpson/mcrumble.mp3',
    'mmurinal': 'homer-simpson/mmurinal.mp3',
    'organized': 'homer-simpson/organized.mp3',
    'bash': 'homer-simpson/bash.mp3',
    'crap': 'homer-simpson/crap.mp3'
  }
);

var dadSoundboard            = new Soundboard('Dad', 'dad', 'images/dad.jpg',
  {
    'Action': 'rappers/action_bronson.mp3',
    'Chains': 'rappers/two_chainz.mp3',
    'Biggie': 'rappers/biggie.mp3',
    'Chance': 'rappers/chance.mp3',
    'Brown': 'rappers/danny_brown.mp3',
    'Dizzee': 'rappers/dizzee.mp3',
    'Drake': 'rappers/drake.mp3',
    'Jayz': 'rappers/jayz.mp3',
    'Kanye': 'rappers/kanye.mp3',
    'Kendrick': 'rappers/kendrick.mp3',
    'Mchammer': 'rappers/mchammer.mp3',
    'Q': 'rappers/schoolboy_q.mp3'
  }
);

window.onload = app;

function app(){
  hollySoundboard.addToNav();
  miaSoundboard.addToNav();
  dadSoundboard.addToNav();
  hollySoundboard.start();
}
