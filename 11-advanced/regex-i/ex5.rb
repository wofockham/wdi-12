ARGF.each do |line|
  puts line if /([^ ])\1/ =~ line
end
