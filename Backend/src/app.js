// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';


// const app = express();
// const allowedOrigins = [
//     'http://127.0.0.1:5500',
//     'http://localhost:5500',
//     'http://127.0.0.1:3000',  // Add this
//     'http://localhost:3000'
// ];
// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add this
//     allowedHeaders: ['Content-Type', 'Authorization'] // Add this
// }));

// app.options(/.*/, cors());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

// app.use(cookieParser());
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Add this before your routes in app.js
// app.get("/api/debug/routes", (req, res) => {
//     res.json({
//         message: "Server is running",
//         routes: [
//             "/api/admin/issues",
//             "/api/staff/issues", 
//             "/api/admin/issues/staff",
//             "/api/staff/issues/stats"
//         ]
//     });
// });

// app.use(express.static("public"));


// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });

// export { app }

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()


import practitionerRoutes from "./routes/practitioner.routes.js";
app.use("/api/practitioners", practitionerRoutes);

import patientRoutes from "./routes/patient.routes";
app.use("/api/patients", patientRoutes);


app.use(cors({
  origin:process.env.CORS_ORIGIN ,
  credentials:true ,
   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json({limit: "16kb"}))   // Handles data sent in the JSON format (common for APIs)
app.use(express.urlencoded({extended: true , limit:"16kb"}))   //Handles data sent from a traditional HTML form submission.
app.use(express.static("public"))   // It makes a folder named public accessible directly to the world.
app.use(cookieParser())     //The cookieParser() middleware is necessary because when a web browser sends an HTTP request, all the cookies it has saved for that domain are bundled into a single string in the request's Cookie header and we can now get refreshToken using req.cookies.accessToken




/// router


 
export { app }