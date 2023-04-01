import { Divider, Text, TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { LoadTodos } from '../services/TodoServicers';

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
        <Divider/>
        </>
    )
    };

export default TodoList;