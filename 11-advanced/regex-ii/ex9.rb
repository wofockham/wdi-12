ARGF.each do |line|
  if ( m = line.match(/(\w*a\b)/) )
    puts "$1 contains '#{ $1 }'"
  end
end
