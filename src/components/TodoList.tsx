import { Divider, Spinner, Text, TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { LoadTodos } from '../services/TodoServicers';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [todos, setTodos] = React.useState([]);

    const refresh = async () => {
        await LoadTodos().then((todos) => {
            setTodos(todos);
            console.log('Todos', todos);
        });
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refresh().then(() => setRefreshing(false));
        console.log('Refresing states', refreshing);
    }, [refreshing]);

    React.useEffect(() => {
        refresh();
    }, [onRefresh]);


    return (
        <>
        <TopNavigation title="Todo List" />
        <Divider />
        <Divider />
        {refreshing ? ( 
            <Spinner /> 
        ) : (
            <>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} item={todo} />
                    ))
                ) : (
                    <Text>No todos</Text>
                )}
            </>
        )}
        </>
    );
};

export default TodoList;