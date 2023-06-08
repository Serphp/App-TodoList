import { Divider, List, Spinner, Text, TopNavigation, Button, Input, Layout } from '@ui-kitten/components';
import React from 'react';
import { createTodo, LoadTodos, deleteTodo, toggleTodoCompletion } from '../services/TodoServicers';
import TodoItem from './TodoItem';
import { StyleSheet } from 'react-native';
import TodoForm from './TodoForm';

function TodoList(){
    const [refreshing, setRefreshing] = React.useState(false);
    const [todos, setTodos] = React.useState([]);

    const refresh = async () => {
        await LoadTodos().then((todos) => {
            setTodos(todos);
            //console.log('Todos', todos);
        });
    };

    const handleFormSubmit = (todo: any) => {
        console.log('Todo', todo);
        createTodo(todo).then((todo) => onRefresh());
    };

    const handleRemoveTodo = (id: any) => {
        //console.log('Remove', id);
        deleteTodo(id).then((todo) => onRefresh());
        //console.log(todos);
    };

    const handleToggleTodoStatus = (todo: any) => {
        //console.log('Todo to toggle', todo)
        toggleTodoCompletion(todo).then((_todo: any) => onRefresh());
    };
    
    // const handleToggleTodoStatus = (id: any) => {
    //     console.log('Todo to toggle', id)
    //     todos.map((todo: any) => {
    //         if (todo.id === id) {
    //             todo.completed = !todo.completed;
    //         }
    //     }
    //     );
    //     //toggleTodoCompletion(id).then((todo) => onRefresh());
    // };

    // const handleEditTodo = (id: any) => {
    //     //console.log('Edit', id);
    //     updateTodo(todos).then((todo) => onRefresh());
    // };

    // const handleAddTodo = (id: any) => {
    //     //console.log('Add', id);
    //     createTodo(todos).then((todo) => onRefresh());
    // };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refresh().then(() => setRefreshing(false));
        //console.log('Refresing states', refreshing);
    }, [refreshing]);

    React.useEffect(() => {
        refresh();
    }, [onRefresh]);


    return (

        <>
        <Divider />
        <TodoForm onSubmit={handleFormSubmit} />
        <Divider />


        {/* <TodoItem key={todo.id} item={todo} /> */}
        {refreshing ? ( 
            <Spinner /> 
        ) : (
            <>
                {todos.length > 0 ? (
                
                <>
                {
                    todos.map((todo: any) => (
                        <TodoItem
                            key={todo.id}
                            item={todo}
                            handleRemoveTodo={() => handleRemoveTodo(todo.id)}
                            handleToggleTodoStatus={() => handleToggleTodoStatus(todo)}


                            />
            
                         ) )
                }
                </>
                    ) : (  <Text>No todos xD</Text>)}
            </>
        )}
        </>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input : {
        flex: 1,
        margin: 2,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});