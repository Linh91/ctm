def interactive_menu
  # students = [] # declared variable students before setting loop
  loop do
    # 1. print the menu and ask the user what to do
    puts "1. Input the students"
    puts "2. Show the students"
    puts "9. Exit"
    # 2. read the input ans save it into a variable
    selection = gets.chomp
    # 3. do what the user has asked
    case selection
    when "1"
      @students = input_students
      # input the students
    when "2"
      print_header
      print(@students)
      print_footer(students)
      # show the students
    when "9"
      exit # this will cause the program to terminate
    else
      puts "I don't know what you meant, try again"
    end
    # 4. repeat from step 1
  end
end
# loops: used to repeat a certain action a number of times
@students = [] # accessible to all methods

def process(selection)
  case selection
  when "1"
    input_students
  when "2"
    show_students
  when "9"
    exit
  else
    puts "I don't know what you meant, try again"
  end
end

def print_menu
  puts "1. Input the students"
  puts "2. Show the students"
  puts "9. Exit" # 9 because we will add more items
end

def show_students
  print_header
  print(@students)
  print_footer(@students)
end
