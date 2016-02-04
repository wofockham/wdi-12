def factorial_iterative(n)
  result = 1
  while n >= 1
    result = result * n
    n -= 1
  end

  result
end

def factorial(n)
  if n <= 1 # Check for the base case
    1 # Return the base case
  else
    n * factorial(n - 1) # Move slightly closer to the base case
  end
end

puts factorial_iterative(5) # => 120
puts factorial(5) # => 120
