const BaseURL = 'http://localhost:3000/todos';

export const LoadTodos = () => {
    return fetch(BaseURL)
        .then(response => response.json())
        .then(data => data);
}

export const getTodo = (id: any) => {
    return fetch(`${BaseURL}/${id}`)
        .then(response => response.json())
        .then(data => data);
}

export const createTodo = (todo: any) => {
    return fetch(`${BaseURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
        .then(response => response.json())
        .then(data => data);
}

export const updateTodo = (todo: any) => {
    return fetch(`${BaseURL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
        .then(response => response.json())
        .then(data => data);
}

export const deleteTodo = (id: any) => {
    return fetch(`${BaseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => data);
}



// Path: src\components\TodoList.tsx

