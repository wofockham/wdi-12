ARGF.each do |line|
  puts line if ( /fred.*wilma/ =~ line || /wilma.*fred/ =~ line)
end
