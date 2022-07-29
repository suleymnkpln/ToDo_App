import {View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './ButtonSave.style';

const ButtonArea = ({todo, setTodo}) => {
  const [todoValue, setTodoValue] = useState('');
  const [color, setColor] = useState('#808080');

  const Separator = () => <View style={styles.separator} />;

  const handleSubmit = item => {
    if (item === '') {
      return Alert.alert('Bu alanı boş bırakmayınız!');
    } else if (todo.some(todoItem => todoItem.title == item)) {
      return Alert.alert('Bu iş zaten ekli!');
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todoValue,
        pressed: false,
      };
      setTodo([...todo, newTodo])
      setTodoValue('');
      setColor('#808080');
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Yapılacak İşler..."
        style={styles.text_input}
        value={todoValue}
        onChangeText={setTodoValue}
      />
      <Separator />
      <View style={styles.button}>
        <Button
          title="Kaydet"
          color="darkgrey"
          onPress={() => handleSubmit(todoValue)}
        />
      </View>
    </View>
  );
};

export default ButtonArea;
