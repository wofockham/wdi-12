course = 'fewd'

if course == 'uxdi'
	puts "Hello User Experience Designer"
elsif course == 'wdi'
	puts 'Good luck with that'
else
	puts "You have probably made a better career choice"
end

# if course != 'uxdi'
#	puts 'Your work has actual value'
# end

unless course == 'uxdi'
	puts 'Your work has actual value'
end

puts 'Your work has actual value' unless course == 'uxdi' # Unwrapped

puts 'You need to learn Heroku with Jack' if course == 'wdi'
