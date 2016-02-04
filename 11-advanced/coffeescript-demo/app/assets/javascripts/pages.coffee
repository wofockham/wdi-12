name = "Wolf"
students = 15

sayHi = -> console.log "Hi"
sayHi = (name = "Rupert") ->
  console.log "Hello #{ name }"

sayHi = (yourName, otherNames...) ->
  console.log "Hello #{name}" for name in otherNames

sayHi "Jack", "Ben", "Angie", "Colin", "Harry"
# sayHi "Sam"
# sayHi()

volume = 0 if genre is "Scottish Pirate Metal"
if genre is "Scottish Pirate Metal"
  volume = 0

volume = 6 unless genre is "Splittercore" or "Martial Industrial"
unless genre is "Splittercore"
  volume = 6

winner = yes if pick in [15, 89, 42]

activity = if sunday then isChilling else isWorking

days = [
  "Monday"
  "Tuesday"
  "Wednesday"
  "Thursday"
  "Friday"
  "Saturday"
  "Sunday"
]

alert day for day in days

nums = [1..5]
squares = (item * item for item in nums)