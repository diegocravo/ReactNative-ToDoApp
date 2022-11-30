import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A1A1A',
      flex: 1,
    },
    body: {
        padding: 24
    },
    text: {
        color: '#fff',
        fontSize: 24, 
        fontWeight: "bold"
    },
    input: {
        padding: 12,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#333',
        flex: 1, 
        marginRight: 4,
        color: '#fff',
        fontSize: 16,
    },
    insert: {
        flexDirection: "row",
        height: 56,
        marginTop: -56
    },
    button: {
        height: 56,
        width: 56, 
        backgroundColor: '#1E6F9F',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    count: {
        flexDirection: "row",
        height: 80,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 12,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    counter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textCreated: {
        color: '#4EA8DE',
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 5
    },
    textConcluded: {
        color: '#8284FA',
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 5
    },
    boxCount: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#333',
        borderRadius: 5,
        height: 30,
        width: 30,
    },
    numberCount: {
        fontSize: 14,
        fontWeight: "bold", 
        color: '#fff',
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 16
    },
    listEmptyMainText: {
        color: '#808080',
        fontWeight: "bold",
        fontSize: 16
    },
    emptyView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    }
})