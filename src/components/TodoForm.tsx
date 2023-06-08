import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [status, setStatus] = useState('pending');

    const handleSubmit = () => {
        onSubmit({title, description, completed, status});
        setTitle('');
        setDescription('');
        setCompleted(false);
        setStatus('pending');
    };

    return (
        <Layout style={styles.container}>
            <Text category="h1">Nueva tarea</Text>
            <Input
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <Divider style={styles.space} />
            <Input
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <Divider style={styles.space} />
            <Button style={styles.btn} onPress={handleSubmit}>Add</Button>
            <Divider style={styles.space} />
        </Layout>
    );
};

export default TodoForm;

const styles = StyleSheet.create({
    Layout: {
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        //width: "100%",

        margin: 20,
        display: "flex",
        justifyContent: "center",
        
    },
    btn: {
        width: "50%",
        alignSelf: "center",
    },
    space: {
        marginBottom: 10,
    },
    input: {
        width: "90%",
        display: "flex",
        alignSelf: "center",
    },
});
