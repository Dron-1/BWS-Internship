import requests
import json

print("Welcome....")

choice = 'y'
while choice == 'y' :
    poke_name = input("Enter the pokemon name :")
    #creating API

    API = requests.get(f"https://pokeapi.co/api/v2/pokemon/{poke_name}")
    # print(API.status_code)

    if API.status_code == 200 :
        results = API.json()
        print("Here are the details of this Pokemon")
        abilities_list = results['abilities']
        # forms_list = results['forms']
        # forms_dict = forms_list[0]
        forms_dict = results['forms'][0]
        
        print(f"Name : {forms_dict['name']}")
        print("List of abilities are :")
        for ability in abilities_list :
            ability_dict = ability['ability']
            print(ability_dict['name'])
    else:
        print("Check the spelling of the pokemon and try again.")
        
    choice = input("Search another pokemon?[y/n]: ")

print("bye bye")
