def prompt(message)
  print message
  gets.chomp
end

def menu
  puts "(a) - addition"
  puts "(q) - quit"
  prompt('Enter your choice: ').downcase
end

def add
  puts prompt('First number: ').to_f + prompt('Second number: ').to_f
end

choice = menu()

until choice == 'q'

  case choice
  when 'a'
    add()
  else
    puts "Invalid selection"
  end

  choice = menu()
end

puts "Thank you for using this crappy calculator"
