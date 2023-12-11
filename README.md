# 📋 Trello 2.0

## 🌟 About
Trello 2.0 is a task management application designed to help users 🚀 organize and prioritize their tasks. It offers a simple, intuitive interface for managing tasks across different stages: Todo, In Progress, and Done.

## ✨ Features
- **📝 Task Management**: Create, edit, and delete tasks.
- **🗂 Task Categorization**: Organize tasks into different columns based on their status.
- **🖱 Drag & Drop Interface**: Easily move tasks between columns.
- **🖼 Image Attachments**: Attach images to tasks for better context.

## 📖 Usage
After starting the application, you can:
- Add new tasks by clicking the '+' button in any column.
- Drag and drop tasks to move them between columns.
- Click on the pencil icon to edit tasks.
- Use the search bar to quickly find tasks.

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or yarn
- An [Appwrite](https://appwrite.io/) account for backend services.

### Setting Up the Project
1. **Clone the repository:**
   - git clone https://github.com/SomarGuy/trello-clone.git
   - cd trello-clone

2. **Set up environment variables:**
- Create a `.env.local` file in the root directory.
- Add the following variables (replace with your actual values):
  ```
  NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
  NEXT_PUBLIC_DATABASE_ID=your_database_id
  NEXT_PUBLIC_TODOS_COLLECTION_ID=your_todos_collection_id
  ```

3. **Run the application:**
- Execute:
  ```
  npm run dev
  ```
  or
  ```
  yarn dev
  ```

4. **Open your browser and navigate to http://localhost:3000**

## 🌐 ChatGPT Integration

Trello 2.0 leverages the power of ChatGPT to provide concise summaries of your tasks. This feature helps you get quick insights into your tasks without going through each one in detail.

### Setting up ChatGPT API
1. **Obtain an API Key:** 
- Visit [OpenAI's website](https://openai.com/api/) and sign up or log in.
- Navigate to the API section and generate a new API key.

2. **Configure the API Key in your project:**
- Create a `.env.local` file in the root directory if not already present.
- Add the following line to your `.env.local` file:
  ```
  NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
  ```
- **Note**: Keep your API key confidential and do not commit it to public repositories.

### Using ChatGPT Summarization
- In the application, get a summary of tasks left to complete, in progress, and completed.
- Enhances productivity by providing quick insights into complex tasks.

### Project Structure
- **Components**: Reusable UI components.
- **Pages**: Application pages.
- **Store**: State management using Zustand.
- **Public**: Static files like images and icons.

### Images
![Mainpage](/images/mainpage.PNG)
![AddTask](/images/addtask.PNG)
![Edit](/images/editpage.PNG)
![SearchFunctionality](/images/SearchFunctionality.PNG)
![SummaryOfTasks](/images/SummaryOfTasks.PNG)

## 🔗 Links
- [Appwrite Documentation](https://appwrite.io/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
