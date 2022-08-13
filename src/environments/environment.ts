// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase/app'

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBvgydaiA_1ZGN-b0jX0RgvrRksUPaEvk8",
    authDomain: "hiveezycustomerui-853fc.firebaseapp.com",
    projectId: "hiveezycustomerui-853fc",
    storageBucket: "hiveezycustomerui-853fc.appspot.com",
    messagingSenderId: "1008267974994",
    appId: "1:1008267974994:web:23c81090ec62886ca5428b"
  },
  apiUrl: 'https://api-v0.hiveezy.com/api/v1/restaurant/'
};
firebase.initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
