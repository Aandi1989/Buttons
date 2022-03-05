export const getAllTasks = async () => {
    const response = await fetch('http://localhost:7777/tasks')
    const tasks = await response.json()
    return tasks;
  }

  export const getAllTasksNew =()=> {
    return fetch('http://localhost:7777/tasks')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });
  }
