// ไฟล์ config.js
const firebaseConfig = {
    apiKey: "AIzaSy...", 
    authDomain: "my-payroll-data.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebasedatabase.app",
    projectId: "my-payroll-data",
    storageBucket: "my-payroll-data.firebasestorage.app",
    messagingSenderId: "478398685191",
    appId: "..."
};

// ส่งค่าออกไปให้ index.html ใช้งาน
firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref('payroll_v13_cloud');
