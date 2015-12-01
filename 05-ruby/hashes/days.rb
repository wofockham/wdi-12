# ###1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday

days_of_the_week = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

# ###2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
days_of_the_week.rotate! -1 # Negative values go backwards.

# ###3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
days_of_the_week = [ %w{ Monday Tuesday Wednesday Thursday Friday }, %w{ Saturday Sunday } ]

# ###4. Remove either the weekdays or the weekends
# Your choice...
days_of_the_week.shift
p days_of_the_week

# ###5. Sort the remaining days alphabetically
p days_of_the_week.flatten.sort