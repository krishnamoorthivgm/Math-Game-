# Math Game Backend

This is the backend component of the Math Game project. The backend is responsible for generating random math questions and managing game data.

## Project Structure

- `app.py`: The main Python file that contains the logic for generating math questions and handling requests.
- `requirements.txt`: A file that lists the required Python libraries for the backend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd math-game/backend
   ```

2. **Create a virtual environment** (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:
   ```
   pip install -r requirements.txt
   ```

4. **Run the backend server**:
   ```
   python app.py
   ```

## Features

- Generates random arithmetic questions for players.
- Can store player scores and question statistics (if implemented).
- Provides an API for the frontend to fetch questions and submit answers.

## Usage

The backend serves as an API for the frontend game. Ensure that the frontend is configured to communicate with this backend service for a seamless gaming experience.