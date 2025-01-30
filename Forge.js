//Sahil Murtaza
//2025 Forge Application - Part 1: Software Engineering Project


function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned up input is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}

// Test case 
console.log(isPalindrome("racecar")); //should be true
console.log(isPalindrome("hello")); // false


function randomArray(array) {
    // Loop through the array starting backwards
    for (let i = array.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Test cases
console.log(randomArray([1, 2, 3, 4, 5])); // Example output: [3, 5, 1, 4, 2], but it will be different each time
console.log(randomArray(["apple", "banana", "cherry", "date"])); // Example output: ["cherry", "apple", "date", "banana"], , but it will be different each time!







let todoList = [];

/*************************************************
 * addTask
 * Creates a new task and pushes it onto todoList.
 * 
 * Parameters:
 *   title       - Short title for the task
 *   description - More detailed description
 *   dateDue     - Due date as a string (e.g. "2025-01-01")
 * 
 * Note:
 *   The status defaults to "New" and dateCreated is
 *   automatically set when this function is called.
 *************************************************/
function addTask(title, description, dateDue) {
  const newTask = {
    title: title,
    description: description,
    dateCreated: new Date().toISOString().split('T')[0], // e.g. "2025-01-30"
    dateDue: dateDue,
    status: "New"
  };
  todoList.push(newTask);
}

/*************************************************
 * removeTask
 * Removes a task from todoList by its index.
 * 
 * Parameter:
 *   index - The position of the task in the array
 *************************************************/
function removeTask(index) {
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
  } else {
    console.error("Invalid index for removeTask");
  }
}

/*************************************************
 * reorderTask
 * Moves a task from one position in the list to
 * another. If newIndex is out of range, it adjusts
 * it to the valid minimum or maximum.
 * 
 * Parameters:
 *   oldIndex - Current index of the task
 *   newIndex - The new position you want the task 
 *              to have in the list
 *************************************************/
function reorderTask(oldIndex, newIndex) {
  if (oldIndex >= 0 && oldIndex < todoList.length) {
    // Clamp newIndex within valid range
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= todoList.length) newIndex = todoList.length - 1;

    const task = todoList.splice(oldIndex, 1)[0];
    todoList.splice(newIndex, 0, task);
  } else {
    console.error("Invalid oldIndex for reorderTask");
  }
}

/*************************************************
 * moveTaskToTop
 * Moves the task at the given index to the top (index 0).
 *************************************************/
function moveTaskToTop(index) {
  reorderTask(index, 0);
}

/*************************************************
 * moveTaskUp
 * Swaps the task at index with the one above it.
 *************************************************/
function moveTaskUp(index) {
  reorderTask(index, index - 1);
}

/*************************************************
 * moveTaskDown
 * Swaps the task at index with the one below it.
 *************************************************/
function moveTaskDown(index) {
  reorderTask(index, index + 1);
}

/*************************************************
 * updateTask
 * Updates fields for the task at the given index.
 * Only changes fields if the new values are provided.
 * 
 * Parameters:
 *   index        - Which task to update
 *   newTitle     - Optional new title
 *   newDesc      - Optional new description
 *   newDateDue   - Optional new due date
 *   newStatus    - Optional new status ("New", "Working on", or "Finished")
 *************************************************/
function updateTask(index, newTitle, newDesc, newDateDue, newStatus) {
  if (index >= 0 && index < todoList.length) {
    if (newTitle !== undefined && newTitle !== null) {
      todoList[index].title = newTitle;
    }
    if (newDesc !== undefined && newDesc !== null) {
      todoList[index].description = newDesc;
    }
    if (newDateDue !== undefined && newDateDue !== null) {
      todoList[index].dateDue = newDateDue;
    }
    if (newStatus !== undefined && newStatus !== null) {
      todoList[index].status = newStatus;
    }
  } else {
    console.error("Invalid index for updateTask");
  }
}

/*************************************************
 * getList
 * Returns the current list of tasks. 
 * Useful if something else needs to read or display
 * the list.
 *************************************************/
function getList() {
  return todoList;
}

/*
 * clearList
 * An optional convenience function that clears 
 * the entire list.
 */

function clearList() {
  todoList = [];
}
