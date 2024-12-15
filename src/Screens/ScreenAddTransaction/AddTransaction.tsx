import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StatusBar, FlatList } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import DateTimePicker from '@react-native-community/datetimepicker';
import { getCategories, addTransaction } from '../../db/database'; 
import Bell from "../../assets/Icons/Bell";
import Profile from "../../assets/Icons/Profile";
import { styles } from "./addTransaction";
import { CategoryButtonProps } from "./utils/types";
import { ScreenTransferProps } from "./utils/types";
import { useNavigation } from '@react-navigation/native';
import { setAmountRedux, addIncome, addExpense } from "../../utils/redux/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { setQRData,resetTransactionData } from "../ScreenScanner/redux/qrSlice";
import { RootState } from "../../utils/redux/rootReducer";

export default function AddTransaction() {
  const navigation = useNavigation<ScreenTransferProps>();
  const [currentTab, setCurrentTab] = useState(0);
  const [typeSelected, setTypeSelected] = useState(""); 
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);  
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const dispatch = useDispatch();
  const qrData = useSelector((state: RootState) => state.qr);

  interface Category {
    id: number;
    name: string;
    type: 'Expense' | 'Income';
  }

  useEffect(() => {
    fetchCategories();
  }, [currentTab]);

  useEffect(() => {
    if (qrData && qrData.idQR !== null) {
      setAmount(qrData.amountQR?.toString() || ""); 
      setDescription(qrData.descriptionQR || "");
      setTypeSelected(qrData.categoryQR || "");
      setCurrentTab(qrData.typeQR === 'Expense' ? 0 : 1); 
      setSelectedCategoryId(qrData.idQR || 0);
    }
  }, [qrData]); 

  const handleClean = async () => {
     dispatch(resetTransactionData());
  };

  const fetchCategories = async () => {
    const categoryType = currentTab === 0 ? "Expense" : "Income";
    try {
      const fetchedCategories: Category[] = await getCategories(categoryType);
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  
  const handleCancelTransaction = () => {
    handleClean();
    setAmount("");
    setDescription("");
    setTypeSelected("");
    setCurrentTab(0);
    setSelectedCategoryId(0);
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
      
      dispatch(setAmountRedux(amount));
      handleClean();
      navigation.navigate('ScreenTransfer');
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
          style={styles.cat}
          showsVerticalScrollIndicator={false}
        />
      </View>

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
              onPress={handleCancelTransaction}
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