# Using the pattern test program, make a pattern to match the string match. Try the program with the input string beforematchafter. Does the output show the three parts of the match in the right order?

ARGF.each do |line|
  if ( m = line.match(/match/) )
    puts m.pre_match
    puts m[0]
    puts m.post_match
  end
end
