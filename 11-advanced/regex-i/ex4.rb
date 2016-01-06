ARGF.each do |line|
  puts line if (line =~ /[A-Z][a-z]+/ || line =~ /[a-z][A-Z]/)
end
