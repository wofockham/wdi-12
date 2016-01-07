# Write a new program (not the test program!) that prints out any input line ending with whitespace (other than just a newline). Put a marker character at the end of the output line so as to make the whitespace visible.

ARGF.each do |line|
  line = line.chomp
  if ( line =~ /\s$/ )
    puts "#{ line }$"
  else
    puts line
  end
end
