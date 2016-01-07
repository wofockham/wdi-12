# Extra credit exercise: modify the program from the previous exercise so that immediately following the word ending in a it will also capture up-to-five characters (if there are that many characters, of course) in a separate capture variable. Update the code to display both capture variables. For example, if the input string says I saw Wilma yesterday, the up-to-five characters are “yest”. If the input is I, Wilma!, the extra capture should have just one character. Does your pattern still match just plain wilma?

ARGF.each do |line|
  if ( m = line.match(/\w*a\b(.{,5})/) )
    puts m[0]
    puts m[1]
    puts "-" * 80
  end
end
