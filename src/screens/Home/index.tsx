import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { styles } from './styles';

export default function Home() {
    const [toDoItem, setToDoItem] = useState<string[]>([])
    const [toDoItemName, setToDoItemName] = useState('');
    const [done, setDone] = useState(0)

    let countItens = toDoItem.length;

    function handleToDoAdd() {
        if (toDoItem.includes(toDoItemName)) {
            return Alert.alert("Este item já existe.")
        }

        setToDoItem(prevState => [...prevState, toDoItemName])
        setToDoItemName('')
    }

    function handleItemRemove(item: string) {
        Alert.alert("Remover", "Deseja remover o item " + item + "?", [
            {
                text: 'não',
                style: "cancel"
            },
            {
                text: 'sim',
                onPress: () => setToDoItem(prevState => prevState.filter(
                    toDoItem => toDoItem !== item))
            },
        ])
    }

    function handleCheck() {
        setDone(done + 1)
    }

    function handleUnchecked() {
        setDone(done - 1)
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
            <View style={styles.insert}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={text => setToDoItemName(text)}
                    value={toDoItemName}
                />
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.text}
                        onPress={handleToDoAdd}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.count}>
                <View style={styles.counter}>
                    <Text style={styles.textCreated}>
                        Criadas
                    </Text>
                    <View style={styles.boxCount}>
                        <Text style={styles.numberCount}>{countItens}</Text>
                    </View>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.textConcluded}>
                        Concluídas
                    </Text>
                    <View style={styles.boxCount}>
                        <Text style={styles.numberCount}>{done}</Text>
                    </View>
                </View>
            </View>
            </View>

            <FlatList
                data={toDoItem}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <>
                        <Item
                            key={item}
                            item={item}
                            onCheck={handleCheck}
                            onUncheck={handleUnchecked}
                            onRemove={() => handleItemRemove(item)}
                        />
                    </>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyView}>
                        <Text style={styles.listEmptyMainText}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
            
        </View>
    )
}