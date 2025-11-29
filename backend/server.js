import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
// import helmet from "helmet" // Temporarily disabled for testing
import rateLimit from "express-rate-limit"

import { Server } from "socket.io";
import { createServer } from "http";

// app config
const app = express()
const port = process.env.PORT || 4000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// middlewares
app.use(express.json())
app.use(cors())
// Temporarily disabled Helmet to test if it's blocking images
// app.use(helmet({
//   crossOriginResourcePolicy: { policy: "cross-origin" },
//   contentSecurityPolicy: {
//     directives: {
//       ...helmet.contentSecurityPolicy.getDefaultDirectives(),
//       "img-src": ["'self'", "data:", "http:", "https:"]
//     }
//   }
// }))

app.use((req, res, next) => {
  req.io = io;
  next();
});

// Serve static files BEFORE rate limiting
app.use("/images", express.static('uploads'))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

server.listen(port, () => console.log(`Server started on http://localhost:${port}`))