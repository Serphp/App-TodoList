//const BaseURL = 'https://192.168.43.1:19000/todos';
const BaseURL = `http://localhost:8000/todos`;

export const LoadTodos = () => {
    return fetch(BaseURL).then(response => response.json())
        //.then(data => data);
}

export const getTodo = (id: any) => {
    return fetch(`${BaseURL}/${id}`).then(response => response.json())
}

export const createTodo = async (todo: any) => {
    const response = await fetch(`${BaseURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: todo.title,
            description: todo.description,
            status: todo.status,
            completed: todo.completed,
        })
    });
    return await response.json();
}

export const toggleTodoCompletion = async (todo: any) => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
  
    try {
      const response = await fetch(`${BaseURL}/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar la tarea');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Manejo de errores
      console.error(error);
      throw error;
    }
  };


export const deleteTodo = (id: any) => {
    return fetch(`${BaseURL}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json());
}

