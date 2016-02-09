class SinglyLinkedList

  include Enumerable # Mixin

  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_reader :head

  def initialize(start_value=nil)
    @head = Node.new(start_value) unless start_value.nil?
  end

  alias first head

  def last
    last_node = @head
    while last_node && last_node.next
      last_node = last_node.next
    end
    last_node
  end

  def append(value)
    node = Node.new value

    last_node = self.last
    if last_node.nil?
      @head = node # No nodes present: make this the new head
    else
      last_node.next = node
    end
  end

  def prepend(value)
    node = Node.new(value)
    node.next = @head
    @head = node
  end

  def length # Also #count and #size (Ruby has a nice way to alias things)
    tally = 0
    node = @head
    while node.respond_to? :next
      node = node.next
      tally += 1
    end
    tally
  end

  def find(needle)
    # Returns the node containing the needle as its value
    node = @head
    until node.nil?
      return node if node.value == needle
      node = node.next
    end
    nil
  end

  def reverse
    reverse_list = SinglyLinkedList.new
    node = @head
    while node
      reverse_list.prepend node.value
      node = node.next
    end
    reverse_list
  end

  def reverse!
    @head = reverse.head
    self
  end

  def each
    node = @head
    while node
      yield node.value if block_given?
      node = node.next
    end
  end

end

require 'pry'
binding.pry

# bros = SinglyLinkedList.new 'Chico'
# bros.append('Groucho')
# bros.append('Harpo')

# new_node = Node.new 'Groucho'
# puts new_node.value # => 'Groucho'
# puts new_node.next # => nil