## To-Do List Application

This project is a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them as complete, and remove them. It also features a notice system to display different types of notifications.

### Project Structure

The project is organized into the following folders and files:

- **`css/`**
  - `main.css`: The primary stylesheet for styling the application.
  
- **`js/`**
  - `ListElement.js`: Defines the `ListElement` class, which represents individual tasks in the To-Do List. Each task can be marked as complete or deleted.
  - `Menu.js`: Manages the To-Do List and notifications. Handles adding tasks, creating notifications, and removing tasks.
  - `main.js`: Initializes the application and sets up event listeners. It imports and utilizes the `Menu` class and `createNotice` function.
  - `notice.js`: Contains the `createNotice` function for generating notification elements of various types (normal, alert, warning, success).

- **`index.html`**: The main HTML file providing the structure of the web page.
- **`main.css`**: The stylesheet for the application's layout and design.

### Features

- **Add Tasks**: Users can add tasks to the list by entering a task name and clicking the "Add Task" button.
- **Complete and Delete Tasks**: Each task has buttons to mark it as complete or delete it.
- **Notifications**: Users can create different types of notifications (normal, alert, warning, success) using the provided buttons.

### How It Works

1. **HTML Structure (`index.html`)**: Contains the basic layout of the application, including input fields, buttons, and containers for tasks and notifications.
2. **Styling (`main.css`)**: Defines the appearance of the web page, including task elements, buttons, and notifications.
3. **JavaScript Functionality (`js/`)**:
   - `ListElement.js`: Handles the creation and behavior of individual tasks.
   - `Menu.js`: Manages task addition, notification creation, and task removal.
   - `main.js`: Initializes the `Menu` class and sets up the application.
   - `notice.js`: Provides a function for creating and styling different types of notifications.

### Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/todo-list.git
