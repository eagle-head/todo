import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: 260,
  },
  modalStyle: {
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
  buttonGoal: {
    borderColor: "#b180f0",
    borderWidth: 1,
  },
  buttonCancel: {
    borderColor: "#f31282",
    borderWidth: 1,
  },
  buttonTextGoal: {
    color: "#b180f0",
    fontWeight: "600",
  },
  buttonTextCancel: {
    color: "#f31282",
    fontWeight: "600",
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 16,
  },
});
