import * as React from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { CategoryButtonProps } from "./utils/types";
import {styles} from "./addTransaction";
import { categories } from "./utils/types";


export default function AddTransaction() {
  const [isAddingTransaction, setIsAddingTransaction] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [typeSelected, setTypeSelected] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const categoryType = currentTab === 0 ? "Expense" : "Income";
  const currentCategories = categories[categoryType];



  return (
    <View style={styles.container}>
      
        <View>
          <View style={styles.card}>
            <Text>Enter Amount</Text>
            <TextInput
              placeholder="$Amount"
              style={styles.inputAmount}
              keyboardType="numeric"
              onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ""))}
              value={amount}
            />
            <TextInput
              placeholder="Description"
              style={styles.inputDescription}
              onChangeText={setDescription}
              value={description}
            />
            <Text style={styles.entryTypeText}>Select a entry type</Text>
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
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" color="red" onPress={() => setIsAddingTransaction(false)} />
            <Button title="Save"  />
          </View>
        </View>
     
    </View>
  );
}

function CategoryButton({ title, isSelected, setTypeSelected }:CategoryButtonProps) {
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


