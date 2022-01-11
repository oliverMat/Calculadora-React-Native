/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const operator = splitNumbers[1];
    console.log(splitNumbers);
    if (operator === '*') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString(),
      );
      return;
    }
    if (operator === '/') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString(),
      );
      return;
    }
    if (operator === '+') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString(),
      );
      return;
    }
    if (operator === '-') {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString(),
      );
      return;
    }
  }

  function handleInput(keyboardPressed) {
    if (keyboardPressed === '=') {
      setLastNumber(currentNumber + ' = ');
      calculator();
      return;
    }
    if (
      keyboardPressed === '*' ||
      keyboardPressed === '/' ||
      keyboardPressed === '+' ||
      keyboardPressed === '-'
    ) {
      setCurrentNumber(currentNumber + ' ' + keyboardPressed + ' ');
      return;
    }
    if (keyboardPressed === 'DEL') {
      console.log(currentNumber);
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      return;
    }
    if (keyboardPressed === '.') {
      setCurrentNumber(currentNumber + keyboardPressed);
      return;
    }
    if (keyboardPressed === '+/-') {
      return;
    }
    if (keyboardPressed === 'AC') {
      setLastNumber('');
      setCurrentNumber('');
      return;
    }

    setCurrentNumber(currentNumber + keyboardPressed);
  }

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('AC')}>
          <Text style={[styles.textButton, {color: '#ffbf60'}]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('DEL')}>
          <Text style={styles.textButton}>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('%')}>
          <Text style={styles.textButton}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('/')}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('7')}>
          <Text style={styles.textButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('8')}>
          <Text style={styles.textButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('9')}>
          <Text style={styles.textButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('*')}>
          <Text style={styles.textButton}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('4')}>
          <Text style={styles.textButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('5')}>
          <Text style={styles.textButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('6')}>
          <Text style={styles.textButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('-')}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('1')}>
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('2')}>
          <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('3')}>
          <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('+')}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('0')}>
          <Text style={styles.textButton}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('.')}>
          <Text style={styles.textButton}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('+/-')}>
          <Text style={styles.textButton}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: '#ffbf60', borderRadius: 20},
          ]}
          onPress={() => handleInput('=')}>
          <Text style={styles.textButton}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  results: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 160,
    backgroundColor: '#e5e5e5',
  },
  resultText: {
    fontFamily: 'Roboto-Thin',
    fontWeight: '100',
    color: '#5b5b5b',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText: {
    fontFamily: 'Roboto-Thin',
    color: '#5b5b5b',
    fontSize: 20,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
  },

  buttons: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
    minWidth: 80,
    minHeight: 80,
  },
  textButton: {
    color: '#5b5b5b',
    fontSize: 25,
  },
});
