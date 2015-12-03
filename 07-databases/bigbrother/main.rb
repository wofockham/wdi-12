f = File.open('database.txt', 'a+')
print "Write new info to the database (y/n): "
response = gets.chomp.downcase

while response == 'y'
  print "Enter name, age, gender: "
  f.puts(gets.chomp)

  print "Write new info to the database (y/n): "
  response = gets.chomp.downcase
end

f.close

f = File.open('database.txt', 'r')

people = []

f.each do |line|
  info = line.chomp.split(', ')
  person = {
    :name => info[0],
    :age => info[1],
    :gender => info[2]
  }

  people << person
end

f.close

people.each do |p|
  puts "#{ p[:name] } is #{ p[:age] } years old and identifies as #{ p[:gender] }."
end





