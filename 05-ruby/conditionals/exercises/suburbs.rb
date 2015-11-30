# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in?: "
suburb = gets.chomp.downcase

# if suburb == 'potts point' || suburb == 'mosman' || suburb == 'pymble'
#   puts "Look at me, I'm a millionare"
# elsif suburb == 'newtown'
#   puts "Nice maritime cemtery"
# elsif suburb == 'dee why'
#   puts "A thousand miles from care"
# else
#   puts "I'm sure that's a very nice place to live"
# end

puts case suburb
when 'potts point', 'mosman', 'pymble'
  "Look at me, I'm a millionaire"
when 'newtown'
  "Nice maritime cemetery"
when 'dee why', 'manly', 'collaroy'
  "A thousand miles from care"
else
  "I'm sure that's a nice place to live"
end
