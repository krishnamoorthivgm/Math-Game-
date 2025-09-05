from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/api/question', methods=['GET'])
def generate_question():
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    operation = random.choice(['+', '-', '*', '/'])
    
    if operation == '+':
        answer = num1 + num2
    elif operation == '-':
        answer = num1 - num2
    elif operation == '*':
        answer = num1 * num2
    else:  # operation == '/'
        answer = round(num1 / num2, 2)  # rounding to 2 decimal places for division

    question = f"{num1} {operation} {num2}"
    
    return jsonify({'question': question, 'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)