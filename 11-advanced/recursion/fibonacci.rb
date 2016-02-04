def fibonacci_iterative(n)
  a, b = 1, 1
  (n - 1).times do
    a, b = b, a + b
  end
  a
end

def fibonacci(n)
  # Find the nth Fibonacci value via recursion.
  # Your code here.
end

puts fibonacci_iterative(1) # => 1
puts fibonacci_iterative(2) # => 1
puts fibonacci_iterative(3) # => 2
puts fibonacci_iterative(4) # => 3
puts fibonacci_iterative(5) # => 5
puts fibonacci_iterative(6) # => 8
