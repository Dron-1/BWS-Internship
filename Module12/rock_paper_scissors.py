#Rock Paper and Scissors Game
import random;

print("-----Welcome to Rock, Paper and Scissors game-----\t\t\t Enter 'quit' to exit")

while(True):
    user_input =  input("Enter you choice : Rock, Paper or Scissors: ")
    user_input = user_input.lower()
    
    if user_input == "quit":
        print("Exiting......")
        break

    if user_input != "rock" and user_input != "paper" and user_input != "scissors" :
        print("You entered a wrong choice. Try Again..")
        continue

    #generating random choice 
    computer_input = random.choice(['rock','paper','scissors'])
    print(f"Computer's choice {computer_input}")

    if user_input == computer_input:
        print("You tied")
        break#Rock Paper and Scissors Game
import random;

print("-----Welcome to Rock, Paper and Scissors game-----\t\t\t Enter 'quit' to exit")

while(True):
    user_input =  input("Enter you choice : Rock, Paper or Scissors: ")
    user_input = user_input.lower()
    
    if user_input == "quit":
        print("Exiting......")
        break

    if user_input != "rock" and user_input != "paper" and user_input != "scissors" :
        print("You entered a wrong choice. Try Again..")
        continue

    #generating random choice 
    computer_input = random.choice(['rock','paper','scissors'])
    print(f"Computer's choice {computer_input}")

    if user_input == computer_input:
        print("You tied")
        break
    elif user_input == 'rock' and computer_input == 'scissors':
        print("You win :)")
        break
    elif user_input == 'paper' and computer_input == 'rock':
        print("You win :)")
        break
    elif user_input == 'scissors' and computer_input == 'paper':
        print("You win :)")
        break
    else:
        print("You lose :(")

    elif user_input == 'rock' and computer_input == 'scissors':
        print("You win :)")
        break
    elif user_input == 'paper' and computer_input == 'rock':
        print("You win :)")
        break
    elif user_input == 'scissors' and computer_input == 'paper':
        print("You win :)")
        break
    else:
        print("You lose :(")
