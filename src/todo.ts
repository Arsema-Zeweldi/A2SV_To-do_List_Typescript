import promptSync from "prompt-sync";

interface TodoListItem {
  id: number;
  title: string;
}

let todoList: TodoListItem[] = [];

const prompt = promptSync();

function createNewTodoListItem(title: string) {
  const id: number = todoList.length + 1;
  todoList.push({ id, title });
  console.log(`${title} has been added to todo list`);
}

function editTodoListItem(id: number, title: string) {
  const temp = todoList.find((item) => item.id === id);
  if (!temp) {
    console.log("Item not found");
    return;
  }
  temp.title = title;
  console.log(`${title} has been updated`);
}

function deleteTodoListItem(id: number) {
  const temp = todoList.find((item) => item.id === id);
  if (!temp) {
    console.log("Item not found");
    return;
  }
  todoList = todoList.filter((item) => item.id !== id);
  console.log(`${temp.title} has been deleted from the todo list`);
}

function displayTodoListItems() {
  console.log("Todo List Items:");
  todoList.forEach((item) => {
    console.log(`ID: ${item.id}, Title: ${item.title}`);
  });
}

function menu() {
  console.log("Todo List Menu:");
  console.log("1. Create New Todo List Item");
  console.log("2. Edit Todo List Item");
  console.log("3. Delete Todo List Item");
  console.log("4. Display Todo List Items");
  console.log("5. Close");

  const choice = prompt("Enter your choice (1-4): ");
  switch (choice) {
    case "1": {
      const newTitle = prompt("Enter the title for the new todo item: ");
      if (newTitle === null) {
        console.log("Please try again and enter a valid title.");
        break;
      }
      createNewTodoListItem(newTitle);
      menu();
      break;
      menu;
    }
    case "2": {
      const idInput = prompt("Enter the ID of the todo item to edit: ");
      if (idInput === null) {
        console.log("Please try again and enter a valid ID.");
        menu();
        break;
      }
      const editId = Number(idInput);
      const editTitle = prompt("Enter the new title: ");
      if (editTitle === null) {
        console.log("Please try again and enter a valid ID.");
        menu();
        break;
      }
      editTodoListItem(editId, editTitle);
      menu();
      break;
    }
    case "3": {
      const idInput = prompt("Enter the ID of the todo item to delete: ");
      if (idInput === null) {
        console.log("Please try again and enter a valid ID.");
        menu();
        break;
      }
      const delId = Number(idInput);
      deleteTodoListItem(delId);
      menu();
      break;
    }
    case "4": {
      displayTodoListItems();
      menu();
      break;
    }
    case "5": {
      console.log("Exiting the Todo List application.");
      break;
    }
  }
}

menu();
