ARGF.each do |line|
  if ( m = line.match(/(?<thuglyfe>\w*a\b)/) )
    puts "'thuglyfe' contains '#{ m['thuglyfe'] }'"
  end
end
