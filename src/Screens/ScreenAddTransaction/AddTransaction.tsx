import * as React from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, StatusBar } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import DateTimePicker from '@react-native-community/datetimepicker';
import { CategoryButtonProps } from "./utils/types";
import { styles } from "./addTransaction";
import { categories } from "./utils/types";
import Bell from "../../assets/Bell";
import Profile from "../../assets/Profile";

export default function AddTransaction() {
  const [isAddingTransaction, setIsAddingTransaction] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [typeSelected, setTypeSelected] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const categoryType = currentTab === 0 ? "Expense" : "Income";
  const currentCategories = categories[categoryType];

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Profile />
        <Text style={styles.headerText}>Transactions</Text>
        <Bell />
      </View>

      <View style={styles.card}>
        <Text style={styles.EnterAmount}>Enter Amount</Text>
        <TextInput
          placeholder="₹ Amount"
          style={styles.inputAmount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ""))}
          value={amount}
          placeholderTextColor="#8E949A"
        />
        <TextInput
          placeholder="Description for Product"
          style={styles.inputDescription}
          onChangeText={setDescription}
          value={description}
          placeholderTextColor="#8E949A"
        />
        <Text style={styles.entryTypeText}>Select an Transaction type</Text>
        <SegmentedControl
          values={["Expense", "Income"]}
          selectedIndex={currentTab}
          onChange={(event) => setCurrentTab(event.nativeEvent.selectedSegmentIndex)}
          style={styles.segmentedControl}
        />
        {currentCategories.map((cat, index) => (
          <CategoryButton
            key={index}
            title={cat}
            isSelected={typeSelected === cat}
            setTypeSelected={setTypeSelected}
          />
        ))}

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.datePickerButton}
        >
          <Text style={styles.datePickerButtonText}>
            {date.toDateString()}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => {/* Handle save action */}}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => setIsAddingTransaction(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CategoryButton({ title, isSelected, setTypeSelected }: CategoryButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => setTypeSelected(title)}
      style={[styles.categoryButton, isSelected && styles.selectedCategoryButton]}
    >
      <Text style={[styles.categoryButtonText, isSelected && styles.selectedCategoryButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
