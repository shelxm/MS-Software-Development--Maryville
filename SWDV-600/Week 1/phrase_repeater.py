#phrase_repeater.py
#Sheldon Mattson

custom_phrase= input("Input your phrase: ")
def phrase_repeater():
    ntimes= int(input("How many times should it be repeated? "))
    for i in range (ntimes):
        print(i+1, custom_phrase)

phrase_repeater()
        
        
