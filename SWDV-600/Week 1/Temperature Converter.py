#temperature from Celsius to Fahrenheit. Allow 3 times
#input temp
#convert tempt to Fahrenheit
#Output to Fahreheit
#make it repeat
for tempConversions in range(3):
    tempInC= float(input("What is the temperature in Celsius? "))
    tempInF= 1.8 * tempInC + 32 
    print("The temperature in Fahrenheit is", tempInF, "degrees")