Given(/^I have a calculator$/) do
  @calculator = Calculator.new
end

Given(/^I have the number (\d+)$/) do |number|
  @calculator << number.to_i
end

When(/^I add them together$/) do
  @result = @calculator.add
end

Then(/^I should see (\d+) on the terminal$/) do |number|
  assert_equal @result, number.to_i
end
