# Getting Started with Cloud Firestore with Javascript

Example Javascript application based on Firecast video:
https://www.youtube.com/watch?v=2Vf1D-rUMwE

## Getting Started

Modify the following rows in your index.js to your settings, which you can find at the Firebase console.

```
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
```

Then open index.html in your browser.