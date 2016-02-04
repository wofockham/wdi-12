def countdown_iterative(num)
  while num >= 0
    puts num
    num -= 1
  end

  puts "Blastoff!"
end

# countdown_iterative(10)

def countdown(num)
  puts num
  if num > 0 # Detect the base case.
    countdown num - 1 # Move one step closer to the base case
  else
    puts "Blastoff"
  end
end

countdown(10)