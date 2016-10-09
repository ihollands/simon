
var optionsArray = [1, 2, 3, 4, 5, 6]
var memorizeArray = []
var attemptArray = []

var startButton = $("#start");


var start = function() {
  startButton.toggleClass("active");
  randomize();
}

var gameOver = function() {
  startButton.text("GAME OVER").removeClass("active").addClass("gameover");
  setTimeout(location.reload.bind(location), 4000);
}

randomize = function() {
  var newItem = optionsArray[Math.floor(Math.random()*optionsArray.length)];
  memorizeArray.push(newItem);
  setTimeout(readMemorizeArray, 1000);
}

var addAttempt = function() {
  var newItem = this.button.text();
  this.activate();
  setTimeout(this.deactivate, 800);
  attemptArray.push(newItem);
  checkAttempt ();
}


function checkAttempt() {
  for (i = 0; i < attemptArray.length; i++) {
    if (attemptArray[i] != memorizeArray[i]) {
      return gameOver();
    } else {
      console.log("match")
    }
  } if (attemptArray.length === memorizeArray.length) {

      attemptArray = [];
      setTimeout(randomize, 1200)
}
}

readMemorizeArray = function() {
  for (var i = 0; i < memorizeArray.length; i++) {
    if (memorizeArray[i] == 1) {
      setTimeout(game.one.activate, 800*i);
      setTimeout(game.one.deactivate, 800*i+700);
    } else if (memorizeArray[i] == 2) {
      setTimeout(game.two.activate, 800*i);
      setTimeout(game.two.deactivate, 800*i+700);
    } else if (memorizeArray[i] == 3) {
      setTimeout(game.three.activate, 800*i);
      setTimeout(game.three.deactivate, 800*i+700);
    } else if (memorizeArray[i] == 4) {
      setTimeout(game.four.activate, 800*i);
      setTimeout(game.four.deactivate, 800*i+700);
    } else if (memorizeArray[i] == 5) {
      setTimeout(game.five.activate, 800*i);
      setTimeout(game.five.deactivate, 800*i+700);
    } else {
      setTimeout(game.six.activate, 800*i);
      setTimeout(game.six.deactivate, 800*i+700);
    }
  }
}

var game = {
  one: {
    button: $("#one"),
    activate: function() {
      game.one.button.toggleClass("active");
    },
    deactivate: function() {
      game.one.button.toggleClass("active");
    }
  },

  two: {
    button: $("#two"),
    activate: function() {
      game.two.button.toggleClass("active");
    },
    deactivate: function() {
      game.two.button.toggleClass("active");
    }
  },

  three: {
    button: $("#three"),
    activate: function() {
      game.three.button.toggleClass("active");
    },
    deactivate: function() {
      game.three.button.toggleClass("active");
    }
  },

  four: {
    button: $("#four"),
    activate: function() {
      game.four.button.toggleClass("active");
    },
    deactivate: function() {
      game.four.button.toggleClass("active");
    }
  },

  five: {
    button: $("#five"),
    activate: function() {
      game.five.button.toggleClass("active");
    },
    deactivate: function() {
      game.five.button.toggleClass("active");
    }
  },

  six: {
    button: $("#six"),
    activate: function() {
      game.six.button.toggleClass("active");
    },
    deactivate: function() {
      game.six.button.toggleClass("active");
    }
  }
}

//eventlisteners
startButton.one("click", start);

game.one.button.on("click", addAttempt.bind(game.one));
game.two.button.on("click", addAttempt.bind(game.two));
game.three.button.on("click", addAttempt.bind(game.three));
game.four.button.on("click", addAttempt.bind(game.four));
game.five.button.on("click", addAttempt.bind(game.five));
game.six.button.on("click", addAttempt.bind(game.six));
