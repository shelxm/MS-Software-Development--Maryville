#bitcoin_converter.py
#Sheldon Mattson

print("As of Friday January 14, 2021 at 8:34 pm, bitcoin is currently trading at $39,364 per bitcoin")

Conversionrate=39364
#int() for literal value
AmountofBitcoin= int(input("Enter the bitcoin amount: "))

AmountinDollars= Conversionrate * AmountofBitcoin

print("That is worth", AmountinDollars, "US dollars.")