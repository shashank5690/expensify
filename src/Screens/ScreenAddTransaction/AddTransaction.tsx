import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StatusBar, FlatList } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import DateTimePicker from '@react-native-community/datetimepicker';
import { getCategories, addTransaction } from '../../db/database'; 
import Bell from "../../assets/Icons/Bell";
import Profile from "../../assets/Icons/Profile";
import { styles } from "./addTransaction";
import { CategoryButtonProps } from "./utils/types";

export default function AddTransaction() {
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [typeSelected, setTypeSelected] = useState(""); 
  const [selectedCategoryId, setSelectedCategoryId] = useState<number |null>(null);  
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  interface Category {
    id: number;
    name: string;
    type: 'Expense' | 'Income';
  }

  useEffect(() => {
    fetchCategories();
  }, [currentTab]);

  const fetchCategories = async () => {
    const categoryType = currentTab === 0 ? "Expense" : "Income";
    try {
      const fetchedCategories: Category[] = await getCategories(categoryType);
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  };

  const onDateChange = (event:any, selectedDate?:Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSaveTransaction = async () => {
    if (!selectedCategoryId || !amount || !description) {
      console.error("Please fill all the fields");
      return;
    }
    
    const transactionType = currentTab === 0 ? 'Expense' : 'Income';
    try {
      await addTransaction(selectedCategoryId, parseFloat(amount), Math.floor(date.getTime() / 1000), description, transactionType);
      console.log('Transaction saved successfully');
     
      setAmount("");
      setDescription("");
      setTypeSelected("");
      setSelectedCategoryId(null);
      setIsAddingTransaction(false);
    } catch (error) {
      console.error('Failed to save transaction', error);
    }
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
        <Text style={styles.entryTypeText}>Select a Transaction type</Text>
        <SegmentedControl
          values={["Expense", "Income"]}
          selectedIndex={currentTab}
          onChange={(event) => setCurrentTab(event.nativeEvent.selectedSegmentIndex)}
          style={styles.segmentedControl}
        />
        
        <FlatList
          data={categories}
          keyExtractor={(cat) => cat.id.toString()}
          renderItem={({ item }) => (
            <CategoryButton
              title={item.name}
              isSelected={typeSelected === item.name}
              setTypeSelected={() => {
                setTypeSelected(item.name);  
                setSelectedCategoryId(item.id);  
              }}
            />
          )}
          contentContainerStyle={styles.categoryList} 
        />

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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSaveTransaction} 
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
