print ("This program illustrates a chaotic behavior")
x=eval(input("Enter a number between 0 and 1:"))
for i in range (50):
    x = 3.6 * x * ( 1 - x )
    print (x)
