# Import Modules
import sys
import time
import keyboard
import mysql.connector as mys
from colorama import Fore


# Define ANSI escape codes for colors
COLORS = {
    'white': '\033[37m',   
    'grey': '\033[90m',    
    'reset': '\033[0m'     
}

# Define the options
OPTIONS = [
    "Setup database from scratch",
    "Re-setup the database",
    "Exit Setup"
]


# Function to print the menu with arrow key selection
def print_menu(selected_index):
    print("\033[1mSelect an option:\033[0m\n")
    for index, option in enumerate(OPTIONS):
        if index == selected_index:
            print(f"  {COLORS['white']}>> {option}{COLORS['reset']}")
        else:
            print(f"    {COLORS['grey']}{option}{COLORS['reset']}")
    print("\nUse the arrow keys (↓↑) to navigate and press Enter to select an option.")
    

def main():
    selected_index = 0
    while True:
        sys.stdout.write("\033[H\033[J")
        print_menu(selected_index)
        key = keyboard.read_event()
        if key.event_type == keyboard.KEY_DOWN:
            if key.name == 'up':
                selected_index = (selected_index - 1) % len(OPTIONS)
            elif key.name == 'down':
                selected_index = (selected_index + 1) % len(OPTIONS)
            elif key.name == 'enter':
                break

        sys.stdout.write("\033[H\033[J") 

    selected_option = OPTIONS[selected_index]
    if selected_option == "Setup database from scratch":
        setup_database_from_scratch()
    elif selected_option == "Re-setup the database":
        reset_database()
    elif selected_option == "Exit Setup":
        print(Fore.MAGENTA + "Exiting Setup...\n\n" + Fore.RESET)
        time.sleep(1)
        sys.exit(0)

# Function to securely fetch MySQL password from user with asterisk masking
def get_mysql_password():
    print(Fore.YELLOW + "Enter your MySQL Password: " + Fore.RESET, end='', flush=True)
    password = ''
    while True:
        key = keyboard.read_event()
        if key.event_type == keyboard.KEY_DOWN:
            if key.name == 'enter':
                print()  # Move to the next line after pressing enter
                break
            elif key.name == 'backspace':
                if password:
                    password = password[:-1]  # Remove last character from password
                    print('\b \b', end='', flush=True)  # Erase the last asterisk
            elif key.name in ('space', 'tab'):
                continue  # Ignore space and tab
            else:
                password += key.name  # Add the character to the password
                print('*', end='', flush=True)  # Print an asterisk for masking

    return password

# Placeholder function for setting up database from scratch
def setup_database_from_scratch():
    print(Fore.YELLOW + "\nSetting up database from scratch...\n" + Fore.RESET)

    if passwd != "":
        db_config = {
            'user': 'root',
            'host': 'localhost',
            'password': passwd
        }
    else:
        db_config = {
            'user': 'root',
            'host': 'localhost'
        }

    dbname = "carpool1"
    table_name = "ride"

    try:
        conn = mys.connect(**db_config)
        cursor = conn.cursor()
    except:
        print(Fore.RED + "Error: Could not connect to MySQL." + Fore.RESET)
        time.sleep(1)
        print(Fore.YELLOW + "Make sure MySQL is running and the credentials are correct.\n" + Fore.RESET)
        time.sleep(3)
        return

    try:
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {dbname}")
        print(Fore.GREEN + f"Database '{dbname}' created successfully." + Fore.RESET)
    except mys.Error as err:
        print(Fore.RED + f"Error: {err}" + Fore.RESET)
        return

    conn.database = dbname
    create_table_query = f"""
    CREATE TABLE IF NOT EXISTS {table_name} (
        nam VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(20),
        locat VARCHAR(255),
        dat DATE,
        tim TIME
    )
    """
    cursor.execute(create_table_query)
    conn.commit()
    cursor.close()
    conn.close()
    print(Fore.GREEN + "Database setup complete.\n" + Fore.RESET)
    time.sleep(1)
    print()


def reset_database():
    print(Fore.YELLOW + "\nRe-setting the database...\n" + Fore.RESET)

    db_config = {
        'user': 'root',
        'host': 'localhost',
        'database': 'carpool1'
    }

    table_name = "ride"

    try:
        conn = mys.connect(**db_config)
        cursor = conn.cursor()
    except:
        print(Fore.RED + "Error: Could not connect to MySQL." + Fore.RESET)
        time.sleep(1)
        print(Fore.YELLOW + "Try running the setup from scratch.\n" + Fore.RESET)
        time.sleep(3)
        return

    cursor.execute(f"DROP TABLE IF EXISTS {table_name}")

    create_table_query = f"""
    CREATE TABLE {table_name} (
        nam VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(20),
        locat VARCHAR(255),
        dat DATE,
        tim TIME
    )
    """
    cursor.execute(create_table_query)
    conn.commit()
    cursor.close()
    conn.close()
    print(Fore.GREEN + "Database Reset complete." + Fore.RESET)

if __name__ == "__main__":
    passwd = get_mysql_password()  # Using custom function for password input
    main()
