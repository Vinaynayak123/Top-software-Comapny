


// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjpwsX-HXT2PD5B2PEyw6c44vrDVuQIHQ",
  authDomain: "otp-varification-1e296.firebaseapp.com",
  projectId: "otp-varification-1e296",
  storageBucket: "otp-varification-1e296.appspot.com",
  messagingSenderId: "982370245368",
  appId: "1:982370245368:web:8067e22de70a3e9b00b90d",
  measurementId: "G-L3H6Q1VFZB"
};



// Initialize Firebase
const app =initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };





// // Import the functions you need from the SDKs you need
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAGTUcUvhxhzo8ssv9GWRyI0DNmCIXyRhM",
//   authDomain: "otp-project-b7320.firebaseapp.com",
//   projectId: "otp-project-b7320",
//   storageBucket: "otp-project-b7320.appspot.com",
//   messagingSenderId: "362571542046",
//   appId: "1:362571542046:web:17a2fb7249405bb619480f",
//   measurementId: "G-PB7G0K1M17"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const auth = getAuth(app);

// export { auth };




