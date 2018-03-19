//(function() {

  // Initialize Firebase
  // Modify this to your configuration found at Firebase console
  // https://console.firebase.google.com/u/0/project/[projectname]/overview
  var config = {
    apiKey: "[apikey]",
    authDomain: "[projectname].firebaseapp.com",
    databaseURL: "https://[projectname].firebaseio.com",
    projectId: "[projectname]",
    storageBucket: "[projectname].appspot.com",
    messagingSenderId: "[senderid]"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("#latestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");

  saveButton.addEventListener("click", function() {
      const textToSave = inputTextField.value;
      console.log("I am going to save " + textToSave + " to Firestore");
      docRef.set({
          hotDogStatus: textToSave
      }).then(function() {
          console.log("Status saved!");
      }).catch(function (error){
          console.log("Got an error: ", error);
      });
  });

  loadButton.addEventListener("click", function() {
      docRef.get().then(function (doc) {
          if (doc && doc.exists) {
              const myData = doc.data();
              outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
          }
      }).catch(function error() {
          console.log("Got and error: ", error);
      });
  });

  getRealtimeUpdates = function() {
      docRef.onSnapshot({includeMetadataChanges: false}, function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            console.log("Check out this document I received ", doc);
            outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
        }
      })
  }

  getRealtimeUpdates();
//})();
