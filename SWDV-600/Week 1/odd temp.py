tempInC= float(input("What is the temperature in Celsius? "))
tempInF= 1.8 * tempInC + 32 
print("The temperature in Fahrenheit is", tempInF, "degrees")
if tempInF>70:
    print("What a lovely day")
if tempInF<70:
    print("Brrrr")