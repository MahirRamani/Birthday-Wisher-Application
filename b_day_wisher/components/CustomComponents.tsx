import React, { ReactNode } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

interface CardHeaderProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style }) => (
  <View style={[styles.cardHeader, style]}>{children}</View>
);

interface CardContentProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const CardContent: React.FC<CardContentProps> = ({ children, style }) => (
  <View style={[styles.cardContent, style]}>{children}</View>
);

interface CardTitleProps {
  children: ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <Text style={styles.cardTitle}>{children}</Text>
);

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ onPress, children, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);

interface CustomScrollViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const CustomScrollView: React.FC<CustomScrollViewProps> = ({ children, style }) => (
  <ScrollView style={[styles.scrollView, style]}>{children}</ScrollView>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardContent: {
    // Add any specific styles for card content
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', // Center text within the title
  },
  button: {
    backgroundColor: '#0ea5e9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
});
