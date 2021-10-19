#sing_fight.py
#Sheldon Mattson

#sing fight song
#Go team, go! Defeat your foe.
#Simply the best, better than the rest.

def start_end():
    print("Go, team, go!")
    print("Defeat your foe.")
def middle_lines():
    print("Simply the best,")
    print("Better than the rest.")
def song_body():
    start_end()
    middle_lines()
    start_end()
    print()
def sing_fight_song():
    start_end()
    print()
    for i in range(2):
        song_body()
    start_end()

sing_fight_song()

#alternate method
#def start_end():
#    print("Go, team, go!")
#    print("Defeat your foe.")
#def middle_lines():
#    print("Simply the best,")
#    print("Better than the rest.")
#def first_half():
#     start_end()
#     print()
#     start_end()
#     middle_lines()
#     start_end()
#     print()
# def second_half():
#     start_end()
#     middle_lines()
#     start_end()
#     print()
#     start_end()
# def sing_fight_song():
#     first_half()
#     second_half()

# sing_fight_song()
