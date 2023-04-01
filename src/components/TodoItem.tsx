import {Button, CheckBox, ListItem, Icon, Layout} from '@ui-kitten/components';
import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const TodoItem = ({item}, handleRemoveTodo, handleToggleTodoStatus) => {
    console.log('Remove', handleRemoveTodo);
    console.log('Toggle', handleToggleTodoStatus);
    return (
        <ListItem
            title={item.title}
            description={item.description}
            accessoryLeft={() => (
                <CheckBox
                    checked={item.completed}
                    onChange={() => handleToggleTodoStatus(item.id)}
                />
            )}
            accessoryRight={() => (
                <Button
                    onPress={() => handleRemoveTodo(item.id)}
                    appearance="ghost"
                    status="danger"
                >
                    Remove
                </Button>
            )}
        />
    );
};

const RenderAccessory = ({todo, onToggle, onDelete }) => { 
    const [checked, setChecked] = useState(todo.completed);
    const DeleteIcon = (props) => <Icon {...props} name="trash" />;

    return (
        <Layout style={styles.container}>
            <Layout style={styles.Layout} level='1'>
                <CheckBox
                    checked={checked}
                    onChange={(nextChecked) => {
                        setChecked(nextChecked);
                        onToggle(todo);
                    }}
                />
            </Layout>
            <Layout style={styles.Layout}>
                <Button
                    size='tiny'
                    onPress={() => onDelete(todo)}
                    appearance="ghost"
                    status="danger"
                />
            </Layout>
        </Layout>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
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
        backgroundColor: '#3366FF',
        padding: 6,
    },
    button: {
        margin: 2,
    },
    text: {
        margin: 2,
    },
    Layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});