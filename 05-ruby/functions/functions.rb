def say_hello
  puts "Hello, world"
end

say_hello() # Equivalent to:
say_hello

# Default parameters
def say_hello_to(name='Craigsy')
  puts "Hello, #{ name }"
end

def add(a, b)
  a + b # Implicit return
end