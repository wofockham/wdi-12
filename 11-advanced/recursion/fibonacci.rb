def fibonacci_iterative(n)
  a, b = 1, 1
  (n - 1).times do
    a, b = b, a + b
  end
  a
end

def fibonacci_slow(n)
  # Find the nth Fibonacci value via recursion.
  if n <= 2
    1
  else
    fibonacci_slow(n - 1) + fibonacci_slow(n - 2)
  end
end

def fibonacci(n, a=1, b=1) # Keeps track of the state in two additional variables
  if n <= 1
    a
  else
    fibonacci(n - 1, b, a + b) # Tail position: see TCO
  end
end


puts fibonacci(1) # => 1
puts fibonacci(2) # => 1
puts fibonacci(3) # => 2
puts fibonacci(4) # => 3
puts fibonacci(5) # => 5
puts fibonacci(6) # => 8

require 'pry'
binding.pry
