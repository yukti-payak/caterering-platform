Caterering Platform 

A full-stack **MERN** (MongoDB, Express, React, Node.js) application built with **Next.js 14** to bridge the gap between event organizers and premium catering services. This project features a robust backend API and a high-performance, SEO-friendly frontend.

---

 🚀 Live Links: 
 
-**Frontend URL:**: https://caterering-platform.vercel.app
- **Backend API:**: https://caterering-platform.onrender.com

---

## ✨ Key Features
- **Dynamic Caterer Catalog:** listing of available caterers fetched from MongoDB.
- **Dynamic Routing:** Individual caterer detail pages using Next.js `[id]` segments for high performance.
- **Responsive UI:** Fully mobile-responsive design built with Tailwind CSS.
- **Scalable Architecture:** Monorepo structure separating concerns into `/backend` and `/frontend`.
- **RESTful API:** Clean and predictable API endpoints for data management.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Backend
- **Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas 
- **Deployment:** Render

---

## 📂 Project Structure

```text
catering-platform/
├── backend/                
│   ├── config/            
│   ├── controllers/       
│   ├── models/            
│   ├── routes/           
│   └── server.js         
├── frontend/client/       
│   ├── public/            
│   └── src/
│       ├── app/           
│       ├── components/    
│       └── globals.css   
└── README.md
