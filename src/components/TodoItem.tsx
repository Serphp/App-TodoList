import React, { useState } from 'react';
import { Button, CheckBox, ListItem, Icon, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StyleSheet } from 'react-native';

const TodoItem = ({ item, handleRemoveTodo, handleToggleTodoStatus }) => {

  return (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryLeft={(props) => (
            <RenderAccessory
                              onEdit={undefined} onStatus={undefined} {...props}
                              todo={item}
                              onToggle={handleToggleTodoStatus}
                              onDelete={handleRemoveTodo}            
          />
      )}
    />
  );
};

const RenderAccessory = ({ todo, onToggle, onEdit, onStatus, onDelete }) => {
  const [checked, setChecked] = useState(todo.completed);

  const DeleteIcon = (props) => (
    <Icon {...props} name='trash-2-outline' />
  );

  return (
    <Layout style={styles.container}>
      <Layout style={styles.layout} level='1'>
        <CheckBox
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            onToggle(todo);
          }}
        />
      </Layout>
      <Layout style={styles.layout}>
        <Button
          size='tiny'
          accessoryLeft={(props) => <Icon {...props} name='trash-2-outline' />}
          onPress={() => onDelete(todo)}
          appearance='ghost'
          status='danger'
        />
      </Layout>
      <Layout style={styles.layout}>
        <Button
          size='tiny'
          accessoryLeft={(props) => <Icon {...props} name='edit-2-outline' />}
          onPress={() => onEdit(todo)}
          appearance='ghost'
        />
      </Layout>
      {/* <Layout style={styles.layout}>
        <Button
          size='tiny'
          accessoryLeft={(props) => <Icon {...props} name='checkmark-circle-outline' />}
          onPress={() => onToggle(todo)}
          appearance='ghost'
        />
        </Layout> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoItem;
