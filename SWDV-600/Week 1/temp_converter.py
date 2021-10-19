#temp_converter.py
#Sheldon Mattson

#Goal- 3 temperature conversions. Input- Fahrenheit. Output- Celsius
for tempConversions in range(3):
    tempInF= float(input("What is the temperature in Fahrenheit? "))
    #float for literal value
    #equation is C=(F-32)/(5/9)
    tempInC= (tempInF-32)*(5/9)
    print("The temperature in Celsius is", tempInC, "degrees")
    #for fun to see if it would work
    if tempInC<0:
        print("Brrrr.")
    print()
