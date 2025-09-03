# 📓 Personal Diary
A lightweight diary app built with **Node.js** and **Express.js** that lets you capture, edit, and manage your thoughts with a clean, responsive interface.

## 📸 Preview
https://github.com/user-attachments/assets/bb921f6a-ec4a-41d5-88b7-1ecda9ce4edd


## 🛠️ Tech Stack
- `Node.js` - backend runtime
- `Express.js` - web server and routing
- `EJS` - templating engine
- `Bootstrap` – responsive, mobile-friendly styling  
- `CSS` – custom design tweaks  

## 🚀 Features
- ✍🏼 **CRUD Functionality** – Create, read, update, and delete diary entries  
- 📅 **Automatic Timestamps** – Entry dates update when modified  
- 📖 **Sorted Entries** – View all entries from newest to oldest  
- 📱 **Responsive Design** – Clean layout with Bootstrap for all devices 

## 🖥️ Getting Started

### Prerequisites  
- [Node.js](https://nodejs.org/) (v18 or higher recommended)  
- npm (comes with Node.js)
  
### Installation  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/pixeldubu/personal-diary.git
   cd personal-diary
2. **Install dependencies**
   ```bash
   npm install
3. **Run the application**
   ```bash
   npm start
4. **Open your browser and visit:** http://localhost:3000

## 📁 Project Structure
```
personal-diary/
├── node_modules/          # Dependencies
├── public/                # Static assets
│   ├── css/
│   │   └── style.css      # Custom styling
│   ├── images/
│   │   ├── diary.png
│   │   └── favicon.ico
│   └── js/
│       └── main.js        # Frontend logic (edit button)
├── views/                 # EJS templates
│   ├── index.ejs          # Main page
│   └── partials/
│       └── header.ejs     # Main page
├── index.js               # Main server file
├── package.json
└── package-lock.json
```

## 🚧 Future Enhancements
- 🗃️ **Database integration** – Save posts using MongoDB or localStorage
- 🔍 **Search & filter** - Find entries by date
- 🔐 **User authentication** to keep diaries private with login system
