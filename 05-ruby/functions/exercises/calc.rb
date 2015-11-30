# Prompt the user with some message and return the result.
def prompt(message)
  print message
  gets.chomp
end

# Prompt the user with a menu of supported operations and return the downcase version of the user's choice.
def menu
  puts "(a) - addition"
  puts "(q) - quit"
  prompt('Enter your choice: ').downcase
end

# Prompt for and add two numbers together, returning the result.
def add
  puts prompt('First number: ').to_f + prompt('Second number: ').to_f
end

# Get the user's initial choice.
choice = menu()

# Keep looping until the user quits.
until choice == 'q'

  # Handle the user's choice by dispatching to the appropriate function.
  case choice
  when 'a'
    add()
  else
    puts "Invalid selection, dingus."
  end

  # Prompt the user for another operation and keep going.
  choice = menu()
end

puts "Thank you for using this crappy calculator. Send $$$."
