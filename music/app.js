if (annyang) {
    // Let's define a command.
    var commands = {
       'home': function(){window.location.href = "../index.html"},
      'notes': function() {window.location.href = "../voiceNotes/voiceNotes.html"},
      // 'news': function() {document.getElementById("news").click()},
      // 'songs': function() {window.location.href = "./music/musicindex.html"},
      'darshan': function() { window.location.href = "../voiceNotes/voiceNotes.html" },
      'bhajan': function(){window.location.href = "./bhaj.html"},
      'artists': function(){window.location.href = "./artist.html"}
      // 'login': function(){window.location.href = "./login"}
    };
    // This should be true
    console.log(annyang.isListening())
    // Add our commands to annyang
    annyang.addCommands(commands);
    // Start listening.
    annyang.start();
    annyang.addCallback('soundstart', function() {
      console.log('sound detected');
    });
  }